import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { getPromotion, promotions } from "@/content/promotions";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";
import Image from "next/image";

export function generateStaticParams() {
  return promotions.map((promotion) => ({ slug: promotion.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const promotion = getPromotion(slug);
  if (!promotion) return {};
  return buildMetadata({
    locale,
    path: `/promotions/${slug}`,
    title: `${t(promotion.title, locale)} · XE8`,
    description: t(promotion.summary, locale),
    image: promotion.image,
  });
}

export default async function PromotionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const promotion = getPromotion(slug);
  if (!promotion) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="shell py-10">
      <JsonLd
        data={breadcrumbJson([
          { name: dict.common.home, url: absoluteUrl(locale) },
          { name: dict.nav.promotions, url: absoluteUrl(locale, "/promotions") },
          { name: t(promotion.title, locale), url: absoluteUrl(locale, `/promotions/${promotion.slug}`) },
        ])}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: dict.nav.promotions, href: localePath(locale, "/promotions") },
          { label: t(promotion.title, locale) },
        ]}
      />
      <div className="relative aspect-video overflow-hidden rounded-3xl">
        <Image src={promotion.image} alt={t(promotion.imageAlt, locale)} fill priority sizes="100vw" className="object-cover" />
      </div>
      <h1 className="font-display mt-8 text-4xl sm:text-5xl">{t(promotion.title, locale)}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{t(promotion.summary, locale)}</p>
      <div className="prose-xe8 mt-6 max-w-3xl">
        {promotion.paragraphs.map((paragraph) => (
          <p key={t(paragraph, "en").slice(0, 24)}>{t(paragraph, locale)}</p>
        ))}
      </div>
      <dl className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          [dict.common.eligibility, promotion.eligibility],
          [dict.common.validity, promotion.validity],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-3xl border border-line p-5 md:col-span-1">
            <dt className="text-xs tracking-wide text-gold uppercase">{label as string}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted">{t(value as typeof promotion.eligibility, locale)}</dd>
          </div>
        ))}
      </dl>
      <h2 className="mt-10 text-2xl font-semibold">{dict.common.terms}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
        {promotion.terms.map((term) => (
          <li key={t(term, "en").slice(0, 32)}>{t(term, locale)}</li>
        ))}
      </ul>
      <Link href={localePath(locale, "/register")} className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-night">
        {dict.common.register}
      </Link>
    </div>
  );
}
