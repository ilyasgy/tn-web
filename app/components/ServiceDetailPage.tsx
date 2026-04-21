import Link from "next/link";

type Block = {
  title: string;
  desc: string;
};

type ListSection = {
  label: string;
  title: string;
  items: string[];
};

type ServiceDetailConfig = {
  badge?: "NEW";
  title: string;
  subtitle: string;
  image: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  price?: string;
  sections: {
    what: Block[];
    includes: ListSection;
    goodFor: ListSection;
    howItGoes: { n: string; title: string; desc: string }[];
  };
  accent?: "green" | "white";
};

function ContactSection() {
  return (
    <section className="tn-cta-band">
      <div className="tn-container tn-grid-2">
        <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
          <small className="tn-kicker">Next step</small>
          <h2>Need help with this?</h2>
          <p className="tn-body">
            Send the details and we will come back with timing, scope, and price.
          </p>
        </div>

        <div className="tn-actions lg:justify-end" data-tn-reveal="right" data-tn-reveal-state="hidden">
          <Link href="/contact" className="tn-button-primary">
            Contact Us
          </Link>
          <Link href="/services" className="tn-button-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ cfg }: { cfg: ServiceDetailConfig }) {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-page-hero-grid">
          <div className="tn-page-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Service</small>
            <h1>
              {cfg.title}
              {cfg.badge === "NEW" ? (
                <span className="pl-4 align-middle text-sm font-semibold tracking-[0.22em] text-[var(--accent-blue)]">
                  NEW
                </span>
              ) : null}
            </h1>
            <p className="tn-body tn-page-summary">{cfg.subtitle}</p>
            {cfg.price ? <p className="tn-body tn-body-strong">{cfg.price}</p> : null}

            <div className="tn-actions">
              <Link href={cfg.primaryCtaHref} className="tn-button-primary">
                {cfg.primaryCtaText}
              </Link>
              <Link href="/services" className="tn-button-secondary">
                Back to Services
              </Link>
            </div>
          </div>

          <div className="tn-aside-list" data-tn-reveal="right" data-tn-reveal-state="hidden">
            {cfg.sections.what.map((block) => (
              <div key={block.title} className="tn-aside-row">
                <small className="tn-meta-label">{block.title}</small>
                <p className="tn-body">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container tn-grid-2">
          {[cfg.sections.includes, cfg.sections.goodFor].map((section, index) => (
            <div
              key={section.title}
              className="tn-section-copy"
              data-tn-reveal={index === 0 ? "left" : "right"}
              data-tn-reveal-state="hidden"
            >
              <h2>{section.title}</h2>
              <div className="tn-plain-list">
                {section.items.map((item) => (
                  <p key={item} className="tn-plain-list-item">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tn-cta-band">
        <div className="tn-container tn-section-stack">
          <div className="tn-section-head" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Process</small>
            <h2>How it goes.</h2>
          </div>

          <div
            className="tn-number-list tn-number-list-balanced"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            {cfg.sections.howItGoes.map((step) => (
              <div key={step.n} className="tn-number-row">
                <p className="tn-number">{step.n}</p>
                <div className="tn-stack-16">
                  <h3>{step.title}</h3>
                  <p className="tn-body">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
