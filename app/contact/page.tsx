import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import SocialLinks from "../components/SocialLinks";


export const metadata: Metadata = {
  title: "Contact ThreatNest",
  description: "Contact ThreatNest about healthcare application security audits, partnerships, or questions before requesting a fixed scope assessment.",
  alternates: {
    canonical: "/contact",
  },
};
const CONTACT_STEPS = [
  ["Send", "The website URL, application notes, and any deadline."],
  ["Scope", "We confirm whether the application fits the fixed audit scope."],
  ["Authorize", "If the request proceeds, authorization is completed in separate signed Engagement Documents."],
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
            <h1>Have a question?</h1>
            <p className="tn-body tn-page-summary">
              For general inquiries, partnerships, or just to say hello. For audit requests,
              <Link href="/start"> use our start form</Link>.
            </p>
            <p className="tn-body">
              Public forms and ordinary email do not authorize testing. Do not send patient
              information, medical records, credentials, private keys, access tokens, confidential
              source code, or third party vulnerability evidence through this form.
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
                <h2 className="text-2xl font-bold">Direct contact</h2>
                <p className="tn-line-copy tn-body pt-2">
                  Email us at{" "}
                  <a href="mailto:threatnest@threatnest.com" className="tn-inline-link">
                    threatnest@threatnest.com
                  </a>
                </p>
                <p className="tn-line-copy tn-body">We usually reply within 1 business day.</p>
                <SocialLinks className="pt-4" />
              </div>
            </div>

            <div className="tn-line-list">
              <div className="tn-line-item">
                <h2 className="text-2xl font-bold">Ready to request an audit?</h2>
                <p className="tn-line-copy tn-body pt-2">
                  If you are ready to send a website URL and application notes, our Start page will
                  get scope confirmation moving faster.
                </p>
                <div className="pt-4">
                  <Link href="/start" className="tn-button-secondary">
                    Go to Request Audit
                  </Link>
                </div>
                <div className="tn-actions pt-4">
                  <Link href="/privacy" className="tn-text-link">
                    Privacy Notice
                  </Link>
                  <Link href="/authorized-testing" className="tn-text-link">
                    Authorized Testing Policy
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
