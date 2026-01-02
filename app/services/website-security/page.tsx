import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSection";

const CHECKS = [
  ["Exposure", "We look for obvious leaks: public files, backups, misconfigs."],
  ["Headers", "We check the basics that protect users in the browser."],
  ["Auth sanity", "If your site has login/admin, we check common mistakes."],
  ["Forms & inputs", "We look for risky patterns that usually get exploited."],
  ["Third-party risk", "We flag unsafe embeds/CDNs and weak policies."],
  ["Fix list", "You get clear fixes. Not vague warnings."],
];

export default function WebsiteSecurityDetailPage() {
  return (
    <main className="relative overflow-hidden bg-white text-neutral-900 transition-colors dark:bg-black dark:text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white/90 dark:bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_70%)]" />
      </div>

      <header className="px-6 pt-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="Logo" className="h-10 w-10 invert dark:invert-0" />
            <span className="text-sm font-semibold tracking-[0.22em]">THREATNEST</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/services" className="hidden text-xs font-bold tracking-wide opacity-60 hover:opacity-100 sm:block">SERVICES</Link>
            <Link href="/contact" className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90">START PROJECT</Link>
          </div>
        </div>
      </header>

      <section className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] opacity-55">SERVICE</p>
              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
                Website Security
                <span className="ml-3 align-middle text-[#2cff68] text-xs font-bold tracking-[0.22em]">NEW</span>
              </h1>
              <p className="mt-6 opacity-60 md:text-lg leading-relaxed max-w-2xl">
                A focused review that catches common risks. Not "enterprise pentesting", just real safety.
              </p>

              {/* PRICE TAG */}
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-[#2cff68]">$300</span>
                <span className="text-sm font-semibold opacity-60">/ one-time check</span>
              </div>

              <div className="mt-8 inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-1 dark:border-white/15 dark:bg-white/5">
                <Link href="/contact" className="rounded-lg bg-neutral-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90">
                  Get secured
                </Link>
                <Link
                  href="/services"
                  className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold opacity-90 transition hover:bg-neutral-200 dark:hover:bg-white/10"
                >
                  Back to services
                </Link>
              </div>
            </div>

            <div className="group relative rounded-[22px] border border-[#2cff68]/25 bg-white/50 dark:bg-black/70 overflow-hidden">
              <div className="relative min-h-[250px] overflow-hidden">
                <img src="/service-sec.png" alt="Security" className="absolute inset-0 h-full w-full object-cover transform-gpu transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-lg">Detailed Report</p>
                <p className="mt-1 text-sm opacity-55">Findings + fixes, no drama.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-black/70 overflow-hidden">
          <div className="border-b border-neutral-200 dark:border-white/10 px-8 py-5">
            <p className="text-center text-lg font-semibold">What we check</p>
          </div>
          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHECKS.map(([t, d]) => (
              <div key={t} className="relative rounded-2xl border border-neutral-200 bg-white/60 dark:border-white/10 dark:bg-black/60 p-6">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm opacity-55">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecurityImpactSection />
      
      <footer className="relative px-6 py-14 border-t border-neutral-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-10">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="Logo" className="h-10 w-10 invert dark:invert-0" />
            <span className="text-sm font-semibold tracking-[0.22em] opacity-80">THREATNEST</span>
          </Link>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold opacity-60">
            <Link href="/services" className="hover:opacity-100">SERVICES</Link>
            <Link href="/about" className="hover:opacity-100">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-100">CONTACT</Link>
          </div>
          <p className="text-xs opacity-45">© {new Date().getFullYear()} ThreatNest. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}