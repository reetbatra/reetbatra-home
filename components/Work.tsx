import Image from "next/image";
import SectionHead from "./SectionHead";

type Category = "Product" | "AI tool" | "Dev tool";

interface Project {
  idx: string;
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
    idx: "002",
    name: "docsParity",
    category: "AI tool",
    what: "Finds where an SDK's docs and code have drifted apart.",
    why: "Reads the real exported API from the TypeScript compiler, crawls the live docs, and has an LLM rank every mismatch by severity. Each finding becomes a pre-filled GitHub issue.",
    tags: ["TypeScript", "Compiler AST", "Next.js"],
    live: "https://docsparity.vercel.app",
    github: "https://github.com/reetbatra/docs-parity",
  },
  {
    idx: "003",
    name: "Blunt",
    category: "AI tool",
    what: "A speech coach that tells you exactly what to fix, then makes you say it again.",
    why: "Built because every public-speaking tool is polite. This one is not. Record, get roasted with specifics, redo the take.",
    tags: ["Next.js", "Convex", "Voice"],
    live: "https://blunt.reetbatra.com",
    github: "https://github.com/reetbatra/blunt",
  },
  {
    idx: "004",
    name: "Muscle Mommy",
    category: "Product",
    what: "A lifting PWA that decides your next set for you.",
    why: "Reads last session and prints per-set targets. Knows a 2.5kg to 5kg dumbbell jump is a 100% increase and refuses it. Imports from Hevy automatically.",
    tags: ["PWA", "Next.js", "Hevy API"],
    live: "https://musclemommy.reetbatra.com",
    github: "https://github.com/reetbatra/muscle-mommy",
  },
  {
    idx: "005",
    name: "bestie, don't.",
    category: "Product",
    what: "The friend who takes your phone after a breakup.",
    why: "No-contact streaks with repair, a panic button that runs a 20-minute urge timer, an 8-week journal arc. Anything that names a third party is encrypted server-side.",
    tags: ["Next.js", "Supabase", "Dodo Payments"],
    live: "https://bestie.reetbatra.com",
  },
  {
    idx: "006",
    name: "Nudge",
    category: "Product",
    what: "A job tracker for people who struggle to act on opportunities.",
    why: "No login, no signup, single user on purpose. One prioritized push notification every morning and nothing else.",
    tags: ["Next.js", "Web Push"],
    live: "https://nudge.reetbatra.com",
    github: "https://github.com/reetbatra/nudge",
  },
  {
    idx: "007",
    name: "hook-catch",
    category: "Dev tool",
    what: "Debug webhooks in real time, no account needed.",
    why: "Point any webhook at a generated URL and watch every request land live with headers, body, and replay.",
    tags: ["Next.js", "Supabase Realtime"],
    live: "https://hook-catch.vercel.app",
    github: "https://github.com/reetbatra/hook-catch",
  },
];

function Feature() {
  return (
    <article className="reveal border border-ink">
      <div className="grid md:grid-cols-[1.25fr_0.75fr]">
        <div className="border-b border-rule p-7 md:border-b-0 md:border-r md:p-9">
          <div className="flex flex-wrap items-center gap-2">
            <span className="t-label bg-acid px-2 py-1 text-[10px]">
              001 · Flagship
            </span>
            <span className="t-label border border-rule px-2 py-1 text-[10px] text-muted">
              Product
            </span>
            <span className="t-label border border-rule px-2 py-1 text-[10px] text-muted">
              Live on Google Play
            </span>
          </div>

          <h3 className="t-head mt-7 text-[clamp(36px,4.6vw,58px)]">AskTota</h3>
          <p className="mt-4 max-w-[46ch] text-[16.5px] font-semibold leading-[1.45]">
            Real Vedic astrology, filed as a tabloid. Your actual birth chart,
            read against today, written like your group chat.
          </p>
          <p className="mt-4 max-w-[52ch] text-[14.5px] leading-[1.66] text-muted">
            Daily readings, crush checks, celeb charts, and a chat that cites
            the chart data behind every claim. No ads, no data brokers, no dark
            patterns. The astrology is computed deterministically; the LLM only
            interprets. Android now, iOS next.
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-rule pt-6 sm:grid-cols-2">
            <div>
              <dt className="t-label text-muted">My role</dt>
              <dd className="mt-1.5 text-[13.5px] leading-[1.55]">
                Product, the app, brand system, website, growth. Built with one
                engineering partner.
              </dd>
            </div>
            <div>
              <dt className="t-label text-muted">Growth engine</dt>
              <dd className="mt-1.5 text-[13.5px] leading-[1.55]">
                A 19-piece explainer library with calculators, a reels-first
                Instagram schedule, and a landing page that sells the free tier
                honestly.
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex w-fit border border-ink">
            <a
              href="https://www.asktota.com"
              target="_blank"
              rel="noopener noreferrer"
              className="t-label flex min-h-11 items-center bg-ink px-5 text-paper transition-colors duration-150 hover:bg-blue"
            >
              asktota.com →
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.asktota"
              target="_blank"
              rel="noopener noreferrer"
              className="t-label flex min-h-11 items-center border-l border-ink px-5 transition-colors duration-150 hover:bg-acid"
            >
              Google Play
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-1.5">
            {["React Native", "Expo", "Node.js", "TypeScript", "Python engine", "LLM"].map(
              (t) => (
                <li
                  key={t}
                  className="t-label border border-rule px-2 py-1 text-[10px] text-muted"
                >
                  {t}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Screenshots, square-framed */}
        <div className="flex flex-col bg-paper-2">
          <div className="grid flex-1 grid-cols-2">
          <div className="relative min-h-[340px] border-r border-rule">
            <Image
              src="/asktota-home.webp"
              alt="AskTota home screen, a tabloid-style daily reading"
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className="object-cover object-top"
            />
          </div>
          <div className="relative min-h-[340px]">
            <Image
              src="/asktota-daily.webp"
              alt="AskTota daily read screen"
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className="object-cover object-top"
            />
          </div>
          </div>
          <figcaption className="t-label flex items-center justify-between gap-3 border-t border-rule px-3 py-2.5 text-muted">
            <span>Fig. 02 · The Daily Tota</span>
            <span>Vol. You</span>
          </figcaption>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20"
    >
      <SectionHead
        index="02"
        label="Work"
        title="Things people can use today."
        lede="All deployed, none of them a demo. Most were built alone, end to end, to fix something that was bothering me. The first one is where all my time goes now."
      />

      <div className="pt-8">
        <Feature />
      </div>

      <div className="mt-8 border-t border-ink">
        {projects.map((p) => (
          <article
            key={p.name}
            className="reveal grid items-baseline gap-x-6 gap-y-2 border-b border-rule py-6 transition-colors duration-150 hover:bg-paper-2 md:grid-cols-[72px_1.05fr_1.55fr_150px]"
          >
            <div className="t-label text-faint">{p.idx}</div>

            <div>
              <h3 className="text-[20px] font-bold tracking-[-0.02em] [font-stretch:108%]">
                {p.name}
              </h3>
              <span className="t-label mt-2 inline-block border border-rule px-2 py-0.5 text-[10px] text-muted">
                {p.category}
              </span>
            </div>

            <div>
              <p className="text-[14.5px] font-semibold leading-[1.5]">
                {p.what}
              </p>
              <p className="mt-1.5 text-[14px] leading-[1.62] text-muted">
                {p.why}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {p.tags.map((t) => (
                  <li key={t} className="t-label text-[10px] text-faint">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 md:justify-end">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label flex min-h-11 items-center text-faint transition-colors duration-150 hover:text-ink"
                >
                  Code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-label flex min-h-11 items-center text-blue transition-colors duration-150 hover:bg-acid hover:text-ink"
                >
                  Live ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="reveal mt-6 text-[14px] text-muted">
        More on GitHub: claude-deck, deja-vu-agent, open-money-intel, pricekit,
        and the rest.{" "}
        <a
          href="https://github.com/reetbatra?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-blue"
        >
          All repos
        </a>
      </p>
    </section>
  );
}
