import type { Metadata } from "next";
import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSectionSecPage";


export const metadata: Metadata = {
  title: "Application Penetration Test & Remediation Blueprint",
  description: "Manual application penetration testing for healthcare websites, including PHI tracking exposure, security headers, access control, forms, APIs, developer-ready fixes, and a complimentary retest.",
  alternates: {
    canonical: "/services/website-security",
  },
};
const IN_SCOPE = [
  "Login, password reset, session handling, and account abuse checks.",
  "Access control, user boundaries, and IDOR-style issues.",
  "PHI tracking exposure from pixels, analytics scripts, and third-party JavaScript.",
  "Forms, APIs, uploads, input handling, and common web vulnerabilities.",
  "Security headers, TLS, cookies, exposed files, admin paths, and browser controls.",
];

const OUT_OF_SCOPE = [
  "Anything destructive or availability-focused, including DDoS.",
  "Social engineering unless it is agreed in writing.",
  "Internal systems or third-party services you do not control.",
  "Physical security and on-site access.",
];

const METHODOLOGY = [
  {
    title: "Surface review",
    text: "We inspect browser behavior, public pages, patient forms, and exposed infrastructure.",
  },
  {
    title: "Manual assessment",
    text: "Every reachable application component is manually tested for security weaknesses.",
  },
  {
    title: "Validation",
    text: "Every finding is reproduced, verified, and documented with supporting evidence.",
  },
  {
    title: "Developer blueprint",
    text: "Every finding includes technical proof and remediation instructions your developer can implement.",
  },
];

const DELIVERABLES = [
  "Manual application penetration test",
  "PHI tracking exposure review",
  "Security header assessment",
  "Proof-of-risk screenshots",
  "Developer remediation blueprint",
  "One complimentary retest after fixes",
  "Delivered within 7 days",
];

const ENGAGEMENT_FLOW = [
  ["01", "Scope", "We define the application, pages, and systems included in the assessment."],
  [
    "02",
    "Manual Testing",
    "The live application is assessed for application-layer vulnerabilities, configuration weaknesses, and data exposure risks.",
  ],
  [
    "03",
    "Validation",
    "Every finding is reproduced, verified, and documented with supporting evidence.",
  ],
  [
    "04",
    "Delivery",
    "You receive a remediation blueprint, technical evidence, and one complimentary retest after fixes.",
  ],
];

export default function WebsiteSecurityDetailPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-page-hero-grid">
          <div className="tn-page-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Application security audit</small>
            <h1>Application Penetration Test & Remediation Blueprint</h1>
            <p className="tn-body tn-page-summary">
              ThreatNest performs fixed-scope application security audits for independent
              healthcare clinics, dental practices, and medical centers operating patient-facing
              web applications.
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
              ["$2,000 Fixed", "One fixed fee for the audit and remediation blueprint."],
              ["7-day delivery", "Full documentation delivered within 7 days."],
              ["Complimentary retest", "One retest after remediation is complete."],
              ["Healthcare focus", "Built for patient-facing web applications."],
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
            <small className="tn-kicker">In scope</small>
            <div className="tn-plain-list">
              {IN_SCOPE.map((item) => (
                <p key={item} className="tn-plain-list-item">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="tn-section-copy" data-tn-reveal="right" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Out of scope</small>
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
            <small className="tn-kicker">Method</small>
            <h2>How the audit runs.</h2>
            <p className="tn-body">
              We agree scope, test by hand, and write everything up with proof, severity,
              affected assets, business impact, and developer-ready fixes.
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
            <small className="tn-kicker">Deliverables</small>
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
              <small className="tn-kicker">Next step</small>
              <h2>Ready to send the target?</h2>
              <p className="tn-body">
                Send your website URL and a short description of your application. We will confirm
                scope, explain the assessment process, and provide the next steps.
              </p>
            </div>

            <div className="tn-actions lg:justify-end" data-tn-reveal="right" data-tn-reveal-state="hidden">
              <Link href="/start" className="tn-button-primary">
                Request Audit
              </Link>
              <Link href="/contact" className="tn-button-secondary">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
