import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSection";
import SectionDock from "@/app/components/SectionDock";

// --- ICONS ---
const Icons = {
  WebDev: (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-16 h-16">
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

const SERVICES = [
  { title: "Maintenance & Support", desc: "Updates, fixes, monitoring.", icon: Icons.Maintenance },
  { title: "Performance & Optimization", desc: "Core Web Vitals + speed tuning.", icon: Icons.Performance },
  { title: "Quality Assurance & Reviews", desc: "Bug hunts + pre-launch checks.", icon: Icons.QA },
  { title: "Consulting", desc: "Architecture + roadmap planning.", icon: Icons.Consulting },
  { title: "Analytics & Tracking", desc: "Events, funnels, reporting.", icon: Icons.Analytics },
  { title: "Integrations", desc: "Payments, CRMs, automations.", icon: Icons.Integrations },
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

const DOCK_ITEMS = [
  { id: "services", label: "Services" },
  { id: "security", label: "Security" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

type ServiceItem = {
  title: string;
  desc: string;
  icon: JSX.Element;
  href: string;
  isNew?: boolean;
};

function ServicesSystemSection() {
  const ALL_SERVICES: ServiceItem[] = [
    {
      title: "Website Security",
      desc: "Quick security check + clear fixes, included or add-on.",
      icon: Icons.Security,
      href: SERVICE_ROUTES["Website Security"],
      isNew: true,
    },
    ...SERVICES.map((s) => ({
      ...s,
      href: SERVICE_ROUTES[s.title] || "/services",
      isNew: false,
    })),
  ];

  const cardBase =
    "group relative flex flex-col justify-between rounded-[18px] border transition-all duration-300 " +
    "border-neutral-200 bg-white dark:border-white/10 dark:bg-[#080808] " +
    "hover:border-neutral-400 dark:hover:border-white/25 hover:-translate-y-1 shadow-sm";

  // Grid background pattern
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

  // Using inline style for content-visibility
  const sectionStyle = {
    contentVisibility: "auto" as const,
    containIntrinsicSize: "1px 1100px",
  };

  return (
    <section
      id="services"
      className="relative px-6 py-10 bg-neutral-50 dark:bg-black overflow-hidden transition-colors"
      style={sectionStyle as any}
    >
      <div className="relative mx-auto max-w-screen-2xl">
        {/* Top CTA box */}
        <div className="mx-auto flex h-20 w-full max-w-sm items-center justify-center border border-neutral-200 bg-white dark:border-white/10 dark:bg-black">
          <Link
            href="/contact"
            className="text-neutral-600 hover:text-black dark:text-white/70 dark:hover:text-white transition text-2xl font-semibold"
          >
            Start your project
          </Link>
        </div>

        {/* Main container */}
        <div className="mt-10 relative rounded-[32px] border border-neutral-200 bg-white/80 dark:border-white/10 dark:bg-black/70 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.5] via-transparent to-neutral-100/50 dark:from-white/[0.02] dark:to-black/35 pointer-events-none" />

          {/* Top guide */}
          <div className="relative px-8 pt-8">
            <p className="text-sm text-neutral-500 dark:text-white/45">security can be added after launch</p>

            <div className="mt-2 flex items-center gap-4">
              <span className="text-lg font-semibold text-neutral-400 dark:text-white/55">Start your project</span>

              <div className="relative flex-1">
                <div className="h-[2px] w-full bg-neutral-200 dark:bg-white/20" />
                <div className="absolute right-0 top-0 h-[2px] w-[145px] bg-neutral-300 dark:bg-white/35" />
              </div>
            </div>
          </div>

          {/* Start here row */}
          <div className="relative px-8 pt-10 pb-12">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-center">
                {/* LEFT */}
                <div>
                  <p className="text-[1.475rem] leading-tight font-bold text-black dark:text-white">
                    Build the foundation first,
                    <br />
                    Everything else scales from there.
                  </p>

                  <ul className="mt-6 space-y-3 text-neutral-600 dark:text-white/70">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-neutral-400 dark:text-white/40">▸</span>
                      <span>Clean, production-ready codebase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-neutral-400 dark:text-white/40">▸</span>
                      <span>Optimized for Core Web Vitals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-neutral-400 dark:text-white/40">▸</span>
                      <span>SEO, analytics, and tracking included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-neutral-400 dark:text-white/40">▸</span>
                      <span>Optional security review after launch</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-4 rounded-full border border-neutral-200 bg-white px-16 py-3 transition hover:border-neutral-300 hover:bg-neutral-50 dark:border-white/15 dark:bg-black dark:hover:bg-white/5"
                    >
                      <span className="text-2xl font-semibold text-black dark:text-white">Start Here</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* RIGHT - WEB DEV CARD (With Logo) */}
                <Link
                  href={SERVICE_ROUTES["Web Development"]}
                  className="group relative flex flex-col justify-between rounded-[22px] border border-neutral-200 bg-white dark:border-white/12 dark:bg-black/70 overflow-hidden shadow-lg dark:shadow-none min-h-[300px]"
                >
                  <CardGrid />
                  <div className="relative h-48 flex items-center justify-center text-neutral-800 dark:text-white group-hover:scale-110 transition-transform duration-500">
                    {Icons.WebDev}
                  </div>

                  <div className="px-6 py-5 relative z-10">
                    <p className="text-black dark:text-white font-semibold text-lg">Web Development</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-white/55">
                      Landing pages, business websites, and custom builds — fast and clean.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhancements header */}
          <div className="relative mt-8">
            <div className="w-full bg-neutral-100 dark:bg-black/70 border-y border-neutral-200 dark:border-white/10 py-4">
              <p className="text-center text-lg font-semibold text-black dark:text-white">Enhancements</p>
            </div>
            <p className="mt-3 text-center text-sm text-neutral-500 dark:text-white/60">Enhancements & ongoing services</p>
          </div>

          {/* Enhancements grid (LOGOS) */}
          <div className="relative px-8 pb-12 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ALL_SERVICES.map(({ title, desc, icon, href, isNew }) => {
                const newBorder = isNew 
                  ? "border-[#2cff68]/50 dark:border-[#2cff68]/35 hover:border-[#2cff68]" 
                  : "";
                
                const newBadge = isNew ? (
                  <span className="absolute top-4 right-4 text-[#2cff68] text-[10px] font-bold tracking-widest border border-[#2cff68]/30 px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                ) : null;

                return (
                  <Link key={title} href={href} className={`${cardBase} ${newBorder}`}>
                    <CardGrid />
                    
                    {newBadge}

                    <div className="relative h-32 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      {/* Special color for security icon if needed */}
                      <span className={title === "Website Security" ? "text-[#2cff68]" : ""}>
                        {icon}
                      </span>
                    </div>

                    <div className="px-6 pb-6 relative z-10">
                      <p className="font-semibold text-black dark:text-white">{title}</p>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-white/55">{desc}</p>
                      {isNew ? (
                        <p className="mt-3 text-sm text-neutral-900 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition">
                          see how it works →
                        </p>
                      ) : null}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="text-neutral-600 hover:text-black dark:text-white/70 dark:hover:text-white transition text-2xl font-semibold tracking-tight"
              >
                start your project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative px-6 py-24 bg-white dark:bg-black overflow-hidden transition-colors">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.40]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">PROCESS</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.15] text-black dark:text-white">
            Simple process.
          </h2>
          <p className="mt-5 max-w-2xl text-neutral-600 dark:text-white/55">
            We build it properly, get it live, and hand everything over. Security checks are optional after launch.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            ["01", "Scope", "We define pages, goals, and what “done” means."],
            ["02", "Build", "We ship a clean UI + production-ready code."],
            ["03", "Polish", "Performance, SEO, analytics, QA pass."],
            ["04", "Launch", "Deploy + optional security review after release."],
          ].map(([n, title, desc]) => (
            <div
              key={n}
              className="relative rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-black/70 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-white/[0.03]" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/50">{n}</p>
                <p className="mt-3 text-lg font-semibold text-black dark:text-white">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-white/55">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-black/70 p-6">
          <p className="text-neutral-600 dark:text-white/70">
            Want the security scan bundled as a second step after launch?
          </p>
          <Link
            href={SERVICE_ROUTES["Website Security"]}
            className="inline-flex items-center gap-3 rounded-xl border border-neutral-300 bg-white dark:border-white/15 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-black dark:text-white transition hover:bg-neutral-100 dark:hover:bg-white/10"
          >
            See Website Security <span className="text-neutral-400 dark:text-white/70">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="relative px-6 py-24 bg-neutral-50 dark:bg-black overflow-hidden transition-colors">
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">FAQ</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.15] text-black dark:text-white">
            Quick answers
          </h2>
          <p className="mt-5 text-neutral-600 dark:text-white/55">
            What to know before starting.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {[
            {
              q: "What can you build for me?",
              a: "Landing pages, business sites, and custom builds. Fast, clean UI, optimized performance, and a real deploy setup.",
            },
            {
              q: "Is security part of the build or separate?",
              a: "We build the site foundation first. After launch, you can add the security check as a follow-up step (or bundle it).",
            },
            {
              q: "Is performance handled properly?",
              a: "Yes. We optimize Core Web Vitals, images, and code structure, then verify everything with real checks.",
            },
            {
              q: "Is there support after launch?",
              a: "Yes. Maintenance, monitoring, updates, performance tuning, analytics, and integrations are available as ongoing services.",
            },
            {
              q: "How does this actually start?",
              a: "You send the details through the contact page. We review the scope, confirm what makes sense, and outline next steps before any work begins.",
            },
            {
              q: "How involved do I need to be?",
              a: "Minimal. We’ll ask for what we need upfront, then handle the build. You’ll get updates and review points without constant back-and-forth.",
            },
            {
              q: "Do I fully own the site after delivery?",
              a: "Yes. The code, assets, and deployment are yours. Nothing is locked or tied to us.",
            },
            {
              q: "What happens if I need changes later?",
              a: "Small changes are easy. Larger updates can be handled as a follow-up or ongoing support, depending on scope.",
            },

          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-black/70 p-6 open:border-neutral-300 dark:open:border-white/20 transition shadow-sm dark:shadow-none"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                <span className="text-black dark:text-white font-semibold">{item.q}</span>
                <span className="text-neutral-400 dark:text-white/50 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-white/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 bg-white dark:bg-black overflow-hidden transition-colors">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.40]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
          {/* Left big CTA */}
          <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-black/70 overflow-hidden">
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">
                LETS START BUILDING
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.12] text-black dark:text-white">
                Ready to build?
                <br />
                We’ll take it live.
              </h2>
              <p className="mt-5 max-w-xl text-neutral-600 dark:text-white/55">
                Tell us what you want to build.<br /> We’ll handle the rest.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-7 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  Start project
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-neutral-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/25"
                >
                  View services
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  ["Fast builds", "Clean code + fast deploy"],
                  ["Performance", "Core Web Vitals focus"],
                  ["Optional security", "Add after launch"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-black/60 p-4"
                  >
                    <p className="text-sm font-semibold text-black dark:text-white">{t}</p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-white/55">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right quick links */}
          <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-black/70 p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">QUICK LINKS</p>

            <div className="mt-6 space-y-3">
              <Link
                href="/services"
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:border-neutral-300 dark:border-white/10 dark:bg-black/60 dark:text-white/75 dark:hover:text-white dark:hover:border-white/20"
              >
                <span className="text-sm font-semibold">Services</span>
                <span className="text-neutral-400 dark:text-white/50">→</span>
              </Link>
              <Link
                href={SERVICE_ROUTES["Web Development"]}
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:border-neutral-300 dark:border-white/10 dark:bg-black/60 dark:text-white/75 dark:hover:text-white dark:hover:border-white/20"
              >
                <span className="text-sm font-semibold">Web Development</span>
                <span className="text-neutral-400 dark:text-white/50">→</span>
              </Link>
              <Link
                href={SERVICE_ROUTES["Website Security"]}
                className="flex items-center justify-between rounded-xl border border-[#2cff68]/30 bg-white px-4 py-3 text-neutral-700 transition hover:border-[#2cff68]/50 dark:border-[#2cff68]/20 dark:bg-black/60 dark:text-white/75 dark:hover:text-white dark:hover:border-[#2cff68]/35"
              >
                <span className="text-sm font-semibold">Website Security</span>
                <span className="text-[#2cff68] text-xs font-bold">new</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:border-neutral-300 dark:border-white/10 dark:bg-black/60 dark:text-white/75 dark:hover:text-white dark:hover:border-white/20"
              >
                <span className="text-sm font-semibold">About</span>
                <span className="text-neutral-400 dark:text-white/50">→</span>
              </Link>
            </div>

            <div className="mt-10 border-t border-neutral-200 dark:border-white/10 pt-6">
              <p className="text-sm font-semibold text-black dark:text-white">Tell us what you need.</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-white/55">
                Use the contact page to share details and we’ll reply with next steps.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-neutral-700 hover:text-black dark:text-white/80 dark:hover:text-white transition"
              >
                Go to contact <span className="text-neutral-400 dark:text-white/50">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
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
  );
}

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen text-neutral-900 dark:text-white overflow-hidden bg-white dark:bg-black transition-colors">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white dark:bg-black/65" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 pt-5">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/white.png"
                alt="ThreatNest logo"
                className="h-10 w-10 invert dark:invert-0 transition"
                loading="eager"
                decoding="async"
              />
              <span className="text-sm font-semibold tracking-[0.22em]">THREATNEST</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-neutral-600 dark:text-white/70">
              <Link href="/services" className="hover:text-black dark:hover:text-white transition">
                SERVICES
              </Link>
              <a href="#process" className="hover:text-black dark:hover:text-white transition">
                PROCESS
              </a>
              <a href="#faq" className="hover:text-black dark:hover:text-white transition">
                FAQ
              </a>
              <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
                CONTACT
              </Link>
            </nav>

            <a
              href="#contact"
              className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold tracking-wide text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90 transition"
            >
              START PROJECT
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-6xl flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl text-black dark:text-white">
              High-performance websites
              <br />
              built for growing businesses
            </h1>

            <p className="mt-10 max-w-lg text-base text-neutral-600 dark:text-white/55 md:text-lg">
              We design and build fast, modern websites with optional security checks so you can
              scale with confidence.
            </p>

            <div className="mt-12">
              <div className="relative inline-flex rounded-xl border border-neutral-300 bg-neutral-100 p-1 dark:border-white/15 dark:bg-white/5">
                <a
                  href="#contact"
                  className="relative z-10 rounded-lg bg-black px-9 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  Start project
                </a>

                <a
                  href="#services"
                  className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-200 dark:text-white/90 dark:hover:bg-white/10 transition"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider title block */}
        <div className="relative bg-neutral-100 dark:bg-black h-64 flex items-center justify-center mx-auto overflow-hidden transition-colors">
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative text-center flex items-center justify-center bg-white/90 dark:bg-black/80 h-32 w-full max-w-3xl border border-neutral-200 dark:border-white/10 px-6 backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] text-black dark:text-white">
              Everything your website needs.
              <br />
              <span className="block mt-2 text-sm md:text-base font-semibold text-neutral-500 dark:text-white/55">
                performance, security, and structure — done right.
              </span>
            </h2>
          </div>
        </div>

        {/* Services */}
        <section id="services">
          <ServicesSystemSection />
        </section>

        {/* Security impact */}
        <section id="security">
          <SecurityImpactSection />
        </section>

        <section id="process">
          <ProcessSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer />
      </div>
      <SectionDock items={DOCK_ITEMS} offset={110} showAfter={220} />
    </main>
  );
}