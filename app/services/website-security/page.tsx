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

const OUTPUT = [
  "A short report with what we found",
  "Exactly what to change (step-by-step where possible)",
  "Priority order (fix this first)",
  "Optional help applying fixes",
];

const WHO = [
  "New sites that want a safety pass after launch",
  "Small businesses that never had a security review",
  "Founders who want obvious risks removed before running ads",
  "Teams that want a second set of eyes",
];

const PROCESS = [
  ["01", "Send", "Send your URL (and any notes about login/admin if relevant)."],
  ["02", "Review", "We check the site and collect findings."],
  ["03", "Fix list", "You get a clear list of fixes, ordered by impact."],
  ["04", "Optional help", "If you want, we can apply fixes or re-check after."],
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
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.12]">
                Want this on your site?
              </h2>
              <p className="mt-5 max-w-xl text-white/55">
                If this fits what you need, <br />we’ll help you apply it.
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
                  Ask a question
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  ["Clear Scope", "Pages, priorities, and next steps"],
                  ["Clean execution", "Built properly"],
                  ["Optional add-ons", "Security, performance, ongoing support"],
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

                <p className="text-sm font-semibold text-white mt-9">
                Not sure yet?
                <span className="mt-2 block text-sm font-normal text-white/55 leading-relaxed">
                    Use the contact page to describe your situation.
                </span>
                </p>

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

export default function WebsiteSecurityDetailPage() {
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
                Website Security
                <span className="ml-3 align-middle text-[#2cff68] text-xs font-bold tracking-[0.22em]">
                  NEW
                </span>
              </h1>

              <p className="mt-6 text-white/55 md:text-lg leading-relaxed max-w-2xl">
                This isn’t “enterprise pentesting”.
                It’s a focused review that catches the common stuff websites get hit for —
                and gives you a clean fix list.
              </p>

              <div className="mt-10 inline-flex rounded-xl border border-white/15 bg-white/5 p-1">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-black transition hover:bg-white/90"
                >
                  Request security check
                </Link>
                <Link
                  href="/services"
                  className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Back to services
                </Link>
              </div>

              <p className="mt-5 text-sm text-white/45">
                If you already launched, that’s fine. If you haven’t launched yet, even better.
              </p>
            </div>

            {/* Visual card */}
            <div className="group relative rounded-[22px] border border-[#2cff68]/25 bg-black/70 overflow-hidden">
              <div className="relative min-h-[250px] overflow-hidden">
                <img
                  src="/service-sec.png"
                  alt="Website Security"
                  className="absolute inset-0 h-full w-full object-cover transform-gpu transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              </div>
              <div className="px-6 py-5">
                <p className="text-white font-semibold text-lg">What you get</p>
                <p className="mt-1 text-sm text-white/55">
                  Findings + fixes, without the drama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">What we check</p>
            <p className="mt-1 text-center text-sm text-white/55">
              Focused on real-world issues that show up on small sites.
            </p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHECKS.map(([t, d]) => (
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

          <div className="px-8 pb-8 md:px-10 md:pb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-[#2cff68]/20 bg-black/60 p-6">
              <p className="text-white/70">
                If your site has a login/admin area, mention it in the request so we focus the review.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/25"
              >
                Send details <span className="text-white/50">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Output + Who it's for */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-white/10 bg-black/70 p-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">OUTPUT</p>
              <h3 className="mt-4 text-2xl font-bold">You’ll receive</h3>
              <ul className="mt-6 space-y-3 text-white/70">
                {OUTPUT.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-white/40">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/70 p-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/55">WHO IT’S FOR</p>
              <h3 className="mt-4 text-2xl font-bold">Good for</h3>
              <ul className="mt-6 space-y-3 text-white/70">
                {WHO.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 text-white/40">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it goes */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-black/70 overflow-hidden">
          <div className="border-b border-white/10 bg-black/60 px-8 py-5">
            <p className="text-center text-lg font-semibold text-white">How it goes</p>
            <p className="mt-1 text-center text-sm text-white/55">
              Simple steps, fast turnaround.
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
                Want us to apply fixes too? Mention it — we’ll tell you what’s reasonable.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
              >
                Request check <span className="text-black/60">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

        <SecurityImpactSection />

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
