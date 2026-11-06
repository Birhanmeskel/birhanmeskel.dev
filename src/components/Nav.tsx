"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
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
    return () => observer.disconnect();
  }, []);

  return (
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
  );
}
