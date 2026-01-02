import React from "react"; // <--- Added import to fix JSX type error
import Link from "next/link";

// --- ICONS ---
const Icons = {
  WebDev: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 19.5" />
    </svg>
  ),
  Security: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  ),
  Maintenance: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  Performance: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  QA: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  Consulting: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
  ),
  Analytics: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  Integrations: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  ),
};

const SERVICE_LIST = [
  {
    title: "Maintenance & Support",
    desc: "Updates, fixes, monitoring.",
    price: "$299/mo",
    icon: Icons.Maintenance,
    href: "/services/maintenance-support",
  },
  {
    title: "Performance & Optimization",
    desc: "Core Web Vitals + speed tuning.",
    price: "$750",
    icon: Icons.Performance,
    href: "/services/performance-optimization",
  },
  {
    title: "Quality Assurance & Reviews",
    desc: "Bug hunts + pre-launch checks.",
    price: "$500",
    icon: Icons.QA,
    href: "/services/quality-assurance",
  },
  {
    title: "Consulting",
    desc: "Architecture guidance and roadmap.",
    price: "$150/hr",
    icon: Icons.Consulting,
    href: "/services/consulting",
  },
  {
    title: "Analytics & Tracking",
    desc: "Events, funnels, reporting.",
    price: "$400",
    icon: Icons.Analytics,
    href: "/services/analytics-tracking",
  },
  {
    title: "Integrations",
    desc: "Payments, CRMs, automations.",
    price: "From $600",
    icon: Icons.Integrations,
    href: "/services/integrations",
  },
];

const SERVICE_ROUTES: Record<string, string> = {
  "Web Development": "/services/web-development",
  "Website Security": "/services/website-security",
  "Maintenance & Support": "/services/maintenance-support",
  "Performance & Optimization": "/services/performance-optimization",
  "Quality Assurance & Reviews": "/services/quality-assurance",
  "Consulting": "/services/consulting",
  "Analytics & Tracking": "/services/analytics-tracking",
  "Integrations": "/services/integrations",
};

export default function ServicesPage() {
  const CardGrid = () => (
    <div
      className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
  );

  return (
    <main className="relative min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white overflow-hidden transition-colors">
      <div className="absolute inset-0 -z-10 bg-white/90 dark:bg-black/80" />
      
      {/* Header */}
      <header className="px-6 pt-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="Logo" className="h-10 w-10 invert dark:invert-0 transition" />
            <span className="text-sm font-semibold tracking-[0.22em]">THREATNEST</span>
          </Link>
          <Link href="/contact" className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90 transition">START PROJECT</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center">
        <h1 className="mt-5 text-4xl md:text-5xl font-bold">Services & Pricing</h1>
        <p className="mt-4 opacity-60">Transparent pricing. No hidden fees.</p>
      </section>

      {/* Primary Grid (Large cards on top) */}
      <section className="px-6 pb-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1. Web Dev (Large) */}
          <Link
            href="/services/web-development"
            className="group relative flex flex-col justify-between rounded-[24px] border border-neutral-200 bg-white dark:bg-[#080808] dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-white/25 hover:-translate-y-1 shadow-sm md:min-h-[280px]"
          >
            <CardGrid />
            <div className="relative h-48 flex items-center justify-center text-neutral-800 dark:text-white group-hover:scale-110 transition-transform duration-500">
              {Icons.WebDev}
            </div>
            <div className="px-8 pb-8 relative z-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                <div>
                  <p className="font-bold text-xl">Web Development</p>
                  <p className="mt-2 text-sm opacity-55">Landing pages & custom builds.</p>
                </div>
                <span className="rounded bg-neutral-100 px-3 py-1.5 text-xs font-bold text-neutral-600 dark:bg-white/10 dark:text-white whitespace-nowrap">
                  from $700
                </span>
              </div>
            </div>
          </Link>

          {/* 2. Security (Large) */}
          <Link
            href="/services/website-security"
            className="group relative flex flex-col justify-between rounded-[24px] border border-[#2cff68]/30 dark:border-[#2cff68]/20 bg-white dark:bg-[#080808] overflow-hidden transition-all duration-300 hover:border-[#2cff68]/60 dark:hover:border-[#2cff68]/40 hover:-translate-y-1 shadow-sm md:min-h-[280px]"
          >
            <CardGrid />
            {/* "NEW" badge moved to absolute top-right, away from price */}
            <div className="absolute top-6 right-6 z-20">
              <span className="text-[#2cff68] text-[10px] font-bold tracking-widest border border-[#2cff68]/30 px-2 py-1 rounded-full bg-[#2cff68]/5">NEW</span>
            </div>

            <div className="relative h-48 flex items-center justify-center text-[#2cff68] group-hover:scale-110 transition-transform duration-500">
              {Icons.Security}
            </div>
            <div className="px-8 pb-8 relative z-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
                <div>
                  <p className="font-bold text-xl">Website Security</p>
                  <p className="mt-2 text-sm opacity-55">Fixes & protection.</p>
                </div>
                <span className="rounded bg-[#2cff68]/10 px-3 py-1.5 text-xs font-bold text-[#2cff68] whitespace-nowrap">
                  $300
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Secondary Grid (Smaller cards below) */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICE_LIST.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col justify-between rounded-[18px] border border-neutral-200 bg-white dark:bg-[#080808] dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-white/25 hover:-translate-y-1 shadow-sm h-[240px]"
            >
              <CardGrid />
              <div className="relative flex-1 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {s.icon}
              </div>
              <div className="px-6 pb-6 relative z-10">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-base leading-tight">{s.title}</p>
                  <span className="rounded bg-neutral-100 px-2 py-1 text-[10px] font-bold text-neutral-600 dark:bg-white/10 dark:text-white whitespace-nowrap ml-2">
                    {s.price}
                  </span>
                </div>
                <p className="mt-2 text-xs opacity-55 line-clamp-1">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-14 border-t border-neutral-200 bg-neutral-50 dark:bg-black dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/white.png"
              alt="Logo"
              className="h-10 w-10 invert dark:invert-0 transition"
              loading="lazy"
              decoding="async"
            />
            <span className="text-sm font-semibold tracking-[0.22em] text-neutral-800 dark:text-white/80">
              THREATNEST
            </span>
          </Link>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-wide text-neutral-600 dark:text-white/60">
            <Link href="/services" className="hover:text-black dark:hover:text-white transition">
              SERVICES
            </Link>
            <Link href="/about" className="hover:text-black dark:hover:text-white transition">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
              CONTACT
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
              TERMS
            </Link>
            <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">
              PRIVACY
            </Link>
            <a href="#faq" className="hover:text-black dark:hover:text-white transition">
              FAQ
            </a>
          </div>

          <p className="text-xs text-neutral-400 dark:text-white/45">
            © {new Date().getFullYear()} ThreatNest. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}