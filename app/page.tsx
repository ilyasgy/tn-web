import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSection";
import SectionDock from "@/app/components/SectionDock";

type HomeService = {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  tone: "default" | "security";
  price: string;
  audience: string;
};

const SERVICE_ROUTES = {
  webDevelopment: "/services/web-development",
  websiteSecurity: "/services/website-security",
} as const;

const DOCK_ITEMS = [
  { id: "services", label: "Services" },
  { id: "security", label: "Security" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const HOW_WE_WORK_STEPS = [
  ["01", "Plan and build", "We shape the pages, design the site, and build the frontend."],
  ["02", "Launch", "We handle QA, performance basics, analytics, and launch setup."],
  [
    "03",
    "Review",
    "Once the site is live, we test what outsiders can actually reach and exploit.",
  ],
] as const;

const SERVICE_TRACKS: HomeService[] = [
  {
    label: "Web development",
    title: "Web Development",
    description: "For new websites and rebuilds.",
    bullets: [
      "Page structure",
      "Responsive frontend build",
      "SEO, analytics, and launch setup",
    ],
    href: SERVICE_ROUTES.webDevelopment,
    cta: "See web development",
    tone: "default",
    price: "From $700",
    audience: "We design and build sites that are fast, easy to use, and easy to update.",
  },
  {
    label: "Website security",
    title: "Website Security Review",
    description: "For sites that are already live.",
    bullets: [
      "Manual testing",
      "Report with proof and fixes in 48 hours",
      "48-hour report and 14-day retest",
    ],
    href: SERVICE_ROUTES.websiteSecurity,
    cta: "See security review",
    tone: "security",
    price: "$500 fixed",
    audience:
      "We review live websites for auth issues, access problems, risky setups, and web app flaws.",
  },
];

const PROCESS_STEPS = [
  ["01", "Scope", "We agree on what is being built or what is being tested."],
  ["02", "Execute", "We do the work efficiently without dragging out the timeline."],
  [
    "03",
    "Review",
    "Important issues are reviewed by hand before anything is sent your way.",
  ],
  ["04", "Deliver", "You get the optimized site, the security report, or the critical fixes that matter."],
];

const QUICK_LINKS = [
  {
    title: "Services overview",
    text: "All services in one view.",
    href: "/services",
  },
  {
    title: "Web development",
    text: "Pricing and scope for website work.",
    href: SERVICE_ROUTES.webDevelopment,
  },
  {
    title: "Security review",
    text: "How the security review works.",
    href: SERVICE_ROUTES.websiteSecurity,
  },
  {
    title: "About ThreatNest",
    text: "Who we work with and how we approach the work.",
    href: "/about",
  },
];

const FAQ_ITEMS = [
  {
    q: "Who do you usually work with?",
    a: "Mostly small and midsize businesses, ecommerce brands, and straightforward platforms that need a better website or a security review once the site is live.",
  },
  {
    q: "Is the security review just an automated scan?",
    a: "No. We use tools when they help, but we verify findings by hand and only report what we can stand behind.",
  },
  {
    q: "When should the security review happen?",
    a: "Usually right before launch or after launch. The closer it is to the live site, the more useful the review is.",
  },
  {
    q: "What do we actually get back?",
    a: "For website work, you get the site and everything needed to manage it. For security work, you get a report with proof, severity, and fixes.",
  },
  {
    q: "Can you stay involved after launch?",
    a: "Yes. We can stay on for follow-up work, improvements, or the security review after launch.",
  },
  {
    q: "Do we keep the site and access?",
    a: "Yes. The code, assets, and access stay with you. We are not trying to lock anyone in.",
  },
];

function HeroSection() {
  return (
    <section className="tn-hero tn-home-hero pt-6">
      <div className="tn-container tn-hero-grid">
        <div
          className="tn-hero-copy"
          data-tn-reveal="left"
          data-tn-reveal-state="hidden"
        >
          <small className="tn-kicker">ThreatNest</small>
          <h1 className="tn-display">Build it right. Secure it for real.</h1>
          <p className="tn-body">
            We work with small and midsize businesses to build clean, high-performing websites and
            review the live version before weak points turn into lost trust or lost sales.
          </p>

          <div className="tn-actions">
            <Link href="/contact" className="tn-button-primary">
              Contact Us
            </Link>
            <Link href="#services" className="tn-button-secondary">
              See Services
            </Link>
          </div>
        </div>

        <div className="tn-hero-meta" data-tn-reveal="right" data-tn-reveal-state="hidden">
          {[
            [
              "Website",
              "New websites and rebuilds",
              "Fast, clear, and easy to manage after launch.",
            ],
            [
              "Security",
              "Manual review for live sites",
              "We test the real production version, not a staged guess.",
            ],
            [
              "Focus",
              "Small and midsize businesses",
              "A strong fit for ecommerce brands and simple platforms.",
            ],
          ].map(([label, title, text]) => (
            <div key={label} className="tn-hero-meta-item">
              <small className="tn-meta-label">{label}</small>
              <p className="tn-meta-value">{title}</p>
              <p className="tn-body">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroBridgeSection() {
  return (
    <section className="tn-section tn-section-divider">
      <div className="tn-container tn-section-stack">
        <div
          className="tn-section-head"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <small className="tn-kicker">How we work</small>
          <h2>
            Website first. Security in production.
          </h2>
          <p className="tn-body">
            We build the site, take it live, and then test the exact version real visitors and
            attackers can reach.
          </p>
        </div>

        <div
          className="tn-grid-3"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          {HOW_WE_WORK_STEPS.map(([step, title, text]) => (
            <div key={step} className="tn-step">
              <p className="tn-step-number">{step}</p>
              <div className="tn-step-content">
                <h3>{title}</h3>
                <p className="tn-body">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTrackCard({
  service,
  direction,
}: {
  service: HomeService;
  direction: "left" | "right";
}) {
  const isSecurity = service.tone === "security";

  return (
    <article
      className="border-b border-neutral-200 py-12 dark:border-white/10 md:py-16"
      data-tn-reveal={direction}
      data-tn-reveal-state="hidden"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold text-neutral-500 dark:text-white/45">{service.label}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <h3 className="text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
              {service.title}
            </h3>
            <span
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                isSecurity
                  ? "bg-[#2cff68]/10 text-[#0e7f2d] dark:text-[#76ff9c]"
                  : "bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-white"
              }`}
            >
              {service.price}
            </span>
          </div>
        </div>

        <div>
          <p className="text-2xl font-semibold leading-10 text-neutral-800 dark:text-white/80">
            {service.description}
          </p>
          <p className="mt-4 text-xl font-bold leading-8 text-black dark:text-white">
            {service.audience}
          </p>
          <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-neutral-600 dark:text-white/60">
            {service.bullets.join(" / ")}
          </p>

          <Link
            href={service.href}
            className={`mt-6 inline-flex items-center gap-3 text-base font-bold transition ${
              isSecurity
                ? "text-[#0e7f2d] dark:text-[#76ff9c]"
                : "text-black dark:text-white"
            }`}
          >
            {service.cta}
            <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ServicesSystemSection() {
  return (
    <section id="services" className="relative bg-neutral-50 px-6 py-24 transition-colors dark:bg-black">
      <div className="mx-auto max-w-6xl">
        <div
          className="max-w-3xl"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          <p className="text-sm font-bold text-neutral-500 dark:text-white/45">Services</p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
            Two ways we help.
          </h2>
          <p className="mt-6 text-xl font-medium leading-8 text-neutral-700 dark:text-white/65">
            One service is for building the website. The other is for reviewing a live one.
          </p>
        </div>

        <div className="mt-12 border-t border-neutral-200 dark:border-white/10">
          {SERVICE_TRACKS.map((service, index) => (
            <ServiceTrackCard
              key={service.title}
              service={service}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-white px-6 py-24 transition-colors dark:bg-black">
      <div className="relative mx-auto max-w-6xl">
        <div
          className="max-w-3xl"
          data-tn-reveal="left"
          data-tn-reveal-state="hidden"
        >
          <p className="text-sm font-bold text-neutral-500 dark:text-white/45">Process</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
            Short process. No extra ceremony.
          </h2>
        </div>

        <div className="mt-12 border-t border-neutral-200 dark:border-white/10">
          {PROCESS_STEPS.map(([step, title, text]) => (
            <div
              key={step}
              className="grid gap-4 border-b border-neutral-200 py-8 dark:border-white/10 md:grid-cols-[100px_0.7fr_1.3fr] md:gap-10"
              data-tn-reveal={Number(step) % 2 === 0 ? "right" : "left"}
              data-tn-reveal-state="hidden"
            >
              <p className="text-sm font-bold text-neutral-400 dark:text-white/35">{step}</p>
              <p className="text-2xl font-bold text-black dark:text-white">{title}</p>
              <p className="text-lg font-medium leading-8 text-neutral-600 dark:text-white/60">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-8 max-w-3xl text-lg font-medium leading-8 text-neutral-600 dark:text-white/60"
          data-tn-reveal="up"
          data-tn-reveal-state="hidden"
        >
          For security work, we also need written authorization and a fixed testing window.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-neutral-50 px-6 py-24 transition-colors dark:bg-black">
      <div className="mx-auto max-w-4xl">
        <div
          className="max-w-3xl"
          data-tn-reveal="left"
          data-tn-reveal-state="hidden"
        >
          <p className="text-sm font-bold text-neutral-500 dark:text-white/45">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
            Straight answers.
          </h2>
        </div>

        <div className="mt-12 border-t border-neutral-200 dark:border-white/10">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group border-b border-neutral-200 py-6 dark:border-white/10"
              data-tn-reveal="up"
              data-tn-reveal-state="hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-xl font-bold text-black dark:text-white md:text-2xl">
                  {item.q}
                </span>
                <span className="text-neutral-400 transition group-open:rotate-45 dark:text-white/45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-neutral-600 dark:text-white/60">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white px-6 py-24 transition-colors dark:bg-black">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-[1.05fr_0.95fr]">
          <div data-tn-reveal="left" data-tn-reveal-state="hidden">
            <p className="text-sm font-bold text-neutral-500 dark:text-white/45">Contact</p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.02] text-black dark:text-white md:text-6xl">
              Tell us about the job.
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-neutral-600 dark:text-white/60">
              Need a new website, a rebuild, a security review, or a fix for something that broke?
              Send it over, and we will tell you exactly how we would handle it.
            </p>

            <div className="tn-actions mt-8">
              <Link href="/contact" className="tn-button-primary">
                Contact Us
              </Link>
              <Link href="/start" className="tn-button-secondary">
                Request a Security Review
              </Link>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                ["Build", "New website or rebuild."],
                ["Review", "Security review for a live site."],
                ["Fix", "A bug, breakage, or follow-up work."],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-xl font-bold text-black dark:text-white">{title}</p>
                  <p className="mt-2 text-lg font-medium leading-7 text-neutral-600 dark:text-white/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-tn-reveal="right" data-tn-reveal-state="hidden">
            <p className="text-sm font-bold text-neutral-500 dark:text-white/45">Quick links</p>

            <div className="mt-6 border-t border-neutral-200 dark:border-white/10">
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="tn-link-row"
                >
                  <div>
                    <p className="tn-link-row-title">{item.title}</p>
                    <p className="tn-link-row-copy text-lg font-medium leading-7">
                      {item.text}
                    </p>
                  </div>
                  <span className="tn-link-row-arrow">Open</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="home" className="tn-page tn-blueprint-grid relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <HeroSection />

        <IntroBridgeSection />

        <ServicesSystemSection />

        <section id="security">
          <SecurityImpactSection />
        </section>

        <ProcessSection />

        <FAQSection />

        <ContactSection />
      </div>

      <SectionDock items={DOCK_ITEMS} offset={110} showAfter={220} />
    </main>
  );
}
