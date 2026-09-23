const links = [
  { label: "Email", href: "mailto:reetbatra25@gmail.com" },
  { label: "GitHub", href: "https://github.com/reetbatra" },
  { label: "X", href: "https://x.com/reet_batra" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/reet-batra/" },
  { label: "Blog", href: "https://reet.hashnode.dev" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-16 sm:px-8 md:py-20">
        <div className="reveal grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="t-label mb-5 text-acid">06 / Say hi</div>
            <h2 className="t-head max-w-[16ch] text-[clamp(32px,4.8vw,66px)]">
              Building something people have to understand before they can use it?
            </h2>
            <p className="mt-6 max-w-[52ch] text-[15.5px] leading-[1.62] text-paper/70">
              That&apos;s the work I&apos;m best at. Build it, explain it, put
              it in front of the right people. One email and I reply.
            </p>
          </div>
          <a
            href="mailto:reetbatra25@gmail.com"
            className="t-label flex min-h-14 w-fit items-center border border-acid bg-acid px-7 text-ink transition-colors duration-150 hover:bg-transparent hover:text-acid"
          >
            reetbatra25@gmail.com ↗
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-paper/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="t-label flex min-h-11 items-center text-paper/55 transition-colors duration-150 hover:text-acid"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="t-label text-paper/40">
            Reet Batra · Bangalore · {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
