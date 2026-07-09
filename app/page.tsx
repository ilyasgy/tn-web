import type { Metadata } from "next";
import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSection";
import SectionDock from "@/app/components/SectionDock";


export const metadata: Metadata = {
  title: "Healthcare Application Security Audits",
  description: "Fixed-scope healthcare application security audits for clinics, dental practices, and medical centers. Manual testing, PHI tracking exposure review, developer-ready remediation, and one retest.",
  alternates: {
    canonical: "/",
  },
};
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
  [
    "01",
    "Surface Review",
    "We inspect browser behavior, public pages, patient forms, and exposed infrastructure.",
  ],
  [
    "02",
    "Manual Assessment",
    "Every reachable application component is manually tested for security weaknesses.",
  ],
  [
    "03",
    "Developer Blueprint",
    "Every finding includes technical proof and remediation instructions your developer can implement.",
  ],
] as const;

const SERVICE_TRACKS: HomeService[] = [
  {
    label: "Fixed-scope audit",
    title: "Application Penetration Test & Remediation Blueprint",
    description:
      "For independent healthcare clinics, dental practices, and medical centers operating patient-facing web applications.",
    bullets: [
      "Manual application penetration test",
      "PHI tracking exposure review",
      "Security header assessment",
      "Proof-of-risk screenshots",
      "Developer remediation blueprint",
      "One complimentary retest after fixes",
      "Delivered within 7 days",
    ],
    href: SERVICE_ROUTES.websiteSecurity,
    cta: "View scope",
    tone: "security",
    price: "$2,000 Fixed",
    audience: "Deliverables",
  },
];

const PROCESS_STEPS = [
  ["01", "Scope", "We define the application, pages, and systems included in the assessment."],
  [
    "02",
    "Manual Testing",
    "The live application is assessed for application-layer vulnerabilities, configuration weaknesses, and data exposure risks.",
  ],
  [
    "03",
    "Validation",
    "Every finding is reproduced, verified, and documented with supporting evidence.",
  ],
  [
    "04",
    "Delivery",
    "You receive a remediation blueprint, technical evidence, and one complimentary retest after fixes.",
  ],
];

const QUICK_LINKS = [
  {
    title: "Audit scope",
    text: "What the fixed-scope assessment includes.",
    href: SERVICE_ROUTES.websiteSecurity,
  },
  {
    title: "Request audit",
    text: "Send the URL and notes to confirm scope.",
    href: "/start",
  },
  {
    title: "About ThreatNest",
    text: "How we approach healthcare application security.",
    href: "/about",
  },
  {
    title: "Contact",
    text: "Ask a question before sending scope.",
    href: "/contact",
  },
];

const FAQ_ITEMS = [
  {
    q: "Who do you usually work with?",
    a: "Independent healthcare clinics, dental practices, and medical centers operating patient-facing web applications.",
  },
  {
    q: "Is the audit just an automated scan?",
    a: "No. Tools help with coverage, but every finding is manually verified before it reaches your report.",
  },
  {
    q: "When should the audit happen?",
    a: "When the patient-facing application is live or production-ready, because the real browser behavior and exposed surface matter.",
  },
  {
    q: "What do we actually get back?",
    a: "You get technical findings with proof, severity, affected assets, business impact, and developer-ready remediation guidance.",
  },
  {
    q: "Is a retest included?",
    a: "Yes. One complimentary retest is included after your developer applies the fixes.",
  },
  {
    q: "Do you need authorization?",
    a: "Yes. Every audit requires written authorization and a fixed scope before testing begins.",
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
          <h1 className="tn-display">Application security audits for healthcare websites.</h1>
          <p className="tn-body">
            ThreatNest performs fixed-scope application security audits for independent healthcare
            clinics, dental practices, and medical centers. We identify application-layer
            vulnerabilities, PHI exposure through tracking technologies, weak security
            configurations, and provide a developer-ready remediation blueprint within 7 days.
          </p>

          <div className="tn-actions">
            <Link href="/start" className="tn-button-primary">
              Request Audit
            </Link>
            <Link href={SERVICE_ROUTES.websiteSecurity} className="tn-button-secondary">
              View Scope
            </Link>
          </div>
        </div>

        <div className="tn-hero-meta" data-tn-reveal="right" data-tn-reveal-state="hidden">
          {[
            [
              "PHI Tracking Exposure",
              "Meta Pixels, analytics scripts, and third-party JavaScript inside patient forms.",
            ],
            [
              "Security Header Failures",
              "Browser security controls, transport protection, and configuration weaknesses.",
            ],
            [
              "Application Risks",
              "Authentication flaws, access control issues, exposed files, insecure business logic, and production vulnerabilities.",
            ],
          ].map(([label, text]) => (
            <div key={label} className="tn-hero-meta-item">
              <small className="tn-meta-label">{label}</small>
              <p className="tn-meta-value">{text}</p>
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
          <small className="tn-kicker">Audit approach</small>
          <h2>
            Security begins where patients interact.
          </h2>
          <p className="tn-body">
            We inspect the production paths patients actually use, then turn verified risk into
            developer-ready fixes.
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
            <h3 className="text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
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
          <ul className="mt-5 grid gap-3 text-lg font-medium leading-8 text-neutral-600 dark:text-white/60">
            {service.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

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
            One fixed-scope audit. One developer-ready repair blueprint.
          </h2>
          <p className="mt-6 text-xl font-medium leading-8 text-neutral-700 dark:text-white/65">
            Manual application testing, PHI tracking exposure review, security header assessment,
            and remediation guidance delivered within 7 days.
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
            Structured. Evidence-driven. Developer-focused.
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
          Every audit requires written authorization and a fixed testing window before testing
          begins.
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
              Request an application security audit.
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-neutral-600 dark:text-white/60">
              Send your website URL and a short description of your application. We&apos;ll confirm
              scope, explain the assessment process, and provide the next steps.
            </p>

            <div className="tn-actions mt-8">
              <Link href="/start" className="tn-button-primary">
                Request Audit
              </Link>
              <Link href={SERVICE_ROUTES.websiteSecurity} className="tn-button-secondary">
                View Scope
              </Link>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                ["Audit", "Manual application penetration testing."],
                ["Report", "Technical findings with developer-ready remediation."],
                ["Retest", "Verification after remediation is complete."],
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
