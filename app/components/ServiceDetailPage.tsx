import Link from "next/link";

type Block = {
  title: string;
  desc: string;
};

type ListSection = {
  label: string; // small label like "INCLUDED" / "GOOD FOR"
  title: string;
  items: string[];
  accent?: "green" | "white";
};

type ServiceDetailConfig = {
  badge?: "NEW";
  title: string;
  subtitle: string; // 1–2 lines max, human, not salesy
  image: string; // hero image path
  primaryCtaText: string;
  primaryCtaHref: string;

  sections: {
    what: Block[]; // what we do
    includes: ListSection;
    goodFor: ListSection;
    howItGoes: { n: string; title: string; desc: string }[];
  };

  accent?: "green" | "white";
};

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
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.12]">
                Want this on your site?
              </h2>
              <p className="mt-5 max-w-xl text-white/55">
                If this fits what you need, <br />we’ll help you apply it.
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
                  Ask a question
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  ["Clear Scope", "Pages, priorities, and next steps"],
                  ["Clean execution", "Built properly"],
                  ["Optional add-ons", "Security, performance, ongoing support"],
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

                <p className="text-sm font-semibold text-white mt-9">
                Not sure yet?
                <span className="mt-2 block text-sm font-normal text-white/55 leading-relaxed">
                    Use the contact page to describe your situation.
                </span>
                </p>

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

export default function ServiceDetailPage({ cfg }: { cfg: ServiceDetailConfig }) {
  const accentBorder =
    cfg.accent === "green" ? "border-[#2cff68]/25" : "border-white/12";
  const accentBadge =
    cfg.badge === "NEW" ? (
      <span className="ml-3 align-middle text-[#2cff68] text-xs font-bold tracking-[0.22em]">
        NEW
      </span>
    ) : null;

  return (
    <main className="relative text-white overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
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

      {/* Hero */}
      <section className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">SERVICE</p>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
                {cfg.title}
                {accentBadge}
              </h1>

              <p className="mt-6 text-white/55 md:text-lg leading-relaxed max-w-2xl">
                {cfg.subtitle}
              </p>

              <div className="mt-10 inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
                <Link
                  href={cfg.primaryCtaHref}
                  className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  {cfg.primaryCtaText}
                </Link>
                <Link
                  href="/services"
                  className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Back to services
                </Link>
              </div>
            </div>

            {/* Visual card */}
            <div className={`group relative rounded-[22px] ${accentBorder} bg-black/70 overflow-hidden border`}>
              <div className="relative min-h-[250px] overflow-hidden">
                <img
                  src={cfg.image}
                  alt={cfg.title}
                  className="absolute inset-0 h-full w-full object-cover transform-gpu transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              </div>
              <div className="px-6 py-5">
                <p className="text-white font-semibold text-lg">Summary</p>
                <p className="mt-1 text-sm text-white/55">{cfg.title} — done clean.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">What we do</p>
            <p className="mt-1 text-center text-sm text-white/55">
              Straight to the point.
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cfg.sections.what.map((b) => (
              <div
                key={b.title}
                className="relative rounded-2xl border border-white/10 bg-black/60 p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
                <div className="relative">
                  <p className="text-white font-semibold">{b.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included + Good for */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {[cfg.sections.includes, cfg.sections.goodFor].map((sec) => {
            const isGreen = sec.accent === "green";
            return (
              <div
                key={sec.title}
                className={`rounded-[28px] border ${isGreen ? "border-[#2cff68]/20" : "border-white/10"} bg-black/70 p-8 overflow-hidden relative`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${isGreen ? "from-[#2cff68]/[0.06]" : "from-white/[0.03]"} to-transparent`}
                />
                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.22em] text-white/55">{sec.label}</p>
                  <h3 className="mt-4 text-2xl font-bold">{sec.title}</h3>
                  <ul className="mt-6 space-y-3 text-white/70">
                    {sec.items.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-1 text-white/40">▸</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it goes */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">How it goes</p>
            <p className="mt-1 text-center text-sm text-white/55">
              Simple, no babysitting.
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {cfg.sections.howItGoes.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-white/10 bg-black/60 p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.22em] text-white/50">{s.n}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{s.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-8 pb-8 md:px-10 md:pb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 p-6">
              <p className="text-white/70">
                Want to start? Send the details and we’ll reply with the next move.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                Contact <span className="text-black/60">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
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
    </main>
  );
}
