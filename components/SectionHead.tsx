interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}

export default function SectionHead({ index, label, title, lede }: Props) {
  return (
    <div className="reveal">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-clay">
          {index}: {label}
        </span>
        <div className="h-px flex-1 bg-line" aria-hidden />
      </div>
      <h2 className="max-w-[720px] font-serif text-[clamp(38px,4.4vw,60px)] leading-[1.06] tracking-[-0.025em] text-ink">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-[560px] font-sans text-[16px] leading-[1.7] text-muted sm:text-[17px]">
          {lede}
        </p>
      )}
    </div>
  );
}
