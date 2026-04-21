import Link from "next/link";

const CAPABILITIES = [
  "Page structure and content flow",
  "Responsive frontend build",
  "SEO, analytics, and launch setup",
];

const PACKAGE_OPTIONS = [
  {
    title: "Starter Site",
    price: "From $700",
    summary: "Smaller business site or launch site.",
    details:
      "A leaner page count, responsive build, contact flow, SEO basics, analytics, and launch setup.",
    bundle: "starter",
  },
  {
    title: "Growth Site",
    price: "From $1,400",
    summary: "More pages and a bigger content structure.",
    details:
      "Broader page structure, reusable sections, stronger performance work, and launch prep.",
    bundle: "growth",
  },
  {
    title: "Custom Build",
    price: "Custom quote",
    summary: "Larger builds or custom flows.",
    details: "Quoted from the actual scope, design needs, and technical work involved.",
    bundle: "custom",
  },
];

const DELIVERY_FLOW = [
  ["01", "Scope", "We align on the pages, structure, and goal before the build starts."],
  ["02", "Design and build", "Design and frontend work move together so the result stays coherent."],
  ["03", "QA and polish", "We tighten mobile behavior, performance, content flow, and launch details."],
  ["04", "Launch", "The site goes live and we hand everything over."],
];

const FIT_NOTES = [
  "New business websites",
  "Rebuilds of outdated sites",
  "Service-led websites that need stronger structure",
  "Teams that want a security review after launch",
];

export default function WebDevelopmentDetailPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-page-hero-grid">
          <div className="tn-page-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Web development</small>
            <h1>Design and build the website.</h1>
            <p className="tn-body tn-page-summary">
              We handle the structure, visual direction, frontend build, and launch setup.
            </p>

            <div className="tn-actions">
              <Link href="/contact?service=web-dev" className="tn-button-primary">
                Contact Us
              </Link>
              <Link href="/services" className="tn-button-secondary">
                Back to Services
              </Link>
            </div>
          </div>

          <div className="tn-aside-list" data-tn-reveal="right" data-tn-reveal-state="hidden">
            {[
              ["From $700", "Starting point for smaller websites and focused builds."],
              ["Design to launch", "Design, build, QA, and launch setup are part of the work."],
              ["Security later", "The live-site review can be added after launch."],
            ].map(([title, text]) => (
              <div key={title} className="tn-aside-row">
                <small className="tn-meta-label">{title}</small>
                <p className="tn-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container tn-grid-2">
          <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
            <small className="tn-kicker">What you get</small>
            <h2>Clear structure from the start.</h2>
            <div className="tn-plain-list">
              {CAPABILITIES.map((item) => (
                <p key={item} className="tn-plain-list-item">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="tn-section-copy" data-tn-reveal="right" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Good fit</small>
            <h2>New sites and rebuilds.</h2>
            <div className="tn-plain-list">
              {FIT_NOTES.map((item) => (
                <p key={item} className="tn-plain-list-item">
                  {item}
                </p>
              ))}
            </div>
            <div>
              <Link href="/services/website-security" className="tn-text-link">
                View the security review
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="tn-cta-band">
        <div className="tn-container">
          <div className="tn-section-copy" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Project size</small>
            <h2>Choose the scope.</h2>
            <p className="tn-body">
              If the site is bigger than this, we quote it from the actual scope.
            </p>
          </div>

          <div className="tn-line-list pt-12" data-tn-reveal="up" data-tn-reveal-state="hidden">
            {PACKAGE_OPTIONS.map((plan) => (
              <div key={plan.title} className="tn-line-item">
                <div className="tn-grid-2">
                  <div className="tn-stack-16">
                    <h3>{plan.title}</h3>
                    <p className="tn-body tn-body-strong">{plan.price}</p>
                  </div>

                  <div className="tn-stack-16">
                    <p className="tn-body tn-body-strong">{plan.summary}</p>
                    <p className="tn-body">{plan.details}</p>
                    <div>
                      <Link
                        href={`/contact?service=web-dev&bundle=${plan.bundle}`}
                        className="tn-text-link"
                      >
                        Start this scope
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container tn-section-stack">
          <div className="tn-section-head" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <small className="tn-kicker">Process</small>
            <h2>How the build runs.</h2>
          </div>

          <div
            className="tn-number-list tn-number-list-balanced"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            {DELIVERY_FLOW.map(([step, title, text]) => (
              <div key={step} className="tn-number-row">
                <p className="tn-number">{step}</p>
                <div className="tn-stack-16">
                  <h3>{title}</h3>
                  <p className="tn-body">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
