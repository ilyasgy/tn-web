import Link from "next/link";
import StartForm from "./StartForm";
import SocialLinks from "../components/SocialLinks";

const START_FACTS = [
  ["$500 fixed", "$250 before testing and $250 on delivery."],
  ["2 business days", "Testing window after scope and written authorization are confirmed."],
  ["48-hour report", "Final report delivery after testing ends."],
  ["14-day retest", "One free retest after fixes are applied."],
];

export default function StartPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-section-stack">
          <div className="tn-page-copy" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Get started</small>
            <h1>Start your project.</h1>
            <p className="tn-body tn-page-summary">
              Tell us what you need — security review, new site work, or design help.
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
                <small className="tn-kicker">What we review</small>
                <div className="tn-stack-16 pt-4">
                  {[
                    "Login, reset, and session handling",
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
                <small className="tn-kicker">After that</small>
                <p className="tn-line-copy tn-body">
                  We confirm scope, test the live site by hand, and send the final report within
                  48 hours after testing ends.
                </p>
              </div>
            </div>

            <div className="tn-line-list">
              <div className="tn-line-item">
                <small className="tn-kicker">What happens next</small>
                <div className="tn-stack-12 pt-4">
                  <div>
                    <p className="tn-meta-label">1 — Review</p>
                    <p className="tn-body">We review your site and requirements.</p>
                  </div>
                  <div>
                    <p className="tn-meta-label">2 — Estimate</p>
                    <p className="tn-body">We send a fixed-price quote and timeline.</p>
                  </div>
                  <div>
                    <p className="tn-meta-label">3 — Kickoff</p>
                    <p className="tn-body">We confirm details by email and begin the work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Link href="/contact" className="tn-text-link">
                Want to talk first? Use contact
              </Link>
            </div>
            <SocialLinks className="pt-6" />
          </div>
        </div>
      </section>
    </main>
  );
}
