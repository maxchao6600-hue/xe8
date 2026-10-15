import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GamesExplorer } from "@/components/games-explorer";
import { JsonLd } from "@/components/json-ld";
import { categories } from "@/content/categories";
import { games } from "@/content/games";
import { providers } from "@/content/providers";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/games",
    title: dict.games.title,
    description: dict.games.description,
    image: "/assets/categories/slots.webp",
  });
}

export default async function GamesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const crumbs = [
    { label: dict.common.home, href: localePath(locale) },
    { label: dict.nav.games },
  ];

  return (
    <div className="shell py-10">
      <JsonLd
        data={breadcrumbJson([
          { name: dict.common.home, url: absoluteUrl(locale) },
          { name: dict.nav.games, url: absoluteUrl(locale, "/games") },
        ])}
      />
      <Breadcrumbs items={crumbs} label={dict.common.home} />
      <h1 className="font-display text-4xl sm:text-5xl">{dict.games.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{dict.games.lede}</p>
      <div className="mt-8">
        <GamesExplorer
          games={games}
          locale={locale}
          dict={dict}
          categories={[
            { value: "all", label: dict.common.all },
            ...categories.map((category) => ({ value: category.id, label: t(category.name, locale) })),
          ]}
          providers={[
            { value: "all", label: dict.common.all },
            ...providers.map((provider) => ({ value: provider.id, label: provider.name })),
          ]}
        />
      </div>
    </div>
  );
}
