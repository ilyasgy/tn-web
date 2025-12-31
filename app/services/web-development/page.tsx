import SecurityImpactSection from "@/app/components/SecurityImpactSection";
import Link from "next/link";

const WHAT_YOU_GET = [
  ["Design + build", "A modern site that looks expensive and feels clear."],
  ["Speed", "Fast loading by default. No bloated pages."],
  ["Mobile-first", "Looks right on phones. Not “desktop shrunk down”."],
  ["SEO basics", "Good structure so Google can understand your site."],
  ["Tracking (optional)", "Analytics + events if you want them."],
  ["Handoff", "You own the site. You can move it anytime."],
];

const PROCESS = [
  ["01", "Planning", "We agree on pages, content, and direction."],
  ["02", "Build", "We design and build the site clean and fast."],
  ["03", "Details", "We tighten layout, responsiveness, and speed."],
  ["04", "Go live", "We launch and hand everything over to you."],
];

const WE_BUILD = [
  "Landing pages",
  "Business / service websites",
  "Portfolios",
  "Offer pages (funnels)",
  "Simple booking/contact flows",
];

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

export default function WebDevelopmentDetailPage() {
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
                Web Development
              </h1>

              <p className="mt-6 text-white/55 md:text-lg leading-relaxed max-w-2xl">
                We build fast, modern websites for businesses that want something clean and serious —
                not a template that looks like everyone else.
              </p>

              <div className="mt-10 inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Start project
                </Link>
                <Link
                  href="/services"
                  className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Back to services
                </Link>
              </div>

              <p className="mt-5 text-sm text-white/45">
                Have a website already? Send the URL — we’ll tell you what to improve.
              </p>
            </div>

            {/* Visual card */}
            <div className="group relative rounded-[22px] border border-white/12 bg-black/70 overflow-hidden">
              <div className="relative min-h-[250px] overflow-hidden">
                <img
                  src="/service-dev.png"
                  alt="Web Development"
                  className="absolute inset-0 h-full w-full object-cover transform-gpu transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="px-6 py-5">
                <p className="text-white font-semibold text-lg">Typical results</p>
                <p className="mt-1 text-sm text-white/55">
                  Cleaner look, faster load, better structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">What we build</p>
            <p className="mt-1 text-center text-sm text-white/55">
              The stuff we do most often.
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WE_BUILD.map((t) => (
              <div
                key={t}
                className="relative rounded-2xl border border-white/10 bg-black/60 p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
                <div className="relative flex items-start gap-3">
                  <span className="mt-1 text-white/40">▸</span>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="mt-2 text-sm text-white/55">
                      Built with a clean layout, mobile-first, and fast loading.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-8 pb-8 md:px-10 md:pb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 p-6">
              <p className="text-white/70">
                Not sure what you need? Tell us the goal — we’ll suggest the right page setup.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/25"
              >
                Contact us <span className="text-white/50">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">What you get</p>
            <p className="mt-1 text-center text-sm text-white/55">
              What’s included when we build.
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT_YOU_GET.map(([t, d]) => (
              <div
                key={t}
                className="relative rounded-2xl border border-white/10 bg-black/60 p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
                <div className="relative">
                  <p className="text-white font-semibold">{t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">How it goes</p>
            <p className="mt-1 text-center text-sm text-white/55">
              You don’t need to manage the build. We’ll keep it simple.
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map(([n, title, desc]) => (
              <div
                key={n}
                className="relative rounded-2xl border border-white/10 bg-black/60 p-6 overflow-hidden"
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

          <div className="px-8 pb-8 md:px-10 md:pb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 p-6">
              <p className="text-white/70">
                Want a security check after launch? We can add it as a second step.
              </p>
              <Link
                href="/services/website-security"
                className="inline-flex items-center gap-3 rounded-xl border border-[#2cff68]/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-[#2cff68]/40"
              >
                See Website Security <span className="text-white/50">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-14 bg-black border-t border-white/10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="ThreatNest logo" className="h-10 w-10" />
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

          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} ThreatNest. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
