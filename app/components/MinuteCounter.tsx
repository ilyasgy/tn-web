"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  perMinute: number;        // target number for 60 seconds
  className?: string;
  prefix?: string;
  suffix?: string;
};

export default function MinuteCounter({
  perMinute,
  className = "",
  prefix = "",
  suffix = "",
}: Props) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;

    const tick = (t: number) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / 60000); // 60s

      const next = perMinute * p;
      setValue(next);

      if (p >= 1) {
        // reset and go again
        startRef.current = t;
        setValue(0);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [perMinute]);

  return (
    <span className={className}>
      {prefix}
      {Math.floor(value).toLocaleString()}
      {suffix}
    </span>
  );
}
