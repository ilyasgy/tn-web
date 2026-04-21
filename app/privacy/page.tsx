import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

const PRIVACY_SECTIONS = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We only collect what is actually needed to do the work. This can include your name or company name, email, website domain, and any details you share with us about the project.",
      "We do not go out of our way to collect sensitive personal data, and we do not ask for anything unrelated to the service.",
    ],
  },
  {
    title: "2. How Information Is Used",
    paragraphs: [
      "We use your information to handle your request, confirm the scope, send updates or reports, and communicate with you during the process. It is also used to support you if anything comes up and to improve how we deliver our services over time.",
      "We do not sell or trade your information.",
    ],
  },
  {
    title: "3. Data Storage & Retention",
    paragraphs: [
      "Your information is stored securely and kept only as long as it is needed to complete the work or meet basic legal requirements. Reports and related data may be removed after some time unless you are still working with us or need ongoing support.",
    ],
  },
  {
    title: "4. Third-Party Services",
    paragraphs: [
      "Some parts of the process, such as payments or communication tools, may involve third-party providers. We only work with trusted services, but their data handling is outside our control.",
    ],
  },
  {
    title: "5. Legal Disclosure",
    paragraphs: [
      "If we are legally required to, we may share information in response to a valid legal request or obligation.",
    ],
  },
  {
    title: "6. Your Rights",
    paragraphs: ["You can request access, updates, or deletion of your information at any time."],
  },
  {
    title: "7. Updates",
    paragraphs: ["This policy may change occasionally. Any updates will be posted here."],
  },
];

export default function PrivacyPage() {
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
            <h1>Privacy Policy</h1>
            <p className="tn-body tn-page-summary">
              This page explains what information ThreatNest collects, how it is used, and what
              control you have over it.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container">
          <div className="tn-line-list" data-tn-reveal="up" data-tn-reveal-state="hidden">
            {PRIVACY_SECTIONS.map((section) => (
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
              <h2 className="tn-line-title">8. Contact</h2>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body">If you have questions, reach out at:</p>
                <p className="tn-body">
                  <a href="mailto:threatnest@threatnest.com" className="tn-inline-link">
                    threatnest@threatnest.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="tn-actions pt-16" data-tn-reveal="up" data-tn-reveal-state="hidden">
            <Link href="/terms" className="tn-button-secondary">
              View Terms
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
