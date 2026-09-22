import SectionHead from "./SectionHead";
import TweetCard from "./TweetCard";
import { Dumbbell, Mic, Plane, Wrench } from "./icons";

export default function Life() {
  return (
    <section
      id="life"
      className="mx-auto max-w-[1240px] px-6 pt-16 sm:px-8 md:pt-20"
    >
      <SectionHead
        index="04"
        label="Life"
        title="Off the laptop."
        lede="The parts that don't fit on a resume and matter more than most of what does."
      />

      <div className="grid border-b border-ink md:grid-cols-6">
        {/* Travel */}
        <article className="reveal flex flex-col justify-center border-b border-rule bg-ink p-7 text-paper md:col-span-4 md:p-9">
          <div className="grid gap-8 md:grid-cols-[1fr_290px] md:items-center">
            <div>
              <span className="flex h-10 w-10 items-center justify-center border border-paper/30 text-acid">
                <Plane size={18} />
              </span>
              <div className="t-label mt-6 text-paper/55">Travel</div>
              <h3 className="t-head mt-2 text-[clamp(26px,3vw,38px)]">
                The laptop comes along.
                <br />
                The calendar does not.
              </h3>
              <p className="mt-4 max-w-[42ch] text-[14.5px] leading-[1.66] text-paper/70">
                I travel whenever the gap between two launches allows it, and I
                build better after. New cities are the only place my product
                ideas show up without being asked. If you have a recommendation,
                I want it.
              </p>
              <a
                href="mailto:reetbatra25@gmail.com?subject=Go%20here%20next"
                className="t-label mt-6 inline-flex min-h-11 items-center text-acid transition-colors duration-150 hover:text-paper"
              >
                Send me somewhere ↗
              </a>
            </div>

            <TweetCard
              dark
              layout="strip"
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
        <article className="reveal flex flex-col border-b border-rule p-7 md:col-span-2 md:border-b-0 md:border-l md:border-rule">
          <span className="flex h-10 w-10 items-center justify-center border border-ink">
            <Dumbbell size={18} />
          </span>
          <div className="t-label mt-6 text-muted">Gym</div>
          <h3 className="t-head mt-2 text-[24px]">
            The one meeting I never move.
          </h3>
          <p className="mt-3 text-[14.5px] leading-[1.66] text-muted">
            Progressive overload, logged every session. I got annoyed enough at
            the tracking apps to build my own, so now the app tells me the next
            set before I ask. Current goal: one clean unassisted pull up.
          </p>

          <TweetCard
            className="mt-6 max-w-[230px]"
            url="https://x.com/reet_batra/status/2101943252278563327"
            text="Praying for my one clean unassisted pull up 🫠✨"
            date="Sep 2026"
            photos={[
              { src: "/tweet-pullup.jpg", alt: "Reet in the gym, mirror selfie in a pink tee", width: 794, height: 1200 },
            ]}
          />

          <a
            href="#work"
            className="t-label mt-auto inline-flex min-h-11 items-center pt-6 text-blue transition-colors duration-150 hover:bg-acid hover:text-ink"
          >
            Muscle Mommy, above ↑
          </a>
        </article>

        {/* Stage */}
        <article className="reveal flex flex-col border-b border-rule p-7 md:col-span-2 md:border-b-0">
          <span className="flex h-10 w-10 items-center justify-center border border-ink">
            <Mic size={18} />
          </span>
          <div className="t-label mt-6 text-muted">On stage, on camera</div>
          <h3 className="t-head mt-2 text-[24px]">I like a room.</h3>
          <p className="mt-3 flex-1 text-[14.5px] leading-[1.66] text-muted">
            Twenty-plus workshops, a handful of conference talks, and a video
            series where I explained hard tooling in under five minutes. Give me
            a mic and a whiteboard and I&apos;m happy.
          </p>
        </article>

        {/* Habit */}
        <article className="reveal flex flex-col bg-paper-2 p-7 md:col-span-4 md:border-l md:border-rule">
          <span className="flex h-10 w-10 items-center justify-center border border-ink">
            <Wrench size={18} />
          </span>
          <div className="t-label mt-6 text-muted">A habit</div>
          <h3 className="t-head mt-2 text-[24px]">
            If an app annoys me for a week, I replace it.
          </h3>
          <p className="mt-3 text-[14.5px] leading-[1.66] text-muted">
            A lifting tracker, a breakup boundary app, a job tracker with no
            login, a speech coach that isn&apos;t polite, a local dashboard for
            my coding agent. None of them started as a business. A few of them
            got users anyway, which is usually how I find out an idea is real.
          </p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {["21 blog posts", "52 public repos", "Hackathon wins", "Open source PRs"].map(
              (t) => (
                <li
                  key={t}
                  className="t-label border border-rule bg-paper px-2 py-1 text-[10px] text-muted"
                >
                  {t}
                </li>
              )
            )}
          </ul>
        </article>
      </div>
    </section>
  );
}
