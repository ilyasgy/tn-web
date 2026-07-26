import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Application Security Audit Services",
  description: "A fixed-scope Website Security Audit for patient-facing healthcare websites, with a seven-day testing window, a full PDF report, and one included retest.",
  alternates: {
    canonical: "/services",
  },
};
type ServiceRow = {
  title: string;
  price: string;
  href: string;
  description: string;
  features: string;
};

const SERVICE_ROUTES = {
  websiteSecurity: "/services/website-security",
} as const;

const AT_A_GLANCE = [
  ["USD 2,000 fixed", "The standard scope has no hidden costs: 50% upon signing and 50% when the final report is delivered."],
  ["Seven-day testing window", "Testing begins after the agreement, scope, required deposit, access, and testing window are confirmed."],
  ["Report within 48 hours", "The full PDF report and plain-English executive summary are delivered within 48 hours after testing is completed."],
  ["Included retest", "One retest of the original findings is included when requested within 14 calendar days after the final report is delivered."],
] as const;

const CORE_SERVICES: ServiceRow[] = [
  {
    title: "Website Security Audit",
    price: "Standard assessment: USD 2,000",
    href: SERVICE_ROUTES.websiteSecurity,
    description:
      "For independent healthcare clinics, dental practices, and medical centers operating patient facing web applications.",
    features:
      "OWASP-guided manual testing / PHI tracking exposure review / Security configuration review / Full PDF report / Plain-English executive summary / Prioritized remediation guidance / One included retest within 14 days.",
  },
];

const SECURITY_METHOD = [
  {
    title: "Recon",
    text: "We map the public attack surface first: domains, frameworks, hidden endpoints, and anything already exposed.",
  },
  {
    title: "Config review",
    text: "We check headers, TLS, cookies, exposed files, admin paths, and the kind of setup problems that cause avoidable risk.",
  },
  {
    title: "Auth testing",
    text: "We test login, reset, session handling, enumeration, and takeover paths that affect real accounts.",
  },
  {
    title: "Logic testing",
    text: "We look for access issues, forced browsing, workflow mistakes, and business logic problems scanners usually miss.",
  },
  {
    title: "Input validation",
    text: "We review in-scope forms, APIs, and uploads for injection, cross-site scripting, request forgery, redirect, and file handling issues.",
  },
  {
    title: "Manual verification",
    text: "Every reported finding is reproduced by hand, false positives are removed, and the result is documented with evidence and remediation steps.",
  },
] as const;

const DELIVERABLES = [
  "Full PDF report with every verified finding",
  "Plain-English executive summary",
  "Severity using CVSS 3.1 and practical business impact",
  "Affected component, technical evidence, and reproduction detail",
  "Prioritized remediation guidance for the developer",
  "Optional written Q&A within seven days of report delivery",
  "One included retest requested within 14 days of report delivery",
] as const;

const TERMS = [
  ["Scope", "Application, pages, and systems are defined before testing."],
  ["Payment", "The standard USD 2,000 fee is split 50% upon signing and 50% when the final report is delivered."],
  ["Timing", "Testing runs during the agreed seven-day window; the final report follows within 48 hours after testing is completed."],
  ["Authorization", "A request, call, email, or payment does not authorize testing. A completed, signed Service Agreement containing the Authorization to Test is required."],
] as const;

function HeroSection() {
  return (
    <section className="tn-page-hero">
      <div className="tn-container">
        <div
          className="flex max-w-3xl flex-col items-start gap-5 text-left"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <h1 className="max-w-none">Application security audits</h1>
          <p className="tn-body tn-page-summary max-w-3xl">
            A defined scope, manual testing, clear evidence, and a report your developer can use.
          </p>

          <div className="tn-actions">
            <Link href="/start" className="tn-button-primary">
              Request Audit
            </Link>
            <Link href={SERVICE_ROUTES.websiteSecurity} className="tn-button-secondary">
              View Scope
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AtAGlanceSection() {
  return (
    <section className="tn-cta-band">
      <div className="tn-container">
        <div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          {AT_A_GLANCE.map(([title, text]) => (
            <div key={title} className="border-t border-[var(--border-grid)] pt-6">
              <p className="text-[var(--accent-blue)] text-2xl font-semibold leading-tight tracking-[-0.03em]">
                {title}
              </p>
              <p className="tn-body pt-3">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreServicesSection() {
  return (
    <section className="tn-cta-band">
      <div className="tn-container tn-section-stack">
        <div className="tn-section-head" data-tn-reveal="up" data-tn-reveal-state="hidden">
          <h2>Standard assessment</h2>
        </div>

        <div className="tn-line-list" data-tn-reveal="up" data-tn-reveal-state="hidden">
          {CORE_SERVICES.map((service) => (
            <article key={service.title} className="tn-line-item">
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-end gap-3">
                  <h3>{service.title}</h3>
                  <p className="text-base font-medium text-[var(--text-secondary)]">{service.price}</p>
                </div>

                <p className="tn-body">{service.description}</p>
                <p className="tn-body tn-body-strong">{service.features}</p>

                <div>
                  <Link href={service.href} className="tn-button-secondary inline-flex items-center gap-2">
                    See details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecurityMethodSection() {
  return (
    <section className="pb-20 pt-20 md:pb-24 md:pt-24">
      <div className="tn-container tn-section-stack">
        <div
          className="tn-section-head tn-section-head-wide"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <h2>How the audit works.</h2>
          <p className="tn-body">
            We agree on the scope first, test by hand, and send a remediation
            blueprint with proof, severity, affected assets, business impact, and fixes. No
            destructive actions. Reports and access details stay strictly confidential.
          </p>
        </div>

        <div
          className="tn-number-list tn-number-list-balanced"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          {SECURITY_METHOD.map((item, index) => (
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
  );
}

function DeliverablesSection() {
  return (
    <section className="tn-cta-band">
      <div className="tn-container tn-grid-2">
        <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
          <h2>Report and retest.</h2>
          <p className="tn-body">
            You receive a full PDF report, a plain-English executive summary, detailed findings,
            and one included retest after fixes.
          </p>

          <div className="tn-plain-list">
            {DELIVERABLES.map((item) => (
              <p key={item} className="tn-plain-list-item">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2" data-tn-reveal="right" data-tn-reveal-state="hidden">
          {TERMS.map(([title, text]) => (
            <div key={title} className="border-t border-[var(--border-grid)] pt-6">
              <p className="text-[var(--text-primary)] text-2xl font-semibold leading-tight tracking-[-0.03em]">
                {title}
              </p>
              <p className="tn-body pt-3">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCtaSection() {
  return (
    <section className="pb-24 pt-20 md:pb-28 md:pt-24">
      <div className="tn-container">
        <div
          className="flex max-w-3xl flex-col items-start gap-5 text-left"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <h2>Ready to start?</h2>
          <p className="tn-body max-w-3xl">
            Send your website URL and a short description of your application. We will confirm
            scope, explain the assessment process, and provide the next steps.
          </p>

          <div className="tn-actions">
            <Link href="/start" className="tn-button-primary">
              Request Audit
            </Link>
            <Link href={SERVICE_ROUTES.websiteSecurity} className="tn-button-secondary">
              View Scope
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <HeroSection />
      <CoreServicesSection />
      <SecurityMethodSection />
      <DeliverablesSection />
      <AtAGlanceSection />
      <FooterCtaSection />
    </main>
  );
}
