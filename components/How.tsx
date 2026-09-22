import SectionHead from "./SectionHead";
import { Code, Compass, Megaphone } from "./icons";

const pillars = [
  {
    icon: Code,
    title: "Build",
    line: "I write the code myself, end to end.",
    body: "TypeScript, Python, Next.js, React Native, the Claude API. The agent, the interface, the deploy, the cron job that keeps it honest. Ten-plus shipped products in the last year, almost all of them solo.",
    proof: ["docsParity", "AskTota app", "Muscle Mommy"],
  },
  {
    icon: Compass,
    title: "Product",
    line: "I pick the wedge and cut everything else.",
    body: "Every product on this page has one deliberate no in it. AskTota chose print over cosmos. Nudge skipped signup. Muscle Mommy refuses a weight jump that is secretly a doubling. Scope is the product.",
    proof: ["PRDs", "Pricing", "Onboarding"],
  },
  {
    icon: Megaphone,
    title: "Growth",
    line: "Then I go get the users, on camera if needed.",
    body: "Four years of developer marketing: an 11-city workshop tour to 4,800+ developers, a video series at 4K to 8K views an episode, a $21K grants program, and now a daily reels engine for AskTota.",
    proof: ["Content systems", "Community", "Launches"],
  },
];

export default function How() {
  return (
    <section
      id="how"
      className="mx-auto max-w-[1240px] px-6 pt-16 pb-4 sm:px-8 md:pt-20"
    >
      <SectionHead
        index="01"
        label="How I work"
        title={
          <>
            Most people do one of these.
            <br />I do all three, in that order.
          </>
        }
      />

      <div className="grid border-b border-ink md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className={`reveal flex flex-col border-b border-rule p-7 transition-colors duration-150 hover:bg-paper-2 md:border-b-0 ${
              i > 0 ? "md:border-l md:border-rule" : ""
            } ${i === 0 ? "md:pl-0" : ""}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center border border-ink text-ink">
                <p.icon size={18} />
              </span>
              <span className="t-label text-faint">0{i + 1}</span>
            </div>

            <h3 className="t-head mt-6 text-[28px]">{p.title}</h3>
            <p className="mt-3 text-[15px] font-semibold leading-[1.5]">
              {p.line}
            </p>
            <p className="mt-3 flex-1 text-[14.5px] leading-[1.66] text-muted">
              {p.body}
            </p>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {p.proof.map((t) => (
                <li
                  key={t}
                  className="t-label border border-rule px-2 py-1 text-[10px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
