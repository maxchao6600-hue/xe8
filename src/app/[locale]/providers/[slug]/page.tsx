import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GameGrid } from "@/components/game-grid";
import { JsonLd } from "@/components/json-ld";
import { categories } from "@/content/categories";
import { gamesByProvider } from "@/content/games";
import { getProvider, providers } from "@/content/providers";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function generateStaticParams() {
  return providers.map((provider) => ({ slug: provider.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const provider = getProvider(slug);
  if (!provider) return {};
  return buildMetadata({
    locale,
    path: `/providers/${slug}`,
    title: `${provider.name} · XE8`,
    description: t(provider.description, locale),
  });
}

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const provider = getProvider(slug);
  if (!provider) notFound();
  const dict = getDictionary(locale);
  const studioGames = gamesByProvider(provider.id);
  const popular = studioGames.filter((game) => game.popular);
  const categoryIds = [...new Set(studioGames.map((game) => game.categoryId))];
  const related = providers.filter((item) => item.id !== provider.id).slice(0, 4);

  return (
    <div className="shell py-10">
      <JsonLd
        data={breadcrumbJson([
          { name: dict.common.home, url: absoluteUrl(locale) },
          { name: dict.home.providersEyebrow, url: absoluteUrl(locale, "/providers") },
          { name: provider.name, url: absoluteUrl(locale, `/providers/${provider.slug}`) },
        ])}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: dict.home.providersEyebrow, href: localePath(locale, "/providers") },
          { label: provider.name },
        ]}
      />
      <div className="flex items-start gap-5">
        {provider.logo ? (
          <span className="flex h-20 w-36 shrink-0 items-center justify-center rounded-3xl bg-[#f6f3ee] px-3">
            <Image src={provider.logo} alt="" width={300} height={64} className="h-10 w-auto object-contain" />
          </span>
        ) : (
          <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-elevated text-lg font-semibold text-gold">
            {provider.mark}
          </span>
        )}
        <div>
          <h1 className="font-display text-4xl sm:text-5xl">{provider.name}</h1>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">{t(provider.overview, locale)}</p>
        </div>
      </div>
      {categoryIds.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {categoryIds.map((id) => {
            const category = categories.find((item) => item.id === id);
            if (!category) return null;
            return (
              <li key={id}>
                <Link href={localePath(locale, `/games/${category.slug}`)} className="rounded-full border border-line px-3 py-1 text-sm">
                  {t(category.name, locale)}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-8 text-sm text-muted">
          {locale === "zh"
            ? "目录里还没有单独列出该工作室的作品。大厅中的实际列表以登录后为准。"
            : locale === "ms"
              ? "Katalog belum menyenaraikan tajuk berasingan untuk studio ini. Senarai sebenar dalam lobi disahkan selepas log masuk."
              : "The catalog does not yet list individual titles for this studio. The live list is confirmed in the lobby after you sign in."}
        </p>
      )}
      {popular.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-3xl">{dict.common.popular}</h2>
          <div className="mt-6">
            <GameGrid games={popular} locale={locale} cta={dict.common.viewGame} />
          </div>
        </section>
      ) : null}
      {studioGames.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-3xl">{dict.nav.games}</h2>
          <div className="mt-6">
            <GameGrid games={studioGames} locale={locale} cta={dict.common.viewGame} />
          </div>
        </section>
      ) : null}
      <section className="mt-12">
        <h2 className="font-display text-3xl">{dict.common.related}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {related.map((item) => (
            <li key={item.id}>
              <Link href={localePath(locale, `/providers/${item.slug}`)} className="block rounded-3xl border border-line px-4 py-3 hover:border-gold">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
