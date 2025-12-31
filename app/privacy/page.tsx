import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
      </div>

      {/* Header */}
      <header className="px-6 pt-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/white.png" alt="ThreatNest" className="h-9 w-9" />
            <span className="text-sm font-semibold tracking-[0.22em]">
              THREATNEST
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/terms"
              className="hidden sm:inline text-xs font-semibold tracking-wide text-white/70 hover:text-white transition"
            >
              TERMS
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-white/90"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 pt-20 pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
            LEGAL
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
            Privacy Policy
          </h1>

          <p className="mt-6 text-white/55">
            This Privacy Policy explains what information ThreatNest collects,
            how it is used, and what choices you have.
          </p>

          <div className="mt-12 space-y-10 text-white/70 leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                1. Information We Collect
              </h2>
              <p className="mt-3">
                We collect only the information necessary to deliver our
                services. This may include:
              </p>
              <ul className="mt-4 space-y-2 pl-5 list-disc">
                <li>Name or company name</li>
                <li>Email address</li>
                <li>Website domain(s)</li>
                <li>
                  Messages, notes, or scope details voluntarily provided by the
                  client
                </li>
              </ul>
              <p className="mt-4">
                We do not intentionally collect sensitive personal data beyond
                what is required to perform the service.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                2. How Information Is Used
              </h2>
              <p className="mt-3">Collected information may be used:</p>
              <ul className="mt-4 space-y-2 pl-5 list-disc">
                <li>To process orders and verify authorization or scope</li>
                <li>To deliver reports, updates, and service-related communication</li>
                <li>To provide customer support</li>
                <li>To improve internal processes and reporting quality</li>
              </ul>
              <p className="mt-4">
                ThreatNest does not sell, rent, or trade client information.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                3. Data Storage & Retention
              </h2>
              <p className="mt-3">
                Information is stored securely and retained only for as long as
                necessary to deliver the service or comply with legal
                obligations. Reports and related data may be deleted after a
                reasonable period unless continued support is requested.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                4. Third-Party Services
              </h2>
              <p className="mt-3">
                Payments and communications may be processed through third-party
                providers. ThreatNest is not responsible for the privacy
                practices of external services.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                5. Legal Disclosure
              </h2>
              <p className="mt-3">
                Information may be disclosed if required by law, court order, or
                lawful requests from authorities.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                6. Client Rights
              </h2>
              <p className="mt-3">
                Clients may request access to, correction of, or deletion of
                their information by contacting ThreatNest.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                7. Changes to This Policy
              </h2>
              <p className="mt-3">
                This Privacy Policy may be updated from time to time. Updated
                versions will be posted on this page.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold text-white">8. Contact</h2>
              <p className="mt-3">
                Questions regarding this Privacy Policy may be sent to{" "}
                <a
                  href="mailto:info@threatnest.com"
                  className="text-white underline hover:opacity-80"
                >
                  info@threatnest.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-14 flex flex-col sm:flex-row gap-3">
            <Link
              href="/terms"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/25"
            >
              View Terms <span className="ml-2 text-white/50">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
          <footer className="relative px-6 py-14 bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/white.png"
            alt="ThreatNest logo"
            className="h-10 w-10"
            loading="lazy"
            decoding="async"
          />
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
                    <Link href="/terms" className="hover:text-white transition">
            TERMS
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            PRIVACY
          </Link>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
        </div>

        <p className="text-xs text-white/45">
          © {new Date().getFullYear()} ThreatNest. All rights reserved.
        </p>
      </div>
    </footer>
    </main>
  );
}
