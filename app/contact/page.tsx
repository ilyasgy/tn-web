import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative text-white overflow-hidden bg-black">
      {/* Background (same system as home) */}
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
        {/* Header */}
        <header className="px-6 pt-5">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
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
              <Link href="/about" className="hover:text-white transition">
                ABOUT
              </Link>
              <Link href="/contact" className="text-white">
                CONTACT
              </Link>
            </nav>

            <Link
              href="/contact"
              className="rounded-lg bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-white/90"
            >
              START PROJECT
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="px-6 pt-20 pb-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
              CONTACT
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
              Tell us what you want to build.
            </h1>
            <p className="mt-6 text-white/55 md:text-lg">
              You don’t need a perfect brief. Just the idea, goals, or examples.
              We’ll handle the rest.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8">
            {/* Left – form */}
            <div className="rounded-[28px] border border-white/10 bg-black/70 overflow-hidden">
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
                  PROJECT DETAILS
                </p>

                <form className="mt-8 space-y-5">
                <input
                    type="text"
                    placeholder="Your name *"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                />

                <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                />

                <input
                    type="url"
                    placeholder="Website URL (optional)"
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                />

                <textarea
                    rows={5}
                    placeholder="What do you want to build? *"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                />

                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                    Send request
                </button>
                </form>


                <p className="mt-6 text-xs text-white/45">
                  We usually reply within 24–48 hours.
                </p>
              </div>
            </div>

            {/* Right – info */}
            <div className="rounded-[28px] border border-white/10 bg-black/70 p-8 md:p-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
                WHAT HAPPENS NEXT
              </p>

              <ul className="mt-6 space-y-4 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-white/40">▸</span>
                  <span>We read through what you send and check the scope.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-white/40">▸</span>
                  <span>We get back with a plan and what comes next.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-white/40">▸</span>
                  <span>We start when it makes sense.</span>
                </li>
              </ul>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold text-white">
                  Prefer browsing first?
                </p>
                <Link
                  href="/services"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition"
                >
                  View services <span className="text-white/50">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
      </div>
    </main>
  );
}
