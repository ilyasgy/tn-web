import Link from "next/link";
import StartForm from "./StartForm";

export default function StartPage() {
  return (
    <main className="relative text-neutral-900 dark:text-white overflow-hidden bg-white dark:bg-black transition-colors min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/65" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
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
              <Link href="/contact" className="hover:text-black dark:hover:text-white transition">CONTACT</Link>
            </nav>

            <Link
              href="/start"
              className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              START REVIEW
            </Link>
          </div>
        </header>

        <section className="px-6 pt-20 pb-14">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">START</p>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
              Start your security review.
            </h1>
            <p className="mt-6 text-neutral-600 dark:text-white/55 md:text-lg max-w-2xl mx-auto">
              Send your website details and authorization in one place.
              We’ll review the scope and reply with next steps before any work begins.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="rounded-[28px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 overflow-hidden shadow-lg dark:shadow-none">
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">
                  REVIEW DETAILS
                </p>
                <StartForm />
              </div>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 p-8 md:p-10 shadow-lg dark:shadow-none">
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-400 dark:text-white/55">
                WHAT HAPPENS NEXT
              </p>

              <ul className="mt-6 space-y-5 text-neutral-600 dark:text-white/70">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center">01</span>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">Review & Scope</p>
                    <p className="text-xs mt-1">We review your website and any specific concerns first.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center">02</span>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">Authorization Confirmed</p>
                    <p className="text-xs mt-1">We only proceed with the owner or an authorized operator.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold flex items-center justify-center">03</span>
                  <div>
                    <p className="text-sm font-bold text-black dark:text-white">Proposal & Start</p>
                    <p className="text-xs mt-1">If the scope fits, we reply with the next steps and begin after confirmation.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 border-t border-neutral-200 dark:border-white/10 pt-6">
                <p className="text-sm font-semibold text-black dark:text-white">This page is for starting work.</p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-white/55">
                  For general questions, budget discussions, or service inquiries, use the contact page.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-neutral-700 hover:text-black dark:text-white/80 dark:hover:text-white transition"
                >
                  Go to contact <span className="text-neutral-400 dark:text-white/50">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
