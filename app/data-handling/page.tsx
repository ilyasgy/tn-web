import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Security Evidence and Data Handling Policy",
  description:
    "How we handle assessment credentials, evidence, reports, and sensitive client information.",
  alternates: { canonical: "/data-handling" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Data minimization",
    blocks: [
      p("We collect and retain only the information reasonably necessary to:"),
      bullets(
        "perform the agreed assessment;",
        "validate findings;",
        "prepare the report;",
        "complete the included retest;",
        "and satisfy contractual or legal obligations."
      ),
    ],
  },
  {
    title: "2. Secure exchange",
    blocks: [
      p("Credentials, access tokens, private repository invitations, and sensitive documents must not be submitted through the public website form."),
      p("We will provide an approved method for secure exchange after the engagement is confirmed."),
      p("Clients should provide temporary, dedicated test accounts with the least privilege needed whenever possible."),
    ],
  },
  {
    title: "3. Credentials",
    blocks: [
      p("Credentials are used only for the authorized engagement."),
      p("We will not intentionally reuse credentials for another purpose or share them with anyone who does not require access."),
      p("Temporary credentials should be disabled, rotated, or deleted after testing."),
    ],
  },
  {
    title: "4. Evidence collection",
    blocks: [
      p("Evidence may include:"),
      bullets(
        "screenshots;",
        "relevant HTTP requests and responses;",
        "sanitized logs;",
        "affected URLs or parameters;",
        "version information;",
        "proof of concept output;",
        "and notes necessary to reproduce or remediate a finding."
      ),
      p("We avoid collecting full records where a partial or redacted example is sufficient."),
    ],
  },
  {
    title: "5. Sensitive information encountered during testing",
    blocks: [
      p("If patient information, credentials, personal information, or other sensitive records are unexpectedly exposed, we will:"),
      bullets(
        "stop unnecessary access;",
        "collect only the minimum evidence needed;",
        "avoid further disclosure;",
        "notify the designated client contact where appropriate;",
        "and handle the evidence according to the engagement requirements."
      ),
      p("We do not determine whether the event legally constitutes a reportable breach."),
    ],
  },
  {
    title: "6. Access control",
    blocks: [
      p("Evidence and reports are available only to approved personnel who require access for testing, verification, reporting, delivery, retesting, or necessary administration."),
      p("Access may be removed when a person’s role ends or the engagement no longer requires it."),
    ],
  },
  {
    title: "7. Delivery",
    blocks: [
      p("Reports are delivered through an agreed channel."),
      p("The client is responsible for protecting downloaded reports and controlling who receives them after delivery."),
      p("Email delivery may be used for ordinary documents only where the parties consider it appropriate. More sensitive reports may require a restricted link or another approved secure method."),
    ],
  },
  {
    title: "8. Retention and deletion",
    blocks: [
      p("Unless otherwise agreed:"),
      bullets(
        "raw evidence is deleted within 30 days after the later of final report delivery or completion of the included retest;",
        "temporary credentials and tokens are removed as soon as no longer required;",
        "delivery copies of final reports are removed within 90 days after completion;",
        "and signed agreements, authorizations, invoices, and legally relevant records may be retained for the required business or legal period."
      ),
      p("Deletion from active storage may not immediately remove information from encrypted backups that are kept for a limited period. Backup copies expire according to the applicable backup cycle and are not restored for ordinary business use after deletion."),
    ],
  },
  {
    title: "9. Access and service providers",
    blocks: [
      p("Only Omar Geylani and service providers required for a stated function may access relevant information."),
      p("Third party service providers receive only the information reasonably necessary for their function."),
      p("We do not intentionally place client evidence into public artificial intelligence systems, public repositories, or unrestricted collaboration spaces."),
    ],
  },
  {
    title: "10. Incidents",
    blocks: [
      p("If we become aware of unauthorized access to client evidence under our control, we will investigate, contain the issue, preserve relevant information, and notify the affected client without unreasonable delay where notification is appropriate."),
    ],
  },
  {
    title: "11. Client deletion requests",
    blocks: [
      p("Clients may request earlier deletion of report delivery copies or raw evidence, subject to legal, contractual, payment, dispute, and backup limitations."),
      p("Requests may be sent to threatnest@threatnest.com."),
    ],
  },
];

export default function DataHandlingPage() {
  return (
    <PolicyPage
      title="Security Evidence and Data Handling Policy"
      effectiveDate="July 19, 2026"
      introduction={[
        "ThreatNest is an independent cybersecurity service brand operated by Omar Geylani. In this policy, “ThreatNest,” “we,” “us,” and “our” refer to Omar Geylani operating under the ThreatNest brand.",
        "This policy describes how we handle credentials, assessment evidence, reports, and sensitive client information.",
        "Terms for a specific engagement may impose stricter requirements.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/authorized-testing", label: "Authorized Testing" },
        { href: "/privacy", label: "Privacy Notice" },
        { href: "/terms", label: "Terms" },
      ]}
    />
  );
}
