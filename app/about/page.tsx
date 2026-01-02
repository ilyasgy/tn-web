import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative text-neutral-900 dark:text-white overflow-hidden bg-white dark:bg-black transition-colors min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)]" />
      </div>

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
            <Link href="/about" className="text-black dark:text-white">
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
              CONTACT
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold tracking-wide text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            START PROJECT
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">ABOUT</p>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
            Good ideas,
            <br />
            Built properly.
          </h1>
          <p className="mt-6 text-neutral-600 dark:text-white/55 md:text-lg">
            We design and build websites with structure and performance in mind.
          </p>

          <div className="mt-10 inline-flex rounded-xl border border-neutral-300 bg-neutral-100 p-1 dark:border-white/15 dark:bg-white/5">
            <Link
              href="/contact"
              className="rounded-lg bg-black px-8 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Start project
            </Link>
            <Link
              href="/services"
              className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-200 dark:text-white/90 dark:hover:bg-white/10 transition"
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
          <div className="relative rounded-[28px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 p-8 overflow-hidden md:col-span-2 shadow-lg dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-white/[0.03]" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">WHAT WE DO</p>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-[1.12] text-black dark:text-white">
                We start with the build.
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-white/55 leading-relaxed">
                The foundation matters. If the build is structured and the codebase is clean,
                your site stays easy to update, scales smoothly, and doesn’t turn into a mess later.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  ["Clean builds", "Production-ready structure"],
                  ["Performance", "Core Web Vitals focused"],
                  ["Real deploy", "Proper handoff + ownership"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-black/60 p-4">
                    <p className="text-sm font-semibold text-black dark:text-white">{t}</p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-white/55">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 (security) */}
          <div className="relative rounded-[28px] border border-[#2cff68]/30 dark:border-[#2cff68]/20 bg-white/50 dark:bg-black/70 p-8 overflow-hidden shadow-lg dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2cff68]/10 to-transparent dark:from-[#2cff68]/[0.06]" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">OPTIONAL</p>
              <h3 className="mt-4 text-xl font-bold leading-[1.15] text-black dark:text-white">
                Website Security
                <span className="ml-2 text-[#2cff68] text-xs font-bold">new</span>
              </h3>
              <p className="mt-3 text-sm text-neutral-600 dark:text-white/55 leading-relaxed">
                After launch, we can run a quick security check and deliver clear fixes.
              </p>

              <Link
                href="/services/website-security"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black dark:text-white/80 dark:hover:text-white transition"
              >
                See how it works <span className="text-neutral-400 dark:text-white/50">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-14 border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-black transition-colors">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="ThreatNest logo" className="h-10 w-10 invert dark:invert-0 transition" />
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
          </div>

          <p className="text-xs text-neutral-400 dark:text-white/45">
            © {new Date().getFullYear()} ThreatNest. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}