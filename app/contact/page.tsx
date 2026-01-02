import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="relative text-neutral-900 dark:text-white overflow-hidden bg-white dark:bg-black transition-colors min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 pt-5">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/white.png" alt="ThreatNest" className="h-10 w-10 invert dark:invert-0 transition" />
              <span className="text-sm font-semibold tracking-[0.22em]">
                THREATNEST
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-neutral-600 dark:text-white/70">
              <Link href="/services" className="hover:text-black dark:hover:text-white transition">
                SERVICES
              </Link>
              <Link href="/about" className="hover:text-black dark:hover:text-white transition">
                ABOUT
              </Link>
              <Link href="/contact" className="text-black dark:text-white">
                CONTACT
              </Link>
            </nav>

            <Link
              href="/contact"
              className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              START PROJECT
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="px-6 pt-20 pb-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">
              CONTACT
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
              Tell us what you want to build.
            </h1>
            <p className="mt-6 text-neutral-600 dark:text-white/55 md:text-lg">
              You don’t need a perfect brief. Just the idea, goals, or examples.
              We’ll handle the rest.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8">
            {/* Left – form */}
            <div className="rounded-[28px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 overflow-hidden shadow-lg dark:shadow-none">
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">
                  PROJECT DETAILS
                </p>

                <ContactForm />

                <p className="mt-6 text-xs text-neutral-400 dark:text-white/45">
                  We usually reply within 24–48 hours.
                </p>
              </div>
            </div>

            {/* Right – info */}
            <div className="rounded-[28px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 p-8 md:p-10 shadow-lg dark:shadow-none">
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">
                WHAT HAPPENS NEXT
              </p>

              <ul className="mt-6 space-y-4 text-neutral-600 dark:text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-400 dark:text-white/40">▸</span>
                  <span>We read through what you send and check the scope.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-400 dark:text-white/40">▸</span>
                  <span>We get back with a plan and what comes next.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-neutral-400 dark:text-white/40">▸</span>
                  <span>We start when it makes sense.</span>
                </li>
              </ul>

              <div className="mt-10 border-t border-neutral-200 dark:border-white/10 pt-6">
                <p className="text-sm font-semibold text-black dark:text-white">
                  Prefer browsing first?
                </p>
                <Link
                  href="/services"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black dark:text-white/70 dark:hover:text-white transition"
                >
                  View services <span className="text-neutral-400 dark:text-white/50">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-6 py-14 border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-black transition-colors">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/white.png"
                alt="ThreatNest logo"
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
      </div>
    </main>
  );
}