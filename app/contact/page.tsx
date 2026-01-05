import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="relative text-neutral-900 dark:text-white overflow-hidden bg-white dark:bg-black transition-colors min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        <header className="px-6 pt-5">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/white.png" alt="ThreatNest" className="h-10 w-10 invert dark:invert-0 transition" />
              <span className="text-sm font-semibold tracking-[0.22em]">THREATNEST</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-neutral-600 dark:text-white/70">
              <Link href="/services" className="hover:text-black dark:hover:text-white transition">SERVICES</Link>
              <Link href="/about" className="hover:text-black dark:hover:text-white transition">ABOUT</Link>
              <Link href="/contact" className="text-black dark:text-white">CONTACT</Link>
            </nav>

            <Link href="/contact" className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90">
              START PROJECT
            </Link>
          </div>
        </header>

        <section className="px-6 pt-20 pb-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">CONTACT</p>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">Secure your perimeter.</h1>
            <p className="mt-6 text-neutral-600 dark:text-white/55 md:text-lg">
              Tell us about your infrastructure, security needs, or development goals. We'll take it from there.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="rounded-[28px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 overflow-hidden shadow-lg dark:shadow-none">
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">PROJECT DETAILS</p>
                <ContactForm />
              </div>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 p-8 md:p-10 shadow-lg dark:shadow-none">
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">WHAT HAPPENS NEXT</p>
              <ul className="mt-6 space-y-5 text-neutral-600 dark:text-white/70">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center">01</span>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">Scope & Strategy</p>
                    <p className="text-xs mt-1">We review your request and define the audit parameters or project scope within 24 hours.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center">02</span>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">Secure Agreement</p>
                    <p className="text-xs mt-1">You receive a secure payment link.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center">03</span>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">Access & Execution</p>
                    <p className="text-xs mt-1">We request the necessary environment access (GitHub, Cloud, or Server) to begin work immediately.</p>
                  </div>
                </li>
              </ul>

              {/* <div className="mt-10 border-t border-neutral-200 dark:border-white/10 pt-6">
                <p className="text-sm font-semibold text-black dark:text-white">Enterprise & Custom Audits</p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-white/55">
                  For recurring security checks or full-stack builds, mention "Retainer" or "Custom Build" in your message.
                </p>
              </div>*/}
            </div>
          </div>
        </section>

        <footer className="relative px-6 py-14 border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-black transition-colors">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <Link href="/" className="flex items-center gap-2">
              <img src="/white.png" alt="ThreatNest logo" className="h-10 w-10 invert dark:invert-0 transition" />
              <span className="text-sm font-semibold tracking-[0.22em] text-neutral-800 dark:text-white/80">THREATNEST</span>
            </Link>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-wide text-neutral-600 dark:text-white/60">
              <Link href="/services" className="hover:text-black dark:hover:text-white transition">SERVICES</Link>
              <Link href="/about" className="hover:text-black dark:hover:text-white transition">ABOUT</Link>
              <Link href="/contact" className="hover:text-black dark:hover:text-white transition">CONTACT</Link>
              <Link href="/terms" className="hover:text-black dark:hover:text-white transition">TERMS</Link>
              <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">PRIVACY</Link>
              <a href="#faq" className="hover:text-black dark:hover:text-white transition">FAQ</a>
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