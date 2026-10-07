import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { GameGrid } from "@/components/game-grid";
import { GamesExplorer } from "@/components/games-explorer";
import { JsonLd } from "@/components/json-ld";
import { categories, getCategory } from "@/content/categories";
import type { FaqItem } from "@/content/types";
import { games, getGame } from "@/content/games";
import { getProvider, providers } from "@/content/providers";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/locale";
import { breadcrumbJson, faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const gameFaqs = (name: string): FaqItem[] => [
  {
    id: "rules",
    question: {
      en: `Where are the rules for ${name}?`,
      ms: `Di mana peraturan untuk ${name}?`,
      zh: `${name} 的规则在哪里？`,
    },
    answer: {
      en: "Open the help or paytable inside the game. This page does not copy stake steps, RTP or a maximum win.",
      ms: "Buka bantuan atau jadual bayaran dalam permainan. Halaman ini tidak menyalin langkah taruhan, RTP atau kemenangan maksimum.",
      zh: "请打开游戏内的帮助或赔付表。本页不抄录投注档、RTP 或最高赢额。",
    },
  },
  {
    id: "play",
    question: {
      en: "Can I start the game from this page?",
      ms: "Bolehkah saya mulakan permainan dari halaman ini?",
      zh: "可以从这个页面开始游戏吗？",
    },
    answer: {
      en: "This page is a guide. The game opens from the lobby after you sign in, if it is available on your account.",
      ms: "Halaman ini ialah panduan. Permainan dibuka dari lobi selepas anda log masuk, jika ia tersedia pada akaun anda.",
      zh: "本页是指南。登录后如果账户中有这款游戏，请从大厅打开。",
    },
  },
];

export function generateStaticParams() {
  return [...categories.map((category) => ({ slug: category.slug })), ...games.map((game) => ({ slug: game.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const category = getCategory(slug);
  if (category) {
    return buildMetadata({
      locale,
      path: `/games/${slug}`,
      title: `${t(category.name, locale)} · XE8`,
      description: t(category.description, locale),
      image: category.image,
    });
  }
  const game = getGame(slug);
  if (!game) return {};
  return buildMetadata({
    locale,
    path: `/games/${slug}`,
    title: `${game.name} · XE8`,
    description: t(game.description, locale),
    image: game.image,
  });
}

function CategoryView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const category = getCategory(slug);
  if (!category) notFound();
  const dict = getDictionary(locale);
  const crumbs = [
    { label: dict.common.home, href: localePath(locale) },
    { label: dict.nav.games, href: localePath(locale, "/games") },
    { label: t(category.name, locale) },
  ];

  return (
    <div className="shell py-10">
      <JsonLd
        data={breadcrumbJson([
          { name: dict.common.home, url: absoluteUrl(locale) },
          { name: dict.nav.games, url: absoluteUrl(locale, "/games") },
          { name: t(category.name, locale), url: absoluteUrl(locale, `/games/${slug}`) },
        ])}
      />
      <Breadcrumbs items={crumbs} label={dict.common.home} />
      <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl">{t(category.name, locale)}</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{t(category.description, locale)}</p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <Image src={category.image} alt={t(category.imageAlt, locale)} fill priority sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
        </div>
      </div>
      <div className="mt-10">
        <GamesExplorer
          games={games}
          locale={locale}
          dict={dict}
          initialCategory={category.id}
          categories={[
            { value: "all", label: dict.common.all },
            ...categories.map((item) => ({ value: item.id, label: t(item.name, locale) })),
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

export default async function GameOrCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (getCategory(slug)) return <CategoryView locale={locale} slug={slug} />;

  const game = getGame(slug);
  if (!game) notFound();
  const dict = getDictionary(locale);
  const provider = getProvider(game.providerId);
  const category = getCategory(game.categoryId);
  const related = games.filter((item) => item.categoryId === game.categoryId && item.id !== game.id).slice(0, 4);
  const faqs = gameFaqs(game.name);
  const crumbs = [
    { label: dict.common.home, href: localePath(locale) },
    { label: dict.nav.games, href: localePath(locale, "/games") },
    ...(category
      ? [{ label: t(category.name, locale), href: localePath(locale, `/games/${category.slug}`) }]
      : []),
    { label: game.name },
  ];

  return (
    <div className="shell py-10">
      <JsonLd
        data={[
          breadcrumbJson([
            { name: dict.common.home, url: absoluteUrl(locale) },
            { name: dict.nav.games, url: absoluteUrl(locale, "/games") },
            ...(category
              ? [{ name: t(category.name, locale), url: absoluteUrl(locale, `/games/${category.slug}`) }]
              : []),
            { name: game.name, url: absoluteUrl(locale, `/games/${game.slug}`) },
          ]),
          faqJson(faqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) }))),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: game.name,
            description: t(game.description, locale),
            url: absoluteUrl(locale, `/games/${game.slug}`),
          },
        ]}
      />
      <Breadcrumbs items={crumbs} label={dict.common.home} />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
          <Image src={game.image} alt={t(game.imageAlt, locale)} fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow">{category ? t(category.name, locale) : game.categoryId}</p>
          <h1 className="font-display mt-3 text-4xl sm:text-5xl">{game.name}</h1>
          <p className="mt-4 text-lg leading-8 text-muted">{t(game.description, locale)}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">{dict.common.providerLabel}</dt>
              <dd className="mt-1">
                {provider ? (
                  <Link href={localePath(locale, `/providers/${provider.slug}`)} className="font-semibold hover:text-gold">
                    {provider.name}
                  </Link>
                ) : (
                  game.providerId
                )}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">{dict.common.categoryLabel}</dt>
              <dd className="mt-1 font-semibold">{category ? t(category.name, locale) : game.categoryId}</dd>
            </div>
          </dl>
          <h2 className="mt-8 text-xl font-semibold">{dict.common.gameplay}</h2>
          <p className="mt-2 text-sm leading-7 text-muted">{t(game.gameplay, locale)}</p>
          {provider ? (
            <p className="mt-4 text-sm leading-7 text-muted">{t(provider.description, locale)}</p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={localePath(locale, "/register")} className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-night">
              {dict.common.register}
            </Link>
            <Link href={localePath(locale, "/games")} className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold">
              {dict.common.backGames}
            </Link>
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-display text-3xl">{dict.common.related}</h2>
          <div className="mt-6">
            <GameGrid games={related} locale={locale} cta={dict.common.viewGame} />
          </div>
        </section>
      ) : null}
      <section className="mt-16">
        <Faq items={faqs} locale={locale} heading={dict.common.faq} />
      </section>
    </div>
  );
}
