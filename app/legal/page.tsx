import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_DOCUMENTS, LEGAL_LAST_UPDATED, LEGAL_LAST_UPDATED_ISO } from "../lib/legal";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "ThreatNest terms, privacy, cookie, authorized testing, and security evidence policies.",
  alternates: { canonical: "/legal" },
};

const categories = [
  "Website and privacy",
  "Client engagements",
  "Security testing and evidence",
] as const;

export default function LegalPage() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-legal-hero">
        <div className="tn-container">
          <div className="tn-legal-hero-copy">
            <p className="tn-meta-label">Legal</p>
            <h1>Policies and terms</h1>
            <p className="tn-legal-date">
              Current documents reviewed:{" "}
              <time dateTime={LEGAL_LAST_UPDATED_ISO}>{LEGAL_LAST_UPDATED}</time>
            </p>
            <p className="tn-legal-summary">
              Start here for the practices and rules that apply to this website, privacy choices,
              client engagements, authorized security testing, and assessment evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="tn-legal-hub-section">
        <div className="tn-container tn-legal-hub">
          {categories.map((category) => (
            <section key={category} aria-labelledby={`legal-${category.replaceAll(" ", "-")}`}>
              <div className="tn-legal-category-heading">
                <h2 id={`legal-${category.replaceAll(" ", "-")}`}>{category}</h2>
              </div>
              <div className="tn-legal-document-list">
                {LEGAL_DOCUMENTS.filter((document) => document.category === category).map(
                  (document) => (
                    <Link key={document.href} href={document.href} className="tn-legal-document">
                      <span>
                        <strong>{document.title}</strong>
                        <span>{document.description}</span>
                      </span>
                      <span aria-hidden="true">Open</span>
                    </Link>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
