import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white overflow-hidden transition-colors">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/70" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.5]"
          style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
      </div>

      <header className="px-6 pt-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="ThreatNest" className="h-9 w-9 invert dark:invert-0 transition" />
            <span className="text-sm font-semibold tracking-[0.22em]">THREATNEST</span>
          </Link>
          <Link href="/contact" className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90">CONTACT</Link>
        </div>
      </header>

      <section className="px-6 pt-20 pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">LEGAL</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">Terms & Conditions</h1>
          <p className="mt-6 text-neutral-600 dark:text-white/55">
            These Terms & Conditions govern the use of services provided by ThreatNest.
          </p>

          <div className="mt-12 space-y-10 text-neutral-700 dark:text-white/70 leading-relaxed">

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">1. Services</h2>
              <p className="mt-3">ThreatNest provides non-intrusive website security and application flow assessments.</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}