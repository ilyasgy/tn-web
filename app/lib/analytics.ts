import { CONSENT_CHANGE_EVENT, hasAnalyticsConsent } from "./consent";

export const PRODUCTION_GA_MEASUREMENT_ID = "G-RWC6YMXS39";

const configuredMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ||
  (process.env.NODE_ENV === "production" ? PRODUCTION_GA_MEASUREMENT_ID : "");

export const GA_MEASUREMENT_ID = /^(G|AW)-[A-Z0-9-]+$/.test(configuredMeasurementId)
  ? configuredMeasurementId
  : "";

declare global {
  interface Window {
    __tnGaInitialized?: boolean;
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
    function gtag() {
      // Google Analytics expects each command as the function's arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

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

  // Disable collection before removing the tag so withdrawal cannot trigger a
  // final consent-mode ping or any later queued event.
  setGoogleDisableFlag(true);
  document
    .querySelectorAll<HTMLScriptElement>(
      "#tn-google-analytics-script, script[src*='googletagmanager.com/gtag/js']"
    )
    .forEach((script) => script.remove());
  deleteGoogleAnalyticsCookies();
  window.__tnGaInitialized = false;
  window.gtag = undefined;
  window.dataLayer = [];
}

export function syncGoogleAnalytics() {
  if (!hasAnalyticsConsent()) {
    disableGoogleAnalytics();
    return;
  }

  // The GA4 config command records the initial page view. The Google tag also
  // observes History API changes made by the Next.js App Router, so sending a
  // second manual page_view here would double-count client-side navigation.
  initializeGoogleAnalytics();
}

export function listenForAnalyticsConsent() {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleConsentChange = () => {
    syncGoogleAnalytics();
  };

  window.addEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);

  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsentChange);
  };
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!isAnalyticsReady()) {
    return;
  }

  window.gtag?.("event", name, cleanParams(params));
}
