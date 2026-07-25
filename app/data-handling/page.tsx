import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Data Handling Policy",
  description: "How we handle credentials, assessment evidence, reports, and sensitive client information.",
  alternates: { canonical: "/data-handling" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Information we may receive",
    blocks: [
      p(
        "An assessment may require temporary credentials, test accounts, access tokens, approved repository access, configuration details, architecture information, or other material identified in the Engagement Documents.",
      ),
      p(
        "Evidence may include limited screenshots, HTTP requests and responses, affected URLs or parameters, version details, sanitized logs, proof-of-concept output, and notes needed to reproduce or remediate a finding.",
      ),
      p(
        "We minimize collection and use partial, redacted, or synthetic examples when they provide enough evidence. We do not intentionally collect patient records or unrelated sensitive information.",
      ),
    ],
  },
  {
    title: "2. How information is used",
    blocks: [
      p(
        "We use engagement information to perform the authorized assessment, validate findings, communicate urgent issues, prepare and deliver the report, complete an agreed retest, administer the engagement, protect the service, and meet contractual or legal duties.",
      ),
      p(
        "If we unexpectedly encounter patient information, personal information, credentials, or confidential records, we stop unnecessary access, preserve only the minimum evidence needed, restrict further disclosure, and notify the designated client contact when appropriate.",
      ),
    ],
  },
  {
    title: "3. Access and storage",
    blocks: [
      p(
        "Credentials, private keys, access tokens, private repository invitations, confidential source code, and sensitive evidence must not be sent through public website forms. We provide an approved exchange method after an engagement is confirmed.",
      ),
      p(
        "Access is limited to people and providers who need the information for testing, verification, reporting, delivery, retesting, security, or necessary administration. We use access controls and storage appropriate to the sensitivity and remove access when it is no longer needed.",
      ),
      p(
        "Temporary credentials are used only for the authorized engagement. Reports are delivered through the agreed channel, and the client controls access to copies after delivery.",
      ),
    ],
  },
  {
    title: "4. Sharing",
    blocks: [
      p(
        "We share engagement information only with the client's designated recipients, providers needed for an approved function, professional advisers under appropriate duties, or authorities when binding law requires it.",
      ),
      p(
        "Providers receive only the information needed for their function. We do not place client evidence in public artificial intelligence systems, public repositories, or unrestricted collaboration spaces, and we do not publish findings without permission.",
      ),
    ],
  },
  {
    title: "5. Retention and deletion",
    blocks: [
      p("Unless the Engagement Documents require a different period:"),
      bullets(
        "raw evidence is deleted within 30 days after the later of final report delivery or completion of the included retest;",
        "temporary credentials and tokens are removed as soon as they are no longer needed;",
        "delivery copies of final reports are removed within 90 days after completion; and",
        "signed agreements, testing authorizations, invoices, and records relevant to legal duties or disputes may be retained for the required period.",
      ),
      p(
        "Clients may request earlier deletion, subject to legal, contractual, payment, dispute, and backup limits. Deleted information may remain temporarily in protected backups until the applicable backup cycle expires and is not restored for ordinary use.",
      ),
    ],
  },
  {
    title: "6. Client responsibilities",
    blocks: [
      p("The client is responsible for:"),
      bullets(
        "providing only systems and information it is authorized to share;",
        "using synthetic data and dedicated least-privilege test accounts where practical;",
        "using the approved secure exchange method for credentials and sensitive material;",
        "rotating or disabling temporary credentials after testing;",
        "telling us about handling, location, access, or deletion restrictions before work begins; and",
        "protecting reports and evidence after delivery and limiting them to trusted recipients.",
      ),
    ],
  },
  {
    title: "7. Security incidents",
    blocks: [
      p(
        "If we become aware of unauthorized access to client evidence under our control, we will investigate, contain the issue, preserve relevant information, and notify the affected client without undue delay when notification is appropriate.",
      ),
      p(
        "The client remains responsible for deciding whether an event requires notice to regulators, affected people, insurers, or other parties. We will provide information reasonably available to support that decision.",
      ),
    ],
  },
  {
    title: "8. Contact",
    blocks: [
      p(
        "Questions or deletion requests concerning assessment information may be sent to threatnest@threatnest.com.",
      ),
    ],
  },
];

export default function DataHandlingPage() {
  return (
    <PolicyPage
      title="Data Handling Policy"
      effectiveDate="July 25, 2026"
      introduction={[
        "This policy explains how we handle information received during security assessments. Terms for a specific engagement may require stricter controls.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/authorized-testing", label: "Authorized Testing" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms" },
      ]}
    />
  );
}
