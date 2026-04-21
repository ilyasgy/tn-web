"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-tn-reveal]";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const root = document.documentElement;

    if (!elements.length) {
      root.removeAttribute("data-tn-reveal-ready");
      return;
    }

    root.removeAttribute("data-tn-reveal-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const element of elements) {
        element.setAttribute("data-tn-reveal-state", "visible");
      }

      root.setAttribute("data-tn-reveal-ready", "true");

      return () => root.removeAttribute("data-tn-reveal-ready");
    }

    const viewportHeight = window.innerHeight;

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= viewportHeight * 0.9 && rect.bottom >= 0) {
        element.setAttribute("data-tn-reveal-state", "visible");
      }
    }

    root.setAttribute("data-tn-reveal-ready", "true");

    const hiddenElements = elements.filter(
      (element) => element.getAttribute("data-tn-reveal-state") !== "visible"
    );

    if (!hiddenElements.length) {
      return () => root.removeAttribute("data-tn-reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          entry.target.setAttribute("data-tn-reveal-state", "visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    for (const element of hiddenElements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      root.removeAttribute("data-tn-reveal-ready");
    };
  }, [pathname]);

  return null;
}
