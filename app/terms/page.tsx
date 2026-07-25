import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of threatnest.com and requests for our security services.",
  alternates: { canonical: "/terms" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Using the website",
    blocks: [
      p(
        "The website provides general information about our services, approach, pricing, and engagement process. You may use it only for lawful business purposes and may not interfere with its operation, attempt unauthorized access, or misuse its content.",
      ),
      p(
        "Website content is general information. It does not create a binding offer or authorize testing, and it is not legal, regulatory, or insurance advice, a security guarantee, or a certification of compliance with HIPAA or any other framework.",
      ),
    ],
  },
  {
    title: "2. Service requests",
    blocks: [
      p(
        "Our services are offered to businesses, organizations, professional practices, and people acting for business purposes. By making a request, you confirm that you are authorized to act for the organization you identify.",
      ),
      p(
        "A request does not create an engagement or require us to accept work. We may reject work that is unlawful, unsafe, outside our expertise, inadequately authorized, or inconsistent with these Terms.",
      ),
      p(
        "The contracting service provider for a paid engagement will be identified in the applicable proposal, invoice, Service Agreement, Statement of Work, or other engagement document.",
      ),
    ],
  },
  {
    title: "3. Authorization to test",
    blocks: [
      p(
        "Submitting a form, sending an email, making a call, paying an invoice, identifying a URL, exposing a system publicly, or reporting a vulnerability does not authorize security testing.",
      ),
      p(
        "Testing may begin only after we have written authorization from a person with authority over every system in scope. The signed documents must identify the exact systems, approved methods, testing dates, Rules of Engagement, emergency contacts, and any exclusions.",
      ),
      p(
        "Connected or embedded third party systems are excluded unless their owner or provider has granted the required permission. We may stop or refuse work whenever ownership, authority, scope, safety, or legality is uncertain.",
      ),
    ],
  },
  {
    title: "4. Engagement documents",
    blocks: [
      p(
        "A paid assessment may be governed by a proposal, Service Agreement, Statement of Work, Rules of Engagement, Authorization to Test, confidentiality agreement, data processing terms, and invoice. Together, these are the Engagement Documents.",
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
        "The final scope, price, payment method, testing window, delivery schedule, and any retest will be confirmed in the Engagement Documents. Unless those documents say otherwise, full cleared payment is required before testing begins.",
      ),
      p(
        "Specific cancellation and refund terms in the Engagement Documents control. If they are silent, a client may cancel before testing starts and receive a refund less unrecoverable payment charges and approved preparatory work. Fees are not refundable after active testing begins.",
      ),
      p(
        "We may reschedule, suspend, or cancel work when authorization, access, payment, safety, or legality becomes uncertain. If we cannot deliver an agreed part of the service for reasons within our control and cannot reasonably resolve or reschedule it, we will refund the undelivered portion.",
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
        "identifying operationally sensitive systems and notifying us of material changes;",
        "protecting credentials, reports, and evidence;",
        "reviewing and implementing remediation; and",
        "determining its own legal, regulatory, contractual, and insurance obligations.",
      ),
      p(
        "Delivery dates may change when access, approvals, information, client personnel, or systems are not ready. The client is responsible for third party claims, losses, and costs caused by materially false authority statements, unauthorized scope, or misuse of a report, except to the extent caused by our intentional misconduct or material failure to follow the agreed scope.",
      ),
    ],
  },
  {
    title: "7. Confidentiality",
    blocks: [
      p(
        "We treat nonpublic client identities, system details, credentials, findings, evidence, source code, reports, business records, and communications as confidential. We use and disclose them only to perform the engagement, administer it, comply with law, or protect legal rights.",
      ),
      p(
        "Confidentiality does not cover information lawfully known without restriction, independently developed, received lawfully from another source, made public without a breach of duty, or required to be disclosed by binding law or legal process. Where legally permitted, we will notify the affected client before a required disclosure.",
      ),
      p(
        "We will not publish a client name, logo, testimonial, vulnerability, evidence, or report without permission.",
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
        "We do not guarantee that every vulnerability will be found, that an application cannot be compromised, that remediation will be implemented correctly, or that future changes will remain secure. The client remains responsible for ongoing security, maintenance, monitoring, access control, patching, and risk management.",
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
        "To the maximum extent permitted by applicable law, ThreatNest is not liable for indirect, incidental, special, exemplary, punitive, or consequential loss, including lost revenue, opportunity, goodwill, savings, or information.",
      ),
      p(
        "ThreatNest's total aggregate liability arising from a specific engagement will not exceed the amount paid for that engagement. These limits do not apply to fraud, intentional misconduct, or liability that applicable law does not allow to be excluded or limited.",
      ),
    ],
  },
  {
    title: "11. Ending an engagement",
    blocks: [
      p(
        "We may immediately pause or end testing if authorization is withdrawn or disputed, a system owner objects, unexpected operational risk appears, scope information is inaccurate, unlawful activity is suspected, payment is reversed, an emergency contact is unavailable, or continuing would be unsafe or professionally inappropriate.",
      ),
      p(
        "The client may request an immediate pause through the method stated in the Rules of Engagement. Work resumes only after the issue is resolved and authorization remains valid.",
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
        "If the Engagement Documents are silent, the parties will first try to resolve a dispute through written good-faith negotiation. Mandatory applicable law remains unaffected.",
      ),
    ],
  },
  {
    title: "13. Changes to these Terms",
    blocks: [
      p(
        "We may update these Terms for future website use or future engagements. An update does not replace the signed terms of an existing engagement unless both parties agree in writing. The effective date identifies the current version.",
      ),
    ],
  },
  {
    title: "14. Contact",
    blocks: [p("Questions about these Terms may be sent to threatnest@threatnest.com.")],
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Use"
      effectiveDate="July 25, 2026"
      introduction={[
        "These Terms govern your use of the ThreatNest website and any request for our services.",
        "ThreatNest is an international cybersecurity agency led by Omar Geylani, Lead Penetration Tester.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/authorized-testing", label: "Authorized Testing" },
        { href: "/data-handling", label: "Data Handling" },
      ]}
    />
  );
}
