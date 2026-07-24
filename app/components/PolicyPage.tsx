import Link from "next/link";

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
  | { type: "subheading"; text: string };

export type PolicySection = {
  title: string;
  blocks: PolicyBlock[];
};

type RelatedLink = {
  href: string;
  label: string;
};

export default function PolicyPage({
  title,
  effectiveDate,
  introduction,
  sections,
  relatedLinks,
}: {
  title: string;
  effectiveDate: string;
  introduction: string[];
  sections: PolicySection[];
  relatedLinks: RelatedLink[];
}) {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container">
          <div
            className="tn-page-copy tn-page-copy-centered"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            <h1>{title}</h1>
            <p className="tn-meta-label">Effective date: {effectiveDate}</p>
            {introduction.map((paragraph) => (
              <p key={paragraph} className="tn-body tn-page-summary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[128px]">
        <div className="tn-container">
          <div className="tn-line-list" data-tn-reveal="up" data-tn-reveal-state="hidden">
            {sections.map((section) => (
              <section key={section.title} className="tn-line-item">
                <h2 className="tn-line-title">{section.title}</h2>
                <div className="tn-stack-16 pt-4">
                  {section.blocks.map((block, index) => {
                    const key = `${section.title}-${block.type}-${index}`;

                    if (block.type === "subheading") {
                      return (
                        <h3 key={key} className="tn-body tn-body-strong pt-2">
                          {block.text}
                        </h3>
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

          <nav
            aria-label="Related policies"
            className="tn-actions pt-16"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            {relatedLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={index === 0 ? "tn-button-primary" : "tn-button-secondary"}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
