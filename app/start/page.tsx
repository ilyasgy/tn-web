import type { Metadata } from "next";
import Link from "next/link";
import StartForm from "./StartForm";
import SocialLinks from "../components/SocialLinks";


export const metadata: Metadata = {
  title: "Request a Healthcare Application Security Audit",
  description: "Send your website URL and application notes to request a fixed scope healthcare application security audit from ThreatNest.",
  alternates: {
    canonical: "/start",
  },
};
const START_FACTS = [
  ["Standard assessment", "USD 2,000 for the defined scope. Final scope and price are confirmed in writing."],
  ["Seven calendar days", "The standard delivery period begins after scope, authorization, payment, access, and the testing window are complete."],
  ["Manual testing", "Every finding is verified by hand before it reaches your report."],
  ["Included retest", "One retest of original findings, requested within 14 calendar days after the final report is delivered unless agreed otherwise."],
];

export default function StartPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-section-stack">
          <div className="tn-page-copy" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <h1>Request an application security audit.</h1>
            <p className="tn-body tn-page-summary">
              Send your website URL and a short description of your application. We will confirm
              scope, explain the assessment process, and provide the next steps.
            </p>
            <p className="tn-body">
              This business to business request does not authorize testing. Active testing begins
              only after the parties and exact scope are identified, written authorization and
              Rules of Engagement are signed, payment clears, access and emergency contacts are
              provided, the testing window is agreed, and we confirm testing may begin.
            </p>
          </div>

          <div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            {START_FACTS.map(([title, text]) => (
              <div key={title} className="border-t border-[var(--border-grid)] pt-6">
                <small className="tn-meta-label">{title}</small>
                <p className="tn-body pt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="tn-container tn-grid-2 tn-form-page-grid">
          <div data-tn-reveal="left" data-tn-reveal-state="hidden">
            <div className="tn-form-shell">
              <StartForm />
            </div>
          </div>

          <div className="tn-stack-64" data-tn-reveal="right" data-tn-reveal-state="hidden">
            <div className="tn-line-list">
              <div className="tn-line-item">
                <h2 className="text-2xl font-bold">What we review</h2>
                <div className="tn-stack-16 pt-4">
                  {[
                    "Login, reset, and session handling",
                    "PHI tracking exposure and third party JavaScript",
                    "Access control, exposed paths, and risky setup",
                    "Forms, APIs, uploads, and common web flaws",
                  ].map((item) => (
                    <p key={item} className="tn-body tn-body-strong">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="tn-line-list">
              <div className="tn-line-item">
                <h2 className="text-2xl font-bold">Timing</h2>
                <p className="tn-line-copy tn-body">
                  We confirm scope, test the live application by hand, and deliver the remediation
                  blueprint within the agreed period. The standard seven calendar day period starts
                  only after all engagement prerequisites are complete and pauses while required
                  client information, access, or approval is outstanding.
                </p>
              </div>
            </div>

            <div className="tn-line-list">
              <div className="tn-line-item">
                <h2 className="text-2xl font-bold">What happens next</h2>
                <div className="tn-stack-12 pt-4">
                  <div>
                    <p className="tn-meta-label">1. Scope</p>
                    <p className="tn-body">We define the application, pages, and systems included.</p>
                  </div>
                  <div>
                    <p className="tn-meta-label">2. Authorize</p>
                    <p className="tn-body">We verify authority and complete written authorization and Rules of Engagement.</p>
                  </div>
                  <div>
                    <p className="tn-meta-label">3. Audit</p>
                    <p className="tn-body">
                      Testing begins only after every prerequisite is complete and we give
                      confirmation. Critical findings may be reported before the final report.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Link href="/contact" className="tn-text-link">
                Want to talk first? Use contact
              </Link>
            </div>
            <div className="tn-actions">
              <Link href="/authorized-testing" className="tn-button-secondary">
                Authorized Testing Policy
              </Link>
              <Link href="/data-handling" className="tn-button-secondary">
                Data Handling Policy
              </Link>
            </div>
            <SocialLinks className="pt-6" />
          </div>
        </div>
      </section>
    </main>
  );
}
