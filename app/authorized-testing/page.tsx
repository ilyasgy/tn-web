import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Authorized Testing Policy",
  description: "The written authorization, scope, and safety requirements for our security testing.",
  alternates: { canonical: "/authorized-testing" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Written authorization",
    blocks: [
      p(
        "We do not perform active security testing without written authorization from a person who has authority over the systems being tested.",
      ),
      p(
        "A form submission, call, email, payment, public exposure, known vulnerability, or existing relationship does not authorize testing. This policy does not authorize testing.",
      ),
      p(
        "Authorization must be recorded in signed Engagement Documents before any active testing begins.",
      ),
    ],
  },
  {
    title: "2. Approved scope",
    blocks: [
      p("The written scope must identify:"),
      bullets(
        "the client and authorized representative;",
        "each approved domain, subdomain, application, API, IP address, repository, account, and environment;",
        "systems and services that are excluded;",
        "any approved user roles or test accounts; and",
        "special operational, confidentiality, or data handling restrictions.",
      ),
      p(
        "A change to the approved assets or access level requires written confirmation before we test the changed scope.",
      ),
    ],
  },
  {
    title: "3. Testing period and methods",
    blocks: [
      p(
        "The Engagement Documents must state the testing period, allowed and prohibited methods, emergency contacts, stop procedure, and any provider requirements.",
      ),
      p(
        "We use nondestructive methods and stop at proof of concept when further exploitation would add operational risk or expose more information than needed to validate a finding.",
      ),
      p(
        "Denial of service, destructive activity, social engineering, persistence, malware, production data alteration, and other high-risk methods are excluded unless expressly approved in writing with appropriate safeguards.",
      ),
    ],
  },
  {
    title: "4. Client authority",
    blocks: [
      p(
        "The client must own each system in scope or hold valid authority from its owner. It must also obtain any permission required from hosting providers, software providers, business partners, or other third parties.",
      ),
      p(
        "We may request evidence of authority and may refuse or stop testing when ownership or permission cannot be confirmed.",
      ),
    ],
  },
  {
    title: "5. Out-of-scope systems",
    blocks: [
      p(
        "Connected or embedded third party systems remain out of scope unless their owner or provider has granted permission. This includes payment services, externally operated patient portals, cloud services, content delivery networks, analytics platforms, scheduling tools, and other hosted applications.",
      ),
      p(
        "We may document a potential concern involving an out-of-scope integration without actively testing that system. If testing reaches an unintended system, we will stop that activity and notify the designated client contact.",
      ),
    ],
  },
  {
    title: "6. Stopping a test",
    blocks: [
      p(
        "The client may request an immediate pause or revoke authorization through the emergency contact method in the Rules of Engagement.",
      ),
      p("We may pause or stop testing when:"),
      bullets(
        "authorization is withdrawn, disputed, or no longer clear;",
        "unexpected instability or operational impact occurs;",
        "a system owner or provider objects;",
        "sensitive information is unexpectedly exposed;",
        "scope information is inaccurate;",
        "continued work may be unlawful; or",
        "continuing would create unreasonable risk.",
      ),
      p(
        "Testing resumes only after the issue is resolved, the scope remains safe, and written authorization is still valid.",
      ),
    ],
  },
  {
    title: "7. Reporting concerns",
    blocks: [
      p(
        "Questions about authority, scope, unexpected impact, or exposed sensitive information must be reported through the agreed emergency contact as soon as possible.",
      ),
      p(
        "We may report a validated critical issue to the designated contact before the final report. The client remains responsible for operational, legal, and regulatory decisions in response.",
      ),
      p(
        "Engagement findings are confidential and are not publicly disclosed without written permission or a binding legal requirement.",
      ),
    ],
  },
  {
    title: "8. Contact",
    blocks: [p("Questions about testing authorization may be sent to threatnest@threatnest.com.")],
  },
];

export default function AuthorizedTestingPage() {
  return (
    <PolicyPage
      title="Authorized Testing Policy"
      effectiveDate="July 25, 2026"
      introduction={[
        "This policy explains the written authorization required before we perform security testing.",
      ]}
      sections={SECTIONS}
      relatedLinks={[
        { href: "/terms", label: "Terms" },
        { href: "/data-handling", label: "Data Handling" },
        { href: "/privacy", label: "Privacy Policy" },
      ]}
    />
  );
}
