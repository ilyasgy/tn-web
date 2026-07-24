export const CONSENT_COOKIE_NAME = "threatnest_cookie_consent_v1";
export const CONSENT_POLICY_VERSION = "2026-07-24";
export const COOKIE_SETTINGS_EVENT = "threatnest:open-cookie-settings";
export const CONSENT_CHANGE_EVENT = "threatnest:consent-change";

const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 183;

export type ConsentPreference = {
  status: "accepted" | "rejected";
  analytics: boolean;
  policyVersion: string;
  timestamp: string;
};

function isConsentPreference(value: unknown): value is ConsentPreference {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<ConsentPreference>;
  const statusMatches =
    (candidate.status === "accepted" && candidate.analytics === true) ||
    (candidate.status === "rejected" && candidate.analytics === false);

  return Boolean(
    statusMatches &&
      candidate.policyVersion === CONSENT_POLICY_VERSION &&
      typeof candidate.timestamp === "string" &&
      !Number.isNaN(Date.parse(candidate.timestamp))
  );
}

export function readConsentPreference(): ConsentPreference | null {
  if (typeof document === "undefined") {
    return null;
  }

  const encodedValue = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${CONSENT_COOKIE_NAME}=`))
    ?.slice(CONSENT_COOKIE_NAME.length + 1);

  if (!encodedValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(encodedValue));
    return isConsentPreference(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  return readConsentPreference()?.analytics === true;
}

export function saveConsentPreference(analytics: boolean): ConsentPreference {
  const preference: ConsentPreference = {
    status: analytics ? "accepted" : "rejected",
    analytics,
    policyVersion: CONSENT_POLICY_VERSION,
    timestamp: new Date().toISOString(),
  };
  const expires = new Date(Date.now() + CONSENT_MAX_AGE_SECONDS * 1000).toUTCString();

  document.cookie = [
    `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(preference))}`,
    `Max-Age=${CONSENT_MAX_AGE_SECONDS}`,
    `Expires=${expires}`,
    "Path=/",
    "SameSite=Lax",
    "Secure",
  ].join("; ");

  window.dispatchEvent(
    new CustomEvent<ConsentPreference>(CONSENT_CHANGE_EVENT, { detail: preference })
  );

  return preference;
}
