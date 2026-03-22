import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative px-6 py-14 border-t border-neutral-200 bg-neutral-50 dark:bg-black dark:border-white/10 transition-colors">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/white.png"
            alt="Logo"
            className="h-10 w-10 invert dark:invert-0 transition"
            loading="lazy"
            decoding="async"
          />
          <span className="text-sm font-semibold tracking-[0.22em] text-neutral-800 dark:text-white/80">
            THREATNEST
          </span>
        </Link>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-wide text-neutral-600 dark:text-white/60">
          <Link href="/start" className="hover:text-black dark:hover:text-white transition">
            START
          </Link>
          <Link href="/services" className="hover:text-black dark:hover:text-white transition">
            SERVICES
          </Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white transition">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-black dark:hover:text-white transition">
            CONTACT
          </Link>
          <Link href="/terms" className="hover:text-black dark:hover:text-white transition">
            TERMS
          </Link>
          <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">
            PRIVACY
          </Link>
        </div>

        <p className="text-xs text-neutral-400 dark:text-white/45">
          © {new Date().getFullYear()} ThreatNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
