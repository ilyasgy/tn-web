import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

const ABOUT_POINTS = [
  ["What we do", "Web development and live-site security review."],
  ["Who we help", "Small and midsize businesses, ecommerce brands, and simple platforms."],
  [
    "How we work",
    "Practical build work, real testing, and clear fixes instead of generic scan output.",
  ],
];

export default function AboutPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container tn-section-stack">
          <div className="tn-page-copy" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <small className="tn-kicker">About</small>
            <h1 className="tn-display">Build the site. Review the live one.</h1>
            <p className="tn-body tn-page-summary">
              ThreatNest builds websites and reviews live ones for small and midsize businesses,
              ecommerce brands, and simple platforms that need a site that performs and holds up.
            </p>
            <p className="tn-body">
              We handle the build work up front and the manual security review after launch that
              checks what outsiders can actually reach. Slow or exposed sites cost trust, sales,
              and time. We fix that with direct work and clear decisions.
            </p>

            <div className="tn-actions">
              <Link href="/contact" className="tn-button-primary">
                Contact Us
              </Link>
              <Link href="/services" className="tn-button-secondary">
                See Services
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
