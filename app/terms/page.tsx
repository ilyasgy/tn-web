import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Use and Service Conditions",
  description:
    "Terms governing use of threatnest.com and security services offered to businesses under the ThreatNest brand.",
  alternates: { canonical: "/terms" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });
const numbered = (...items: string[]) => ({ type: "numbered" as const, items });

const SECTIONS: PolicySection[] = [
  {
    title: "1. About ThreatNest",
    blocks: [
      p("ThreatNest is a professional brand used by an independent international cybersecurity agency operating through a distributed team."),
      p("Security engagements are led by Omar Geylani, Lead Penetration Tester, who is responsible for technical oversight, scope control, findings validation, and final reporting. Approved supporting team members may assist with research, testing, verification, documentation, and client coordination."),
      p("The contracting service provider for each engagement will be identified in the applicable proposal, invoice, Service Agreement, Statement of Work, or other engagement document."),
    ],
  },
  {
    title: "2. Services for businesses",
    blocks: [
      p("ThreatNest provides services to businesses, organizations, professional practices, and persons acting for business purposes."),
      p("The services are not offered as consumer services for personal, family, or household use."),
      p("By requesting or purchasing services, you confirm that you are acting on behalf of a business or organization and have authority to do so."),
    ],
  },
  {
    title: "3. Website use",
    blocks: [
      p("The website provides general information about ThreatNest, its services, methodology, pricing, and engagement process."),
      p("Website content does not constitute:"),
      bullets(
        "an offer that ThreatNest is required to accept;",
        "authorization to perform security testing;",
        "legal, regulatory, compliance, insurance, or medical advice;",
        "a guarantee that every vulnerability will be discovered;",
        "or a certification that an organization complies with HIPAA or any other legal or regulatory framework."
      ),
      p("ThreatNest may refuse a request when the requested work is unlawful, unsafe, outside available expertise, inadequately authorized, or inconsistent with these Terms."),
    ],
  },
  {
    title: "4. Service requests do not authorize testing",
    blocks: [
      p("Submitting a contact form, assessment request, email, repository link, domain, or other information does not authorize ThreatNest or any tester to begin security testing."),
      p("Testing begins only after the following have been completed:"),
      numbered(
        "the client and contracting service provider have been identified;",
        "the exact systems and testing scope have been confirmed;",
        "written authorization has been signed by a person with authority over the systems;",
        "the testing period and Rules of Engagement have been agreed;",
        "the required payment has cleared;",
        "required accounts, access, and emergency contacts have been provided; and",
        "ThreatNest has confirmed that testing may begin."
      ),
      p("No statement made during an introductory call or ordinary email conversation replaces written authorization."),
    ],
  },
  {
    title: "5. Engagement Documents",
    blocks: [
      p("Each paid assessment may be governed by one or more separate documents, including:"),
      bullets(
        "a proposal;",
        "a Service Agreement;",
        "a Statement of Work;",
        "Rules of Engagement;",
        "an Authorization to Test;",
        "a confidentiality or nondisclosure agreement;",
        "a data processing or business associate agreement where required;",
        "and an invoice or payment request."
      ),
      p("Together, these are the Engagement Documents."),
      p("If there is a conflict, the following order applies:"),
      numbered(
        "the signed Service Agreement, Statement of Work, Rules of Engagement, or Authorization to Test;",
        "the accepted proposal or invoice;",
        "these Terms;",
        "general website descriptions."
      ),
      p("An Engagement Document may change these Terms for that specific engagement."),
    ],
  },
  {
    title: "6. Client authority",
    blocks: [
      p("The client represents and warrants that it:"),
      bullets(
        "owns the systems listed in scope or has valid written authority from the owner;",
        "is authorized to permit the testing methods described in the Engagement Documents;",
        "has obtained any necessary permission from hosting providers, software providers, business partners, or other third parties;",
        "has accurately identified systems that it does not own or control;",
        "and will not knowingly include unauthorized third party infrastructure in the scope."
      ),
      p("A client cannot authorize testing against a third party’s systems merely because those systems are connected to, embedded in, or used by the client’s website."),
      p("Examples include payment processors, patient portals operated by another provider, cloud platforms, content delivery networks, analytics services, embedded scheduling systems, and externally hosted applications."),
      p("ThreatNest may exclude any asset when ownership or authority cannot be reasonably verified."),
    ],
  },
  {
    title: "7. Standard assessment scope",
    blocks: [
      p("The standard ThreatNest service is a manually led web application penetration test focused on healthcare websites and patient facing application surfaces."),
      p("Depending on the agreed scope, testing may include:"),
      bullets(
        "authentication, login, logout, registration, password reset, and session handling;",
        "authorization and access control weaknesses, including IDOR and privilege related issues;",
        "contact, appointment, booking, intake, and patient facing forms;",
        "public and authenticated APIs;",
        "file upload and file handling functionality;",
        "input validation and common injection weaknesses;",
        "cross site scripting and browser security weaknesses;",
        "business logic and workflow abuse;",
        "account enumeration and account abuse controls;",
        "cookies, security headers, TLS configuration, and browser security controls;",
        "exposed administrative paths, files, repositories, backups, error messages, or technical information;",
        "CMS, themes, plugins, libraries, and outdated components;",
        "analytics, tracking pixels, third party scripts, and potential transmission of sensitive information;",
        "and other application weaknesses reasonably relevant to the agreed target."
      ),
      p("Automated tools may be used to improve coverage and support discovery. Findings included in the final report are manually reviewed and validated."),
      p("The precise scope is always the scope stated in the signed Engagement Documents."),
    ],
  },
  {
    title: "8. Activities excluded by default",
    blocks: [
      p("Unless expressly approved in writing, an engagement does not include:"),
      bullets(
        "denial of service, distributed denial of service, load, stress, or availability testing;",
        "destructive testing;",
        "deletion, corruption, or alteration of production information;",
        "malware deployment, persistence, backdoors, or destructive payloads;",
        "ransomware simulation;",
        "phishing, impersonation, pretexting, or other social engineering;",
        "physical security testing;",
        "testing employees’ personal devices or accounts;",
        "credential stuffing using real compromised credentials;",
        "brute force activity likely to lock accounts or interrupt service;",
        "lateral movement into unrelated systems;",
        "internal network testing;",
        "wireless testing;",
        "third party systems not controlled by the client;",
        "intentional exfiltration of personal, medical, patient, payment, or confidential information;",
        "or exploitation beyond what is reasonably necessary to demonstrate a finding."
      ),
      p("Any additional activity requires explicit written approval and may require a separate fee, testing window, and authorization."),
    ],
  },
  {
    title: "9. Safe testing and proof of concept",
    blocks: [
      p("ThreatNest uses nondestructive methods and collects only the evidence needed."),
      p("Where a weakness can be demonstrated without accessing additional information or increasing operational risk, testing will stop at that point."),
      p("ThreatNest will not intentionally access, download, alter, or disclose more information than is reasonably necessary to validate a finding."),
      p("Where exploitation could expose patient information, credentials, confidential records, or production information, ThreatNest may stop at the point of proof of concept and report the likely impact without completing full exploitation."),
      p("A critical or immediately exploitable issue may be reported to the client before the final report is delivered."),
    ],
  },
  {
    title: "10. Testing personnel",
    blocks: [
      p("Omar Geylani leads the technical assessment and final review."),
      p("Approved ThreatNest team members may assist under his supervision. Anyone given access to client systems or confidential information must be bound by applicable confidentiality, scope, authorization, and data handling requirements."),
      p("The client may request the identity or role of personnel who will receive privileged access."),
      p("ThreatNest will not transfer production credentials or sensitive evidence to unrelated personnel."),
    ],
  },
  {
    title: "11. Client responsibilities",
    blocks: [
      p("The client is responsible for:"),
      bullets(
        "providing accurate scope and ownership information;",
        "maintaining current backups and recovery procedures;",
        "notifying relevant hosting, development, IT, or security providers where necessary;",
        "supplying test accounts with the minimum privileges required;",
        "using synthetic test data wherever practical;",
        "identifying any systems that are operationally sensitive;",
        "providing an emergency contact who can pause testing;",
        "monitoring the environment during the testing period;",
        "informing ThreatNest of scheduled maintenance or changes;",
        "securing credentials and access issued for the assessment;",
        "reviewing and applying remediation recommendations;",
        "and determining its own legal, regulatory, contractual, and insurance obligations."
      ),
      p("ThreatNest is not responsible for delays caused by missing access, incorrect scope information, third party restrictions, unavailable personnel, changes made by the client, or systems that were not ready for testing."),
    ],
  },
  {
    title: "12. Price and payment",
    blocks: [
      p("The advertised price for the defined standard assessment is USD 2,000."),
      p("The final price and scope will be confirmed in writing before payment. Materially larger applications, multiple independent applications, extensive authenticated roles, internal systems, mobile applications, source code review, cloud reviews, or expanded testing requirements may require a separate quote."),
      p("Payments are collected through an invoice or payment request using the payment method stated in the Engagement Documents."),
      p("Unless otherwise stated in writing, full cleared payment is required before testing begins."),
      p("The client is responsible for bank, currency conversion, intermediary, or payment provider charges imposed on the client’s side."),
      p("ThreatNest will not request payment through an undisclosed personal account or a payment destination that does not match the issued payment instructions."),
    ],
  },
  {
    title: "13. Cancellations, rescheduling, and refunds",
    blocks: [
      p("The applicable proposal or Service Agreement may contain specific cancellation and refund terms."),
      p("Where the Engagement Documents are silent:"),
      bullets(
        "a client may cancel before testing begins and receive a refund, less payment processing charges that cannot be recovered and any separately approved preparatory work;",
        "once active testing has begun, fees are not refundable;",
        "a testing window may be rescheduled by mutual agreement;",
        "and ThreatNest may suspend or cancel an engagement where authorization, safety, legality, access, or payment becomes uncertain."
      ),
      p("If ThreatNest cannot provide the agreed service for reasons within its control and cannot reasonably reschedule or cure the issue, the client will receive a refund for the undelivered portion."),
    ],
  },
  {
    title: "14. Delivery period",
    blocks: [
      p("The standard assessment is designed for delivery within seven calendar days."),
      p("The seven day period begins only after:"),
      bullets(
        "the scope is finalized;",
        "written authorization is complete;",
        "payment has cleared;",
        "required access has been provided;",
        "and the agreed testing window has started."
      ),
      p("The delivery period pauses while ThreatNest is waiting for client responses, access, clarification, third party approval, or resolution of an issue on the client side."),
      p("Changes to the scope may change the delivery date."),
    ],
  },
  {
    title: "15. Deliverables",
    blocks: [
      p("Unless the Engagement Documents state otherwise, the client receives:"),
      bullets(
        "an executive summary;",
        "a description of the scope and methodology;",
        "a findings summary ranked by severity;",
        "individually documented findings;",
        "manually validated evidence;",
        "relevant requests, responses, or screenshots where appropriate;",
        "technical and business impact explanations;",
        "clear remediation guidance;",
        "and a remediation blueprint for the developer."
      ),
      p("The report represents conditions observed during the agreed assessment period. It does not represent a continuous monitoring service."),
    ],
  },
  {
    title: "16. Complimentary retest",
    blocks: [
      p("One complimentary retest of the findings documented in the original final report is included."),
      p("The retest must be requested within 14 calendar days after delivery of the final report, unless another period is written in the Engagement Documents."),
      p("The retest is limited to determining whether the originally reported findings have been remediated."),
      p("It does not include:"),
      bullets(
        "testing newly added features;",
        "reviewing a redesigned application;",
        "testing new domains or systems;",
        "investigating unrelated weaknesses;",
        "or performing another full penetration test."
      ),
      p("Newly identified issues may be documented separately or quoted as additional work."),
    ],
  },
  {
    title: "17. Confidentiality",
    blocks: [
      p("ThreatNest treats the following as confidential:"),
      bullets(
        "client identities not already public;",
        "application architecture and technical details;",
        "credentials and test account information;",
        "findings and evidence;",
        "screenshots, requests, responses, and proof of concept material;",
        "source code or repository information;",
        "patient, customer, employee, or business information;",
        "and final reports."
      ),
      p("Confidential information is shared only with approved personnel who require it to perform the engagement."),
      p("ThreatNest will not publish a client’s name, logo, results, case study, testimonial, or report without permission."),
      p("Confidentiality does not apply to information that:"),
      bullets(
        "was already lawfully known;",
        "becomes public without a breach of duty;",
        "is independently developed without use of the confidential information;",
        "is lawfully received from another source;",
        "or must be disclosed by law or binding legal process."
      ),
      p("Where legally permitted, the affected party will be notified before a required disclosure."),
    ],
  },
  {
    title: "18. Healthcare and sensitive information",
    blocks: [
      p("Clients must not submit patient information, medical records, protected health information, passwords, private keys, access tokens, or production credentials through the public website forms."),
      p("Synthetic data and dedicated test accounts should be used wherever possible."),
      p("The standard engagement is not designed to require intentional access to patient information."),
      p("If an assessment reasonably requires ThreatNest to receive, maintain, or access regulated healthcare information, the parties must determine and document the required safeguards before access occurs. This may include a data processing agreement, Business Associate Agreement, or other written terms."),
      p("ThreatNest does not provide legal advice and does not determine the client’s legal status or compliance obligations."),
    ],
  },
  {
    title: "19. Reports and intellectual property",
    blocks: [
      p("After full payment, the client may use the final report for:"),
      bullets(
        "internal remediation;",
        "internal governance;",
        "discussions with developers, hosting providers, legal advisers, insurers, auditors, and regulators;",
        "and reasonable evidence of the assessment performed."
      ),
      p("The client may share the report with trusted recipients who have a legitimate need to receive it and who are expected to protect its confidentiality."),
      p("ThreatNest retains ownership of its existing:"),
      bullets(
        "testing methodology;",
        "report structure and reusable templates;",
        "tools, scripts, checklists, and techniques;",
        "general knowledge and experience;",
        "and material developed independently of the client’s confidential information."
      ),
      p("Findings, evidence, and conclusions specific to the client may not be reused publicly without permission."),
      p("The report may not be resold, falsely represented as another provider’s work, or materially edited in a way that misrepresents the original assessment."),
    ],
  },
  {
    title: "20. Third party services",
    blocks: [
      p("ThreatNest may rely on service providers for hosting, analytics, email, communications, document exchange, and payment processing."),
      p("ThreatNest is not responsible for the independent operation, availability, or policies of third party services outside its reasonable control."),
      p("Links to third party websites do not constitute an endorsement or warranty."),
    ],
  },
  {
    title: "21. No guarantee of complete security",
    blocks: [
      p("A penetration test is limited in time and covers an agreed scope."),
      p("Security conditions may change after testing because of code changes, configuration changes, new vulnerabilities, third party updates, newly introduced features, or actions outside ThreatNest’s control."),
      p("ThreatNest does not guarantee that:"),
      bullets(
        "every vulnerability will be identified;",
        "the application cannot be compromised;",
        "remediation will be correctly implemented;",
        "future changes will remain secure;",
        "or the assessment establishes full legal or regulatory compliance."
      ),
      p("The client remains responsible for ongoing security, maintenance, monitoring, access control, patching, and risk management."),
    ],
  },
  {
    title: "22. Professional standard",
    blocks: [
      p("ThreatNest will perform services in a professional manner using reasonable care and methods appropriate to the agreed assessment."),
      p("Except for commitments expressly stated in the Engagement Documents, services and website content are provided without additional warranties, to the maximum extent permitted by applicable law."),
    ],
  },
  {
    title: "23. Limitation of liability",
    blocks: [
      p("To the maximum extent permitted by applicable law, ThreatNest and its assigned personnel will not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, including loss of revenue, business opportunity, goodwill, anticipated savings, or information."),
      p("ThreatNest’s total aggregate liability arising from a specific engagement will not exceed the amount paid for that engagement."),
      p("These limitations do not apply to fraud, intentional misconduct, or liability that cannot legally be excluded or limited."),
    ],
  },
  {
    title: "24. Client indemnity for unauthorized scope",
    blocks: [
      p("The client will be responsible for third party claims, losses, or costs arising from:"),
      bullets(
        "materially false ownership or authorization statements;",
        "inclusion of third party systems without valid permission;",
        "instructions that exceed the client’s legal authority;",
        "or misuse or misleading publication of the report."
      ),
      p("This does not apply to the extent the claim results from ThreatNest’s intentional misconduct or material failure to follow the agreed scope."),
    ],
  },
  {
    title: "25. Suspension and termination",
    blocks: [
      p("ThreatNest may immediately pause or terminate testing where:"),
      bullets(
        "authorization is withdrawn or disputed;",
        "a system owner or provider objects;",
        "testing creates unexpected operational risk;",
        "the client provides inaccurate scope information;",
        "unlawful activity is suspected;",
        "payment is reversed or disputed;",
        "required communication becomes unavailable;",
        "or continuing would be unsafe or professionally inappropriate."
      ),
      p("The client may request an immediate pause through the emergency contact method defined in the Rules of Engagement."),
    ],
  },
  {
    title: "26. Governing terms and disputes",
    blocks: [
      p("The governing law, dispute process, and contracting provider for a paid engagement will be stated in the applicable Service Agreement or Statement of Work."),
      p("Where the Engagement Documents are silent, the parties will first attempt to resolve a dispute through written negotiation in good faith. Mandatory applicable law remains unaffected."),
    ],
  },
  {
    title: "27. Changes to these Terms",
    blocks: [
      p("ThreatNest may update these Terms for future website use or future engagements."),
      p("Changes do not retroactively replace the signed terms of an existing engagement unless both parties agree in writing."),
      p("The effective date displayed at the top indicates the current version."),
    ],
  },
  {
    title: "28. Contact",
    blocks: [
      p("Questions about these Terms may be sent to threatnest@threatnest.com."),
    ],
  },
];

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Use and Service Conditions"
      effectiveDate="July 19, 2026"
      introduction={[
        "These Terms of Use and Service Conditions govern access to threatnest.com and requests for services offered under the ThreatNest brand.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Notice" },
        { href: "/authorized-testing", label: "Authorized Testing" },
        { href: "/data-handling", label: "Data Handling" },
      ]}
    />
  );
}
