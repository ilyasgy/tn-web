import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import {
  LEGAL_DOCUMENTS,
  LEGAL_LAST_UPDATED,
  LEGAL_LAST_UPDATED_ISO,
} from "../lib/legal";

export type LegalTocItem = {
  id: string;
  label: string;
};

export function LegalPageHeader({
  title,
  summary,
}: {
  title: string;
  summary: string;
}) {
  return (
    <section className="tn-legal-hero">
      <div className="tn-container">
        <div className="tn-legal-hero-copy">
          <p className="tn-meta-label">Legal</p>
          <h1>{title}</h1>
          <p className="tn-legal-date">
            Last updated: <time dateTime={LEGAL_LAST_UPDATED_ISO}>{LEGAL_LAST_UPDATED}</time>
          </p>
          <p className="tn-legal-summary">{summary}</p>
        </div>
      </div>
    </section>
  );
}

export function LegalTableOfContents({ items }: { items: LegalTocItem[] }) {
  return (
    <nav className="tn-legal-toc" aria-labelledby="legal-toc-heading">
      <h2 id="legal-toc-heading">On this page</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalPageEnding({
  currentPath,
  contactText,
  showCookieSettings = false,
}: {
  currentPath: string;
  contactText: string;
  showCookieSettings?: boolean;
}) {
  return (
    <>
      <section id="contact" className="tn-legal-contact" aria-labelledby="legal-contact-heading">
        <p className="tn-meta-label">Contact</p>
        <h2 id="legal-contact-heading">Questions or requests</h2>
        <p>{contactText}</p>
        <div className="tn-actions">
          <a className="tn-button-primary" href="mailto:threatnest@threatnest.com">
            Email threatnest@threatnest.com
          </a>
          {showCookieSettings ? (
            <CookieSettingsButton className="tn-button-secondary tn-cookie-page-settings">
              Open Cookie Settings
            </CookieSettingsButton>
          ) : null}
        </div>
      </section>

      <nav className="tn-legal-related" aria-labelledby="related-policies-heading">
        <div className="tn-legal-related-heading">
          <p className="tn-meta-label">Legal</p>
          <h2 id="related-policies-heading">Related policies</h2>
          <Link href="/legal" className="tn-inline-link">
            View all legal documents
          </Link>
        </div>
        <ul>
          {LEGAL_DOCUMENTS.filter((document) => document.href !== currentPath).map((document) => (
            <li key={document.href}>
              <Link href={document.href}>
                <span>{document.title}</span>
                <span aria-hidden="true">Open</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
