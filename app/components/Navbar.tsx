import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-6 pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between relative">
        
        <Link href="/" className="flex items-center gap-2">
          <img src="/white.png" className="h-10 w-10 invert dark:invert-0" />
          <span className="text-sm font-semibold tracking-[0.22em]">
            THREATNEST
          </span>
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-neutral-600 dark:text-white/70">
          <Link href="/start">START</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        <Link
          href="/start"
          className="rounded-lg bg-neutral-900 px-5 py-2 text-xs font-bold text-white"
        >
          START
        </Link>

      </div>
    </header>
  );
}
