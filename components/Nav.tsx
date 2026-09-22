"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Growth", href: "#growth" },
  { label: "Life", href: "#life" },
  { label: "Now", href: "#now" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink bg-paper transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-ink)]" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[1240px] items-stretch px-6 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center border-r border-rule pr-6 text-[15px] font-bold tracking-[-0.02em] [font-stretch:112%] sm:pr-7"
          aria-label="Reet Batra, back to top"
        >
          REET BATRA
        </a>

        <ul className="mr-auto hidden items-stretch md:flex">
          {links.map((l) => (
            <li key={l.href} className="flex">
              <a
                href={l.href}
                className="t-label flex items-center border-r border-rule px-5 text-muted transition-colors duration-150 hover:bg-acid hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://fde.reetbatra.com"
          target="_blank"
          rel="noopener noreferrer"
          className="t-label ml-auto flex items-center gap-2 bg-ink px-5 text-paper transition-colors duration-150 hover:bg-blue md:ml-0"
        >
          <span className="hidden sm:inline">Hiring? See my FDE work</span>
          <span className="sm:hidden">FDE work</span>
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}
