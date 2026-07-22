import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Authorized Testing Policy",
  description:
    "The minimum authorization, scope, personnel, and safe testing conditions for ThreatNest security assessments.",
  alternates: { canonical: "/authorized-testing" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Written authorization required",
    blocks: [
      p("ThreatNest does not perform active penetration testing without written authorization from a person who has authority over the systems being tested."),
      p("A form submission, introductory call, payment, email inquiry, public vulnerability, or publicly reachable system is not sufficient authorization."),
    ],
  },
  {
    title: "2. Required authorization details",
    blocks: [
      p("Before testing begins, the parties must identify:"),
      bullets(
        "the client’s legal or organizational identity;",
        "the authorized representative;",
        "the primary domain or application;",
        "each approved subdomain, API, IP address, repository, account, or environment;",
        "excluded systems and third party services;",
        "the testing period;",
        "approved testing methods;",
        "prohibited activities;",
        "approved testing personnel;",
        "emergency contacts;",
        "the procedure for stopping testing;",
        "and any special operational or data handling restrictions."
      ),
    ],
  },
  {
    title: "3. Approved personnel",
    blocks: [
      p("Engagements are led by Omar Geylani."),
      p("Supporting ThreatNest personnel may participate only where their role is approved under the engagement process and they are subject to the same confidentiality, scope, and data handling requirements."),
    ],
  },
  {
    title: "4. Third party systems",
    blocks: [
      p("Authorization from the client applies only to systems the client owns or is legally authorized to include."),
      p("Embedded or connected third party services are excluded unless the relevant owner or provider has granted permission."),
      p("ThreatNest may identify potential concerns involving third party integrations without actively testing the third party."),
    ],
  },
  {
    title: "5. Safe testing standard",
    blocks: [
      p("ThreatNest uses nondestructive methods and minimizes interaction with real information."),
      p("Testing stops at proof of concept where further exploitation would unnecessarily increase risk or expose additional information."),
      p("ThreatNest does not intentionally retain or exfiltrate patient information or unrelated confidential records."),
    ],
  },
  {
    title: "6. Immediate findings",
    blocks: [
      p("Where ThreatNest validates a critical issue presenting a credible immediate risk, it may notify the designated emergency contact before the final report."),
      p("The client is responsible for determining and performing the operational, legal, or regulatory response."),
    ],
  },
  {
    title: "7. Testing pause or revocation",
    blocks: [
      p("The client may request an immediate pause through the agreed emergency contact."),
      p("ThreatNest may also pause testing when:"),
      bullets(
        "unexpected instability occurs;",
        "scope or ownership becomes uncertain;",
        "a third party objects;",
        "sensitive information is unexpectedly exposed;",
        "authorization is withdrawn;",
        "or continued testing would create unreasonable risk."
      ),
      p("Testing resumes only after the issue is resolved and authorization remains valid."),
    ],
  },
  {
    title: "8. No public disclosure",
    blocks: [
      p("Findings discovered during a client engagement are confidential."),
      p("ThreatNest will not publicly disclose a client vulnerability without the client’s written permission or a binding legal requirement."),
    ],
  },
  {
    title: "9. Contact",
    blocks: [p("Questions concerning authorization may be sent to threatnest@threatnest.com.")],
  },
];

export default function AuthorizedTestingPage() {
  return (
    <PolicyPage
      title="Authorized Testing Policy"
      effectiveDate="July 19, 2026"
      introduction={[
        "This policy explains the minimum conditions under which ThreatNest performs security testing.",
        "It does not itself authorize testing and does not replace a signed Authorization to Test, Statement of Work, or Rules of Engagement.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/terms", label: "Terms" },
        { href: "/data-handling", label: "Data Handling" },
        { href: "/privacy", label: "Privacy Notice" },
      ]}
    />
  );
}
