import type { Metadata } from "next";
import PolicyPage, { type PolicySection } from "../components/PolicyPage";

export const metadata: Metadata = {
  title: "Authorized Testing Policy",
  description: "Written authorization, scope, and safety rules for ThreatNest security testing.",
  alternates: { canonical: "/authorized-testing" },
};

const p = (text: string) => ({ type: "paragraph" as const, text });
const bullets = (...items: string[]) => ({ type: "bullets" as const, items });
const warning = (text: string) => ({ type: "warning" as const, text });

const SECTIONS: PolicySection[] = [
  {
    title: "1. Written authorization",
    blocks: [
      p(
        "Security testing does not begin without written authorization from a person who controls the systems being tested.",
      ),
      warning(
        "A form submission, call, email, payment, public exposure, known vulnerability, existing relationship, or this public policy does not authorize testing.",
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
        "Changes to approved assets or access levels require written confirmation before the changed scope is tested.",
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
        "Unless the signed Service Agreement states another period, authorization remains valid for 30 days from signing or until testing is completed, whichever occurs first.",
      ),
      p(
        "Testing uses nondestructive methods. Testing stops at proof of concept when further exploitation would add operational risk or expose more information than needed to validate a finding.",
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
        "ThreatNest does not contact a hosting provider, content delivery network, or other third-party service on the client's behalf without prior client consent.",
      ),
      p(
        "Evidence of authority may be requested. Testing is refused or stopped when ownership or permission cannot be confirmed.",
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
        "A potential concern involving an out-of-scope integration may be documented without actively testing that system. Testing stops if it reaches an unintended system, and the designated client contact is notified.",
      ),
    ],
  },
  {
    title: "6. Stopping a test",
    blocks: [
      p(
        "The client may request an immediate pause or revoke authorization through the emergency contact method in the signed Service Agreement.",
      ),
      p("Testing may be paused or stopped when:"),
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
        "A validated critical issue may be reported to the designated contact before the final report. The client remains responsible for operational, legal, and regulatory decisions in response.",
      ),
      p(
        "Engagement findings are confidential and are not publicly disclosed without written permission or a binding legal requirement.",
      ),
    ],
  },
];

export default function AuthorizedTestingPage() {
  return (
    <PolicyPage
      title="Authorized Testing Policy"
      summary="This Authorized Testing Policy applies to clients, authorized representatives, system owners, and third-party providers connected to a requested test. It explains the written authorization, exact scope, testing window, safety controls, and stop conditions required for security testing. This public policy does not itself grant permission to test any system."
      currentPath="/authorized-testing"
      sections={SECTIONS}
      contactText="Questions about ownership, authority, scope, or provider permission can be sent to threatnest@threatnest.com. Active engagements must use the emergency contact method in the signed Service Agreement."
    />
  );
}
