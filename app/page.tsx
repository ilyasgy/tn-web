import type { Metadata } from "next";
import Link from "next/link";
import SecurityImpactSection from "@/app/components/SecurityImpactSection";


export const metadata: Metadata = {
  title: "Healthcare Application Security Audits",
  description: "Business to business healthcare application security audits led by Omar Geylani. Manual testing, validated findings, clear remediation, and one retest.",
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
  audience: string;
};

const SERVICE_ROUTES = {
  websiteSecurity: "/services/website-security",
} as const;

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
    label: "Fixed scope audit",
    title: "Application Penetration Test & Remediation Blueprint",
    description:
      "For independent healthcare clinics, dental practices, and medical centers operating patient facing web applications.",
    bullets: [
      "Manual application penetration test",
      "PHI tracking exposure review",
      "Security header assessment",
      "Screenshots that show the risk",
      "Developer remediation blueprint",
      "One complimentary retest after fixes",
      "Designed for delivery within 7 calendar days",
    ],
    href: SERVICE_ROUTES.websiteSecurity,
    cta: "View scope",
    tone: "security",
    audience: "Deliverables",
  },
];

const PROCESS_STEPS = [
  ["01", "Scope", "We define the application, pages, and systems included in the assessment."],
  [
    "02",
    "Manual Testing",
    "The live application is assessed for application vulnerabilities, configuration weaknesses, and data exposure risks.",
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
    text: "What the fixed scope assessment includes.",
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
    a: "Independent healthcare clinics, dental practices, and medical centers operating patient facing web applications.",
  },
  {
    q: "Is the audit just an automated scan?",
    a: "No. Tools help with coverage, but every finding is manually verified before it reaches your report.",
  },
  {
    q: "When should the audit happen?",
    a: "When the patient facing application is live or ready for production, because the real browser behavior and exposed surface matter.",
  },
  {
    q: "What do we actually get back?",
    a: "You get technical findings with proof, severity, affected assets, business impact, and remediation guidance for your developer.",
  },
  {
    q: "Is a retest included?",
    a: "Yes. One complimentary retest of the original findings is included when requested within 14 calendar days after the final report is delivered, unless the Engagement Documents state another period.",
  },
  {
    q: "Do you need authorization?",
    a: "Yes. Every audit requires signed written authorization, an agreed scope, Rules of Engagement, a testing window, cleared payment, required access, and ThreatNest confirmation before testing begins. A form, call, or email is not authorization.",
  },
];

function HeroSection() {
  return (
    <section className="tn-hero tn-home-hero pt-6">
      <div className="tn-container tn-home-hero-layout">
        <div
          className="tn-home-hero-heading"
          data-tn-reveal="left"
          data-tn-reveal-state="hidden"
        >
          <h1 className="tn-home-display">
            Application security audits for healthcare websites
          </h1>
        </div>

        <div className="tn-home-hero-lower">
          <div
            className="tn-home-hero-intro"
            data-tn-reveal="up"
            data-tn-reveal-state="hidden"
          >
            <p className="tn-home-hero-lead">
              ThreatNest manually tests patient facing applications for exploitable weaknesses,
              privacy exposure, and unsafe configuration. The report gives your developer clear
              evidence and practical fixes.
            </p>
            <p className="tn-home-hero-note">
              The standard scope includes manual application testing, PHI tracking review,
              security configuration review, a repair blueprint, and one retest. Delivery is
              designed for seven calendar days after engagement requirements are met.
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
          <h2>
            We test the parts of the application patients can reach.
          </h2>
          <p className="tn-body">
            We inspect the production paths patients actually use, then turn verified risk into
            fixes your developer can use.
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

          <div className="mt-4">
            <h3 className="text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              {service.title}
            </h3>
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
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            One audit with a clear scope and a report your developer can use.
          </h2>
          <p className="mt-6 text-xl font-medium leading-8 text-neutral-700 dark:text-white/65">
            Manual application testing, PHI tracking exposure review, security header assessment,
            and remediation guidance. The standard seven calendar day delivery period starts only
            after the engagement prerequisites are complete.
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
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            From scope to final report.
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
          Every audit requires signed written authorization, an agreed scope and testing window,
          cleared payment, required access, and ThreatNest confirmation before testing begins.
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
          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Questions clients usually ask.
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
            <h2 className="text-4xl font-bold leading-[1.02] text-black dark:text-white md:text-5xl">
              Request an application security audit.
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-neutral-600 dark:text-white/60">
              Send your website URL and a short description of your application. We&apos;ll confirm
              scope, explain the assessment process, and provide the next steps.
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-neutral-600 dark:text-white/60">
              Requests are for businesses and organizations. Do not send patient information,
              credentials, access tokens, private keys, or confidential source code through the
              public form. Submitting a request does not authorize testing.
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
                ["Report", "Technical findings with remediation guidance for your developer."],
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
            <h2 className="text-2xl font-bold text-black dark:text-white">Find the details</h2>

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

    </main>
  );
}
