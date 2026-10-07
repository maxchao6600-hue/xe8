import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { GuideCard } from "@/components/guide-card";
import { JsonLd } from "@/components/json-ld";
import { getGuide, guideCategoryLabels, guides } from "@/content/guides";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson, faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath, siteUrl } from "@/lib/site";
import { formatDate, t } from "@/lib/utils";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    locale,
    path: `/guides/${slug}`,
    title: `${t(guide.title, locale)} · XE8`,
    description: t(guide.excerpt, locale),
    image: guide.cover,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const guide = getGuide(slug);
  if (!guide) notFound();
  const dict = getDictionary(locale);
  const sections = guide.sections[locale];
  const related = guides.filter((item) => item.category === guide.category && item.id !== guide.id).slice(0, 3);
  const faqs = guide.faq.map((item, index) => ({
    id: `${guide.id}-${index}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <div className="shell py-10">
      <JsonLd
        data={[
          breadcrumbJson([
            { name: dict.common.home, url: absoluteUrl(locale) },
            { name: dict.nav.guides, url: absoluteUrl(locale, "/guides") },
            { name: t(guide.title, locale), url: absoluteUrl(locale, `/guides/${guide.slug}`) },
          ]),
          faqJson(faqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) }))),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: t(guide.title, locale),
            description: t(guide.excerpt, locale),
            datePublished: guide.publishedAt,
            dateModified: guide.updatedAt,
            author: { "@type": "Organization", name: t(guide.author, locale) },
            image: `${siteUrl}${guide.cover}`,
            mainEntityOfPage: absoluteUrl(locale, `/guides/${guide.slug}`),
          },
        ]}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: dict.nav.guides, href: localePath(locale, "/guides") },
          { label: t(guide.title, locale) },
        ]}
      />
      <p className="eyebrow">{guideCategoryLabels[guide.category][locale]}</p>
      <h1 className="font-display mt-3 max-w-3xl text-4xl sm:text-5xl">{t(guide.title, locale)}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{t(guide.excerpt, locale)}</p>
      <p className="mt-3 text-sm text-muted">
        {dict.common.updated} {formatDate(guide.updatedAt, locale)} · {t(guide.author, locale)}
      </p>
      <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl">
        <Image src={guide.cover} alt={t(guide.coverAlt, locale)} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[16rem_1fr]">
        <nav aria-label={dict.common.toc} className="h-max rounded-3xl border border-line p-5 lg:sticky lg:top-24">
          <p className="text-sm font-semibold">{dict.common.toc}</p>
          <ol className="mt-3 space-y-2 text-sm text-muted">
            {sections.filter((section) => section.level === 2).map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="hover:text-ink">
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="prose-xe8 max-w-3xl">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              {section.level === 2 ? <h2>{section.heading}</h2> : <h3>{section.heading}</h3>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.table ? (
                <table>
                  <caption className="mb-2 text-left text-sm text-ink">{section.table.caption}</caption>
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join("-")}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </section>
          ))}
        </article>
      </div>
      <div className="mt-12">
        <Faq items={faqs} locale={locale} heading={dict.common.faq} />
      </div>
      {related.length > 0 ? (
        <section className="mt-12">
          <h2 className="font-display text-3xl">{dict.common.related}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <GuideCard key={item.id} guide={item} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}
      <p className="mt-10 text-sm">
        <Link href={localePath(locale, "/guides")} className="text-gold">
          {dict.common.backGuides}
        </Link>
      </p>
    </div>
  );
}
