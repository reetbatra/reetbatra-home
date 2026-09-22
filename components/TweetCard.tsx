import Image from "next/image";
import { ArrowUpRight } from "./icons";

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  url: string;
  text: string;
  date: string;
  photos: Photo[];
  /** "stack" fans the photos like polaroids on a desk; "single" shows one tall card */
  layout?: "stack" | "single";
  dark?: boolean;
  className?: string;
}

const X = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// A self-hosted "embed": the tweet's own photos, text, and a link back to X.
// No third-party script, so it loads fast and matches the page theme.
export default function TweetCard({ url, text, date, photos, layout = "single", dark, className = "" }: Props) {
  const rotations = ["-rotate-6", "rotate-3", "-rotate-2", "rotate-6"];
  const offsets = ["left-0 top-6", "left-[22%] top-0", "left-[44%] top-8", "left-[64%] top-2"];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open on X: ${text}`}
      className={`group block ${className}`}
    >
      {layout === "stack" ? (
        <div className="relative h-[220px] sm:h-[300px]">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`absolute ${offsets[i]} ${rotations[i]} w-[40%] max-w-[168px] rounded-md bg-white p-1.5 pb-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:rotate-0`}
              style={{ zIndex: i, transitionDelay: `${i * 40}ms` }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="150px"
                className="aspect-[3/4] w-full rounded-[3px] object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="-rotate-2 rounded-md bg-white p-2 pb-4 shadow-[0_10px_30px_rgba(28,26,23,0.16)] transition-transform duration-300 group-hover:rotate-0">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            width={photos[0].width}
            height={photos[0].height}
            sizes="(max-width: 768px) 60vw, 220px"
            className="aspect-[4/5] w-full rounded-[3px] object-cover object-top"
          />
        </div>
      )}

      <div
        className={`mt-5 flex items-start gap-3 rounded-2xl border px-4 py-3 ${
          dark ? "border-white/12 bg-white/5" : "border-line-2 bg-white"
        }`}
      >
        <span className={`mt-0.5 shrink-0 ${dark ? "text-[#a89a8e]" : "text-faint"}`}>
          <X />
        </span>
        <div className="min-w-0 flex-1">
          <p className={`font-sans text-[14px] leading-[1.5] ${dark ? "text-paper" : "text-ink"}`}>{text}</p>
          <div className={`mt-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] ${dark ? "text-[#a89a8e]" : "text-faint"}`}>
            @reet_batra · {date}
            <span className="inline-flex items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
              Open
              <ArrowUpRight size={11} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
