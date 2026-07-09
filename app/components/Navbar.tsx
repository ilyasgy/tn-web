"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/start", label: "Start" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    // Measure content and animate height for a smooth custom slide
    if (open) {
      const content = el.querySelector('.tn-mobile-inner') as HTMLElement | null;
      if (content) {
        const height = content.scrollHeight;
        el.style.maxHeight = height + 'px';
        el.style.opacity = '1';
      } else {
        el.style.maxHeight = '600px';
        el.style.opacity = '1';
      }
    } else {
      el.style.maxHeight = '0px';
      el.style.opacity = '0';
    }
  }, [open]);

  return (
    <header className="tn-nav-shell sticky top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div className="tn-logo-stack" aria-hidden="true">
            <img src="/black.png" alt="" className="tn-logo-light tn-logo-swap" />
            <img src="/white.png" alt="" className="tn-logo-dark tn-logo-swap" />
          </div>
          <span className="tn-brand-text text-sm font-semibold tracking-[0.18em]">THREATNEST</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`tn-nav-link ${isActive ? "tn-nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex tn-button-primary">
            Contact
          </Link>

          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
            className="tn-mobile-toggle md:hidden inline-flex items-center justify-center rounded-md p-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden tn-mobile-menu ${open ? "tn-mobile-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="tn-mobile-inner mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`tn-nav-link ${isActive ? "tn-nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/contact" onClick={() => setOpen(false)} className="tn-button-primary">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
