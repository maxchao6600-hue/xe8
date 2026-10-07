"use client";

export function FilterBar({
  categoryLabel,
  providerLabel,
  categories,
  providers,
  category,
  provider,
  onCategory,
  onProvider,
}: {
  categoryLabel: string;
  providerLabel: string;
  categories: { value: string; label: string }[];
  providers: { value: string; label: string }[];
  category: string;
  provider: string;
  onCategory: (value: string) => void;
  onProvider: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="block">
        <span className="mb-2 block text-sm text-muted">{categoryLabel}</span>
        <select
          value={category}
          onChange={(event) => onCategory(event.target.value)}
          className="h-12 w-full rounded-2xl border border-line bg-elevated px-4 text-ink"
        >
          {categories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-muted">{providerLabel}</span>
        <select
          value={provider}
          onChange={(event) => onProvider(event.target.value)}
          className="h-12 w-full rounded-2xl border border-line bg-elevated px-4 text-ink"
        >
          {providers.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
