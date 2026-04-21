import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

const TERMS_SECTIONS = [
  {
    title: "1. Services",
    paragraphs: [
      "ThreatNest provides web development and website security checks. We look at how the site actually behaves in real use and point out where things could go wrong in performance and security. Everything stays within the agreed scope, and nothing disruptive is done unless you have clearly approved it.",
    ],
  },
  {
    title: "2. Scope & Authorization",
    paragraphs: [
      "We only work on websites or systems you own or have permission to manage. By requesting a service, you confirm you are authorized to do so.",
    ],
  },
  {
    title: "3. Payments",
    paragraphs: [
      "Most projects require a 50% upfront payment, with the rest due after completion. Work usually starts once the initial payment is received, unless agreed otherwise.",
    ],
  },
  {
    title: "4. Delivery",
    paragraphs: [
      "Security work includes a report with findings and clear next steps. Development work includes the agreed site or features. How long it takes mostly depends on how big the project is.",
    ],
  },
  {
    title: "5. Limitations",
    paragraphs: [
      "A security check does not mean a site is fully safe. New issues can appear over time as systems change or new attack methods are discovered.",
    ],
  },
  {
    title: "6. Client Responsibility",
    paragraphs: [
      "You are responsible for applying fixes unless we have agreed to handle them. If issues are not fixed after delivery, we cannot take responsibility for any problems that come from them.",
    ],
  },
  {
    title: "7. Third-Party Services",
    paragraphs: [
      "Some projects involve external tools or platforms like hosting, payments, or plugins. We do not control those systems and are not responsible for issues on their side.",
    ],
  },
  {
    title: "8. Liability",
    paragraphs: [
      "ThreatNest is not responsible for indirect or unexpected damages. All work is done based on best effort and current industry practices.",
    ],
  },
  {
    title: "9. Changes",
    paragraphs: [
      "These terms may be updated over time. Using our services means you accept the latest version.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container">
          <div
            className="tn-page-copy tn-page-copy-centered"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            <small className="tn-kicker">Legal</small>
            <h1>Terms &amp; Conditions</h1>
            <p className="tn-body tn-page-summary">
              These terms explain how ThreatNest services work and what the agreement covers when
              starting a project.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container">
          <div className="tn-line-list" data-tn-reveal="up" data-tn-reveal-state="hidden">
            {TERMS_SECTIONS.map((section) => (
              <div key={section.title} className="tn-line-item">
                <h2 className="tn-line-title">{section.title}</h2>
                <div className="tn-stack-16 pt-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="tn-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="tn-line-item">
              <h2 className="tn-line-title">10. Contact</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">If you have questions, contact:</p>
                <p className="tn-body">
                  <a href="mailto:threatnest@threatnest.com" className="tn-inline-link">
                    threatnest@threatnest.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="tn-actions pt-16" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <Link href="/privacy" className="tn-button-secondary">
              View Privacy
            </Link>
            <Link href="/contact" className="tn-button-primary">
              Contact
            </Link>
          </div>

          <div className="pt-8" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <SocialLinks />
          </div>
        </div>
      </section>
    </main>
  );
}
