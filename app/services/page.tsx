// app/services/page.tsx
import ServiceCard from "@/app/components/ServiceCard";
import Link from "next/link";

import StatCounter from "@/app/components/StatCounter";
import MinuteCounter from "@/app/components/MinuteCounter";

const ATTACKS_PER_DAY = 600_000_000; // Microsoft says 600M/day
const ATTACKS_PER_MIN = Math.round(ATTACKS_PER_DAY / 1440);


const SERVICES: [string, string, string][] = [
  ["Maintenance & Support", "Updates, fixes, monitoring.", "/service-maintenance.png"],
  ["Performance & Optimization", "Core Web Vitals + speed tuning.", "/service-performance.png"],
  ["Quality Assurance & Reviews", "Bug hunts + pre-launch checks.", "/service-qa.png"],
  ["Consulting", "Architecture guidance and roadmap planning.", "/service-consulting.png"],
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

type ServiceItem = {
  title: string;
  desc: string;
  img: string;
  href: string;
  isNew?: boolean;
};

function Header() {
  return (
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
          <Link href="/services" className="text-white">
            SERVICES
          </Link>
          <Link href="/about" className="hover:text-white transition">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            CONTACT
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-white px-5 py-2 text-xs font-bold tracking-wide text-black transition hover:bg-white/90"
        >
          START PROJECT
        </Link>
      </div>
    </header>
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
        </div>

        <p className="text-xs text-white/45">© {new Date().getFullYear()} ThreatNest. All rights reserved.</p>
      </div>
    </footer>
  );
}

function ServiceGrid() {
  const ALL_SERVICES: ServiceItem[] = [
    {
      title: "Web Development",
      desc: "Landing pages, business sites, and custom builds — fast and clean.",
      img: "/service-dev.png",
      href: SERVICE_ROUTES["Web Development"],
    },
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
    "pointer-events-none absolute inset-0 rounded-[18px] ring-0 ring-transparent transition duration-300 " +
    "group-hover:ring-2 group-hover:ring-white/15";

  return (
    <section className="relative px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Top helper / chips */}
        <div className="mt-10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold tracking-wide text-white/60">
            <span className="text-white/45">TIP</span>
            <span>Security can be added after launch.</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-xs font-bold text-black transition hover:bg-white/90"
            >
              Start project
            </Link>
            <a
              href="#all-services"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold text-white/80 transition hover:bg-white/10 hover:border-white/25"
            >
              View all
            </a>
          </div>
        </div>

        {/* Primary two cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_SERVICES.slice(0, 2).map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group relative rounded-[22px] border bg-black/70 overflow-hidden transition ${
                s.isNew ? "border-[#2cff68]/25 hover:border-[#2cff68]/40" : "border-white/12 hover:border-white/20"
              }`}
            >
              <div className="relative min-h-[260px] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transform-gpu transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {s.isNew ? (
                  <span className="absolute top-4 right-5 text-[#2cff68] text-sm font-bold">new!</span>
                ) : null}

                <div className="absolute bottom-4 right-5 flex items-center gap-2 opacity-0 translate-y-1 transition duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-sm text-white/75">Learn more</span>
                  <span className="text-white/75">→</span>
                </div>
              </div>

              <div className="px-6 py-5">
                <p className="text-white font-semibold text-lg">{s.title}</p>
                <p className="mt-1 text-sm text-white/55">{s.desc}</p>

                {s.isNew ? (
                  <p className="mt-3 text-sm text-white/70 group-hover:text-white transition">
                    see how it works →
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12">
          <div className="w-full bg-black/70 border-y border-white/10 py-4">
            <p className="text-center text-lg font-semibold text-white">All services</p>
          </div>
          <p className="mt-3 text-center text-sm text-white/60" id="all-services">
            Enhancements & ongoing services
          </p>
        </div>

        {/* All cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALL_SERVICES.slice(2).map((s) => (
            <Link key={s.title} href={s.href} className={`${cardBase} ${s.isNew ? "border-[#2cff68]/25 hover:border-[#2cff68]/40" : ""}`}>
              <div className="relative min-h-[200px] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full transform-gpu transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {s.isNew ? (
                  <span className="absolute top-3 right-4 text-[#2cff68] text-sm font-bold">new!</span>
                ) : null}

                <div className="absolute bottom-4 right-5 flex items-center gap-2 opacity-0 translate-y-1 transition duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-sm text-white/75">Learn more</span>
                  <span className="text-white/75">→</span>
                </div>
              </div>

              <div className="px-5 py-4">
                <p className="font-semibold text-white">{s.title}</p>
                <p className="mt-1 text-sm text-white/55">{s.desc}</p>
              </div>

              <div className={ringHover} />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-[28px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="p-8 md:p-10">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">NEXT STEP</p>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-[1.12]">
              Tell us what you want to build.
              <br />
              We’ll reply with clean next steps.
            </h3>
            <p className="mt-5 max-w-2xl text-white/55">
              You don’t need a perfect brief. Just send what you have (idea, examples, pages, goals).
              We’ll scope it properly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                Start project
              </Link>
              <Link
                href={SERVICE_ROUTES["Website Security"]}
                className="inline-flex items-center justify-center rounded-xl border border-[#2cff68]/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-[#2cff68]/40"
              >
                See Website Security <span className="ml-2 text-[#2cff68]">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Background (same vibe as home) */}
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

      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section className="px-6 pt-16 pb-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center text-center">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">SERVICES</p>
              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
                Everything your website needs.
                <br />
                done right.
              </h1>
              <p className="mt-6 max-w-2xl text-white/55 md:text-lg">
                Build the foundation first (design + code + deploy). Add security checks after launch if you want.
              </p>

              <div className="mt-10">
                <div className="relative inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
                  <Link
                    href="/contact"
                    className="relative z-10 rounded-lg bg-white px-9 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                  >
                    Start project
                  </Link>

                  <a
                    href="#all-services"
                    className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Browse services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceGrid />
        <Footer />
      </div>
    </main>
  );
}
