import assert from "node:assert/strict";
import fs from "node:fs";
import Module from "node:module";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(testDirectory, "..");

function loadTypeScriptModule(relativePath, mocks = {}) {
  const filename = path.join(projectRoot, relativePath);
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filename,
  }).outputText;
  const loadedModule = new Module(filename);
  const defaultRequire = loadedModule.require.bind(loadedModule);

  loadedModule.filename = filename;
  loadedModule.paths = Module._nodeModulePaths(path.dirname(filename));
  loadedModule.require = (request) =>
    Object.prototype.hasOwnProperty.call(mocks, request) ? mocks[request] : defaultRequire(request);
  loadedModule._compile(output, filename);

  return loadedModule.exports;
}

class CookieDocument {
  constructor(initialCookies = {}) {
    this.cookies = new Map(Object.entries(initialCookies));
    this.assignments = [];
    this.scripts = [];
    this.head = {
      appendChild: (script) => {
        this.scripts.push(script);
      },
    };
  }

  get cookie() {
    return [...this.cookies].map(([name, value]) => `${name}=${value}`).join("; ");
  }

  set cookie(value) {
    this.assignments.push(value);
    const [pair, ...attributes] = value.split(";").map((part) => part.trim());
    const separator = pair.indexOf("=");
    const name = pair.slice(0, separator);
    const cookieValue = pair.slice(separator + 1);
    const shouldDelete = attributes.some(
      (attribute) => attribute.toLowerCase() === "max-age=0"
    );

    if (shouldDelete) {
      this.cookies.delete(name);
    } else {
      this.cookies.set(name, cookieValue);
    }
  }

  createElement(tagName) {
    assert.equal(tagName, "script");
    const script = {
      id: "",
      async: false,
      src: "",
      onerror: null,
      remove: () => {
        this.scripts = this.scripts.filter((item) => item !== script);
      },
    };
    return script;
  }

  querySelectorAll() {
    return this.scripts;
  }
}

function installBrowserGlobals(document, eventLog = []) {
  global.document = document;
  global.window = {
    location: {
      hostname: "www.threatnest.com",
      origin: "https://www.threatnest.com",
    },
    dispatchEvent: (event) => eventLog.push(event),
    dataLayer: [],
  };
  global.CustomEvent = class CustomEvent {
    constructor(type, options) {
      this.type = type;
      this.detail = options?.detail;
    }
  };
}

function removeBrowserGlobals() {
  delete global.document;
  delete global.window;
  delete global.CustomEvent;
}

test.afterEach(() => {
  removeBrowserGlobals();
  delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
});

test("consent is absent by default and saved with required attributes", () => {
  const document = new CookieDocument();
  const events = [];
  installBrowserGlobals(document, events);
  const consent = loadTypeScriptModule("app/lib/consent.ts");

  assert.equal(consent.readConsentPreference(), null);
  const saved = consent.saveConsentPreference(true);

  assert.equal(saved.status, "accepted");
  assert.equal(saved.analytics, true);
  assert.equal(saved.policyVersion, "2026-07-24");
  assert.ok(Date.parse(saved.timestamp));
  assert.match(document.assignments[0], /Max-Age=15811200/);
  assert.match(document.assignments[0], /Path=\//);
  assert.match(document.assignments[0], /SameSite=Lax/);
  assert.match(document.assignments[0], /Secure/);
  assert.equal(events[0].type, "threatnest:consent-change");
  assert.deepEqual(consent.readConsentPreference(), saved);
});

test("rejection persists and a policy version mismatch asks again", () => {
  const document = new CookieDocument();
  installBrowserGlobals(document);
  const consent = loadTypeScriptModule("app/lib/consent.ts");

  const rejected = consent.saveConsentPreference(false);
  assert.equal(rejected.status, "rejected");
  assert.equal(rejected.analytics, false);
  assert.equal(consent.hasAnalyticsConsent(), false);

  const stale = {
    ...rejected,
    policyVersion: "2026-01-01",
  };
  document.cookies.set(
    consent.CONSENT_COOKIE_NAME,
    encodeURIComponent(JSON.stringify(stale))
  );
  assert.equal(consent.readConsentPreference(), null);
});

test("analytics never loads before consent and loads only once after acceptance", () => {
  const document = new CookieDocument();
  installBrowserGlobals(document);
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-TESTCONSENT1";
  let analyticsAllowed = false;
  const analytics = loadTypeScriptModule("app/lib/analytics.ts", {
    "./consent": { hasAnalyticsConsent: () => analyticsAllowed },
  });

  analytics.initializeGoogleAnalytics();
  assert.equal(document.scripts.length, 0);
  assert.equal(global.window.gtag, undefined);

  analyticsAllowed = true;
  analytics.initializeGoogleAnalytics();
  analytics.initializeGoogleAnalytics();

  assert.equal(document.scripts.length, 1);
  assert.equal(document.scripts[0].id, "tn-google-analytics-script");
  assert.equal(
    document.scripts[0].src,
    "https://www.googletagmanager.com/gtag/js?id=G-TESTCONSENT1"
  );
  assert.equal(global.window.dataLayer.length, 2);
});

test("page views follow route changes and duplicate paths are ignored", () => {
  const document = new CookieDocument();
  installBrowserGlobals(document);
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-TESTCONSENT1";
  const calls = [];
  global.window.gtag = (...args) => calls.push(args);
  const analytics = loadTypeScriptModule("app/lib/analytics.ts", {
    "./consent": { hasAnalyticsConsent: () => true },
  });

  analytics.trackPageView("/");
  analytics.trackPageView("/");
  analytics.trackPageView("/cookies");

  assert.deepEqual(
    calls.map((call) => [call[0], call[1], call[2].page_path]),
    [
      ["event", "page_view", "/"],
      ["event", "page_view", "/cookies"],
    ]
  );
});

test("withdrawing consent disables analytics and removes available GA cookies", () => {
  const document = new CookieDocument({
    _ga: "GA1.1.123.456",
    _ga_TESTCONSENT1: "GS1.1.123",
    unrelated: "keep",
  });
  installBrowserGlobals(document);
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-TESTCONSENT1";
  const calls = [];
  global.window.gtag = (...args) => calls.push(args);
  global.window.__tnGaInitialized = true;
  document.head.appendChild(document.createElement("script"));
  const analytics = loadTypeScriptModule("app/lib/analytics.ts", {
    "./consent": { hasAnalyticsConsent: () => false },
  });

  analytics.disableGoogleAnalytics();

  assert.equal(global.window["ga-disable-G-TESTCONSENT1"], true);
  assert.equal(global.window.gtag, undefined);
  assert.equal(document.scripts.length, 0);
  assert.equal(document.cookies.has("_ga"), false);
  assert.equal(document.cookies.has("_ga_TESTCONSENT1"), false);
  assert.equal(document.cookies.get("unrelated"), "keep");
  assert.deepEqual(calls[0], ["consent", "update", { analytics_storage: "denied" }]);
});
