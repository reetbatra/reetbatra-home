import SectionHead from "./SectionHead";
import { ArrowUpRight } from "./icons";

const items = [
  {
    k: "Building",
    v: "AskTota. Android is live, iOS is next, and the daily reels engine posts at 20:00 IST whether I feel like it or not.",
    href: "https://www.asktota.com",
    cta: "asktota.com",
  },
  {
    k: "Contributing",
    v: "Sarvam AI's open source: a TTS parameter fix in their skills library (merged) and a streaming fix in the AI SDK provider (in review). The kind of bugs you only hit by building on an SDK instead of reading it.",
    href: "https://github.com/sarvamai/skills/pull/17",
    cta: "The merged PR",
  },
  {
    k: "Open to",
    v: "Forward Deployed and AI DevRel roles, and product conversations with people building things developers have to understand before they can use them.",
    href: "https://fde.reetbatra.com",
    cta: "The FDE portfolio",
  },
];

export default function Now() {
  return (
    <section id="now" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
      <SectionHead index="05" label="Now" title="What I'm doing this month." />

      <dl className="mt-12 divide-y divide-line border-y border-line">
        {items.map((it) => (
          <div key={it.k} className="reveal grid gap-3 py-7 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-8">
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-clay">{it.k}</dt>
            <dd className="max-w-[640px] font-sans text-[16px] leading-[1.7] text-ink-2">{it.v}</dd>
            <dd>
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-faint transition-colors hover:text-ink"
              >
                {it.cta}
                <ArrowUpRight size={13} />
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <p className="reveal mt-6 font-mono text-[10.5px] uppercase tracking-[0.12em] text-faint">
        Updated September 2026
      </p>
    </section>
  );
}
