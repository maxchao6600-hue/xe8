export function LogoMarquee({
  items,
  label,
}: {
  items: { name: string; mark: string }[];
  label: string;
}) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden" aria-label={label}>
      <div className="marquee-track">
        {row.map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className="inline-flex items-center gap-3 rounded-full border border-line px-4 py-2 text-sm text-ink"
          >
            <span className="text-gold">{item.mark}</span>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
