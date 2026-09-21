import SectionHead from "./SectionHead";
import { Code, Compass, Megaphone } from "./icons";

const pillars = [
  {
    icon: Code,
    tone: "bg-[#eef6f1] text-moss-dark border-[#b4d8c4]",
    title: "Build",
    line: "I write the code myself, end to end.",
    body: "TypeScript, Python, Next.js, React Native, the Claude API. The agent, the interface, the deploy, the cron job that keeps it honest. Ten-plus shipped products in the last year, almost all of them solo.",
    proof: ["docsParity", "AskTota app", "Muscle Mommy"],
  },
  {
    icon: Compass,
    tone: "bg-[#fff3ea] text-clay-dark border-[#e8c8a8]",
    title: "Product",
    line: "I pick the wedge and cut everything else.",
    body: "Every product on this page has one deliberate no in it. AskTota chose print over cosmos. Nudge skipped signup. Muscle Mommy refuses a weight jump that is secretly a doubling. Scope is the product.",
    proof: ["PRDs", "Pricing", "Onboarding"],
  },
  {
    icon: Megaphone,
    tone: "bg-[#f2eeff] text-plum border-[#ccc0e8]",
    title: "Growth",
    line: "Then I go get the users, on camera if needed.",
    body: "Four years of developer marketing: an 11-city workshop tour to 4,800+ developers, a video series at 4K to 8K views an episode, a $21K grants program, and now a daily reels engine for AskTota.",
    proof: ["Content systems", "Community", "Launches"],
  },
];

export default function How() {
  return (
    <section id="how" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
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

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className="reveal flex flex-col rounded-2xl border border-line-2 bg-paper p-7 transition-[border-color,box-shadow] duration-200 hover:border-clay hover:shadow-[0_4px_20px_rgba(200,115,88,0.1)]"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${p.tone}`}>
              <p.icon size={20} />
            </div>
            <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              0{i + 1}
            </div>
            <h3 className="font-serif text-[30px] leading-none tracking-[-0.015em] text-ink">
              {p.title}
            </h3>
            <p className="mt-3 font-sans text-[15px] font-semibold text-ink-2">{p.line}</p>
            <p className="mt-3 flex-1 font-sans text-[14.5px] leading-[1.7] text-muted">{p.body}</p>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {p.proof.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-paper-2 px-2.5 py-1 font-mono text-[10px] tracking-[0.04em] text-faint"
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
