import type { Metadata } from "next";
import Link from "next/link";
import CookieSettingsButton from "../components/CookieSettingsButton";
import { CONSENT_COOKIE_NAME } from "../lib/consent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How we use necessary cookies, optional Google Analytics cookies, and browser storage on threatnest.com.",
  alternates: { canonical: "/cookies" },
};

const necessaryCookies = [
  {
    name: CONSENT_COOKIE_NAME,
    provider: "ThreatNest",
    category: "Necessary",
    purpose: "Stores your analytics choice, the policy version, and the time of your choice.",
    duration: "Six months",
  },
];

const analyticsCookies = [
  {
    name: "_ga",
    provider: "Google Analytics",
    category: "Analytics",
    purpose: "Distinguishes visits for website usage measurement after analytics consent.",
    duration: "Up to two years",
  },
  {
    name: "_ga_RWC6YMXS39",
    provider: "Google Analytics",
    category: "Analytics",
    purpose: "Maintains session state for the configured GA4 property after analytics consent.",
    duration: "Up to two years",
  },
];

type CookieRow = (typeof necessaryCookies)[number] | (typeof analyticsCookies)[number];

function CookieTable({
  caption,
  rows,
}: {
  caption: string;
  rows: CookieRow[];
}) {
  return (
    <div className="tn-cookie-table-wrap pt-4">
      <table className="tn-cookie-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Cookie</th>
            <th scope="col">Provider</th>
            <th scope="col">Category</th>
            <th scope="col">Purpose</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td>{row.provider}</td>
              <td>{row.category}</td>
              <td>{row.purpose}</td>
              <td>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container">
          <div
            className="tn-page-copy tn-page-copy-centered"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            <h1>Cookie Policy</h1>
            <p className="tn-meta-label">Effective date: July 25, 2026</p>
            <p className="tn-body tn-page-summary">
              This Cookie Policy explains how we use cookies and similar technologies on
              threatnest.com and how you can manage your preferences.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container">
          <div className="tn-line-list" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <section className="tn-line-item">
              <h2 className="tn-line-title">1. Types of cookies</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Cookies are small text files stored by your browser. Similar technologies, such
                  as browser local storage, can remember a setting without creating a cookie. This
                  website uses necessary technology and, only with your consent, analytics
                  cookies.
                </p>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">2. Necessary cookies</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Necessary cookies operate without optional analytics consent. The consent cookie
                  contains no advertising or analytics identifier.
                </p>
                <CookieTable
                  caption="Necessary cookies used on threatnest.com"
                  rows={necessaryCookies}
                />
                <p className="tn-body">
                  The theme control uses browser local storage under the name{" "}
                  <code>theme</code> to remember a light or dark theme until you delete that
                  browser storage. It does not track website activity.
                </p>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">3. Analytics cookies</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Google Analytics is disabled until you accept analytics cookies. Before
                  acceptance, we do not load the Google Analytics script, send analytics requests
                  or page views, or create Google Analytics cookies.
                </p>
                <p className="tn-body">
                  After acceptance, Google Analytics may process usage, device, referral,
                  approximate-location, and technical information about your visit.
                </p>
                <CookieTable
                  caption="Analytics cookies used after analytics consent"
                  rows={analyticsCookies}
                />
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">4. Managing cookies</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Use Cookie Settings in the footer to accept, reject, change, or withdraw
                  analytics consent. Rejecting analytics does not prevent access to the website or
                  its forms. Withdrawing consent stops future analytics and removes available
                  first-party Google Analytics cookies.
                </p>
                <p className="tn-body">
                  You can also view or delete cookies and local storage through your browser
                  settings. If you delete the consent cookie, the website will ask for your choice
                  again.
                </p>
                <CookieSettingsButton className="tn-button-secondary tn-cookie-page-settings">
                  Open Cookie Settings
                </CookieSettingsButton>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">5. Contact</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Questions about this Cookie Policy can be sent to{" "}
                  <a className="tn-inline-link" href="mailto:threatnest@threatnest.com">
                    threatnest@threatnest.com
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>

          <nav
            aria-label="Related policies"
            className="tn-actions pt-16"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            <Link href="/privacy" className="tn-button-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="tn-button-secondary">
              Terms
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
