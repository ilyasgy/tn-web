import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Data Handling Policy",
  description: "Handling rules for credentials, assessment evidence, reports, and sensitive client information.",
  alternates: { canonical: "/data-handling" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });
const warning = (text: string) => ({ type: "warning" as const, text });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Assessment information",
    blocks: [
      p(
        "An assessment may require temporary credentials, test accounts, access tokens, approved repository access, configuration details, architecture information, or other material identified in the Engagement Documents.",
      ),
      p(
        "Evidence may include limited screenshots, HTTP requests and responses, affected URLs or parameters, version details, sanitized logs, proof-of-concept output, and notes needed to reproduce or remediate a finding.",
      ),
      p(
        "Evidence collection is limited to what is needed. Partial, redacted, or synthetic examples are used when sufficient. Patient records and unrelated sensitive information are not intentionally collected.",
      ),
    ],
  },
  {
    title: "2. How information is used",
    blocks: [
      p(
        "Engagement information is used to perform the authorized assessment, validate findings, communicate urgent issues, deliver the report, complete an agreed retest, administer the engagement, and protect the service.",
      ),
      p(
        "If patient information, personal information, credentials, or confidential records appear unexpectedly, unnecessary access stops. Only the minimum evidence is preserved, disclosure is restricted, and the designated client contact is notified.",
      ),
    ],
  },
  {
    title: "3. Access and storage",
    blocks: [
      warning(
        "Do not send credentials, private keys, access tokens, private repository invitations, confidential source code, or sensitive evidence through public website forms. An approved exchange method is provided after the engagement is confirmed.",
      ),
      p(
        "Access is limited to people and providers assigned to testing, verification, reporting, delivery, retesting, security, or necessary administration. Access controls and storage match the sensitivity of the information. Access is removed when no longer needed.",
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
        "Engagement information is shared only with the client's designated recipients, providers assigned to an approved function, professional advisers with confidentiality duties, or authorities making a binding and applicable legal request.",
      ),
      p(
        "Providers receive only the information needed for their function. Client evidence is not placed in public artificial intelligence systems, public repositories, or unrestricted collaboration spaces. Findings are not published without permission.",
      ),
    ],
  },
  {
    title: "5. Retention and deletion",
    blocks: [
      p("Unless the Engagement Documents require a different period:"),
      bullets(
        "raw evidence is deleted within 30 days after final report delivery;",
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
        "identifying handling, location, access, or deletion restrictions before work begins; and",
        "protecting reports and evidence after delivery and limiting them to trusted recipients.",
      ),
    ],
  },
  {
    title: "7. Security incidents",
    blocks: [
      p(
        "Unauthorized access to controlled client evidence is investigated and contained. Relevant information is preserved, and the affected client is notified without undue delay.",
      ),
      p(
        "The client decides whether an event requires notice to regulators, affected people, insurers, or other parties. Available incident information will be provided to support that decision.",
      ),
    ],
  },
];

export default function DataHandlingPage() {
  return (
    <PolicyPage
      title="Data Handling Policy"
      summary="This Data Handling Policy applies to clients and anyone providing or receiving credentials, evidence, reports, or other engagement information. It explains the collection, exchange, access, retention, deletion, and protection of security-assessment information. Engagement Documents may set stricter controls."
      currentPath="/data-handling"
      sections={SECTIONS}
      contactText="Questions and deletion requests can be sent to threatnest@threatnest.com. Engagement-specific limits for contracts, payment, disputes, and backups still apply."
    />
  );
}
