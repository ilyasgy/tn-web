import { hasAnalyticsConsent } from "./consent";

const configuredMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

export const GA_MEASUREMENT_ID = /^(G|AW)-[A-Z0-9-]+$/.test(configuredMeasurementId)
  ? configuredMeasurementId
  : "";

declare global {
  interface Window {
    __tnGaInitialized?: boolean;
    __tnLastTrackedPath?: string;
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

function cleanParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

function isAnalyticsReady() {
  return Boolean(
    GA_MEASUREMENT_ID &&
      typeof window !== "undefined" &&
      hasAnalyticsConsent() &&
      typeof window.gtag === "function"
  );
}

function setGoogleDisableFlag(disabled: boolean) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return;
  }

  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
}

function expireCookie(name: string, domain?: string) {
  const domainAttribute = domain ? `; Domain=${domain}` : "";
  document.cookie = `${name}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax; Secure${domainAttribute}`;
}

export function deleteGoogleAnalyticsCookies() {
  if (typeof document === "undefined") {
    return;
  }

  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter(
      (name) =>
        name === "_ga" ||
        name.startsWith("_ga_") ||
        name === "_gid" ||
        name === "_gat" ||
        name.startsWith("_gat_") ||
        name.startsWith("_gac_")
    );
  const hostname = window.location.hostname;
  const parentDomain = hostname.split(".").length > 2 ? hostname.split(".").slice(-2).join(".") : "";
  const domains = [undefined, hostname, `.${hostname}`, parentDomain || undefined, parentDomain ? `.${parentDomain}` : undefined];

  for (const name of new Set(names)) {
    for (const domain of new Set(domains)) {
      expireCookie(name, domain);
    }
  }
}

export function initializeGoogleAnalytics() {
  if (
    typeof window === "undefined" ||
    !GA_MEASUREMENT_ID ||
    !hasAnalyticsConsent() ||
    window.__tnGaInitialized
  ) {
    return;
  }

  setGoogleDisableFlag(false);
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.id = "tn-google-analytics-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    GA_MEASUREMENT_ID
  )}`;
  script.onerror = () => {
    window.__tnGaInitialized = false;
    script.remove();
  };

  window.__tnGaInitialized = true;
  document.head.appendChild(script);
}

export function disableGoogleAnalytics() {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "denied" });
  }

  setGoogleDisableFlag(true);
  document
    .querySelectorAll<HTMLScriptElement>(
      "#tn-google-analytics-script, script[src*='googletagmanager.com/gtag/js']"
    )
    .forEach((script) => script.remove());
  deleteGoogleAnalyticsCookies();
  window.__tnGaInitialized = false;
  window.__tnLastTrackedPath = undefined;
  window.gtag = undefined;
  window.dataLayer = [];
}

export function trackPageView(path: string) {
  if (!isAnalyticsReady()) {
    return;
  }

  if (window.__tnLastTrackedPath === path) {
    return;
  }

  window.__tnLastTrackedPath = path;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!isAnalyticsReady()) {
    return;
  }

  window.gtag?.("event", name, cleanParams(params));
}
