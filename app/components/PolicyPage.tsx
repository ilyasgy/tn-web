import Link from "next/link";
import {
  LegalPageEnding,
  LegalPageHeader,
  LegalTableOfContents,
} from "./LegalPageChrome";

export type PolicyBlock =
  | { type: "paragraph"; text: string }
  | {
      type: "linkedParagraph";
      before: string;
      link: { href: string; label: string };
      after?: string;
    }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "subheading"; text: string }
  | { type: "warning"; text: string };

export type PolicySection = {
  id?: string;
  title: string;
  blocks: PolicyBlock[];
};

function getSectionLabel(title: string) {
  return title.replace(/^\d+\.\s*/, "");
}

function getSectionId(section: PolicySection, index: number) {
  if (section.id) {
    return section.id;
  }

  const slug = getSectionLabel(section.title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return slug || `section-${index + 1}`;
}

export default function PolicyPage({
  title,
  summary,
  currentPath,
  sections,
  contactText,
  showCookieSettings = false,
}: {
  title: string;
  summary: string;
  currentPath: string;
  sections: PolicySection[];
  contactText: string;
  showCookieSettings?: boolean;
}) {
  const preparedSections = sections.map((section, index) => ({
    ...section,
    id: getSectionId(section, index),
    label: getSectionLabel(section.title),
  }));

  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <LegalPageHeader title={title} summary={summary} />

      <section className="tn-legal-body">
        <div className="tn-container tn-legal-layout">
          <LegalTableOfContents
            items={[
              ...preparedSections.map((section) => ({
                id: section.id,
                label: section.label,
              })),
              { id: "contact", label: "Questions or requests" },
            ]}
          />

          <div className="tn-legal-main">
            <div className="tn-legal-sections">
              {preparedSections.map((section) => (
                <section key={section.id} id={section.id} className="tn-legal-section">
                  <h2>{section.label}</h2>
                  <div className="tn-stack-16 pt-4">
                    {section.blocks.map((block, index) => {
                      const key = `${section.id}-${block.type}-${index}`;

                      if (block.type === "subheading") {
                        return (
                          <h3 key={key} className="tn-body tn-body-strong pt-2">
                            {block.text}
                          </h3>
                        );
                      }

                      if (block.type === "warning") {
                        return (
                          <aside key={key} className="tn-legal-warning" aria-label="Important">
                            <strong>Important</strong>
                            <p>{block.text}</p>
                          </aside>
                        );
                      }

                      if (block.type === "bullets") {
                        return (
                          <ul key={key} className="list-disc space-y-2 pl-6">
                            {block.items.map((item) => (
                              <li key={item} className="tn-body">
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (block.type === "numbered") {
                        return (
                          <ol key={key} className="list-decimal space-y-2 pl-6">
                            {block.items.map((item) => (
                              <li key={item} className="tn-body">
                                {item}
                              </li>
                            ))}
                          </ol>
                        );
                      }

                      if (block.type === "linkedParagraph") {
                        return (
                          <p key={key} className="tn-body">
                            {block.before}
                            <Link href={block.link.href} className="tn-inline-link">
                              {block.link.label}
                            </Link>
                            {block.after}
                          </p>
                        );
                      }

                      return (
                        <p key={key} className="tn-body">
                          {block.text}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <LegalPageEnding
              currentPath={currentPath}
              contactText={contactText}
              showCookieSettings={showCookieSettings}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
