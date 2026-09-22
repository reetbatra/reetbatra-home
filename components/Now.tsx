import SectionHead from "./SectionHead";

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
    <section
      id="now"
      className="mx-auto max-w-[1240px] px-6 pt-16 pb-16 sm:px-8 md:pt-20 md:pb-20"
    >
      <SectionHead index="05" label="Now" title="What I'm doing this month." />

      <dl className="border-b border-ink">
        {items.map((it) => (
          <div
            key={it.k}
            className="reveal grid items-baseline gap-x-6 gap-y-2 border-b border-rule py-6 md:grid-cols-[130px_1fr_160px]"
          >
            <dt className="t-label text-blue">{it.k}</dt>
            <dd className="max-w-[62ch] text-[15.5px] leading-[1.62] text-ink-2">
              {it.v}
            </dd>
            <dd className="md:text-right">
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="t-label inline-flex min-h-11 items-center text-faint transition-colors duration-150 hover:text-ink"
              >
                {it.cta} ↗
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <p className="reveal t-label mt-5 text-faint">Updated September 2026</p>
    </section>
  );
}
