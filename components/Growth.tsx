import Image from "next/image";
import CountUp from "./CountUp";
import SectionHead from "./SectionHead";

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
    <section id="growth" className="mt-16 border-y border-ink bg-paper-2 md:mt-20">
      <div className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20">
        <SectionHead
          index="03"
          label="Growth"
          title="Shipping is half the job."
          lede="The other half is getting anyone to notice. I spent four years doing developer marketing for hard-to-explain platforms. Numbers below are from that run. AskTota is where I'm applying all of it now, to consumers instead of developers."
        />

        <dl className="grid border-b border-ink sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal border-b border-rule py-7 lg:border-b-0 ${
                i > 0 ? "lg:border-l lg:border-rule lg:pl-6" : ""
              } ${i < 3 ? "lg:pr-6" : ""}`}
            >
              <dd className="text-[clamp(38px,4.2vw,56px)] leading-none tracking-[-0.045em] [font-stretch:112%] font-bold">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 text-[14px] font-semibold">{s.label}</dt>
              <p className="t-label mt-1.5 text-[10px] text-muted">{s.sub}</p>
            </div>
          ))}
        </dl>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r, i) => (
            <a
              key={r.photo}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal group block border-b border-rule pb-6 pt-6 ${
                i > 0 ? "lg:border-l lg:border-rule lg:pl-5" : ""
              } ${i < 3 ? "lg:pr-5" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative h-[250px] overflow-hidden border border-ink bg-ink">
                <Image
                  src={r.photo}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover saturate-[0.9] transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:saturate-100"
                  style={{ objectPosition: r.position }}
                />
              </div>
              <div className="t-label mt-3 text-blue">{r.label}</div>
              <div className="mt-1.5 text-[15px] font-semibold leading-[1.35]">
                {r.title}
              </div>
              <div className="t-label mt-2 text-faint transition-colors group-hover:text-ink">
                Proof ↗
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-t border-ink py-3" aria-hidden>
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="t-label flex items-center gap-8 pr-8 text-muted"
            >
              {m}
              <span className="h-[5px] w-[5px] bg-blue" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
