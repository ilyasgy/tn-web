"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import StatCounter from "@/app/components/StatCounter";
import MinuteCounter from "@/app/components/MinuteCounter";

const ATTACKS_PER_DAY = 600_000_000;
const ATTACKS_PER_MIN = Math.round(ATTACKS_PER_DAY / 1440);

/**
 * Triggers once when the section is entering view (not after it fully fits).
 * - offset: header height
 * - bottomMargin: how early to trigger before it's centered (bigger negative = earlier)
 */
function useInViewOnce({
  offset = 110,
  bottomMarginPercent = 55, // trigger when it enters, not when it fills screen
}: {
  offset?: number;
  bottomMarginPercent?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current || seen) return;

    const rootMargin = `-${offset}px 0px -${bottomMarginPercent}% 0px`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true);
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin,
      }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen, offset, bottomMarginPercent]);

  return { ref, seen };
}

export default function SecurityImpactSection() {
  // Start animations only when this block enters view
  const { ref, seen } = useInViewOnce({ offset: 110, bottomMarginPercent: 60 });

  return (
    <section className="relative px-6 py-16 md:py-24 bg-black overflow-hidden">
      {/* grid bg */}
      <div
        className="absolute inset-0 opacity-[0.40]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,255,104,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">
              WEBSITE SECURITY <span className="ml-2 text-[#2cff68] font-bold">new</span>
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-[1.12]">
              Your site gets hit even if nobody knows you.
            </h2>

            <p className="mt-4 text-white/55 md:text-lg">
              Most attacks are automated. Bots scan the internet all day looking for easy wins:
              weak logins, exposed admin panels, sloppy configs, old plugins, bad headers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/services/website-security"
              className="inline-flex items-center justify-center rounded-xl border border-[#2cff68]/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-[#2cff68]/40"
            >
              See Security <span className="ml-2 text-[#2cff68]">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
            >
              Add it after launch
            </Link>
          </div>
        </div>

        {/* stats (wrap in ref so observer triggers as soon as this enters view) */}
        <div ref={ref} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-[22px] border border-white/10 bg-black/70 p-6 overflow-hidden">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">ATTACKS / DAY</p>
            <div className="mt-3 text-3xl md:text-4xl font-bold text-white tabular-nums">
              {seen ? <StatCounter end={ATTACKS_PER_DAY} /> : "—"}
            </div>
            <p className="mt-3 text-sm text-white/55">Reported at Microsoft ecosystem scale.</p>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-black/70 p-6 overflow-hidden">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">ATTACKS / MIN</p>
            <div className="mt-3 text-3xl md:text-4xl font-bold text-white tabular-nums">
              {seen ? <StatCounter end={ATTACKS_PER_MIN} /> : "—"}
            </div>
            <p className="mt-3 text-sm text-white/55">Derived from 600M/day.</p>
          </div>

          <div className="rounded-[22px] border border-[#2cff68]/20 bg-black/70 p-6 overflow-hidden">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">THIS MINUTE</p>
            <div className="mt-3 text-3xl md:text-4xl font-bold text-white tabular-nums">
              {/* If your MinuteCounter supports enabled, pass it. If not, it will just render when seen. */}
              {seen ? <MinuteCounter perMinute={ATTACKS_PER_MIN} /> : "—"}
            </div>
            <p className="mt-3 text-sm text-white/55">Live counter. Resets every 60 seconds.</p>
          </div>
        </div>

        {/* why it matters + how it helps */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-[28px] border border-white/10 bg-black/70 p-7 md:p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">WHY THIS MATTERS</p>

            <ul className="mt-5 space-y-3 text-white/70">
              {[
                "Bots don’t target “big brands”. They target easy setups.",
                "A small mistake (exposed admin, weak cookies, missing headers) is enough.",
                "Fixing it after a problem costs more than hardening it upfront.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 text-white/40">▸</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/60 p-5">
              <p className="text-sm font-semibold text-white">How it helps after we build your site</p>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">
                We review the live site, tighten the obvious weak points, and give you a short list of fixes
                that actually move the risk down — not a scary report.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/70 p-7 md:p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/55">WHAT YOU GET</p>

            <div className="mt-5 space-y-3">
              {[
                ["Quick scan", "Find common exposure + misconfig issues."],
                ["Fix list", "Clear priorities: do this first."],
                ["Hardening", "Headers, auth basics, admin protection."],
                ["Re-check", "Confirm the important fixes are working."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <p className="text-sm font-semibold text-white">{t}</p>
                  <p className="mt-1 text-xs text-white/55">{d}</p>
                </div>
              ))}
            </div>

            <Link
              href="/services/website-security"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white/80 hover:text-white transition"
            >
              See the full security page <span className="text-white/50">→</span>
            </Link>
          </div>
        </div>

        {/* footnote */}
        <p className="mt-6 text-xs text-white/40">
          Figures shown use Microsoft’s reported “600 million cyberattacks per day”, converted to a per-minute estimate.
        </p>
      </div>
    </section>
  );
}