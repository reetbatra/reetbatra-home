"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";

const links = [
  { label: "Work", href: "#work" },
  { label: "Growth", href: "#growth" },
  { label: "Life", href: "#life" },
  { label: "Now", href: "#now" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full border px-4 py-2 transition-[background-color,border-color,box-shadow] duration-300 sm:px-5 ${
          scrolled
            ? "border-line-2 bg-paper/85 shadow-[0_8px_30px_rgba(28,26,23,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="font-serif text-[22px] leading-none tracking-tight text-ink"
          aria-label="Reet Batra, back to top"
        >
          Reet<span className="text-clay">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center rounded-full px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:bg-paper-2 hover:text-ink"
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
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-ink px-4 font-sans text-[13px] font-semibold text-paper transition-opacity duration-200 hover:opacity-80"
        >
          <span className="hidden sm:inline">Hiring? See my FDE work</span>
          <span className="sm:hidden">FDE work</span>
          <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
