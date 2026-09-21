import { ArrowUpRight } from "./icons";

const links = [
  { label: "Email", href: "mailto:reetbatra25@gmail.com" },
  { label: "GitHub", href: "https://github.com/reetbatra" },
  { label: "X", href: "https://x.com/reet_batra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/reet-batra/" },
  { label: "Blog", href: "https://reet.hashnode.dev" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-24">
        <div className="reveal grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-clay">
              06: Say hi
            </div>
            <h2 className="max-w-[720px] font-serif text-[clamp(40px,5.5vw,76px)] leading-[0.98] tracking-[-0.03em]">
              Building something people have to <em className="italic text-clay">get</em> before they can use it?
            </h2>
            <p className="mt-6 max-w-[520px] font-sans text-[16px] leading-[1.7] text-[#c8bcb0]">
              I&apos;m the person who builds it, writes it up, and gets it in front of the right people. One email, I reply.
            </p>
          </div>
          <a
            href="mailto:reetbatra25@gmail.com"
            className="inline-flex min-h-14 items-center justify-center gap-2 self-start rounded-full bg-clay px-8 font-sans text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-85 md:self-end"
          >
            reetbatra25@gmail.com
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.1em] text-[#a89a8e] transition-colors hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#7a6d63]">
            Reet Batra · Bangalore · {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
