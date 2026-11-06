"use client";

/**
 * Light/dark toggle. The current theme lives on <html data-theme>, set before
 * first paint by the inline script in layout.tsx — so this component needs no
 * React state, and the icon is chosen with CSS (no hydration mismatch).
 */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="fixed right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-text/15 bg-surface/80 text-heading backdrop-blur transition hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent md:right-6 md:top-6"
    >
      {/* Sun — shown in dark mode (click for light) */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-5 w-5 in-data-[theme=light]:hidden" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Moon — shown in light mode (click for dark) */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="hidden h-5 w-5 in-data-[theme=light]:block" aria-hidden>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
