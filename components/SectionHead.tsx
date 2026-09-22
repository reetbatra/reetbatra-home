interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}

export default function SectionHead({ index, label, title, lede }: Props) {
  return (
    <div className="reveal grid gap-x-6 gap-y-3 border-b border-ink pb-6 md:grid-cols-[130px_1fr]">
      <div className="t-label pt-1.5 text-blue">
        {index} / {label}
      </div>
      <div>
        <h2 className="t-head max-w-[18ch] text-[clamp(28px,3.4vw,46px)]">
          {title}
        </h2>
        {lede && (
          <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.62] text-muted">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
