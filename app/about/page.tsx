import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14),transparent_70%)]" />
      </div>

      {/* Header */}
      <header className="px-6 pt-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="ThreatNest" className="h-10 w-10" />
            <span className="text-sm font-semibold tracking-[0.22em]">
              THREATNEST
            </span>
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
            className="rounded-lg bg-white px-5 py-2 text-xs font-bold text-black hover:bg-white/90 transition"
          >
            START PROJECT
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-24 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
            ABOUT
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Good ideas,
            <br />
            built properly.
          </h1>
          <p className="mt-6 text-white/60 md:text-lg">
            We design and build websites with structure, performance,
            and long-term clarity in mind.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-black/70 p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
              OUR APPROACH
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold">
              Build first. Think long-term.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Most problems come from rushed builds and messy foundations.
              We focus on clean structure, performance, and ownership —
              so your site stays fast, flexible, and easy to evolve.
            </p>
          </div>

          <div className="rounded-3xl border border-[#2cff68]/25 bg-black/70 p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
              OPTIONAL
            </p>
            <h3 className="mt-4 text-xl font-bold">
              Website Security
              <span className="ml-2 text-[#2cff68] text-xs font-bold">new</span>
            </h3>
            <p className="mt-3 text-sm text-white/60">
              After launch, we can run a focused security check and
              deliver clear, actionable fixes.
            </p>

            <Link
              href="/services/website-security"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
            >
              See how it works <span className="text-white/50">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
