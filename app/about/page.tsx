import type { Metadata } from "next";
import Link from "next/link";
import SocialLinks from "../components/SocialLinks";


export const metadata: Metadata = {
  title: "About ThreatNest",
  description: "ThreatNest is a boutique application security service for healthcare clinics, dental practices, and medical centers operating patient-facing web applications.",
  alternates: {
    canonical: "/about",
  },
};
const ABOUT_POINTS = [
  ["What we do", "Fixed-scope application security audits."],
  ["Who we help", "Healthcare clinics, dental practices, and medical centers."],
  [
    "How we work",
    "Manual testing, evidence, and developer-ready remediation guidance.",
  ],
];

export default function AboutPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-section-stack">
          <div className="tn-page-copy" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <small className="tn-kicker">About</small>
            <h1 className="tn-display">Boutique application security for healthcare teams.</h1>
            <p className="tn-body tn-page-summary">
              ThreatNest performs fixed-scope application security audits for healthcare clinics,
              dental practices, and medical centers operating patient-facing web applications.
            </p>
            <p className="tn-body">
              We look for application-layer vulnerabilities, PHI exposure through tracking
              technologies, weak browser security controls, and production configuration risks.
              Every audit ends with technical evidence and a remediation blueprint your developer
              can implement.
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
