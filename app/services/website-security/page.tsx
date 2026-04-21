import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSectionSecPage";

const IN_SCOPE = [
  "Login, password reset, session handling, and account abuse checks.",
  "Access control, user boundaries, and IDOR-style issues.",
  "Forms, APIs, uploads, input handling, and common web vulnerabilities.",
  "Public setup issues such as headers, TLS, cookies, exposed files, and admin paths.",
];

const OUT_OF_SCOPE = [
  "Anything destructive or availability-focused, including DDoS.",
  "Social engineering unless it is agreed in writing.",
  "Internal systems or third-party services you do not control.",
  "Physical security and on-site access.",
];

const METHODOLOGY = [
  {
    title: "Scope and recon",
    text: "We confirm the target, map the public surface, and note the frameworks, routes, and exposed assets.",
  },
  {
    title: "Config and auth review",
    text: "We check headers, TLS, cookies, login, reset flows, rate limits, and session behavior.",
  },
  {
    title: "App and logic testing",
    text: "We test access control, workflow mistakes, APIs, input handling, and the common web issues that matter on live sites.",
  },
  {
    title: "Manual verification and report",
    text: "Every finding is reproduced by hand before it goes into the report, with proof and direct fixes.",
  },
];

const DELIVERABLES = [
  "Short summary for the client or team lead",
  "Findings with proof, severity, and direct fixes",
  "48-hour report delivery after testing ends",
  "One free retest within 14 days after fixes",
];

const ENGAGEMENT_FLOW = [
  ["01", "Authorize", "You confirm ownership or written permission and approve the target."],
  ["02", "Prepare", "We confirm scope, test accounts if needed, and the testing window."],
  ["03", "Test", "Testing runs over 2 business days with important issues raised quickly."],
  ["04", "Report", "You get the final PDF within 48 hours, plus one retest after fixes."],
];

export default function WebsiteSecurityDetailPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-page-hero-grid">
          <div className="tn-page-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Website security review</small>
            <h1>Review the live website.</h1>
            <p className="tn-body tn-page-summary">
              We test live websites for auth issues, access problems, risky setup, and the web
              flaws that matter.
            </p>

            <div className="tn-actions">
              <Link href="/start" className="tn-button-primary">
                Start Review
              </Link>
              <Link href="/services" className="tn-button-secondary">
                Back to Services
              </Link>
            </div>
          </div>

          <div className="tn-aside-list" data-tn-reveal="right" data-tn-reveal-state="hidden">
            {[
              ["$500 fixed", "$250 before testing and $250 on delivery."],
              ["2 business days", "Testing window after scope and authorization are confirmed."],
              ["48-hour report", "Final PDF after testing is complete."],
              ["14-day retest", "Included for remediated findings."],
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
            <h2>How the review runs.</h2>
            <p className="tn-body">
              We agree scope, test by hand, and write everything up with proof and fixes.
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
            <h2>Report and retest.</h2>
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
                Send the domain, your notes, and any access details if the review needs them.
              </p>
            </div>

            <div className="tn-actions lg:justify-end" data-tn-reveal="right" data-tn-reveal-state="hidden">
              <Link href="/start" className="tn-button-primary">
                Start the Review
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
