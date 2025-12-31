"use client";

import { useEffect, useMemo, useState } from "react";

type DockItem = {
  id: string;
  label: string;
};

export default function SectionDock({
  items,
  offset = 110, // header height
  showAfter = 220, // px scrolled before dock appears
}: {
  items: DockItem[];
  offset?: number;
  showAfter?: number;
}) {
  const [activeId, setActiveId] = useState(items?.[0]?.id ?? "");
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

    const onScroll = () => {
  const y = window.scrollY;

  // --- ACTIVE SECTION (early activation) ---
  const anchorY = offset + 20; // point under header
  let bestId = els[0]?.id ?? "";
  let bestDist = Number.POSITIVE_INFINITY;

  for (const el of els) {
    const rect = el.getBoundingClientRect();
    const dist = Math.abs(rect.top - anchorY);

    // section is relevant if it crosses or is below the anchor line
    if (rect.bottom > anchorY) {
      if (dist < bestDist) {
        bestDist = dist;
        bestId = el.id;
      }
    }
  }

  setActiveId(bestId);

  // --- SHOW/HIDE DOCK (use bestId, not activeId) ---
  const isContact = bestId === "contact";
  setVisible(y > showAfter && !isContact);

  // --- PROGRESS ---
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight || document.body.scrollHeight;
  const clientHeight = doc.clientHeight || window.innerHeight;

  const total = Math.max(1, scrollHeight - clientHeight);
  setProgress(clamp01(scrollTop / total));
};


    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset, showAfter]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (!items?.length) return null;

  return (
    <div
      className={[
        "fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] px-4",
        "transition duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <div className="relative rounded-full border border-white/15 bg-black/70 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* progress bar behind pills */}
        <div className="absolute inset-0">
          <div
            className="h-full bg-white/10"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>

        <div className="relative flex items-center gap-1 p-1.5">
          {items.map((it) => {
            const active = it.id === activeId;

            return (
              <button
                key={it.id}
                onClick={() => goTo(it.id)}
                className={[
                  "relative rounded-full transition outline-none",
                  "focus-visible:ring-2 focus-visible:ring-white/25",
                  // desktop: labels
                  "px-3 py-2 text-xs font-semibold",
                  active
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
                title={it.label}
              >
                {/* Mobile: dot */}
                <span className="inline-flex items-center gap-2">
                  <span
                    className={[
                      "md:hidden inline-block h-2.5 w-2.5 rounded-full",
                      active ? "bg-black/70" : "bg-white/50",
                    ].join(" ")}
                  />
                  {/* Desktop: text */}
                  <span className="hidden md:inline">{it.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
