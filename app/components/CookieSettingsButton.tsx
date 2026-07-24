"use client";

import type { ReactNode } from "react";
import { COOKIE_SETTINGS_EVENT } from "../lib/consent";

export default function CookieSettingsButton({
  className = "tn-footer-link",
  children = "Cookie Settings",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
    >
      {children}
    </button>
  );
}
