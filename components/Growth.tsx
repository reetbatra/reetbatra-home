import Image from "next/image";
import CountUp from "./CountUp";
import SectionHead from "./SectionHead";
import { ArrowUpRight } from "./icons";

const stats = [
  { to: 4800, suffix: "+", label: "developers taught in person", sub: "11 cities, one workshop tour" },
  { to: 8, prefix: "4K to ", suffix: "K", label: "views per video episode", sub: "a technical series I wrote and hosted" },
  { to: 21, prefix: "$", suffix: "K", label: "in developer grants run", sub: "picked, tracked, pushed to ship" },
  { to: 600, suffix: "+", label: "students through one bootcamp", sub: "5 weeks, curriculum to mentorship" },
];

const rooms = [
  {
    photo: "/p3.jpeg",
    alt: "Reet running a hands-on workshop for a packed room",
    label: "Workshop tour · 11 cities",
    title: "Same talk, eleven completely different rooms",
    href: "https://x.com/stark_con/status/1605872741944418305",
    position: "center top",
  },
  {
    photo: "/p4.png",
    alt: "Reet teaching at a developer bootcamp",
    label: "Bootcamp · 600+ students",
    title: "Most of them had never shipped anything",
    href: "https://x.com/stark_con/status/1628659312498462721",
    position: "center 20%",
  },
  {
    photo: "/p1.jpeg",
    alt: "Reet giving a guest talk on protocol architecture",
    label: "Guest speaker",
    title: "Q&A ran long, people kept asking",
    href: "https://x.com/ExaProtocol/status/1656280478591201283",
    position: "center top",
  },
  {
    photo: "/p2.jpeg",
    alt: "Reet hosting a free masterclass",
    label: "Free masterclass",
    title: "What technical enablement looks like, day to day",
    href: "https://x.com/tribeacademy_in/status/1659239504149118977",
    position: "8% center",
  },
];

const marquee = [
  "Content systems",
  "Developer communities",
  "Launch pages",
  "Short video",
  "Onboarding funnels",
  "Reels that reach strangers",
  "Docs people finish",
  "Grants programs",
  "Workshop tours",
  "Positioning",
];

export default function Growth() {
  return (
    <section id="growth" className="border-y border-line bg-paper-2/60">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHead
          index="03"
          label="Growth"
          title="Shipping is half the job. The other half is getting anyone to notice."
          lede="I spent four years doing developer marketing for hard-to-explain platforms. Numbers below are from that run. AskTota is where I'm applying all of it now, to consumers instead of developers."
        />

        <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal bg-paper p-7">
              <dd className="font-serif text-[clamp(44px,4.6vw,64px)] leading-none tracking-[-0.03em] text-clay">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 font-sans text-[14px] font-semibold text-ink">{s.label}</dt>
              <p className="mt-1 font-sans text-[12.5px] text-faint">{s.sub}</p>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r, i) => (
            <a
              key={r.photo}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-[#221f1c]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Image
                src={r.photo}
                alt={r.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover opacity-90 transition-[transform,opacity] duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                style={{ objectPosition: r.position }}
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#1c1a17] via-[#1c1a17]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-[#c8a892]">
                  {r.label}
                </div>
                <div className="font-serif text-[18px] leading-tight text-paper">{r.title}</div>
                <div className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#a89a8e] transition-colors group-hover:text-paper">
                  Proof
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-t border-line py-4" aria-hidden>
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              {m}
              <span className="h-1 w-1 rounded-full bg-clay" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
