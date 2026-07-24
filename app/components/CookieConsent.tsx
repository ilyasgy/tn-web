"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { disableGoogleAnalytics } from "../lib/analytics";
import {
  COOKIE_SETTINGS_EVENT,
  type ConsentPreference,
  readConsentPreference,
  saveConsentPreference,
} from "../lib/consent";

const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), { ssr: false });

type ConsentView = "checking" | "banner" | "preferences" | "hidden";

export default function CookieConsent() {
  const [view, setView] = useState<ConsentView>("checking");
  const [preference, setPreference] = useState<ConsentPreference | null>(null);
  const [analyticsDraft, setAnalyticsDraft] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const bannerManageRef = useRef<HTMLButtonElement | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const initializationTimer = window.setTimeout(() => {
      const stored = readConsentPreference();

      setPreference(stored);
      setAnalyticsDraft(stored?.analytics ?? false);
      setView(stored ? "hidden" : "banner");

      if (!stored?.analytics) {
        disableGoogleAnalytics();
      }
    }, 0);

    const openSettings = () => {
      returnFocusRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const current = readConsentPreference();
      setPreference(current);
      setAnalyticsDraft(current?.analytics ?? false);
      setView("preferences");
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => {
      window.clearTimeout(initializationTimer);
      window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (view === "preferences" && !dialog.open) {
      dialog.showModal();
      window.setTimeout(() => {
        dialog.querySelector<HTMLInputElement>("#tn-analytics-consent")?.focus();
      }, 0);
    } else if (view !== "preferences" && dialog.open) {
      dialog.close();
    }
  }, [view]);

  function finishChoice(analytics: boolean) {
    const next = saveConsentPreference(analytics);
    setPreference(next);
    setAnalyticsDraft(analytics);

    if (!analytics) {
      disableGoogleAnalytics();
    }

    setView("hidden");
  }

  function closePreferences() {
    setView(preference ? "hidden" : "banner");
    window.setTimeout(() => {
      if (preference) {
        returnFocusRef.current?.focus();
      } else {
        bannerManageRef.current?.focus();
      }
    }, 0);
  }

  return (
    <>
      {preference?.analytics ? <GoogleAnalytics /> : null}

      {view === "banner" ? (
        <section
          className="tn-cookie-banner"
          role="region"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="tn-cookie-banner-copy">
            <h2>Analytics preferences</h2>
            <p>
              We use necessary technology to operate this site. With your permission, we also use
              Google Analytics to understand website use. Read our{" "}
              <Link href="/privacy" className="tn-inline-link">
                Privacy Notice
              </Link>{" "}
              and{" "}
              <Link href="/cookies" className="tn-inline-link">
                Cookies Policy
              </Link>
              .
            </p>
          </div>
          <div className="tn-cookie-actions">
            <button
              ref={bannerManageRef}
              type="button"
              className="tn-cookie-choice"
              onClick={() => finishChoice(true)}
            >
              Accept analytics
            </button>
            <button
              type="button"
              className="tn-cookie-choice"
              onClick={() => finishChoice(false)}
            >
              Reject analytics
            </button>
            <button
              type="button"
              className="tn-cookie-manage"
              onClick={(event) => {
                returnFocusRef.current = event.currentTarget;
                setAnalyticsDraft(false);
                setView("preferences");
              }}
            >
              Manage preferences
            </button>
          </div>
        </section>
      ) : null}

      <dialog
        ref={dialogRef}
        className="tn-cookie-dialog"
        aria-labelledby="tn-cookie-dialog-title"
        aria-modal="true"
        onCancel={(event) => {
          event.preventDefault();
          closePreferences();
        }}
        onClose={() => {
          if (view === "preferences") {
            closePreferences();
          }
        }}
      >
        <div className="tn-cookie-dialog-inner">
          <div className="tn-cookie-dialog-heading">
            <div>
              <p className="tn-meta-label">Cookie Settings</p>
              <h2 id="tn-cookie-dialog-title">Choose your preferences</h2>
            </div>
            <button
              type="button"
              className="tn-cookie-close"
              onClick={closePreferences}
              aria-label="Close Cookie Settings"
            >
              Close
            </button>
          </div>

          <p className="tn-cookie-dialog-copy">
            Necessary technology keeps the site working and remembers this choice. Analytics is
            optional and is off unless you enable it.
          </p>

          <div className="tn-cookie-option">
            <div>
              <h3>Necessary</h3>
              <p>Required for consent and theme preferences. Always enabled.</p>
            </div>
            <input type="checkbox" checked disabled aria-label="Necessary cookies always enabled" />
          </div>

          <label className="tn-cookie-option" htmlFor="tn-analytics-consent">
            <div>
              <h3>Analytics</h3>
              <p>Allows Google Analytics to measure page visits and site interactions.</p>
            </div>
            <input
              id="tn-analytics-consent"
              type="checkbox"
              checked={analyticsDraft}
              onChange={(event) => setAnalyticsDraft(event.target.checked)}
            />
          </label>

          <div className="tn-cookie-dialog-links">
            <Link href="/privacy" className="tn-inline-link" onClick={closePreferences}>
              Privacy Notice
            </Link>
            <Link href="/cookies" className="tn-inline-link" onClick={closePreferences}>
              Cookies Policy
            </Link>
          </div>

          <button
            type="button"
            className="tn-button-primary tn-cookie-save"
            onClick={() => finishChoice(analyticsDraft)}
          >
            Save preferences
          </button>
        </div>
      </dialog>
    </>
  );
}
