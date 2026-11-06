"use client";

import { useEffect, useRef } from "react";

/** Soft warm glow that follows the cursor (desktop only, off for reduced motion). */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, var(--spotlight), transparent 80%)`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
    />
  );
}
