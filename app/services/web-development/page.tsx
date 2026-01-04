import Link from "next/link";

const PRICING = [
  {
    slug: "small-frontend",
    title: "Small Frontend",
    price: "$700",
    desc: "Perfect for landing pages or simple portfolios.",
    features: ["1–3 Pages", "Mobile Responsive", "Contact Form", "Fast Loading"],
  },
  {
    slug: "full-stack",
    title: "Full Stack (Small)",
    price: "$1,400",
    desc: "Frontend + Database/API for dynamic content.",
    features: ["Frontend (3–5 Pages)", "Small Backend/API", "Database Setup", "Admin Dashboard Basic"],
    highlight: true,
  },
  {
    slug: "custom",
    title: "Complex / Custom",
    price: "From $2,200",
    desc: "Big frontend + backend systems.",
    features: ["Complex Frontend", "Full Backend API", "User Auth & Roles", "Advanced Integrations"],
  },
];

const WE_BUILD = [
  "Landing pages",
  "Business / service websites",
  "Portfolios",
  "Offer pages (funnels)",
  "Simple booking/contact flows",
];

const WHAT_YOU_GET = [
  ["Design + build", "Premium digital presence. Clean aesthetics backed by a high-performance foundation."],
  ["Speed", "Fast loading by default."],
  ["Mobile-first", "Looks right on phones."],
  ["SEO basics", "Good structure so Google can understand your site."],
  ["Tracking (optional)", "Analytics + events if you want them."],
  ["Handoff", "You own the site. You can move it anytime."],
];

const PROCESS = [
  ["01", "Planning", "We agree on pages, content, and direction."],
  ["02", "Build", "We design and build the site clean and fast."],
  ["03", "Details", "We tighten layout, responsiveness, and speed."],
  ["04", "Go live", "We launch and hand everything over to you."],
];

export default function WebDevelopmentDetailPage() {
  return (
    <main className="relative overflow-hidden bg-white text-neutral-900 transition-colors dark:bg-black dark:text-white">
  
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
              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.05]">Website Development</h1>
              <p className="mt-6 opacity-60 md:text-lg leading-relaxed max-w-2xl">
                High-performance digital products for businesses that value speed, security, and a clean codebase.
              </p>
              <div className="mt-10 inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-1 dark:border-white/15 dark:bg-white/5">
                <Link href="/contact?service=web-dev" className="rounded-lg bg-neutral-900 px-8 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90">Start project</Link>
                <Link href="/services" className="ml-[-6px] rounded-lg px-6 py-3 text-sm font-semibold opacity-90 transition hover:bg-neutral-200 dark:hover:bg-white/10">Back to services</Link>
              </div>
            </div>
    
            <div className="group relative rounded-[22px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-[#050505] overflow-hidden shadow-lg dark:shadow-none">
              <div className="relative min-h-[250px] overflow-hidden">
                <img src="/service-dev.png" alt="Web Dev" className="absolute inset-0 h-full w-full object-cover transform-gpu transition duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/35" />
              </div>
              <div className="px-6 py-5">
                <p className="font-semibold text-lg">Typical results</p>
                <p className="mt-1 text-sm opacity-55">Cleaner look, faster load, better structure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with Dynamic Links */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Simple Pricing</h2>
            <p className="mt-3 opacity-60">Choose the scale that fits your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map((plan) => (
              <div key={plan.title} className={`relative flex flex-col rounded-[24px] border p-8 transition ${
                plan.highlight 
                  ? "border-[#2cff68] bg-[#2cff68]/5 dark:bg-[#2cff68]/5" 
                  : "border-neutral-200 bg-white/50 dark:border-white/5 dark:bg-[#0A0A0A]"
              }`}>
                {plan.highlight && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2cff68] px-3 py-1 text-[10px] font-bold tracking-widest text-black">POPULAR</span>}
                <div>
                  <h3 className="text-lg font-bold">{plan.title}</h3>
                  <div className="mt-4 text-3xl font-extrabold">{plan.price}</div>
                  <p className="mt-2 text-sm opacity-60">{plan.desc}</p>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium opacity-80"><span className={`h-1.5 w-1.5 rounded-full ${plan.highlight ? "bg-[#2cff68]" : "bg-current"}`} />{f}</li>
                  ))}
                </ul>
                {/* Updated Link to include URL parameters */}
                <Link 
                  href={`/contact?service=web-dev&bundle=${plan.slug}`} 
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold transition ${plan.highlight ? "bg-[#2cff68] text-black hover:bg-[#2cff68]/90" : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"}`}
                >
                  Choose {plan.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Custom Website Section */}
      <section className="px-6 py-20 border-t border-neutral-100 dark:border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Have a custom vision?</h2>
          <p className="mt-4 opacity-60">For enterprise-scale apps or unique systems, we offer custom quotes tailored to your requirements.</p>
          <Link 
            href="/contact?service=web-dev&bundle=custom" 
            className="mt-8 inline-block rounded-xl bg-[#2cff68] px-10 py-4 text-sm font-bold text-black hover:bg-[#2cff68]/90 transition"
          >
            Start Custom Project →
          </Link>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-[#050505] overflow-hidden">
          <div className="border-b border-neutral-200 dark:border-white/10 px-8 py-5">
            <p className="text-center text-lg font-semibold">What we build</p>
          </div>
          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WE_BUILD.map((t) => (
              <div key={t} className="relative rounded-2xl border border-neutral-200 bg-white/60 dark:border-white/10 dark:bg-black/60 p-6">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm opacity-55">Built with a clean layout, mobile-first, and fast loading.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections (WHAT_YOU_GET, PROCESS, Footer) remain as they are... */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-[#050505] overflow-hidden">
          <div className="border-b border-neutral-200 dark:border-white/10 px-8 py-5">
            <p className="text-center text-lg font-semibold">What you get</p>
          </div>
          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHAT_YOU_GET.map(([t, d]) => (
              <div key={t} className="relative rounded-2xl border border-neutral-200 bg-white/60 dark:border-white/10 dark:bg-black/60 p-6">
                <p className="font-semibold">{t}</p>
                <p className="mt-2 text-sm opacity-55">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-[#050505] overflow-hidden">
          <div className="border-b border-neutral-200 dark:border-white/10 px-8 py-5">
            <p className="text-center text-lg font-semibold">How it goes</p>
          </div>
          <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map(([n, title, desc]) => (
              <div key={n} className="relative rounded-2xl border border-neutral-200 bg-white/60 dark:border-white/10 dark:bg-black/60 p-6">
                <p className="text-xs font-semibold tracking-[0.22em] opacity-50">{n}</p>
                <p className="mt-3 text-lg font-semibold">{title}</p>
                <p className="mt-3 text-sm opacity-55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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