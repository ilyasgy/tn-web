type SocialItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const SOCIAL_ITEMS: SocialItem[] = [
  {
    href: "https://tr.linkedin.com/company/threatnest/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.56c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/threatnest/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    ),
  },
];

export default function SocialLinks({
  className = "",
  linkClassName = "",
}: {
  className?: string;
  linkClassName?: string;
}) {
  return (
    <div className={["tn-social-list", className].filter(Boolean).join(" ")}>
      {SOCIAL_ITEMS.map((item) => (
        <a
          key={item.label}
          className={["tn-social-link", linkClassName].filter(Boolean).join(" ")}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
