import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import SocialLinks from "../components/SocialLinks";

const CONTACT_STEPS = [
  ["Send", "The website, the job, and any deadline."],
  ["Reply", "We tell you how we would handle it, the timing, and the price."],
  ["Security", "If it is already a live-site review, you can also use the review form."],
];

function ContactFormFallback() {
  return (
    <div className="tn-line-list">
      <div className="tn-line-item">
        <p className="tn-body">Loading form...</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-section-stack">
          <div className="tn-page-copy" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Let's talk.</small>
            <h1>Have a question?</h1>
            <p className="tn-body tn-page-summary">
              For general inquiries, partnerships, or just to say hello. For project requests,
              <Link href="/start"> use our start form</Link>.
            </p>
          </div>

          <div
            className="grid gap-6 md:grid-cols-3"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            {CONTACT_STEPS.map(([title, text]) => (
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
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <div className="tn-stack-64" data-tn-reveal="right" data-tn-reveal-state="hidden">
            <div className="tn-line-list">
              <div className="tn-line-item">
                <small className="tn-kicker">Direct contact</small>
                <p className="tn-line-copy tn-body pt-2">
                  Email us at <a href="mailto:hello@threatnest.com" className="tn-inline-link">hello@threatnest.com</a>
                </p>
                <p className="tn-line-copy tn-body">We usually reply within 1 business day.</p>
                <SocialLinks className="pt-4" />
              </div>
            </div>

            <div className="tn-line-list">
              <div className="tn-line-item">
                <small className="tn-kicker">Looking to start a project?</small>
                <p className="tn-line-copy tn-body pt-2">
                  If you need a security review or a new website, our Start page will get you a
                  quote faster.
                </p>
                <div className="pt-4">
                  <Link href="/start" className="tn-button-secondary">
                    Go to Start Work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
