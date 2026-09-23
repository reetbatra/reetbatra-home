import Image from "next/image";
import { ArrowUpRight } from "./icons";

const socials = [
  { label: "GitHub", href: "https://github.com/reetbatra" },
  { label: "X", href: "https://x.com/reet_batra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/reet-batra/" },
  { label: "Blog", href: "https://reet.hashnode.dev" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 md:min-h-[92vh] md:grid-cols-[1.1fr_0.9fr] md:pb-20 md:pt-32"
    >
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-2 bg-paper-2 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" aria-hidden />
          Currently building AskTota
        </p>

        <h1 className="font-serif text-[clamp(50px,7.6vw,104px)] leading-[0.94] tracking-[-0.03em] text-ink">
          Builder at heart,
          <br />
          <em className="italic text-clay">marketer by habit.</em>
        </h1>

        <p className="mt-7 max-w-[520px] font-sans text-[17px] leading-[1.7] text-muted sm:text-[18px]">
          I&apos;m Reet. I write the code, ship the product, and then go find
          the people it&apos;s for. Ten-plus products shipped in the last year,
          four years of getting developers to actually use hard things, and one
          astrology app that reads like a group chat.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-7 font-sans text-[14px] font-semibold text-paper transition-opacity duration-200 hover:opacity-80"
          >
            See the work
          </a>
          <a
            href="mailto:reetbatra25@gmail.com"
            className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-line-2 px-7 font-sans text-[14px] font-semibold text-ink transition-colors duration-200 hover:border-faint"
          >
            Say hi
          </a>
          <span className="mx-1 hidden h-5 w-px bg-line-2 sm:block" aria-hidden />
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.08em] text-faint transition-colors duration-200 hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Photo */}
      <div className="relative -mx-5 h-[380px] sm:mx-0 sm:h-[520px] md:h-[600px]">
        <div
          aria-hidden
          className="absolute inset-x-4 bottom-0 top-8 rounded-[52%_48%_44%_56%/58%_42%_58%_42%] bg-[linear-gradient(150deg,#f5ede3_0%,#e8d4c0_100%)]"
        />
        <div
          aria-hidden
          className="absolute right-2 top-2 h-24 w-24 opacity-30 sm:-right-2 [background-image:radial-gradient(#c87358_1.5px,transparent_1.5px)] [background-size:11px_11px]"
        />
        <div className="absolute inset-x-6 bottom-4 top-6 overflow-hidden rounded-[48%_52%_46%_54%/52%_48%_54%_46%]">
          <Image
            src="/hero-photo.jpg"
            alt="Reet Batra speaking on stage at ETHIndia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 540px"
            className="object-cover object-[78%_10%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_62%_68%_at_62%_30%,transparent_40%,rgba(253,250,245,0.8)_100%)]"
          />
        </div>

        <div className="absolute left-2 top-10 flex items-center gap-2.5 rounded-full bg-ink px-4 py-2.5 shadow-[0_6px_20px_rgba(28,26,23,0.18)] sm:left-0">
          <span className="font-serif text-[22px] leading-none text-clay">4,800+</span>
          <span className="font-mono text-[9px] uppercase leading-[1.35] tracking-[0.07em] text-[#a89a8e]">
            developers
            <br />
            taught in person
          </span>
        </div>

        <div className="absolute right-2 top-[120px] rounded-full bg-clay px-4 py-2 shadow-[0_4px_16px_rgba(200,115,88,0.35)] sm:-right-2">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-white">
            10+ products shipped
          </span>
        </div>

        <div className="absolute bottom-24 right-2 rounded-full bg-moss px-4 py-2 shadow-[0_4px_16px_rgba(90,158,124,0.3)] sm:-right-2">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-white">
            4K to 8K views an episode
          </span>
        </div>

        <div className="absolute bottom-6 left-2 rounded-2xl border border-line-2 bg-white px-4 py-3 shadow-[0_8px_28px_rgba(28,26,23,0.1)] sm:-left-2">
          <div className="mb-1 font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
            Based in
          </div>
          <div className="font-sans text-[13px] font-semibold text-ink">
            Bangalore, India
          </div>
        </div>
      </div>

      <a
        href="#how"
        className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint transition-colors hover:text-ink md:inline-flex"
      >
        Scroll
        <ArrowUpRight size={13} className="rotate-90" />
      </a>
    </section>
  );
}
