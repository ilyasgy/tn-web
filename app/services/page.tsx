import Link from "next/link";

type ServiceRow = {
  title: string;
  price: string;
  href: string;
  description: string;
  features: string;
};

const SERVICE_ROUTES = {
  webDevelopment: "/services/web-development",
  websiteSecurity: "/services/website-security",
} as const;

const AT_A_GLANCE = [
  ["From $700", "Web development is priced by scope."],
  ["$500 Fixed", "Security reviews are $250 to start, $250 on delivery."],
  ["48-Hour Report", "Security findings land within 48 hours after testing ends."],
  ["14-Day Retest", "One free security retest is included after you fix the issues."],
] as const;

const CORE_SERVICES: ServiceRow[] = [
  {
    title: "Web Development",
    price: "From $700",
    href: SERVICE_ROUTES.webDevelopment,
    description:
      "We design and build websites that are fast, easy to use, and easy to update. For new websites and rebuilds.",
    features:
      "Page structure and content flow / Responsive frontend build / SEO, analytics, and launch setup.",
  },
  {
    title: "Website Security",
    price: "$500 fixed",
    href: SERVICE_ROUTES.websiteSecurity,
    description:
      "We review live websites for auth issues, access problems, risky setups, and other web app flaws. For sites that are already live.",
    features:
      "Manual testing / Report with proof and fixes / 48-hour report and 14-day retest.",
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
    text: "We look for access issues, forced browsing, workflow mistakes, and business-logic problems scanners usually miss.",
  },
] as const;

const DELIVERABLES = [
  "Short summary",
  "Scope recap",
  "Findings with proof and fixes",
  "One free retest within 14 days",
] as const;

const TERMS = [
  ["Testing window", "2 business days from written authorization."],
  ["Fee structure", "$250 before testing, $250 on delivery."],
  ["Report timing", "Final PDF delivered within 48 hours after testing concludes."],
  ["After delivery", "7-day written Q&A and a 14-day retest window."],
] as const;

function HeroSection() {
  return (
    <section className="tn-page-hero">
      <div className="tn-container">
        <div
          className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <h1 className="max-w-none">Services</h1>
          <p className="tn-body tn-page-summary max-w-3xl">
            Need a site built? Start with development. Already live? Start with security.
          </p>

          <div className="tn-actions justify-center">
            <Link href={SERVICE_ROUTES.webDevelopment} className="tn-button-primary">
              Web Development
            </Link>
            <Link href={SERVICE_ROUTES.websiteSecurity} className="tn-button-secondary">
              Security Review
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
          <h2>Choose your path.</h2>
        </div>

        <div className="tn-line-list" data-tn-reveal="up" data-tn-reveal-state="hidden">
          {CORE_SERVICES.map((service) => (
            <article key={service.title} className="tn-line-item">
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-end gap-3">
                  <h3>{service.title}</h3>
                  <p className="text-[var(--accent-blue)] text-base font-semibold">{service.price}</p>
                </div>

                <p className="tn-body">{service.description}</p>
                <p className="tn-body tn-body-strong">{service.features}</p>

                <div>
                  <Link href={service.href} className="tn-button-secondary inline-flex items-center gap-2">
                    See details
                    <span aria-hidden="true">-&gt;</span>
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
          <h2>How the review works.</h2>
          <p className="tn-body">
            We agree on the scope first, test by hand, and send a report with proof and fixes. No
            destructive actions. Every issue is verified before it goes into the report, and
            urgent findings are flagged quickly. Reports and access details stay strictly
            confidential.
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
          className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <h2>Ready to start?</h2>
          <p className="tn-body max-w-3xl">
            If the site is not live yet, start with web development. If it is already live, start
            with the security review.
          </p>

          <div className="tn-actions justify-center">
            <Link href="/contact" className="tn-button-primary">
              Contact Us
            </Link>
            <Link href="/start" className="tn-button-secondary">
              Request a Security Review
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
