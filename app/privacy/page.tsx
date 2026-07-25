import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How we collect, use, disclose, and protect personal information through threatnest.com and our services.",
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
    title: "1. Information we collect",
    blocks: [
      p(
        "The Contact and Start forms may collect your name, business contact details, website or application URL, inquiry subject, requested scope, technology information, ownership or authority confirmation, message or assessment notes, and the page URL from which the form was submitted."
      ),
      p(
        "Emails, calls, and other business communications may contain information about an inquiry, proposal, invoice, scope, authorization, or engagement. We may also collect professional contact details from public business sources when contacting organizations about relevant services."
      ),
      p(
        "Our website infrastructure creates technical logs that may record an IP address, browser and device information, requested page, referring page, request time, security events, abuse signals, and technical errors."
      ),
      p(
        "If you accept analytics cookies, Google Analytics may collect usage, device, referral, approximate-location, and technical information about visits to the website."
      ),
      p(
        "Do not submit patient information, medical records, passwords, private keys, access tokens, confidential source code, or third-party vulnerability evidence through a public form. We provide secure exchange instructions for approved engagements."
      ),
    ],
  },
  {
    title: "2. How we use information",
    blocks: [
      p("We use personal information to:"),
      bullets(
        "respond to inquiries and determine whether a requested assessment is appropriate;",
        "prepare proposals, confirm scope and authorization, enter into agreements, administer invoices, and deliver services;",
        "communicate with clients, provide reports and retests, and maintain engagement records;",
        "operate, secure, troubleshoot, and prevent abuse of the website and communication systems;",
        "measure website use after analytics consent;",
        "send relevant business communications and honor requests to stop them;",
        "comply with legal obligations and establish, exercise, or defend legal claims."
      ),
      p("We do not sell personal information or use client security findings for advertising."),
    ],
  },
  {
    title: "3. Legal bases",
    blocks: [
      p(
        "The legal basis depends on the information and the reason it is used. We process information when necessary to take steps requested before a contract, perform a contract, or meet a legal obligation."
      ),
      p(
        "We may also process information to protect our legitimate business and security interests without overriding individual rights, or to establish, exercise, or defend legal rights."
      ),
      p(
        "Optional analytics relies on consent. You may withdraw consent at any time without affecting processing that occurred before withdrawal."
      ),
    ],
  },
  {
    title: "4. How we disclose information",
    blocks: [
      p(
        "We disclose information to providers that support the relevant function. Vercel hosts and delivers the website. Resend delivers form emails. Google Analytics processes website analytics only after consent. Slack receives internal inquiry notifications only when the optional server-side Slack integration is enabled."
      ),
      p(
        "We may also disclose information to designated client contacts, professional advisers, or public authorities when needed for an engagement, to protect legal rights, or when required by law. A provider does not receive security evidence merely because it supplies an unrelated service."
      ),
    ],
  },
  {
    title: "5. International processing",
    blocks: [
      p(
        "We and our providers may process information in countries other than the country where it was collected. When applicable law requires a transfer mechanism or other safeguards, we use the measures available for that transfer."
      ),
      p(
        "Clients must tell us about applicable location or transfer restrictions before sending regulated information."
      ),
    ],
  },
  {
    title: "6. Retention",
    blocks: [
      p(
        "We keep information only for operational, contractual, security, and legal needs. Ordinary inquiries and related communications are generally retained for up to 12 months after the last meaningful contact."
      ),
      p(
        "Unless an engagement document sets another period, raw assessment evidence is generally kept for up to 30 days after final report delivery or completion of an included retest, whichever is later. Temporary credentials and access tokens are removed when no longer needed. Final reports retained for delivery are generally removed within 90 days after completion."
      ),
      p(
        "Contracts, invoices, payment records, authorization documents, opt-out records, security logs, and legally relevant correspondence are retained for the period required by accounting, tax, contractual, security, dispute, or other legal needs. Information is deleted or de-identified when its retention purpose ends, unless law requires it to be kept."
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
        "We use technical and organizational safeguards suited to the sensitivity of the information, including access controls, encrypted connections, evidence minimization, and retention controls."
      ),
      p("No internet transmission or storage system can be guaranteed completely secure."),
    ],
  },
  {
    title: "9. Your rights",
    blocks: [
      p(
        "Depending on applicable law, you may have rights to confirm whether we process your information, obtain access, correct inaccurate information, request deletion or restriction, object to processing, receive certain information in a portable form, withdraw consent, and complain to a data protection authority."
      ),
      p(
        "Under Turkey's Personal Data Protection Law (KVKK), data subjects may also ask whether personal data is processed, request information about processing, learn its purpose and use, and learn the recipients in Turkey or abroad."
      ),
      p(
        "They may request correction, request deletion or destruction under applicable law and notice of those actions to recipients, object to a result produced solely through automated processing, and seek compensation for damage caused by unlawful processing."
      ),
      p(
        "Submit a request using the email address in section 11. We may need to verify your identity, and legal exceptions may limit a request."
      ),
    ],
  },
  {
    title: "10. Changes to this policy",
    blocks: [
      p(
        "We may update this policy when our website, services, providers, or legal obligations change. The effective date identifies the current version. Material changes affecting an active engagement may also be communicated directly."
      ),
    ],
  },
  {
    title: "11. Data controller and contact",
    blocks: [
      p("Data controller: Omar Geylani, Lead Penetration Tester at ThreatNest."),
      p("Privacy questions and requests can be sent to threatnest@threatnest.com."),
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      effectiveDate="July 25, 2026"
      introduction={[
        "This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit threatnest.com, contact us, or request our services.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/terms", label: "Terms" },
        { href: "/data-handling", label: "Data Handling" },
        { href: "/authorized-testing", label: "Authorized Testing" },
        { href: "/cookies", label: "Cookies" },
      ]}
    />
  );
}
