import SectionHead from "./SectionHead";
import TweetCard from "./TweetCard";
import { ArrowUpRight, Dumbbell, Mic, Plane, Wrench } from "./icons";

export default function Life() {
  return (
    <section id="life" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
      <SectionHead
        index="04"
        label="Life"
        title="Off the laptop."
        lede="The parts that don't fit on a resume and matter more than most of what does."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-6">
        {/* Travel */}
        <article className="reveal relative flex flex-col overflow-hidden rounded-3xl bg-ink p-8 text-paper md:col-span-4">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-25 [background-image:radial-gradient(#c87358_1.5px,transparent_1.5px)] [background-size:12px_12px]"
          />
          <div className="relative my-auto grid gap-8 md:grid-cols-[1fr_320px] md:items-center">
            <div className="flex h-full flex-col">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-clay">
                <Plane size={20} />
              </div>
              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#a89a8e]">
                Travel
              </div>
              <h3 className="mt-2 font-serif text-[clamp(30px,3.4vw,44px)] leading-[1.02] tracking-[-0.02em]">
                The laptop comes along.
                <br />
                The calendar does not.
              </h3>
              <p className="mt-4 max-w-[440px] font-sans text-[15px] leading-[1.7] text-[#c8bcb0]">
                I travel whenever the gap between two launches allows it, and I
                build better after. New cities are the only place my product
                ideas show up without being asked. If you have a recommendation,
                I want it.
              </p>
              <a
                href="mailto:reetbatra25@gmail.com?subject=Go%20here%20next"
                className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-clay transition-colors hover:text-paper"
              >
                Send me somewhere
                <ArrowUpRight size={13} />
              </a>
            </div>

            <TweetCard
              dark
              layout="stack"
              url="https://x.com/reet_batra/status/1932747522537369974"
              text="Gm Barcelona ✨"
              date="Jun 2025"
              photos={[
                { src: "/tweet-bcn-1.jpg", alt: "Reet waving in a narrow Barcelona street", width: 900, height: 1200 },
                { src: "/tweet-bcn-2.jpg", alt: "Carved stone archway over a Barcelona doorway", width: 900, height: 1200 },
                { src: "/tweet-bcn-3.jpg", alt: "Barcelona street scene", width: 900, height: 1200 },
                { src: "/tweet-bcn-4.jpg", alt: "Barcelona street scene", width: 900, height: 1200 },
              ]}
            />
          </div>
        </article>

        {/* Gym */}
        <article className="reveal flex flex-col rounded-3xl border border-line-2 bg-paper p-8 md:col-span-2">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#b4d8c4] bg-[#eef6f1] text-moss-dark">
            <Dumbbell size={20} />
          </div>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            Gym
          </div>
          <h3 className="mt-2 font-serif text-[28px] leading-[1.05] tracking-[-0.015em] text-ink">
            The one meeting I never move.
          </h3>
          <p className="mt-3 font-sans text-[14.5px] leading-[1.7] text-muted">
            Progressive overload, logged every session. I got annoyed enough at
            the tracking apps to build my own, so now the app tells me the
            next set before I ask. Current goal: one clean unassisted pull up.
          </p>

          <TweetCard
            className="mt-6 max-w-[240px]"
            url="https://x.com/reet_batra/status/2101943252278563327"
            text="Praying for my one clean unassisted pull up 🫠✨"
            date="Sep 2026"
            photos={[
              { src: "/tweet-pullup.jpg", alt: "Reet in the gym, mirror selfie in a pink tee", width: 794, height: 1200 },
            ]}
          />

          <a
            href="#work"
            className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-clay transition-colors hover:text-clay-dark"
          >
            Muscle Mommy, above
            <ArrowUpRight size={13} className="rotate-[-90deg]" />
          </a>
        </article>

        {/* Stage */}
        <article className="reveal flex flex-col rounded-3xl border border-line-2 bg-paper p-8 md:col-span-2">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8c8a8] bg-[#fff3ea] text-clay-dark">
            <Mic size={20} />
          </div>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            On stage, on camera
          </div>
          <h3 className="mt-2 font-serif text-[28px] leading-[1.05] tracking-[-0.015em] text-ink">
            I like a room.
          </h3>
          <p className="mt-3 flex-1 font-sans text-[14.5px] leading-[1.7] text-muted">
            Twenty-plus workshops, a handful of conference talks, and a video
            series where I explained hard tooling in under five minutes. Give me
            a mic and a whiteboard and I&apos;m happy.
          </p>
        </article>

        {/* Builds for myself */}
        <article className="reveal flex flex-col rounded-3xl border border-line-2 bg-paper-2/70 p-8 md:col-span-4">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#ccc0e8] bg-[#f2eeff] text-plum">
            <Wrench size={20} />
          </div>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            A habit
          </div>
          <h3 className="mt-2 font-serif text-[28px] leading-[1.05] tracking-[-0.015em] text-ink">
            If an app annoys me for a week, I replace it.
          </h3>
          <p className="mt-3 font-sans text-[14.5px] leading-[1.7] text-muted">
            A lifting tracker, a breakup boundary app, a job tracker with no
            login, a speech coach that isn&apos;t polite, a local dashboard for
            my coding agent. None of them started as a business. A few of them
            got users anyway, which is usually how I find out an idea is real.
          </p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {["21 blog posts", "52 public repos", "Hackathon wins", "Open source PRs"].map((t) => (
              <li key={t} className="rounded-full border border-line-2 bg-paper px-2.5 py-1 font-mono text-[10px] text-faint">
                {t}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
