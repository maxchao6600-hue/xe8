"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/components/filter-bar";
import { GameGrid } from "@/components/game-grid";
import { SearchBar } from "@/components/search-bar";
import type { Game } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export type ExplorerGame = Game;

export function GamesExplorer({
  games,
  locale,
  dict,
  categories,
  providers,
  initialCategory = "all",
}: {
  games: ExplorerGame[];
  locale: Locale;
  dict: Dictionary;
  categories: { value: string; label: string }[];
  providers: { value: string; label: string }[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [provider, setProvider] = useState("all");
  const [sort, setSort] = useState<"all" | "featured" | "popular" | "latest">("all");

  const visible = useMemo(() => {
    const filtered = games.filter((game) => {
      const matchesQuery = game.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesCategory = category === "all" || game.categoryId === category;
      const matchesProvider = provider === "all" || game.providerId === provider;
      const matchesSort =
        sort === "all" ||
        (sort === "featured" && game.featured) ||
        (sort === "popular" && game.popular) ||
        sort === "latest";
      return matchesQuery && matchesCategory && matchesProvider && matchesSort;
    });
    if (sort === "latest") {
      return [...filtered].sort((a, b) => (a.addedAt < b.addedAt ? 1 : -1));
    }
    return filtered;
  }, [games, query, category, provider, sort]);

  const sorts = [
    { id: "all" as const, label: dict.common.all },
    { id: "featured" as const, label: dict.common.featured },
    { id: "popular" as const, label: dict.common.popular },
    { id: "latest" as const, label: dict.common.latest },
  ];

  return (
    <div className="space-y-6">
      <SearchBar
        label={dict.common.searchLabel}
        placeholder={dict.common.searchPlaceholder}
        value={query}
        onChange={setQuery}
      />
      <FilterBar
        categoryLabel={dict.common.category}
        providerLabel={dict.common.provider}
        categories={categories}
        providers={providers}
        category={category}
        provider={provider}
        onCategory={setCategory}
        onProvider={setProvider}
      />
      <div className="flex flex-wrap gap-2" role="group" aria-label={dict.common.featured}>
        {sorts.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSort(item.id)}
            className={`h-10 rounded-full px-4 text-sm ${sort === item.id ? "bg-gold text-night" : "border border-line text-ink"}`}
            aria-pressed={sort === item.id}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            setQuery("");
            setCategory("all");
            setProvider("all");
            setSort("all");
          }}
          className="h-10 rounded-full px-4 text-sm text-muted"
        >
          {dict.common.clear}
        </button>
      </div>
      {visible.length === 0 ? (
        <div className="rounded-3xl border border-line px-6 py-12">
          <h2 className="text-2xl font-semibold">{dict.common.noResultsTitle}</h2>
          <p className="mt-2 text-muted">{dict.common.noResultsText}</p>
        </div>
      ) : (
        <GameGrid games={visible} locale={locale} cta={dict.common.viewGame} />
      )}
    </div>
  );
}
