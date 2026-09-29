import { books, readingSummary, shelfGroups, type Book } from "@/lib/books";
import SectionHead from "./SectionHead";
import { ArrowUpRight } from "./icons";

const spineColors = ["bg-clay", "bg-moss-dark", "bg-plum", "bg-ink"];
const spineTilts = ["-rotate-1", "rotate-[1.5deg]", "rotate-0", "-rotate-[2deg]"];

function BookRow({ book }: { book: Book }) {
  return (
    <li className="reveal flex border-b border-line">
      {/* The checkbox sits in the notebook's margin; its right border is the red margin line. */}
      <span aria-hidden className="flex w-[52px] shrink-0 justify-center border-r border-clay/35 pt-4 sm:w-[60px]">
        <span
          className={`inline-flex h-6 w-6 items-center justify-center rounded-[6px] border-2 ${
            book.read ? "border-ink bg-paper-2" : "border-line-2 bg-paper"
          }`}
        >
          {book.read && (
            <svg viewBox="0 0 24 24" width={19} height={19} className="-mt-1 ml-1 overflow-visible text-clay">
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
      </span>

      <div className="min-w-0 py-3.5 pl-4 pr-5">
        <p className="font-serif text-[19px] leading-[1.25] tracking-[-0.01em] text-ink">
          <span className={book.read ? "strike-read" : undefined}>{book.title}</span>
        </p>
        <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">{book.author}</p>
      </div>

      <span className="sr-only">{book.read ? "Read" : "Not read yet"}</span>
    </li>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-line-2 bg-paper-2/60 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted sm:px-6">
      {children}
    </div>
  );
}

export default function Shelf() {
  const { read, total } = readingSummary(books);
  const groups = shelfGroups(books);
  const pct = total === 0 ? 0 : Math.round((read / total) * 100);

  return (
    <section id="shelf" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 md:py-28">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-12 md:grid-cols-[minmax(0,1fr)_340px] md:items-end md:gap-14">
        <SectionHead
          index="05"
          label="Shelf"
          title="Books I read."
          lede="Kept as a to-do list, because a to-do list is the only format I reliably finish. Ticked means read. The rest are the pile I keep promising myself."
        />

        {/* The pile of finished books */}
        <figure className="reveal">
          <div aria-hidden className="flex flex-col items-center gap-1.5">
            <div className="flex h-12 w-[82%] items-center justify-center rounded-md border-2 border-dashed border-line-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Your pick goes here
            </div>
            {[...groups.read].reverse().map((b, i) => {
              const n = groups.read.length - 1 - i;
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

      {/* The notebook page */}
      <div className="reveal mt-14 overflow-hidden rounded-3xl border border-line-2 bg-paper shadow-[0_18px_40px_-24px_rgba(28,26,23,0.25)]">
        <div aria-hidden className="flex justify-center gap-5 pt-4 sm:gap-7">
          {Array.from({ length: 11 }, (_, i) => (
            <span key={i} className={`h-3 w-3 rounded-full border border-line-2 bg-paper-2 ${i >= 9 ? "hidden sm:block" : ""}`} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-line-2 px-5 pb-4 pt-5 sm:px-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">reading-list.md</span>
          <div className="flex items-center gap-3">
            <div
              role="progressbar"
              aria-label="Books read"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={read}
              className="h-1.5 w-28 overflow-hidden rounded-full bg-line sm:w-40"
            >
              <div className="h-full rounded-full bg-clay" style={{ width: `${pct}%` }} />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-clay-dark">
              {read} of {total} read
            </span>
          </div>
        </div>

        <GroupLabel>Read ({groups.read.length})</GroupLabel>
        <ul aria-label="Books I have read" className="grid sm:grid-cols-2 lg:grid-cols-3">
          {groups.read.map((b) => (
            <BookRow key={b.title} book={b} />
          ))}
        </ul>

        <GroupLabel>Up next ({groups.toRead.length})</GroupLabel>
        <ul aria-label="Books I have not read yet" className="grid sm:grid-cols-2 lg:grid-cols-3">
          {groups.toRead.map((b) => (
            <BookRow key={b.title} book={b} />
          ))}
        </ul>

        <div className="flex">
          <span aria-hidden className="flex w-[52px] shrink-0 items-center justify-center border-r border-clay/35 sm:w-[60px]">
            <span className="h-6 w-6 rounded-[6px] border-2 border-dashed border-line-2" />
          </span>
          <a
            href="mailto:reetbatra25@gmail.com?subject=Read%20this%20next"
            className="inline-flex min-h-14 items-center gap-1.5 pl-4 font-mono text-[11px] uppercase tracking-[0.1em] text-clay-dark transition-colors duration-200 hover:text-ink"
          >
            Tell me what to read next
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
