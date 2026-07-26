import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Personal information collected through threatnest.com and security engagements.",
  alternates: { canonical: "/privacy" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });
const linkedParagraph = (
  before: string,
  href: string,
  label: string,
  after = ""
) => ({ type: "linkedParagraph" as const, before, link: { href, label }, after });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Information collected",
    blocks: [
      p(
        "ThreatNest is an independent international cybersecurity agency. In this policy, “ThreatNest,” “we,” “us,” and “our” refer to the ThreatNest agency. The contracting service provider and privacy roles for a paid engagement may be stated more specifically in its Engagement Documents."
      ),
      p(
        "The Contact and Start forms may collect your name, business contact details, website or application URL, inquiry subject, requested scope, technology information, ownership or authority confirmation, message or assessment notes, and the page URL from which the form was submitted."
      ),
      p(
        "Emails, calls, and other business communications may include information about an inquiry, proposal, invoice, scope, authorization, or engagement. Professional contact details may also come from public business sources."
      ),
      p(
        "Website infrastructure creates technical logs. These logs may record an IP address, browser and device information, requested page, referring page, request time, security events, abuse signals, and technical errors."
      ),
      p(
        "If you accept analytics cookies, Google Analytics may collect usage, device, referral, approximate-location, and technical information about visits to the website."
      ),
      p(
        "Do not submit patient information, medical records, passwords, private keys, access tokens, confidential source code, or third-party vulnerability evidence through a public form. Secure exchange instructions are provided for approved engagements."
      ),
    ],
  },
  {
    title: "2. How information is used",
    blocks: [
      p("Personal information is used to:"),
      bullets(
        "respond to inquiries and determine whether a requested assessment is appropriate;",
        "prepare proposals, confirm scope and authorization, enter into agreements, administer invoices, and deliver services;",
        "communicate with clients, provide reports and retests, and maintain engagement records;",
        "operate, secure, troubleshoot, and prevent abuse of the website and communication systems;",
        "measure website use after analytics consent;",
        "send service-related communications and honor applicable communication preferences;",
        "maintain required business records and handle legal claims."
      ),
      p("Submitted information is not sold. Client security findings are not used for advertising."),
    ],
  },
  {
    title: "3. Reasons and legal grounds for processing",
    blocks: [
      p(
        "Information is processed only when there is a business or operational reason to do so. Depending on the activity and applicable law, the ground may be your consent, steps you request before entering into a contract, performance of an engagement, compliance with a legal obligation, or a legitimate interest in responding to business inquiries, delivering and protecting the service, preventing abuse, maintaining records, or handling legal claims."
      ),
      p(
        "Google Analytics remains disabled until analytics cookies are accepted. Consent can be withdrawn at any time. Withdrawal stops future analytics."
      ),
      p(
        "Where information is required to prepare or perform an engagement, choosing not to provide it may prevent a request from being evaluated or the service from being delivered."
      ),
    ],
  },
  {
    title: "4. Service providers and recipients",
    blocks: [
      p(
        "Vercel hosts and delivers the website. Resend delivers form submissions and related emails. Google Analytics processes website analytics only after consent. Slack receives internal inquiry notifications only when the optional server-side Slack integration is enabled."
      ),
      p(
        "Information may also be sent to designated client contacts, professional advisers, or public authorities for an engagement or a binding legal request. Providers receive only information needed for their assigned function. Unrelated service providers do not receive security evidence."
      ),
    ],
  },
  {
    title: "5. International processing",
    blocks: [
      p(
        "ThreatNest serves clients internationally, and its service providers may process information in more than one country. Information is not guaranteed to remain in the country from which it was submitted."
      ),
      p(
        "Where applicable law places conditions on an international transfer, the transfer is handled subject to those requirements. Clients must identify contractual, regulatory, hosting, or transfer restrictions before sending regulated information."
      ),
    ],
  },
  {
    title: "6. Retention",
    blocks: [
      p(
        "Ordinary inquiries and related communications are generally retained for up to 12 months after the last meaningful contact."
      ),
      p(
        "Unless an Engagement Document sets another period, raw assessment evidence is generally deleted within 30 days after final report delivery. Temporary credentials and access tokens are removed when no longer needed. Final reports retained for delivery are generally removed within 90 days after completion."
      ),
      p(
        "Contracts, invoices, payment records, authorization documents, opt-out records, security logs, and correspondence connected to a dispute are kept for their required recordkeeping or dispute period. Other information is deleted or de-identified when it is no longer needed."
      ),
    ],
  },
  {
    title: "7. Cookies",
    blocks: [
      p(
        "Necessary browser technology may operate to remember your cookie choice, retain a selected theme, deliver the website, protect forms, and maintain security. Google Analytics is disabled unless you accept analytics cookies."
      ),
      linkedParagraph(
        "You can accept, reject, change, or withdraw analytics consent through Cookie Settings in the footer. Rejecting analytics does not affect access to the website or forms. See the ",
        "/cookies",
        "Cookie Policy",
        " for details."
      ),
    ],
  },
  {
    title: "8. Security",
    blocks: [
      p(
        "Access controls, encrypted connections, evidence minimization, and retention controls protect stored information."
      ),
      p("No internet transmission or storage system can be guaranteed completely secure."),
    ],
  },
  {
    title: "9. Your privacy rights",
    blocks: [
      p(
        "Depending on applicable law, you may have rights to ask whether personal information is processed, obtain access or information about its use, correct inaccurate or incomplete information, request deletion or restriction, receive eligible information in a portable form, or object to certain processing."
      ),
      p(
        "You may withdraw analytics consent at any time through Cookie Settings. Withdrawal does not affect processing that occurred before withdrawal."
      ),
      p(
        "ThreatNest does not use personal information to make solely automated decisions that produce legal or similarly significant effects. Where applicable, you may also complain to the competent data protection authority."
      ),
      p(
        "Privacy requests can be sent to threatnest@threatnest.com. Identity verification may be required, and a request may be limited where applicable law permits or requires it. Not every right applies to every person or processing activity."
      ),
    ],
  },
  {
    title: "10. Changes to this policy",
    blocks: [
      p(
        "Policy updates apply from the date shown at the top. Material changes affecting an active engagement may also be sent directly to the client."
      ),
    ],
  },
  {
    title: "11. Agency and data controller",
    blocks: [
      p(
        "The ThreatNest agency is responsible for personal information collected directly through threatnest.com and ordinary ThreatNest business communications. Engagement Documents may identify a different controller, processor, or contracting provider for specific engagement information."
      ),
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      summary="This Privacy Policy applies to people who visit threatnest.com, contact the ThreatNest agency, request services, or take part in an engagement. It explains how personal information is collected, used, shared, retained, and protected through the website, business communications, and security engagements."
      currentPath="/privacy"
      sections={SECTIONS}
      contactText="Privacy questions and requests can be sent to threatnest@threatnest.com. Identity verification may be required before a request is completed."
      showCookieSettings
    />
  );
}
