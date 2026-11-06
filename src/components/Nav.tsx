"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/** Section nav that highlights whichever section is currently in view. */
export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    // The last section is short, so it may never reach the observer's band — mark it active at page bottom.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(sections[sections.length - 1].id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile / tablet: floating bottom bar (the desktop sidebar list is hidden below lg) */}
      <nav
        className="fixed inset-x-0 bottom-4 z-30 flex justify-center px-4 md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Section navigation"
      >
        <ul className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-text/15 bg-surface/85 p-1 shadow-lg shadow-black/20 backdrop-blur-md">
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition-colors motion-reduce:transition-none sm:px-4 sm:text-sm ${
                    isActive ? "bg-accent text-bg" : "text-muted hover:text-heading focus-visible:text-heading"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="hidden lg:block" aria-label="In-page navigation">
        <ul className="mt-16 w-max">
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center py-3"
                >
                  <span
                    className={`mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading ${
                      isActive ? "w-16 bg-heading" : "w-8 bg-muted"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest group-hover:text-heading group-focus-visible:text-heading ${
                      isActive ? "text-heading" : "text-muted"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
