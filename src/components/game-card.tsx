import Image from "next/image";
import Link from "next/link";
import { getProvider } from "@/content/providers";
import { getCategory } from "@/content/categories";
import type { Game } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function GameCard({
  game,
  locale,
  cta,
}: {
  game: Game;
  locale: Locale;
  cta: string;
}) {
  const provider = getProvider(game.providerId);
  const category = getCategory(game.categoryId);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-elevated">
      <Link href={localePath(locale, `/games/${game.slug}`)} className="relative block aspect-[3/4]">
        <Image
          src={game.image}
          alt={t(game.imageAlt, locale)}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs tracking-wide text-gold uppercase">
          {category ? t(category.name, locale) : game.categoryId}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-ink">
          <Link href={localePath(locale, `/games/${game.slug}`)} className="hover:text-gold">
            {game.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted">{provider?.name}</p>
        <Link
          href={localePath(locale, `/games/${game.slug}`)}
          className="mt-4 inline-flex h-10 items-center text-sm font-semibold text-ink"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
