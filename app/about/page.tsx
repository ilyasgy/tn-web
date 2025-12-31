import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative text-white overflow-hidden bg-black">
      {/* Background (same system) */}
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
            <Link href="/about" className="text-white">
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
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/55">ABOUT</p>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
            Good ideas,
            <br />
            Built properly.
          </h1>
          <p className="mt-6 text-white/55 md:text-lg">
            We design and build websites with structure and performance in mind.
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
              View services
            </Link>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-[28px] border border-white/10 bg-black/70 p-8 overflow-hidden md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">WHAT WE DO</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-[1.12]">
                We start with the build.
              </h2>
              <p className="mt-4 text-white/55 leading-relaxed">
                The foundation matters. If the build is structured and the codebase is clean,
                your site stays easy to update, scales smoothly, and doesn’t turn into a mess later.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  ["Clean builds", "Production-ready structure"],
                  ["Performance", "Core Web Vitals focused"],
                  ["Real deploy", "Proper handoff + ownership"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                    <p className="text-sm font-semibold text-white">{t}</p>
                    <p className="mt-1 text-xs text-white/55">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 (security) */}
          <div className="relative rounded-[28px] border border-[#2cff68]/20 bg-black/70 p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2cff68]/[0.06] to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">OPTIONAL</p>
              <h3 className="mt-4 text-xl font-bold leading-[1.15]">
                Website Security
                <span className="ml-2 text-[#2cff68] text-xs font-bold">new</span>
              </h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">
                After launch, we can run a quick security check and deliver clear fixes.
              </p>

              <Link
                href="/services/website-security"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
              >
                See how it works <span className="text-white/50">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we work on */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">What we work on</p>
            <p className="mt-1 text-center text-sm text-white/55">
              
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Dev */}
            <div className="relative rounded-2xl border border-white/10 bg-black/60 p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/55">WEB DEVELOPMENT</p>
                <p className="mt-3 text-lg font-semibold text-white">Sites we build</p>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  {[
                    "Landing pages (high-converting, fast load)",
                    "Business websites (services, contact, trust pages)",
                    "Portfolios & personal brands",
                    "Custom pages for offers / funnels",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1 text-white/40">▸</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services/web-development"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
                >
                  Web Development details <span className="text-white/50">→</span>
                </Link>
              </div>
            </div>

            {/* Other Services */}
            <div className="relative rounded-2xl border border-white/10 bg-black/60 p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/55">OTHER SERVICES</p>
                <p className="mt-3 text-lg font-semibold text-white">Improvements & add-ons</p>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  {[
                    "Performance tuning (Core Web Vitals)",
                    "Maintenance & ongoing support",
                    "QA passes and bug hunts",
                    "Analytics + event tracking setup",
                    "Integrations (payments, CRMs, automations)",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1 text-white/40">▸</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
                >
                  View all services <span className="text-white/50">→</span>
                </Link>
              </div>
            </div>

            {/* Security */}
            <div className="relative rounded-2xl border border-[#2cff68]/20 bg-black/60 p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#2cff68]/[0.06] to-transparent" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/55">SECURITY</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Security checks
                  <span className="ml-2 text-[#2cff68] text-xs font-bold">new</span>
                </p>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  {[
                    "Basic exposure checks (misconfigs, public files)",
                    "Headers & browser protections",
                    "Auth + access control sanity checks",
                    "Clear fixes list (no fear marketing)",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1 text-white/40">▸</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services/website-security"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
                >
                  Website Security details <span className="text-white/50">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">How we work</p>
            <p className="mt-1 text-center text-sm text-white/55">
              
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              ["01", "Scope", "We get a clear direction on how you need it to be."],
              ["02", "Build", "We design and build the site."],
              ["03", "Polish", "Performance, SEO, analytics, We fix what needs fixing before launch."],
              ["04", "Launch", "We put it live and hand it over."],
            ].map(([n, title, desc]) => (
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
                Want the security scan bundled as a second step after launch?
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

      {/* Designed CTA (fixes the ugly bottom text) */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">READY</p>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-[1.12]">
                Tell us what you want to build.
              </h3>
              <p className="mt-3 text-white/55">
                If you have a URL, send it. If you don’t, send the idea. We’ll help you build it
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                Start project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/25"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
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
