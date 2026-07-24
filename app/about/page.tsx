import type { Metadata } from "next";
import Link from "next/link";
import SocialLinks from "../components/SocialLinks";


export const metadata: Metadata = {
  title: "About ThreatNest",
  description: "ThreatNest is an independent cybersecurity service brand led by Omar Geylani.",
  alternates: {
    canonical: "/about",
  },
};
const ABOUT_POINTS = [
  ["Technical lead", "Omar Geylani, Lead Penetration Tester."],
  ["Who we help", "Businesses, organizations, and professional practices."],
  [
    "How we work",
    "Manual testing, evidence, and remediation guidance for developers.",
  ],
];

export default function AboutPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-section-stack">
          <div className="tn-page-copy" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <h1>ThreatNest is led by Omar Geylani.</h1>
            <p className="tn-body tn-page-summary">
              ThreatNest is an independent cybersecurity service brand led by Omar Geylani.
            </p>
            <p className="tn-body">
              Omar is responsible for technical oversight, scope control, testing, findings
              validation, client coordination, and final reporting.
            </p>
            <p className="tn-body">
              We provide business to business services. The contracting service provider for each
              engagement is identified in the applicable proposal, invoice, Service Agreement,
              Statement of Work, or other engagement document.
            </p>

            <div className="tn-actions">
              <Link href="/start" className="tn-button-primary">
                Request Audit
              </Link>
              <Link href="/services/website-security" className="tn-button-secondary">
                View Scope
              </Link>
            </div>

            <SocialLinks className="pt-2" />
          </div>

          <div
            className="grid gap-6 md:grid-cols-3"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            {ABOUT_POINTS.map(([title, text]) => (
              <div key={title} className="border-t border-[var(--border-grid)] pt-6">
                <small className="tn-meta-label">{title}</small>
                <p className="tn-aside-row-title pt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
