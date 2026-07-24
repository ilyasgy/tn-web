import type { Metadata } from "next";
import Link from "next/link";
import CookieSettingsButton from "../components/CookieSettingsButton";
import { GA_MEASUREMENT_ID } from "../lib/analytics";
import { CONSENT_COOKIE_NAME } from "../lib/consent";

export const metadata: Metadata = {
  title: "Cookies and Similar Technologies",
  description:
    "How we use necessary browser technology and optional Google Analytics on threatnest.com.",
  alternates: { canonical: "/cookies" },
};

const technologyRows = [
  {
    name: CONSENT_COOKIE_NAME,
    provider: "ThreatNest",
    category: "Necessary",
    purpose: "Stores the analytics choice, policy version, and choice timestamp.",
    duration: "Six months",
  },
  {
    name: "theme (local storage)",
    provider: "ThreatNest",
    category: "Necessary",
    purpose: "Remembers the light or dark theme selected through the theme control.",
    duration: "Until deleted in the browser",
  },
  ...(GA_MEASUREMENT_ID
    ? [
        {
          name: "_ga",
          provider: "Google Analytics",
          category: "Analytics",
          purpose: "Distinguishes website visits for usage measurement after analytics consent.",
          duration: "Up to two years",
        },
        {
          name: GA_MEASUREMENT_ID.startsWith("G-")
            ? `_ga_${GA_MEASUREMENT_ID.slice(2)}`
            : "_ga_<container-id>",
          provider: "Google Analytics",
          category: "Analytics",
          purpose: "Maintains session state for the configured GA4 property after analytics consent.",
          duration: "Up to two years",
        },
      ]
    : []),
];

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
            <h1>Cookies and Similar Technologies</h1>
            <p className="tn-meta-label">Effective date: July 24, 2026</p>
            <p className="tn-body">
              ThreatNest is an independent cybersecurity service brand operated by Omar Geylani.
              In this policy, “ThreatNest,” “we,” “us,” and “our” refer to Omar Geylani operating
              under the ThreatNest brand.
            </p>
            <p className="tn-body tn-page-summary">
              This policy explains the cookies and browser storage used on threatnest.com and how
              you can control optional analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container">
          <div className="tn-line-list" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <section className="tn-line-item">
              <h2 className="tn-line-title">What these technologies are</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Cookies are small text records a website asks your browser to retain. Browser
                  storage performs a similar function inside the browser without creating a
                  cookie. These technologies can remember a setting or help measure how a website
                  is used.
                </p>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">Necessary technology</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Necessary technology operates without optional analytics consent where it is
                  required to run the site, remember your consent choice, provide a theme you
                  selected, protect forms, or maintain security.
                </p>
                <p className="tn-body">
                  Rejecting analytics does not prevent access to the website or its forms.
                </p>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">Optional analytics</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Google Analytics is disabled by default. When it is configured for this website,
                  its script loads only after you select “Accept analytics” or enable Analytics in
                  Cookie Settings. Before that choice, we do not send Google Analytics requests,
                  page views, cookieless pings, or analytics identifiers.
                </p>
                <p className="tn-body">
                  If you later withdraw consent, we disable the Google tag, stop future analytics
                  events, and attempt to remove available first party Google Analytics cookies.
                </p>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">Technologies currently implemented</h2>
              <div className="tn-cookie-table-wrap pt-4">
                <table className="tn-cookie-table">
                  <caption>
                    Cookies and browser storage generated from technologies present in the current
                    website code
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Technology or cookie</th>
                      <th scope="col">Provider</th>
                      <th scope="col">Category</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technologyRows.map((row) => (
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
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">Changing or deleting your choice</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Use Cookie Settings in the footer at any time to accept, reject, change, or
                  withdraw your analytics choice. Your browser settings can also display or delete
                  cookies and browser storage. Deleting the consent cookie causes the site to ask
                  for your choice again.
                </p>
                <CookieSettingsButton className="tn-button-secondary tn-cookie-page-settings">
                  Open Cookie Settings
                </CookieSettingsButton>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">Server and security logs</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Vercel hosting logs, backend application logs, and security logs are separate
                  from browser cookies. They may record technical request information needed to
                  deliver the website, protect forms, prevent abuse, troubleshoot errors, and
                  investigate security events.
                </p>
              </div>
            </section>

            <section className="tn-line-item">
              <h2 className="tn-line-title">Contact</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Privacy questions can be sent to{" "}
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
              Privacy Notice
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
