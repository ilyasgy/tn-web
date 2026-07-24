"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initializeGoogleAnalytics, trackPageView } from "../lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  useEffect(() => {
    const path = search ? `${pathname}?${search}` : pathname;
    trackPageView(path || "/");
  }, [pathname, search]);

  return null;
}
