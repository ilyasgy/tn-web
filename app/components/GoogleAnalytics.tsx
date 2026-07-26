"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  listenForAnalyticsConsent,
  syncGoogleAnalytics,
} from "../lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const path = search ? `${pathname}?${search}` : pathname || "/";

  useEffect(() => {
    const stopListening = listenForAnalyticsConsent();
    syncGoogleAnalytics();

    return stopListening;
  }, [path]);

  return null;
}
