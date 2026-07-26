import type { Metadata } from "next";
import {
  LegalPageEnding,
  LegalPageHeader,
  LegalTableOfContents,
} from "../components/LegalPageChrome";
import { GA_MEASUREMENT_ID } from "../lib/analytics";
import { CONSENT_COOKIE_NAME } from "../lib/consent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Necessary browser storage and optional Google Analytics cookies on threatnest.com.",
  alternates: { canonical: "/cookies" },
};

type CookieRow = {
  name: string;
  provider: string;
  category: string;
  purpose: string;
  duration: string;
};

const necessaryCookies: CookieRow[] = [
  {
    name: CONSENT_COOKIE_NAME,
    provider: "ThreatNest",
    category: "Necessary",
    purpose: "Stores your analytics choice, the policy version, and the time of your choice.",
    duration: "Six months",
  },
  {
    name: "theme (local storage)",
    provider: "ThreatNest",
    category: "Necessary",
    purpose: "Remembers the light or dark theme selected through the theme control.",
    duration: "Until deleted in the browser",
  },
];

const analyticsCookies: CookieRow[] = GA_MEASUREMENT_ID
  ? [
      {
        name: "_ga",
        provider: "Google Analytics",
        category: "Analytics",
        purpose: "Distinguishes visits for website usage measurement after analytics consent.",
        duration: "Up to two years",
      },
      {
        name: GA_MEASUREMENT_ID.startsWith("G-")
          ? `_ga_${GA_MEASUREMENT_ID.slice(2)}`
          : "_ga_<measurement-id>",
        provider: "Google Analytics",
        category: "Analytics",
        purpose: "Maintains session state for the configured GA4 property after analytics consent.",
        duration: "Up to two years",
      },
    ]
  : [];

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
      <LegalPageHeader
        title="Cookie Policy"
        summary="This Cookie Policy applies to people who visit threatnest.com or use its public forms. It explains the cookies and browser storage used by the website, including necessary technology, optional Google Analytics, and the controls available for accepting, rejecting, or withdrawing analytics consent."
      />

      <section className="tn-legal-body">
        <div className="tn-container tn-legal-layout">
          <LegalTableOfContents
            items={[
              { id: "cookies-and-browser-storage", label: "Cookies and browser storage" },
              { id: "necessary-technology", label: "Necessary technology" },
              { id: "optional-analytics", label: "Optional analytics" },
              { id: "managing-your-choice", label: "Managing your choice" },
              { id: "server-and-security-logs", label: "Server and security logs" },
              { id: "contact", label: "Questions or requests" },
            ]}
          />

          <div className="tn-legal-main">
            <div className="tn-legal-sections">
            <section id="cookies-and-browser-storage" className="tn-legal-section">
              <h2>Cookies and browser storage</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Cookies are small text files stored by your browser. Similar technologies, such
                  as browser local storage, can remember a setting without creating a cookie. This
                  website uses necessary technology. Analytics cookies remain disabled until
                  accepted.
                </p>
                <p className="tn-body">
                  ThreatNest is the independent international cybersecurity agency identified in
                  the Privacy Policy. This policy describes the browser technology used by the
                  website and the controls available to visitors.
                </p>
              </div>
            </section>

            <section id="necessary-technology" className="tn-legal-section">
              <h2>Necessary technology</h2>
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
                  The theme setting does not track website activity. Rejecting analytics does not
                  affect access to the website or its forms.
                </p>
              </div>
            </section>

            <section id="optional-analytics" className="tn-legal-section">
              <h2>Optional analytics</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Google Analytics is disabled until you accept analytics cookies. Before
                  acceptance, the Google Analytics script is not loaded or initialized. No
                  analytics requests, page views, cookieless pings, cookies, or identifiers are
                  created.
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

            <section id="managing-your-choice" className="tn-legal-section">
              <h2>Managing your choice</h2>
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
              </div>
            </section>

            <section id="server-and-security-logs" className="tn-legal-section">
              <h2>Server and security logs</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">
                  Vercel hosting logs, backend application logs, and security logs are separate
                  from browser cookies. They may record technical request information needed to
                  deliver the website, protect forms, prevent abuse, troubleshoot errors, and
                  investigate security events.
                </p>
              </div>
            </section>
          </div>

            <LegalPageEnding
              currentPath="/cookies"
              contactText="Cookie and analytics questions can be sent to threatnest@threatnest.com."
              showCookieSettings
            />
          </div>
        </div>
      </section>
    </main>
  );
}
