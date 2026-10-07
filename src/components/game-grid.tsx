import type { Game } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { GameCard } from "@/components/game-card";

export function GameGrid({
  games,
  locale,
  cta,
}: {
  games: Game[];
  locale: Locale;
  cta: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} locale={locale} cta={cta} />
      ))}
    </div>
  );
}
