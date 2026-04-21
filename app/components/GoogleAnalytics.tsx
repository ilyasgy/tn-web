"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_MEASUREMENT_ID, trackPageView } from "../lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      return;
    }

    const path = search ? `${pathname}?${search}` : pathname;
    trackPageView(path || "/");
  }, [pathname, search]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="tn-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          window.__tnLastTrackedPath = window.location.pathname + window.location.search;
          window.gtag('event', 'page_view', {
            page_path: window.__tnLastTrackedPath,
            page_location: window.location.href,
            page_title: document.title
          });
        `}
      </Script>
    </>
  );
}
