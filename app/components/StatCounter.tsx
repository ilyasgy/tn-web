"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  end: number;
  durationMs?: number; // animation time
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  once?: boolean; // animate once when in view
  format?: (n: number) => string;
};

export default function StatCounter({
  end,
  durationMs = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  once = true,
  format,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);
  const [value, setValue] = useState(0);

  const formatter = useMemo(() => {
    if (format) return format;
    return (n: number) =>
      n.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
  }, [decimals, format]);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (once && value !== 0) return;

    let raf = 0;
    const start = performance.now();
    const from = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      // smooth-ish
      const eased = 1 - Math.pow(1 - p, 3);
      const next = from + (end - from) * eased;

      setValue(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatter(value)}
      {suffix}
    </span>
  );
}
