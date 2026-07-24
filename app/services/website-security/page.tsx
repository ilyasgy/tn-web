import type { Metadata } from "next";
import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSectionSecPage";


export const metadata: Metadata = {
  title: "Application Penetration Test & Remediation Blueprint",
  description: "Manual application penetration testing for healthcare websites, including PHI tracking exposure, security headers, access control, forms, APIs, clear fixes, and a complimentary retest.",
  alternates: {
    canonical: "/services/website-security",
  },
};
const IN_SCOPE = [
  "Login, password reset, session handling, and account abuse checks.",
  "Access control, user boundaries, and IDOR issues.",
  "PHI tracking exposure from pixels, analytics scripts, and third party JavaScript.",
  "Forms, APIs, uploads, input handling, and common web vulnerabilities.",
  "Security headers, TLS, cookies, exposed files, admin paths, and browser controls.",
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
    title: "Surface review",
    text: "We inspect browser behavior, public pages, patient forms, and exposed infrastructure.",
  },
  {
    title: "Manual assessment",
    text: "Every reachable application component is manually tested for security weaknesses.",
  },
  {
    title: "Validation",
    text: "Every reported finding is manually reviewed and validated with evidence minimized to what is reasonably necessary.",
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
  "Screenshots that show the risk",
  "Developer remediation blueprint",
  "One complimentary retest after fixes",
  "Designed for delivery within seven calendar days after prerequisites are complete",
];

const ENGAGEMENT_FLOW = [
  ["01", "Scope", "We define the application, pages, and systems included in the assessment."],
  [
    "02",
    "Manual Testing",
    "The live application is assessed for application vulnerabilities, configuration weaknesses, and data exposure risks.",
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
            <h1>Application Penetration Test & Remediation Blueprint</h1>
            <p className="tn-body tn-page-summary">
              We perform fixed scope application security audits for independent
              healthcare clinics, dental practices, and medical centers operating patient facing
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
              ["Standard assessment", "USD 2,000 for the defined scope. Final scope and price are confirmed in writing."],
              ["Seven calendar days", "The standard delivery period starts after scope, authorization, payment, access, and the testing window are complete."],
              ["Complimentary retest", "One retest of the original findings when requested within 14 calendar days after the final report is delivered, unless agreed otherwise."],
              ["Healthcare focus", "Built for patient facing web applications."],
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
              We agree scope, test by hand, and write everything up with proof, severity,
              affected assets, business impact, and clear fixes.
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
