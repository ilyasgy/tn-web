import Link from "next/link";

export default function TermsPage() {
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

          <Link
            href="/contact"
            className="rounded-lg bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-white/90"
          >
            CONTACT
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 pt-20 pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
            LEGAL
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-white/55">
            These Terms & Conditions govern the use of services provided by
            ThreatNest. By purchasing or using our services, you agree to the
            terms below.
          </p>

          <div className="mt-12 space-y-10 text-white/70 leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold text-white">1. Services</h2>
              <p className="mt-3">
                ThreatNest provides non-intrusive website security and
                application flow assessments intended to identify common
                security risks, misconfigurations, and exposure issues.
                Services are informational in nature and do not guarantee that
                a website or application will be fully secure or compliant.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                2. Authorization to Test
              </h2>
              <p className="mt-3">
                By purchasing a service, you confirm that you are the owner of
                the website or have explicit authorization from the owner to
                request a security assessment. You grant ThreatNest permission
                to perform a non-intrusive security assessment within the
                agreed scope.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                3. Scope & Restrictions
              </h2>
              <p className="mt-3">
                Assessments are limited to the domain(s) provided by the client
                and the agreed scope. The following activities are not included
                unless explicitly agreed in writing:
              </p>
              <ul className="mt-4 space-y-2 pl-5 list-disc">
                <li>Denial-of-service testing or traffic flooding</li>
                <li>
                  Infrastructure or hosting-provider attacks or scanning
                  outside the target domain
                </li>
                <li>Brute-force attacks or credential stuffing</li>
                <li>
                  Testing of third-party systems or services not owned or
                  authorized by the client
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                4. Use of Information
              </h2>
              <p className="mt-3">
                We collect only what is required to deliver the service (such
                as email address, domain name, and submitted notes). Client
                information may be used to:
              </p>
              <ul className="mt-4 space-y-2 pl-5 list-disc">
                <li>Verify orders and clarify scope</li>
                <li>Deliver reports, updates, and related support</li>
                <li>
                  Improve internal quality and reporting templates without
                  exposing private client details
                </li>
              </ul>
              <p className="mt-4">
                Information may be disclosed if required by law, court order,
                or lawful requests from authorities.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                5. Fees & Payments
              </h2>
              <p className="mt-3">
                Fees are due at checkout unless otherwise agreed in writing.
                Payments are processed through the selected payment provider.
                Incorrect or incomplete order details may delay delivery. You
                confirm that you are authorized to use the payment method
                provided.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                6. Delivery Timeline
              </h2>
              <p className="mt-3">
                Delivery timelines begin once all required information is
                received. If additional details are required, the delivery
                timeline may pause until the client responds.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                7. Disclaimer of Warranties
              </h2>
              <p className="mt-3">
                Services are provided on an “as is” and “as available” basis.
                ThreatNest does not warrant that services will be uninterrupted,
                error-free, or that all vulnerabilities will be identified.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                8. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, ThreatNest is not liable
                for any indirect, incidental, special, or consequential damages,
                including loss of profits, business interruption, or data loss,
                arising from the use of our services or reliance on our reports.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                9. Refund Policy
              </h2>
              <p className="mt-3">
                Refunds may be issued at ThreatNest’s discretion in cases where
                no material findings can be demonstrated. Completed services
                are otherwise non-refundable.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                10. Changes to Terms
              </h2>
              <p className="mt-3">
                ThreatNest may modify these Terms & Conditions from time to
                time. Updated terms will be posted on this page. Continued use
                of the services after changes constitutes acceptance of the
                revised terms.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-semibold text-white">
                11. Contact
              </h2>
              <p className="mt-3">
                Questions regarding these Terms & Conditions may be sent to{" "}
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
