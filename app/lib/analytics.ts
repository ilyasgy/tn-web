export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

declare global {
  interface Window {
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
    GA_MEASUREMENT_ID && typeof window !== "undefined" && typeof window.gtag === "function"
  );
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
