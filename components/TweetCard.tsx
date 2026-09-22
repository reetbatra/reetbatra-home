import Image from "next/image";

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
  /** "strip" lays the photos out as a contact sheet; "single" is one plate */
  layout?: "strip" | "single";
  dark?: boolean;
  className?: string;
}

const X = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// A self-hosted "embed": the tweet's own photos, text, and a link back to X.
// No third-party script, so it loads fast and matches the page theme.
export default function TweetCard({
  url,
  text,
  date,
  photos,
  layout = "single",
  dark,
  className = "",
}: Props) {
  const frame = dark ? "border-paper/25" : "border-ink";
  const rule = dark ? "border-paper/15" : "border-rule";
  const meta = dark ? "text-paper/55" : "text-faint";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open on X: ${text}`}
      className={`group block border ${frame} ${className}`}
    >
      {layout === "strip" ? (
        <div className="grid grid-cols-4">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`relative aspect-[3/4] overflow-hidden ${
                i > 0 ? `border-l ${rule}` : ""
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="90px"
                className="object-cover saturate-[0.9] transition-[filter] duration-300 group-hover:saturate-100"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            sizes="(max-width: 768px) 60vw, 240px"
            className="object-cover object-top saturate-[0.9] transition-[filter] duration-300 group-hover:saturate-100"
          />
        </div>
      )}

      <div className={`flex items-start gap-2.5 border-t ${rule} px-3 py-3`}>
        <span className={`mt-0.5 shrink-0 ${meta}`}>
          <X />
        </span>
        <div className="min-w-0 flex-1">
          <p
            className={`text-[13.5px] leading-[1.45] ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {text}
          </p>
          <div className={`t-label mt-1.5 text-[10px] ${meta}`}>
            @reet_batra · {date}
            <span className="ml-2 opacity-0 transition-opacity group-hover:opacity-100">
              Open ↗
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
