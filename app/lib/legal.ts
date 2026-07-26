export const LEGAL_LAST_UPDATED = "July 26, 2026";
export const LEGAL_LAST_UPDATED_ISO = "2026-07-26";

export type LegalDocument = {
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "Website and privacy" | "Client engagements" | "Security testing and evidence";
};

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    shortTitle: "Privacy Policy",
    description:
      "Personal information collected through the website and security engagements, how it is used, and available privacy rights.",
    category: "Website and privacy",
  },
  {
    href: "/cookies",
    title: "Cookie Policy",
    shortTitle: "Cookie Policy",
    description:
      "Necessary browser storage, optional Google Analytics, and controls for accepting or rejecting analytics.",
    category: "Website and privacy",
  },
  {
    href: "/terms",
    title: "Terms of Use",
    shortTitle: "Terms of Use",
    description:
      "The rules for using the website, requesting services, and understanding how engagement documents govern paid work.",
    category: "Client engagements",
  },
  {
    href: "/authorized-testing",
    title: "Authorized Testing Policy",
    shortTitle: "Authorized Testing",
    description:
      "The written authorization, exact scope, testing window, safety, pause, and revocation requirements for security testing.",
    category: "Security testing and evidence",
  },
  {
    href: "/data-handling",
    title: "Data Handling Policy",
    shortTitle: "Data Handling",
    description:
      "How credentials, assessment evidence, reports, sensitive information, retention, and deletion are handled.",
    category: "Security testing and evidence",
  },
];
