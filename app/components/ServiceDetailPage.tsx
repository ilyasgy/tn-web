import Link from "next/link";

type Block = {
  title: string;
  desc: string;
};

type ListSection = {
  label: string;
  title: string;
  items: string[];
  accent?: "green" | "white";
};

type ServiceDetailConfig = {
  badge?: "NEW";
  title: string;
  subtitle: string;
  image: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  price?: string; // Added price support

  sections: {
    what: Block[];
    includes: ListSection;
    goodFor: ListSection;
    howItGoes: { n: string; title: string; desc: string }[];
  };

  accent?: "green" | "white";
};

function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 bg-neutral-100 dark:bg-neutral-900 overflow-hidden text-neutral-900 dark:text-white transition-colors">
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg dark:shadow-none">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] opacity-55">READY?</p>
            <h2 className="mt-3 text-3xl font-bold">Start your project</h2>
            <p className="mt-2 opacity-60">Tell us what you need. We'll handle the rest.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex justify-center rounded-xl bg-black px-8 py-3 text-sm font-bold text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90 transition">
              Contact us
            </Link>
            <Link href="/services" className="inline-flex justify-center rounded-xl border border-black/10 dark:border-white/10 px-8 py-3 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition">
              View all services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ cfg }: { cfg: ServiceDetailConfig }) {
  const accentBorder = cfg.accent === "green" 
    ? "border-[#2cff68]/25" 
    : "border-black/5 dark:border-white/12";
    
  const accentBadge = cfg.badge === "NEW" ? (
    <span className="ml-3 align-middle text-[#2cff68] text-xs font-bold tracking-[0.22em]">NEW</span>
  ) : null;

  return (
    <main className="relative overflow-hidden bg-white text-neutral-900 transition-colors dark:bg-black dark:text-white">
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
              alt="Logo"
              className="h-10 w-10 invert dark:invert-0 transition"
            />
            <span className="text-sm font-semibold tracking-[0.22em]">THREATNEST</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/services" className="hidden text-xs font-bold tracking-wide opacity-60 hover:opacity-100 sm:block">
              SERVICES
            </Link>
            <Link href="/contact" className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90">
              START PROJECT
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-20 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] opacity-55">SERVICE</p>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">
                {cfg.title}
                {accentBadge}
              </h1>

              <p className="mt-6 opacity-60 md:text-lg leading-relaxed max-w-2xl">
                {cfg.subtitle}
              </p>

              {/* Dynamic Price Display */}
              {cfg.price && (
                <div className="mt-8 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#2cff68]">{cfg.price}</span>
                  <span className="text-sm font-semibold opacity-60">/ project</span>
                </div>
              )}

              <div className="mt-8 inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-1 dark:border-white/15 dark:bg-white/5">
                <Link
                  href={cfg.primaryCtaHref}
                  className="rounded-lg bg-neutral-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  {cfg.primaryCtaText}
                </Link>
                <Link
                  href="/services"
                  className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold opacity-90 transition hover:bg-neutral-200 dark:hover:bg-white/10"
                >
                  Back to services
                </Link>
              </div>
            </div>

            {/* Visual card */}
            <div className={`group relative rounded-[22px] ${accentBorder} bg-white/50 dark:bg-black/70 overflow-hidden border shadow-lg dark:shadow-none`}>
              <div className="relative min-h-[250px] overflow-hidden">
                <img
                  src={cfg.image}
                  alt={cfg.title}
                  className="absolute inset-0 h-full w-full object-cover transform-gpu transition duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-lg">Summary</p>
                <p className="mt-1 text-sm opacity-55">{cfg.title} — done clean.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/70 overflow-hidden">
          <div className="border-b border-black/5 dark:border-white/10 px-8 py-5">
            <p className="text-center text-lg font-semibold">What we do</p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cfg.sections.what.map((b) => (
              <div
                key={b.title}
                className="relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/60 p-6 overflow-hidden"
              >
                <p className="font-semibold">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed opacity-60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included + Good for */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {[cfg.sections.includes, cfg.sections.goodFor].map((sec) => {
            const isGreen = sec.accent === "green";
            const borderClass = isGreen 
              ? "border-[#2cff68]/20 bg-[#2cff68]/5 dark:bg-[#2cff68]/10" 
              : "border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/70";
            
            return (
              <div
                key={sec.title}
                className={`rounded-[28px] border ${borderClass} p-8 overflow-hidden relative shadow-sm dark:shadow-none`}
              >
                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.22em] opacity-55">{sec.label}</p>
                  <h3 className="mt-4 text-2xl font-bold">{sec.title}</h3>
                  <ul className="mt-6 space-y-3 opacity-70">
                    {sec.items.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-1 opacity-40">▸</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it goes */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/70 overflow-hidden">
          <div className="border-b border-black/5 dark:border-white/10 px-8 py-5">
            <p className="text-center text-lg font-semibold">How it goes</p>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {cfg.sections.howItGoes.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/60 p-6 overflow-hidden"
              >
                <p className="text-xs font-semibold tracking-[0.22em] opacity-50">{s.n}</p>
                <p className="mt-3 text-lg font-semibold">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed opacity-60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* GLOBAL FOOTER */}
      <footer className="relative px-6 py-14 border-t border-black/5 dark:border-white/10 bg-white dark:bg-black transition-colors">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/white.png"
              alt="Logo"
              className="h-10 w-10 invert dark:invert-0 transition"
              loading="lazy"
            />
            <span className="text-sm font-semibold tracking-[0.22em] opacity-80">
              THREATNEST
            </span>
          </Link>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-wide opacity-60">
            <Link href="/services" className="hover:opacity-100 transition">SERVICES</Link>
            <Link href="/about" className="hover:opacity-100 transition">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-100 transition">CONTACT</Link>
            <Link href="/terms" className="hover:opacity-100 transition">TERMS</Link>
            <Link href="/privacy" className="hover:opacity-100 transition">PRIVACY</Link>
          </div>

          <p className="text-xs opacity-45">
            © {new Date().getFullYear()} ThreatNest. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}