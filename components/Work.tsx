import Image from "next/image";
import SectionHead from "./SectionHead";
import { ArrowUpRight, Github, Play } from "./icons";

type Category = "Product" | "AI tool" | "Dev tool";

interface Project {
  name: string;
  category: Category;
  what: string;
  why: string;
  tags: string[];
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "docsParity",
    category: "AI tool",
    what: "Finds where an SDK's docs and code have drifted apart.",
    why: "Reads the real exported API from the TypeScript compiler, crawls the live docs, and has an LLM rank every mismatch by severity. Each finding becomes a pre-filled GitHub issue.",
    tags: ["TypeScript", "TS Compiler AST", "Next.js"],
    live: "https://docsparity.vercel.app",
    github: "https://github.com/reetbatra/docs-parity",
  },
  {
    name: "Blunt",
    category: "AI tool",
    what: "A speech coach that tells you exactly what to fix, then makes you say it again.",
    why: "Built because every public-speaking tool is polite. This one is not. Record, get roasted with specifics, redo the take.",
    tags: ["Next.js", "Convex", "Voice"],
    live: "https://blunt.reetbatra.com",
    github: "https://github.com/reetbatra/blunt",
  },
  {
    name: "Muscle Mommy",
    category: "Product",
    what: "A lifting PWA that decides your next set for you.",
    why: "Reads last session and prints per-set targets. Knows a 2.5kg to 5kg dumbbell jump is a 100% increase and refuses it. Imports from Hevy automatically.",
    tags: ["PWA", "Next.js", "Hevy API"],
    live: "https://musclemommy.reetbatra.com",
    github: "https://github.com/reetbatra/muscle-mommy",
  },
  {
    name: "bestie, don't.",
    category: "Product",
    what: "The friend who takes your phone after a breakup.",
    why: "No-contact streaks with repair, a panic button that runs a 20-minute urge timer, an 8-week journal arc. Anything that names a third party is encrypted server-side.",
    tags: ["Next.js", "Supabase", "Dodo Payments"],
    live: "https://bestie.reetbatra.com",
  },
  {
    name: "Nudge",
    category: "Product",
    what: "A job tracker for people who struggle to act on opportunities.",
    why: "No login, no signup, single user on purpose. One prioritized push notification every morning and nothing else.",
    tags: ["Next.js", "Web Push"],
    live: "https://nudge.reetbatra.com",
    github: "https://github.com/reetbatra/nudge",
  },
  {
    name: "hook-catch",
    category: "Dev tool",
    what: "Debug webhooks in real time, no account needed.",
    why: "Point any webhook at a generated URL and watch every request land live with headers, body, and replay.",
    tags: ["Next.js", "Supabase Realtime"],
    live: "https://hook-catch.vercel.app",
    github: "https://github.com/reetbatra/hook-catch",
  },
];

const categoryTone: Record<Category, string> = {
  Product: "bg-[#fff3ea] border-[#e8c8a8] text-clay-dark",
  "AI tool": "bg-[#eef6f1] border-[#b4d8c4] text-moss-dark",
  "Dev tool": "bg-[#f2eeff] border-[#ccc0e8] text-plum",
};

function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-[3px] font-mono text-[10px] tracking-[0.05em] ${className}`}
    >
      {children}
    </span>
  );
}

function Featured() {
  return (
    <article className="reveal relative overflow-hidden rounded-3xl border-2 border-tota-ink bg-tota-paper text-tota-ink shadow-[6px_6px_0_#1e3a2a]">
      <div className="grid md:grid-cols-[1.15fr_0.85fr]">
        <div className="p-7 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <Pill className="border-tota-ink bg-tota-marigold text-tota-ink">Flagship</Pill>
            <Pill className="border-tota-ink bg-white text-tota-ink">Product</Pill>
            <Pill className="border-tota-ink bg-tota-green text-tota-paper">Live on Google Play</Pill>
          </div>

          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-tota-ink/60">
            The Daily Tota · Vol. You
          </div>
          <h3 className="font-serif text-[clamp(40px,5vw,64px)] leading-[0.98] tracking-[-0.02em]">
            AskTota
          </h3>
          <p className="mt-4 max-w-[480px] font-sans text-[17px] font-semibold leading-[1.5]">
            Real Vedic astrology, filed as a tabloid. Your actual birth chart,
            read against today, written like your group chat.
          </p>
          <p className="mt-4 max-w-[500px] font-sans text-[14.5px] leading-[1.7] text-tota-ink/80">
            Daily readings, crush checks, celeb charts, and a chat that cites the
            chart data behind every claim. No ads, no data brokers, no dark
            patterns. The astrology is computed deterministically; the LLM only
            interprets. Android now, iOS next.
          </p>

          <dl className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              ["My role", "Product, the app, brand system, website, growth. Built with one engineering partner."],
              ["Growth engine", "A 19-piece explainer library with calculators, a reels-first Instagram schedule, and a landing page that sells the free tier honestly."],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-tota-ink/60">{k}</dt>
                <dd className="mt-1 font-sans text-[13.5px] leading-[1.6]">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.asktota.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-tota-ink bg-tota-green px-5 font-sans text-[13.5px] font-bold text-tota-paper shadow-[3px_3px_0_#1e3a2a] transition-transform duration-150 hover:translate-y-px hover:shadow-[2px_2px_0_#1e3a2a]"
            >
              asktota.com
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.asktota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-tota-ink bg-white px-5 font-sans text-[13.5px] font-bold text-tota-ink shadow-[3px_3px_0_#1e3a2a] transition-transform duration-150 hover:translate-y-px hover:shadow-[2px_2px_0_#1e3a2a]"
            >
              <Play size={14} />
              Google Play
            </a>
            <a
              href="https://www.instagram.com/asktotaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.08em] text-tota-ink/70 transition-colors hover:text-tota-ink"
            >
              @asktotaa
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-1.5">
            {["React Native", "Expo", "Node.js", "TypeScript", "Python engine", "LLM"].map((t) => (
              <li key={t} className="rounded-full border border-tota-ink/25 bg-white/60 px-2.5 py-1 font-mono text-[10px] text-tota-ink/80">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border-t-2 border-tota-ink bg-[#f4eedd] md:border-l-2 md:border-t-0">
          <div
            aria-hidden
            className="absolute inset-0 opacity-70 [background-image:radial-gradient(#e3d9c0_1.4px,transparent_1.4px)] [background-size:7px_7px]"
          />
          <Image
            src="/asktota-parrot.png"
            alt=""
            width={150}
            height={150}
            className="absolute left-5 top-5 w-[110px] rotate-[-8deg] sm:w-[140px]"
          />
          <div className="absolute bottom-[-40px] left-1/2 w-[230px] -translate-x-[62%] rotate-[-6deg] overflow-hidden rounded-[28px] border-[3px] border-tota-ink bg-white shadow-[6px_6px_0_#1e3a2a] sm:w-[250px]">
            <Image
              src="/asktota-home.webp"
              alt="AskTota home screen, a tabloid-style daily reading"
              width={576}
              height={1280}
              sizes="250px"
              className="w-full"
            />
          </div>
          <div className="absolute bottom-[-60px] left-1/2 w-[210px] translate-x-[8%] rotate-[7deg] overflow-hidden rounded-[28px] border-[3px] border-tota-ink bg-white shadow-[6px_6px_0_#1e3a2a] sm:w-[230px]">
            <Image
              src="/asktota-daily.webp"
              alt="AskTota daily read screen"
              width={720}
              height={1280}
              sizes="230px"
              className="w-full"
            />
          </div>
          <div className="absolute right-5 top-6 rotate-[8deg] rounded-md border-2 border-tota-ink bg-tota-marigold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] shadow-[3px_3px_0_#1e3a2a]">
            100% free tier
          </div>
        </div>
      </div>
    </article>
  );
}

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <article
      className="reveal group flex flex-col rounded-2xl border border-line-2 bg-paper p-6 transition-[border-color,box-shadow] duration-200 hover:border-clay hover:shadow-[0_4px_20px_rgba(200,115,88,0.1)]"
      style={{ transitionDelay: `${(i % 3) * 70}ms` }}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <Pill className={categoryTone[p.category]}>{p.category}</Pill>
        <div className="flex items-center gap-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} on GitHub`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-faint transition-colors hover:bg-paper-2 hover:text-ink"
            >
              <Github size={16} />
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center gap-1 font-mono text-[11px] tracking-[0.04em] text-clay transition-colors hover:text-clay-dark"
            >
              Live
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-serif text-[24px] leading-tight tracking-[-0.01em] text-ink">{p.name}</h3>
      <p className="mt-2 font-sans text-[14.5px] font-semibold leading-[1.5] text-ink-2">{p.what}</p>
      <p className="mt-2.5 flex-1 font-sans text-[14px] leading-[1.68] text-muted">{p.why}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <li key={t} className="rounded-full bg-paper-2 px-2.5 py-1 font-mono text-[10px] text-faint">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
      <SectionHead
        index="02"
        label="Work"
        title="Things people can use today."
        lede="All deployed, none of them a demo. Most were built solo, end to end, to fix a problem I actually had. The first one is the one I'm all in on."
      />

      <div className="mt-14">
        <Featured />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Card key={p.name} p={p} i={i} />
        ))}
      </div>

      <p className="reveal mt-8 font-sans text-[14px] text-muted">
        More on GitHub: claude-deck, deja-vu-agent, open-money-intel, pricekit, and the rest.{" "}
        <a
          href="https://github.com/reetbatra?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-clay"
        >
          All repos
        </a>
      </p>
    </section>
  );
}
