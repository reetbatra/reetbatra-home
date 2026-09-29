import { books, readingSummary } from "@/lib/books";
import SectionHead from "./SectionHead";
import { ArrowUpRight } from "./icons";

const spineColors = ["bg-clay", "bg-moss-dark", "bg-plum", "bg-ink"];
const spineTilts = ["-rotate-1", "rotate-[1.5deg]", "rotate-0", "-rotate-[2deg]"];

export default function Shelf() {
  const { read, total } = readingSummary(books);
  const finished = books.filter((b) => b.read);

  return (
    <section id="shelf" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
      <SectionHead
        index="05"
        label="Shelf"
        title="Books I read."
        lede="Kept as a to-do list, because a to-do list is the only format I reliably finish. Ticked means read."
      />

      <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[minmax(0,1fr)_340px] md:items-end md:gap-14">
        {/* The notebook page */}
        <div className="reveal relative rounded-3xl border border-line-2 bg-paper shadow-[0_18px_40px_-24px_rgba(28,26,23,0.25)]">
          <div aria-hidden className="flex justify-center gap-5 pt-4 sm:gap-7">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} className="h-3 w-3 rounded-full border border-line-2 bg-paper-2" />
            ))}
          </div>

          <div className="flex items-baseline justify-between gap-4 border-b border-line-2 px-6 pb-4 pt-5 sm:px-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              reading-list.md
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-clay-dark">
              {read} of {total} read
            </span>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute inset-y-0 left-[52px] w-px bg-clay/35 sm:left-[68px]" />

            <ul aria-label="Reading list">
              {books.map((b) => (
                <li
                  key={b.title}
                  className="reveal flex items-center gap-4 border-b border-line py-5 pl-4 pr-6 sm:gap-6 sm:pl-6 sm:pr-10"
                >
                  <span
                    aria-hidden
                    className={`relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] border-2 ${
                      b.read ? "border-ink bg-paper-2" : "border-line-2 bg-paper"
                    }`}
                  >
                    {b.read && (
                      <svg viewBox="0 0 24 24" width={22} height={22} className="-mt-1 ml-1 overflow-visible text-clay">
                        <path
                          className="tick-draw"
                          d="M4 12.5 9.5 18 21 3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3.25}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>

                  <div className="min-w-0 pl-3 sm:pl-4">
                    <p className="font-serif text-[22px] leading-[1.2] tracking-[-0.01em] text-ink sm:text-[26px]">
                      <span className={b.read ? "strike-read" : undefined}>{b.title}</span>
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      {b.author}
                    </p>
                  </div>

                  <span className="sr-only">{b.read ? "Read" : "Not read yet"}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 py-4 pl-4 pr-6 sm:gap-6 sm:pl-6 sm:pr-10">
              <span aria-hidden className="h-7 w-7 shrink-0 rounded-[7px] border-2 border-dashed border-line-2" />
              <a
                href="mailto:reetbatra25@gmail.com?subject=Read%20this%20next"
                className="inline-flex min-h-11 items-center gap-1.5 pl-3 font-mono text-[11px] uppercase tracking-[0.1em] text-clay-dark transition-colors duration-200 hover:text-ink sm:pl-4"
              >
                Tell me what to read next
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* The pile of finished books */}
        <figure className="reveal">
          <div aria-hidden className="flex flex-col items-center gap-1.5">
            <div className="flex h-12 w-[82%] items-center justify-center rounded-md border-2 border-dashed border-line-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Your pick goes here
            </div>
            {[...finished].reverse().map((b, i) => {
              const n = finished.length - 1 - i;
              return (
                <div
                  key={b.title}
                  className={`relative flex min-h-14 w-full items-center rounded-md py-3 pl-7 pr-5 text-paper shadow-[0_6px_14px_-8px_rgba(28,26,23,0.5)] ${
                    spineColors[n % spineColors.length]
                  } ${spineTilts[n % spineTilts.length]}`}
                >
                  <span className="absolute inset-y-2 left-2.5 w-px bg-paper/30" />
                  <span className="font-serif text-[17px] leading-[1.15]">{b.title}</span>
                </div>
              );
            })}
            <div className="mt-1 h-2.5 w-full rounded-full bg-line-2" />
          </div>
          <figcaption className="mt-5 text-center font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            The finished pile. It only grows.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
