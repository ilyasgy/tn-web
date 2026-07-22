import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Application Security Audit Services",
  description: "ThreatNest provides a fixed scope application penetration test and remediation blueprint for patient facing healthcare websites, designed for delivery within seven calendar days after all engagement prerequisites are confirmed.",
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
  ["Standard assessment", "USD 2,000 for the defined scope. Final scope and price are confirmed in writing."],
  ["Seven Calendar Days", "The standard period begins after scope, written authorization, cleared payment, the testing window, and required access are confirmed."],
  ["Manual Testing", "Every finding is verified by hand before it reaches your report."],
  ["Included Retest", "One retest of the original findings is included when requested within 14 calendar days after the final report is delivered, unless agreed otherwise."],
] as const;

const CORE_SERVICES: ServiceRow[] = [
  {
    title: "Application Penetration Test & Remediation Blueprint",
    price: "Standard assessment: USD 2,000",
    href: SERVICE_ROUTES.websiteSecurity,
    description:
      "For independent healthcare clinics, dental practices, and medical centers operating patient facing web applications.",
    features:
      "Manual application penetration test / PHI tracking exposure review / Security header assessment / Screenshots that show the risk / Developer remediation blueprint / One complimentary retest of original findings / Designed for delivery within seven calendar days after all engagement prerequisites are confirmed.",
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
] as const;

const DELIVERABLES = [
  "Manual application penetration test",
  "PHI tracking exposure review",
  "Security header assessment",
  "Screenshots that show the risk",
  "Developer remediation blueprint",
  "One complimentary retest after fixes",
  "Designed for delivery within seven calendar days after all engagement prerequisites are confirmed",
] as const;

const TERMS = [
  ["Scope", "Application, pages, and systems are defined before testing."],
  ["Delivery", "The standard seven calendar day period begins only after scope, written authorization, cleared payment, the testing window, and required access are confirmed."],
  ["Retest", "One complimentary retest of the original findings is included when requested within 14 calendar days after the final report is delivered, unless agreed otherwise."],
  ["Authorization", "A request, call, email, or payment does not authorize testing. Signed written authorization and all other engagement prerequisites are required."],
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
            You get a short report, detailed findings, and one retest after fixes.
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
