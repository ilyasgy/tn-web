
import ServiceCard from "@/app/components/ServiceCard";

// app/page.tsx (or pages/index.tsx)
// Full home page — continued to the end, cleaned up, and upgraded.
// Notes: removed unused ServiceCard import, fixed invalid Tailwind class (w-145),
// added Contact + Process + FAQ + Footer, and made anchor links real.

import Link from "next/link";

import SecurityImpactSection from "@/app/components/SecurityImpactSection";
import SectionDock from "@/app/components/SectionDock";

const SERVICES: [string, string, string][] = [
  ["Maintenance & Support", "Updates, fixes, monitoring.", "/service-maintenance.png"],
  ["Performance & Optimization", "Core Web Vitals + speed tuning.", "/service-performance.png"],
  ["Quality Assurance & Reviews", "Bug hunts + pre-launch checks.", "/service-qa.png"],
  ["Consulting", "Architecture + roadmap planning.", "/service-consulting.png"],
  ["Analytics & Tracking", "Events, funnels, reporting.", "/service-analytics.png"],
  ["Integrations", "Payments, CRMs, automations.", "/service-integrations.png"],
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
  img: string;
  href: string;
  isNew?: boolean;
};

function ServicesSystemSection() {
  const ALL_SERVICES: ServiceItem[] = [
    {
      title: "Website Security",
      desc: "Quick security check + clear fixes, included or add-on.",
      img: "/service-sec.png",
      href: SERVICE_ROUTES["Website Security"],
      isNew: true,
    },
    ...SERVICES.map(([title, desc, img]) => ({
      title,
      desc,
      img,
      href: SERVICE_ROUTES[title] || "/services",
      isNew: false,
    })),
  ];

  const cardBase =
    "group relative rounded-[18px] overflow-hidden border bg-black/70 transition " +
    "border-white/10 hover:border-white/20";

  const ringHover =
    "pointer-events-none absolute inset-0 rounded-[18px] ring-0 ring-transparent transition duration-300 group-hover:ring-2 group-hover:ring-white/15";

  // TS-safe style with contentVisibility
  const perfStyle = {
    contentVisibility: "auto",
    containIntrinsicSize: "1px 1100px",
  } as any;

  return (
    <section
      id="services"
      className="relative px-6 py-10 bg-black overflow-hidden"
      style={perfStyle}
    >
      {/* grid background */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        {/* Top CTA box */}
        <div className="mx-auto flex h-20 w-full max-w-sm items-center justify-center border border-white/10 bg-black">
          <Link
            href="/contact"
            className="text-white/70 hover:text-white transition text-2xl font-semibold"
          >
            Start your project
          </Link>
        </div>

        {/* Main container */}
        <div className="mt-10 relative rounded-[32px] border border-white/10 bg-black/70 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black/35" />

          {/* Top guide */}
          <div className="relative px-8 pt-8">
            <p className="text-sm text-white/45">security can be added after launch</p>

            <div className="mt-2 flex items-center gap-4">
              <span className="text-lg font-semibold text-white/55">Start your project</span>

              <div className="relative flex-1">
                <div className="h-[2px] w-full bg-white/20" />
                <div className="absolute right-0 top-0 h-[2px] w-[145px] bg-white/35" />
              </div>
            </div>
          </div>

          {/* Start here row */}
          <div className="relative px-8 pt-10 pb-12">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-center">
                {/* LEFT */}
                <div>
                  <p className="text-[1.475rem] leading-tight font-bold text-white">
                    Build the foundation first,
                    <br />
                    Everything else scales from there.
                  </p>

                  <ul className="mt-6 space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-white/40">▸</span>
                      <span>Clean, production-ready codebase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-white/40">▸</span>
                      <span>Optimized for Core Web Vitals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-white/40">▸</span>
                      <span>SEO, analytics, and tracking included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-white/40">▸</span>
                      <span>Optional security review after launch</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-4 rounded-full border border-white/15 bg-black px-16 py-3 transition hover:border-white/30 hover:bg-white/5"
                    >
                      <span className="text-2xl font-semibold text-white">Start Here</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* RIGHT */}
                <Link
                  href={SERVICE_ROUTES["Web Development"]}
                  className="group relative rounded-[22px] border border-white/12 bg-black/70 overflow-hidden"
                >
                  <div className="relative min-h-[260px] overflow-hidden">
                    <img
                      src="/service-dev.png"
                      alt="Web Development"
                      className="absolute inset-0 h-full w-full object-cover
                                 transform-gpu transition duration-700
                                group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  <div className="px-6 py-5">
                    <p className="text-white font-semibold text-lg">Web Development</p>
                    <p className="mt-1 text-sm text-white/55">
                      Landing pages, business websites, and custom builds — fast and clean.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhancements header */}
          <div className="relative mt-8">
            <div className="w-full bg-black/70 border-y border-white/10 py-4">
              <p className="text-center text-lg font-semibold text-white">Enhancements</p>
            </div>
            <p className="mt-3 text-center text-sm text-white/60">Enhancements & ongoing services</p>
          </div>

          {/* Enhancements grid */}
          <div className="relative px-8 pb-12 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ALL_SERVICES.map(({ title, desc, img, href, isNew }) => {
                const newBorder = isNew ? "border-[#2cff68]/35 hover:border-[#2cff68]/55" : "";
                const newBadge = isNew ? (
                  <span className="absolute top-3 right-4 text-[#2cff68] text-sm font-bold">
                    new!
                  </span>
                ) : null;

                return (
                  <Link key={title} href={href} className={`${cardBase} ${newBorder}`}>
                    <div className="relative min-h-[200px] overflow-hidden">
                      <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full
                                   transform-gpu transition duration-700 ease-out
                                   group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {newBadge}

                      <div className="absolute bottom-4 right-5 flex items-center gap-2 opacity-0 translate-y-1 transition duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="text-sm text-white/75">Learn more</span>
                        <span className="text-white/75">→</span>
                      </div>
                    </div>

                    <div className="px-5 py-4">
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-1 text-sm text-white/55">{desc}</p>
                      {isNew ? (
                        <p className="mt-3 text-sm text-white/70 group-hover:text-white transition">
                          see how it works →
                        </p>
                      ) : null}
                    </div>

                    <div className={ringHover} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="text-white/70 hover:text-white transition text-2xl font-semibold tracking-tight"
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
    <section id="process" className="relative px-6 py-24 bg-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.40]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/55">PROCESS</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.15]">
            Simple process.
          </h2>
          <p className="mt-5 max-w-2xl text-white/55">
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
              className="relative rounded-2xl border border-white/10 bg-black/70 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/50">{n}</p>
                <p className="mt-3 text-lg font-semibold text-white">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/70 p-6">
          <p className="text-white/70">
            Want the security scan bundled as a second step after launch?
          </p>
          <Link
            href={SERVICE_ROUTES["Website Security"]}
            className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/25"
          >
            See Website Security <span className="text-white/70">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="relative px-6 py-24 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/55">FAQ</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.15]">
            Quick answers
          </h2>
          <p className="mt-5 text-white/55">
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
              className="group rounded-2xl border border-white/10 bg-black/70 p-6 open:border-white/20 transition"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                <span className="text-white font-semibold">{item.q}</span>
                <span className="text-white/50 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 bg-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.40]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
          {/* Left big CTA */}
          <div className="rounded-[28px] border border-white/10 bg-black/70 overflow-hidden">
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
                LETS START BUILDING
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.12]">
                Ready to build?
                <br />
                We’ll take it live.
              </h2>
              <p className="mt-5 max-w-xl text-white/55">
                Tell us what you want to build.<br /> We’ll handle the rest.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Start project
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/25"
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
                    className="rounded-2xl border border-white/10 bg-black/60 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{t}</p>
                    <p className="mt-1 text-xs text-white/55">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right quick links */}
          <div className="rounded-[28px] border border-white/10 bg-black/70 p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">QUICK LINKS</p>

            <div className="mt-6 space-y-3">
              <Link
                href="/services"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white/75 transition hover:text-white hover:border-white/20"
              >
                <span className="text-sm font-semibold">Services</span>
                <span className="text-white/50">→</span>
              </Link>
              <Link
                href={SERVICE_ROUTES["Web Development"]}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white/75 transition hover:text-white hover:border-white/20"
              >
                <span className="text-sm font-semibold">Web Development</span>
                <span className="text-white/50">→</span>
              </Link>
              <Link
                href={SERVICE_ROUTES["Website Security"]}
                className="flex items-center justify-between rounded-xl border border-[#2cff68]/20 bg-black/60 px-4 py-3 text-white/75 transition hover:text-white hover:border-[#2cff68]/35"
              >
                <span className="text-sm font-semibold">Website Security</span>
                <span className="text-[#2cff68] text-xs font-bold">new</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-white/75 transition hover:text-white hover:border-white/20"
              >
                <span className="text-sm font-semibold">About</span>
                <span className="text-white/50">→</span>
              </Link>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-white">Tell us what you need.</p>
              <p className="mt-2 text-sm text-white/55">
                Use the contact page to share details and we’ll reply with next steps.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-white/80 hover:text-white transition"
              >
                Go to contact <span className="text-white/50">→</span>
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
    <footer className="relative px-6 py-14 bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/white.png"
            alt="ThreatNest logo"
            className="h-10 w-10"
            loading="lazy"
            decoding="async"
          />
          <span className="text-sm font-semibold tracking-[0.22em] text-white/80">
            THREATNEST
          </span>
        </Link>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-wide text-white/60">
          <Link href="/services" className="hover:text-white transition">
            SERVICES
          </Link>
          <Link href="/about" className="hover:text-white transition">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            CONTACT
          </Link>
                    <Link href="/terms" className="hover:text-white transition">
            TERMS
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            PRIVACY
          </Link>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </div>

        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} ThreatNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)]" />
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
                className="h-10 w-10"
                loading="eager"
                decoding="async"
              />
              <span className="text-sm font-semibold tracking-[0.22em]">THREATNEST</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-white/70">
              <Link href="/services" className="hover:text-white transition">
                SERVICES
              </Link>
              <a href="#process" className="hover:text-white transition">
                PROCESS
              </a>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
              <Link href="/contact" className="hover:text-white transition">
                CONTACT
              </Link>
            </nav>

            <a
              href="#contact"
              className="rounded-lg bg-white px-5 py-2 text-xs font-bold tracking-wide text-black transition hover:bg-white/90"
            >
              START PROJECT
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="px-6 pt-67 pb-67">
          <div className="mx-auto max-w-6xl flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold leading-[1.05] md:text-5xl">
              High-performance websites
              <br />
              built for growing businesses
            </h1>

            <p className="mt-10 max-w-lg text-base text-white/55 md:text-lg">
              We design and build fast, modern websites with optional security checks so you can
              scale with confidence.
            </p>

            <div className="mt-12">
              <div className="relative inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
                <a
                  href="#contact"
                  className="relative z-10 rounded-lg bg-white px-9 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Start project
                </a>

                <a
                  href="#services"
                  className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider title block */}
        <div className="relative bg-black h-64 flex items-center justify-center mx-auto overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative text-center flex items-center justify-center bg-black/80 h-32 w-full max-w-3xl border border-white/10 px-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.15]">
              Everything your website needs.
              <br />
              <span className="block mt-2 text-sm md:text-base font-semibold opacity-55">
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