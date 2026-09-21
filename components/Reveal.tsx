"use client";

import { useEffect } from "react";

// Marks the document as JS-enabled and fades `.reveal` blocks in as they
// scroll into view. Without JS every block stays visible, so nothing is lost
// for crawlers or reduced-motion users.
export default function Reveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const blocks = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (blocks.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return null;
}
