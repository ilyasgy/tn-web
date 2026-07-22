import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How ThreatNest handles information from threatnest.com, business communications, outreach, and security service inquiries.",
  alternates: { canonical: "/privacy" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });
const subheading = (text: string) => ({ type: "subheading" as const, text });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Responsible privacy contact",
    blocks: [
      p("For information handled through the ThreatNest brand, the primary person responsible for privacy decisions and requests is:"),
      p("Omar Geylani, Lead Penetration Tester. Contact: threatnest@threatnest.com"),
      p("Approved ThreatNest team members may handle information where required for outreach, administration, assessment delivery, documentation, or client support."),
    ],
  },
  {
    title: "2. Scope of this Notice",
    blocks: [
      p("This Notice applies to information collected through:"),
      bullets(
        "threatnest.com;",
        "contact and assessment request forms;",
        "email and business communications;",
        "introductory and qualification calls;",
        "proposals and engagement preparation;",
        "payment and invoice administration;",
        "and approved security engagements."
      ),
      p("A signed Service Agreement, data processing agreement, Business Associate Agreement, or another document for a specific engagement may contain additional privacy and security terms."),
    ],
  },
  {
    title: "3. Information collected",
    blocks: [
      subheading("Information you provide"),
      p("ThreatNest may collect:"),
      bullets(
        "your name;",
        "business email address;",
        "business phone number;",
        "organization and job role;",
        "website or application domain;",
        "technology stack information;",
        "requested scope and project details;",
        "messages and communications;",
        "authorization and ownership information;",
        "billing and payment details;",
        "documents provided during an inquiry;",
        "test account information shared through an approved secure process;",
        "and information required to prepare or deliver an engagement."
      ),
      subheading("Information collected automatically"),
      p("The website and its infrastructure may process:"),
      bullets(
        "IP address;",
        "browser and device information;",
        "request date and time;",
        "requested pages;",
        "referring page;",
        "security and abuse prevention signals;",
        "server and application logs;",
        "and information required to detect spam, attacks, or technical errors."
      ),
      subheading("Public business information"),
      p("ThreatNest may obtain professional contact information from publicly available business websites, directories, professional profiles, and other public business sources."),
      p("This may include an organization’s name, public business telephone number, public business email address, website, and the name or role of a relevant business contact."),
      p("This information may be used for targeted business outreach about services reasonably relevant to the organization."),
    ],
  },
  {
    title: "4. Information that must not be submitted publicly",
    blocks: [
      p("Do not submit the following through the public website forms:"),
      bullets(
        "patient information;",
        "medical records;",
        "protected health information;",
        "passwords;",
        "API keys;",
        "private keys;",
        "access tokens;",
        "production credentials;",
        "confidential source code;",
        "vulnerability evidence relating to another organization;",
        "or information you are not authorized to provide."
      ),
      p("Secure exchange instructions will be provided after an engagement is approved."),
    ],
  },
  {
    title: "5. How information is used",
    blocks: [
      p("Information may be used to:"),
      bullets(
        "respond to inquiries;",
        "determine whether an assessment is appropriate;",
        "confirm scope and authorization;",
        "communicate with business contacts;",
        "prepare proposals and Engagement Documents;",
        "process and reconcile payments;",
        "schedule and deliver services;",
        "provide reports and retests;",
        "maintain engagement and accounting records;",
        "protect the website and communication systems;",
        "prevent abuse, fraud, and unauthorized requests;",
        "comply with legal obligations;",
        "establish, exercise, or defend legal claims;",
        "improve service processes;",
        "and honor requests not to receive further outreach."
      ),
      p("ThreatNest does not sell personal information."),
      p("ThreatNest does not use client security findings for advertising."),
    ],
  },
  {
    title: "6. Grounds for processing",
    blocks: [
      p("Depending on the context and applicable law, information may be handled because:"),
      bullets(
        "it is necessary to respond to a request;",
        "it is necessary to prepare or perform a contract;",
        "it is required to satisfy a legal obligation;",
        "it supports legitimate business and security interests;",
        "it is necessary to establish or defend legal rights;",
        "or the person has provided consent where consent is required."
      ),
      p("Consent may be withdrawn where processing depends on consent. Withdrawal does not affect processing that occurred lawfully before withdrawal."),
    ],
  },
  {
    title: "7. Business outreach and opt out requests",
    blocks: [
      p("ThreatNest may contact publicly listed business addresses or telephone numbers regarding relevant cybersecurity services."),
      p("Outreach is directed at organizations and professional roles rather than personal or household activity."),
      p("Recipients may ask ThreatNest to stop contacting them at any time."),
      p("When an opt out or do not contact request is received, ThreatNest may retain the minimum information necessary to ensure that the request is honored."),
    ],
  },
  {
    title: "8. Payment information",
    blocks: [
      p("Payments may be processed through the payment provider identified in the invoice or payment request."),
      p("ThreatNest may receive transaction information such as:"),
      bullets(
        "payer name;",
        "organization;",
        "billing email;",
        "amount;",
        "currency;",
        "transaction status;",
        "invoice or reference number;",
        "and limited payment method information."
      ),
      p("ThreatNest does not intentionally collect or store complete payment card numbers through threatnest.com."),
      p("Payment providers process payment information under their own privacy and security terms."),
    ],
  },
  {
    title: "9. Service providers and recipients",
    blocks: [
      p("Information may be shared only where reasonably necessary with:"),
      bullets(
        "approved ThreatNest team members;",
        "website hosting and infrastructure providers;",
        "business email and document providers;",
        "form delivery and abuse prevention providers;",
        "communication platforms used with the client;",
        "payment processors identified in the Engagement Documents;",
        "professional advisers;",
        "and authorities where disclosure is legally required."
      ),
      p("Providers used by the current website and inquiry workflow include Google Analytics for website analytics, Resend for email delivery, and Slack for internal inquiry notifications."),
      p("A provider is not given access to security evidence merely because it supplies an unrelated business function."),
    ],
  },
  {
    title: "10. International processing",
    blocks: [
      p("ThreatNest serves clients internationally and may work through a distributed team."),
      p("Information may therefore be processed or stored in a country different from the country of the person or organization providing it."),
      p("Where required, ThreatNest will use appropriate contractual, technical, or organizational protections for international transfers."),
      p("Clients should identify transfer restrictions before sending regulated information or information restricted to a location."),
    ],
  },
  {
    title: "11. Security",
    blocks: [
      p("ThreatNest uses reasonable technical and organizational safeguards appropriate to the sensitivity of the information."),
      p("These may include:"),
      bullets(
        "access restrictions;",
        "access limited to the least privilege needed;",
        "multifactor authentication;",
        "encrypted connections;",
        "separate client workspaces;",
        "secure methods for sharing credentials;",
        "evidence minimization;",
        "limited personnel access;",
        "retention controls;",
        "and deletion after the relevant period."
      ),
      p("No online or storage system can be guaranteed completely secure."),
    ],
  },
  {
    title: "12. Retention",
    blocks: [
      p("Unless an Engagement Document requires another period, ThreatNest applies the following general retention periods:"),
      bullets(
        "ordinary inquiries and related communications: up to 12 months after the last meaningful contact;",
        "unsuccessful or abandoned assessment requests: up to 12 months;",
        "raw penetration testing evidence: up to 30 days after the later of final report delivery or completion of the included retest;",
        "temporary credentials and access tokens: removed as soon as they are no longer required;",
        "final client reports retained for delivery purposes: up to 90 days after completion, unless the client requests earlier deletion or agrees to longer retention;",
        "contracts, invoices, payment records, authorization documents, and legally relevant correspondence: for the period reasonably required by applicable accounting, tax, contractual, or legal obligations;",
        "do not contact records: for as long as reasonably required to honor the request;",
        "and security logs: for a limited period appropriate to fraud prevention, security monitoring, and incident investigation."
      ),
      p("Information may be retained longer where necessary to address a dispute, comply with law, preserve evidence, or establish or defend legal rights."),
    ],
  },
  {
    title: "13. Healthcare and regulated information",
    blocks: [
      p("ThreatNest does not request patient information through its public website."),
      p("Clients should use synthetic records and dedicated test accounts wherever possible."),
      p("If an approved engagement requires access to protected health information or another regulated category of information, the parties must document the required handling conditions before access occurs."),
      p("ThreatNest may refuse to receive regulated information where the necessary safeguards or agreements are not in place."),
    ],
  },
  {
    title: "14. Cookies and similar technologies",
    blocks: [
      p("ThreatNest does not use the website to sell advertising profiles."),
      p("The website uses Google Analytics when a measurement ID is configured. Google Analytics may process page paths, referring information, browser or device information, and related usage data. The website also uses essential technical mechanisms and server logs required to deliver, protect, and troubleshoot the service."),
      p("If additional analytics, advertising, or behavior tracking technologies are introduced, this Notice and any required consent controls will be updated."),
    ],
  },
  {
    title: "15. Your choices and rights",
    blocks: [
      p("Depending on applicable law, a person may have the right to request:"),
      bullets(
        "confirmation that information is being processed;",
        "access to their information;",
        "correction of inaccurate information;",
        "deletion;",
        "restriction of processing;",
        "objection to certain processing;",
        "withdrawal of consent;",
        "or a portable copy of information they provided."
      ),
      p("A request may be subject to identity verification and legal exceptions."),
      p("Business outreach can be stopped at any time by replying to the message or emailing the address below."),
    ],
  },
  {
    title: "16. Children",
    blocks: [
      p("ThreatNest provides cybersecurity services to businesses."),
      p("The website is not directed at children, and ThreatNest does not knowingly request personal information from children through the website."),
    ],
  },
  {
    title: "17. Changes to this Notice",
    blocks: [
      p("This Notice may be updated when the website, service process, providers, or legal obligations change."),
      p("The effective date at the top indicates the current version."),
      p("Material changes affecting an active engagement may also be communicated directly where appropriate."),
    ],
  },
  {
    title: "18. Privacy contact",
    blocks: [p("Privacy requests and questions may be sent to threatnest@threatnest.com.")],
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Notice"
      effectiveDate="July 19, 2026"
      introduction={[
        "This Privacy Notice explains how information is collected and handled through threatnest.com, communications with ThreatNest, outreach activities, and security service inquiries.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/terms", label: "Terms" },
        { href: "/data-handling", label: "Data Handling" },
        { href: "/authorized-testing", label: "Authorized Testing" },
      ]}
    />
  );
}
