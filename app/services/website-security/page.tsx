import type { Metadata } from "next";
import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSectionSecPage";


export const metadata: Metadata = {
  title: "Website Security Audit",
  description: "A fixed-scope, OWASP-guided Website Security Audit for healthcare websites with manual validation, a full PDF report, clear fixes, and one included retest.",
  alternates: {
    canonical: "/services/website-security",
  },
};
const IN_SCOPE = [
  "The website domain and any subdomains authorized in writing.",
  "Contact, appointment request, and new-patient forms.",
  "Tracking pixels and third-party scripts on patient-facing pages.",
  "Patient portal login, registration, password reset, and session handling when present.",
  "File uploads and public website APIs when present.",
  "Exposed admin panels, login pages, files, and configuration details.",
  "Security headers, TLS configuration, and cookie flags.",
  "CMS, site-builder, and plugin versions.",
  "Error messages, information disclosure, access control, and input validation.",
];

const OUT_OF_SCOPE = [
  "Denial of service, load, stress, destructive, or availability testing.",
  "Phishing, impersonation, social engineering, physical security, or ransomware simulation.",
  "Internal networks, wireless systems, employee personal accounts, or unrelated systems.",
  "Third party services the client does not own or have written authority to include.",
  "Intentional exfiltration or exploitation beyond the minimum proof needed to validate a finding.",
];

const METHODOLOGY = [
  {
    title: "Reconnaissance",
    text: "We map the authorized public surface, including subdomains, technology, hidden pages, scripts, and exposed files.",
  },
  {
    title: "Configuration review",
    text: "We review TLS, HTTP security headers, cookie flags, exposed configuration files, and verbose error pages.",
  },
  {
    title: "Authentication and sessions",
    text: "Where present, we assess login, registration, password reset, rate limiting, and session handling.",
  },
  {
    title: "Access control and form logic",
    text: "We manually review access controls on authorized patient-facing forms and private pages.",
  },
  {
    title: "Input validation",
    text: "We review in-scope forms, APIs, and uploads for injection, cross-site scripting, request forgery, redirect, and file handling issues.",
  },
  {
    title: "Verification and reporting",
    text: "Every reported finding is reproduced by hand, false positives are removed, and evidence is limited to what is needed.",
  },
];

const DELIVERABLES = [
  "Full PDF report with a plain-English executive summary",
  "Detailed findings with severity, affected component, evidence, and business impact",
  "CVSS 3.1 risk rating combined with practical impact",
  "Concrete, prioritized remediation guidance",
  "Optional written Q&A within seven days after report delivery",
  "One included retest requested within 14 days after report delivery",
  "Final report delivered within 48 hours after the seven-day testing window is completed",
];

const ENGAGEMENT_FLOW = [
  ["01", "Scope and sign", "We define the included systems and complete the Service Agreement and Authorization to Test."],
  [
    "02",
    "Prepare",
    "The 50% deposit clears, required access is provided, and the testing window and emergency contact are confirmed.",
  ],
  [
    "03",
    "Seven-day testing window",
    "The authorized live application is assessed using OWASP WSTG and OWASP Top 10 guidance.",
  ],
  [
    "04",
    "Report delivery",
    "The full PDF report and executive summary are delivered within 48 hours after testing is completed.",
  ],
  ["05", "Retest", "One retest of remediated original findings is available when requested within 14 days after report delivery."],
];

export default function WebsiteSecurityDetailPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-page-hero-grid">
          <div className="tn-page-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <h1>Website Security Audit</h1>
            <p className="tn-body tn-page-summary">
              A fixed-scope application penetration test for independent healthcare clinics,
              dental practices, and medical centers operating patient-facing websites.
            </p>

            <div className="tn-actions">
              <Link href="/start" className="tn-button-primary">
                Request Audit
              </Link>
              <Link href="/services" className="tn-button-secondary">
                Back to Services
              </Link>
            </div>
          </div>

          <div className="tn-aside-list" data-tn-reveal="right" data-tn-reveal-state="hidden">
            {[
              ["USD 2,000 fixed", "No hidden costs: 50% upon signing and 50% when the final report is delivered."],
              ["Seven-day testing window", "Testing begins after the signed agreement, scope, deposit, access, and testing window are confirmed."],
              ["Report within 48 hours", "The full PDF report is delivered within 48 hours after testing is completed."],
              ["Included retest", "One retest of the original findings when requested within 14 calendar days after report delivery."],
            ].map(([title, text]) => (
              <div key={title} className="tn-aside-row">
                <small className="tn-meta-label">{title}</small>
                <p className="tn-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container tn-grid-2">
          <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <h2>In scope</h2>
            <div className="tn-plain-list">
              {IN_SCOPE.map((item) => (
                <p key={item} className="tn-plain-list-item">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="tn-section-copy" data-tn-reveal="right" data-tn-reveal-state="hidden">
            <h2>Out of scope</h2>
            <div className="tn-plain-list">
              {OUT_OF_SCOPE.map((item) => (
                <p key={item} className="tn-plain-list-item">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tn-cta-band">
        <div className="tn-container tn-section-stack">
          <div className="tn-section-head" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <h2>How the audit runs.</h2>
            <p className="tn-body">
              The assessment follows the OWASP Web Security Testing Guide and OWASP Top 10. We
              agree scope, test by hand, and document proof, severity, affected assets, business
              impact, and clear fixes.
            </p>
          </div>

          <div
            className="tn-number-list tn-number-list-balanced"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            {METHODOLOGY.map((item, index) => (
              <div key={item.title} className="tn-number-row">
                <p className="tn-number">0{index + 1}</p>
                <div className="tn-stack-16">
                  <h3>{item.title}</h3>
                  <p className="tn-body">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[128px] pt-[128px]">
        <div className="tn-container tn-grid-2">
          <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <h2>Remediation blueprint and retest.</h2>
            <div className="tn-plain-list">
              {DELIVERABLES.map((item) => (
                <p key={item} className="tn-plain-list-item">
                  {item}
                </p>
              ))}
            </div>
            <p className="tn-body">
              Findings, screenshots, credentials, business data, and the report are treated as
              confidential.
            </p>
            <p className="tn-body">
              A penetration test is limited in time and covers the agreed scope. It does not
              guarantee that every vulnerability will be found or certify legal or regulatory
              compliance.
            </p>
          </div>

          <div className="tn-number-list" data-tn-reveal="right" data-tn-reveal-state="hidden">
            {ENGAGEMENT_FLOW.map(([step, title, text]) => (
              <div key={step} className="tn-number-row">
                <p className="tn-number">{step}</p>
                <div className="tn-stack-16">
                  <h3>{title}</h3>
                  <p className="tn-body">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecurityImpactSection />

      <section className="pb-[128px]">
        <div className="tn-container">
          <div className="tn-grid-2 items-end">
            <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
              <h2>Ready to send the target?</h2>
              <p className="tn-body">
                Send your website URL and a short description of your application. We will confirm
                scope, explain the assessment process, and provide the next steps. A request,
                introductory call, payment, or ordinary email does not authorize testing.
              </p>
            </div>

            <div className="tn-actions lg:justify-end" data-tn-reveal="right" data-tn-reveal-state="hidden">
              <Link href="/start" className="tn-button-primary">
                Request Audit
              </Link>
              <Link href="/contact" className="tn-button-secondary">
                Ask a Question
              </Link>
              <Link href="/authorized-testing" className="tn-button-secondary">
                Authorization Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
