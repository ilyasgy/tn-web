import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using threatnest.com and requesting security services.",
  alternates: { canonical: "/terms" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });
const warning = (text: string) => ({ type: "warning" as const, text });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Using the website",
    blocks: [
      p(
        "ThreatNest is an independent international cybersecurity agency. In these Terms, “ThreatNest,” “we,” “us,” and “our” refer to the ThreatNest agency, unless signed Engagement Documents identify another contracting service provider.",
      ),
      p(
        "The website provides information about ThreatNest services, pricing, and the engagement process. It may be used only for lawful business purposes.",
      ),
      p(
        "Do not interfere with the website, attempt unauthorized access, or misuse its content.",
      ),
      p(
        "Website content is general information. It is not a binding offer, testing authorization, security guarantee, compliance certification, or legal, regulatory, or insurance advice.",
      ),
    ],
  },
  {
    title: "2. Service requests",
    blocks: [
      p(
        "Services are offered to businesses, organizations, professional practices, and people acting for business purposes. A person making a request must be authorized to act for the organization identified in the request.",
      ),
      p(
        "A request does not create an engagement or require acceptance. Work may be rejected when it is unsafe, unlawful, outside the available expertise, inadequately authorized, or inconsistent with these Terms.",
      ),
      p(
        "The contracting service provider for paid work will be identified in the applicable proposal, invoice, Service Agreement, Statement of Work, or other Engagement Document.",
      ),
    ],
  },
  {
    title: "3. Authorization to test",
    blocks: [
      warning(
        "Submitting a form, sending an email, making a call, paying an invoice, identifying a URL, exposing a system publicly, or reporting a vulnerability does not authorize security testing.",
      ),
      p(
        "Security testing does not begin without a signed Service Agreement containing written authorization from a person with authority over every system in scope. It must identify the exact systems, approved methods, testing dates, emergency contacts, and exclusions.",
      ),
      p(
        "Connected or embedded third party systems are excluded without permission from their owner or provider. Work may be refused or stopped whenever ownership, authority, scope, safety, or legality is unclear.",
      ),
    ],
  },
  {
    title: "4. Engagement documents",
    blocks: [
      p(
        "The standard Website Security Audit is governed by a signed Service Agreement that combines the service description, scope, methodology, payment terms, deliverables, confidentiality, liability, and Authorization to Test. A proposal, invoice, data processing terms, or other signed document may also apply. Together, these are the Engagement Documents.",
      ),
      p(
        "If documents conflict, signed engagement-specific terms control, followed by the accepted proposal or invoice, these Terms, and then general website descriptions. Engagement Documents may change these Terms only for the engagement they cover.",
      ),
    ],
  },
  {
    title: "5. Fees, cancellation, and refunds",
    blocks: [
      p(
        "The standard Website Security Audit fee is USD 2,000. Unless the Engagement Documents say otherwise, 50% is due upon signing and must clear before testing begins, and the remaining 50% is due when the final report is delivered. Payment instructions are provided by invoice.",
      ),
      p(
        "Specific cancellation and refund terms in the Engagement Documents control. If they are silent, a client may cancel before testing starts and receive a refund less unrecoverable payment charges and approved preparatory work. Fees are not refundable after active testing begins, except where ThreatNest does not deliver the agreed final report.",
      ),
      p(
        "The included retest may be withheld while the final balance remains unpaid, including when it is still unpaid 14 days after report delivery. Work may also be rescheduled, suspended, or cancelled when authorization, access, payment, safety, or legality becomes unclear.",
      ),
    ],
  },
  {
    title: "6. Client responsibilities",
    blocks: [
      p("The client is responsible for:"),
      bullets(
        "providing accurate ownership, authority, scope, and technical information;",
        "obtaining required permission from system owners and third party providers;",
        "maintaining backups and recovery procedures;",
        "providing least-privilege test accounts, synthetic data where practical, and a reachable emergency contact;",
        "identifying operationally sensitive systems and reporting material changes;",
        "protecting credentials, reports, and evidence;",
        "reviewing and implementing remediation; and",
        "determining its own legal, regulatory, contractual, and insurance obligations.",
      ),
      p(
        "Delivery dates may change when access, approvals, information, client personnel, or systems are not ready. The client is responsible for third party claims, losses, and costs caused by materially false authority statements, unauthorized scope, or misuse of a report. This does not cover loss caused by ThreatNest's intentional misconduct or material failure to follow the agreed scope.",
      ),
    ],
  },
  {
    title: "7. Confidentiality",
    blocks: [
      p(
        "Nonpublic client identities, system details, credentials, findings, evidence, source code, reports, business records, and communications are treated as confidential. They are used only for the engagement, its administration, or a binding legal request.",
      ),
      p(
        "Confidentiality does not cover information already known without restriction, independently developed, received from another lawful source, made public without a breach of duty, or subject to a binding disclosure order. The affected client will be notified before a required disclosure unless the order prohibits notice.",
      ),
      p(
        "Client names, logos, testimonials, vulnerabilities, evidence, and reports are not published without permission.",
      ),
    ],
  },
  {
    title: "8. Reports and intellectual property",
    blocks: [
      p(
        "After full payment, the client may use and share the final report for remediation, governance, and legitimate discussions with advisers, providers, insurers, auditors, and regulators, provided recipients protect its confidentiality.",
      ),
      p(
        "ThreatNest retains its pre-existing methods, report structures, templates, tools, scripts, checklists, techniques, and general knowledge. Client-specific findings and evidence are not reused publicly without permission.",
      ),
      p(
        "A report may not be resold, presented as another provider's work, or edited in a way that misrepresents the assessment.",
      ),
    ],
  },
  {
    title: "9. Service limitations",
    blocks: [
      p(
        "An assessment is limited to the agreed scope and testing period. It may use automated tools for coverage, but reportable findings are manually reviewed. Security conditions can change after testing.",
      ),
      p(
        "An assessment does not guarantee that every vulnerability will be found, that an application cannot be compromised, that remediation will be correct, or that future changes will remain secure. The client remains responsible for ongoing security, maintenance, monitoring, access control, patching, and risk management.",
      ),
      p(
        "An assessment is not legal or insurance advice, continuous monitoring, a regulatory determination, HIPAA validation, or a legal, regulatory, or compliance certification.",
      ),
    ],
  },
  {
    title: "10. Limitation of liability",
    blocks: [
      p(
        "To the fullest extent permitted by applicable law, ThreatNest is not liable for indirect, incidental, special, exemplary, punitive, or consequential loss, including lost revenue, opportunity, goodwill, savings, or information.",
      ),
      p(
        "To the fullest extent permitted by applicable law, the total aggregate liability arising from a specific engagement will not exceed the amount paid for that engagement. The limits do not cover fraud, intentional misconduct, or liability that applicable law does not allow to be excluded or limited.",
      ),
    ],
  },
  {
    title: "11. Ending an engagement",
    blocks: [
      p(
        "Testing may be paused or ended immediately if authorization is withdrawn or disputed, a system owner objects, unexpected operational risk appears, scope information is inaccurate, unlawful activity is suspected, payment is reversed, an emergency contact is unavailable, or continuing would be unsafe or professionally inappropriate.",
      ),
      p(
        "The client may request an immediate pause through the emergency contact method stated in the signed Service Agreement. Work resumes only after the issue is resolved and authorization remains valid.",
      ),
    ],
  },
  {
    title: "12. Governing law and disputes",
    blocks: [
      p(
        "The governing law, dispute process, and contracting provider for a paid engagement will be stated in the Service Agreement or Statement of Work.",
      ),
      p(
        "If the Engagement Documents are silent, the parties will first try to resolve a dispute through written good-faith negotiation. These Terms do not limit rights or remedies that applicable law does not allow the parties to limit.",
      ),
    ],
  },
  {
    title: "13. Changes to these Terms",
    blocks: [
      p(
        "Updated Terms apply to future website use and future engagements. An update does not replace signed terms for an existing engagement unless both parties agree in writing. The date at the top identifies the current version.",
      ),
    ],
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Use"
      summary="These Terms of Use apply when you visit or use threatnest.com, contact the ThreatNest agency, or request or purchase its business services (together, the “Services”). They govern website use, service requests, written testing authorization, payment, reports, and Engagement Documents. By using the website or submitting a service request, you agree to these Terms."
      currentPath="/terms"
      sections={SECTIONS}
      contactText="Questions about these Terms or a proposed engagement can be sent to threatnest@threatnest.com."
    />
  );
}
