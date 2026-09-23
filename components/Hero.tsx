import Image from "next/image";

const socials = [
  { label: "GitHub", href: "https://github.com/reetbatra" },
  { label: "X", href: "https://x.com/reet_batra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/reet-batra/" },
  { label: "Blog", href: "https://reet.hashnode.dev" },
];

const spec: [string, string][] = [
  ["Role", "Builder / Product / Growth"],
  ["Stack", "TypeScript, Python, Next.js"],
  ["Shipping", "AskTota, Android live"],
  ["Previously", "StarkWare, ZKX, DablClub"],
  ["Based", "Bangalore, India"],
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1240px] border-b border-ink px-6 sm:px-8"
    >
      <div className="grid md:grid-cols-2">
        {/* LEFT: text */}
        <div className="py-12 md:border-r md:border-rule md:py-16 md:pr-10">
          <div className="t-label mb-8 flex items-center gap-2.5 text-muted">
            <span className="h-[7px] w-[7px] bg-blue" aria-hidden />
            Currently building AskTota
          </div>

          <h1 className="t-display text-[clamp(46px,6.6vw,88px)]">
            Builder at heart,
            <span className="t-display-sub mt-1 block text-muted">
              marketer by habit.
            </span>
          </h1>

          <p className="mt-8 max-w-[46ch] text-[16.5px] leading-[1.6] text-ink-2">
            I&apos;m Reet. I build the thing, then go find the people for it.
            Ten-plus products shipped in the last year, four years spent
            explaining hard software to developers, and one astrology app that
            reads like a <span className="mark">group chat</span>.
          </p>

          <div className="mt-10 flex w-fit border border-ink">
            <a
              href="#work"
              className="t-label flex min-h-12 items-center bg-ink px-6 text-paper transition-colors duration-150 hover:bg-blue"
            >
              See the work
            </a>
            <a
              href="mailto:reetbatra25@gmail.com"
              className="t-label flex min-h-12 items-center border-l border-ink px-6 transition-colors duration-150 hover:bg-acid"
            >
              Say hi
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-1">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label flex min-h-11 items-center text-faint transition-colors duration-150 hover:text-blue"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: photo as a plate, then the spec sheet */}
        <div className="flex flex-col pb-12 md:py-16 md:pl-10">
          <figure className="border border-ink">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2">
              <Image
                src="/hero-photo.jpg"
                alt="Reet Batra speaking on stage at ETHIndia"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-[72%_12%] contrast-[1.04] saturate-[0.92]"
              />
            </div>
            <figcaption className="t-label flex items-center justify-between gap-3 border-t border-ink px-3 py-2.5 text-muted">
              <span>Fig. 01 · ETHIndia, technical talk</span>
              <span className="text-blue" aria-hidden>
                ■
              </span>
            </figcaption>
          </figure>

          <table className="mt-7 w-full border-collapse text-[12.5px]">
            <tbody>
              {spec.map(([k, v]) => (
                <tr key={k} className="border-b border-rule">
                  <th
                    scope="row"
                    className="t-label py-2.5 text-left font-normal text-muted"
                  >
                    {k}
                  </th>
                  <td className="py-2.5 text-right font-medium">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-7 grid grid-cols-2 border-t border-ink">
            <div className="py-4 pr-4">
              <b className="block text-[38px] leading-none tracking-[-0.04em] [font-stretch:112%]">
                4,800
              </b>
              <span className="t-label mt-2 block text-muted">
                Devs taught, 11 cities
              </span>
            </div>
            <div className="border-l border-rule py-4 pl-4">
              <b className="block text-[38px] leading-none tracking-[-0.04em] [font-stretch:112%]">
                10+
              </b>
              <span className="t-label mt-2 block text-muted">
                Products shipped, solo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
