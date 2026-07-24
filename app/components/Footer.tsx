import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-grid)] bg-white px-6 py-16 transition-colors dark:bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="tn-logo-stack" aria-hidden="true">
              <Image src="/black.png" alt="" width={48} height={48} className="tn-logo-light tn-logo-swap" />
              <Image src="/white.png" alt="" width={48} height={48} className="tn-logo-dark tn-logo-swap" />
            </div>
            <span className="tn-brand-text text-sm font-semibold tracking-[0.18em]">
              THREATNEST
            </span>
          </Link>

          <p className="mt-5 max-w-md text-lg font-medium leading-8 text-[#333333] dark:text-white/70">
            ThreatNest is an independent cybersecurity service brand led by Omar Geylani.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:items-end">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/services" className="tn-footer-link">
              Services
            </Link>
            <Link href="/about" className="tn-footer-link">
              About
            </Link>
            <Link href="/contact" className="tn-footer-link">
              Contact
            </Link>
            <Link href="/start" className="tn-footer-link">
              Start
            </Link>
            <Link href="/terms" className="tn-footer-link">
              Terms
            </Link>
            <Link href="/privacy" className="tn-footer-link">
              Privacy
            </Link>
            <Link href="/authorized-testing" className="tn-footer-link">
              Authorized Testing
            </Link>
            <Link href="/data-handling" className="tn-footer-link">
              Data Handling
            </Link>
            <Link href="/cookies" className="tn-footer-link">
              Cookies
            </Link>
            <CookieSettingsButton>Cookie Settings</CookieSettingsButton>
          </div>

          <SocialLinks className="pt-4" />

          <p className="tn-muted-small">
            (c) {new Date().getFullYear()} ThreatNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
