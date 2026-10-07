import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import type { DocumentPage } from "@/content/documents";
import type { FaqItem } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function DocumentView({
  locale,
  dict,
  doc,
  faqs,
}: {
  locale: Locale;
  dict: Dictionary;
  doc: DocumentPage;
  faqs?: FaqItem[];
}) {
  return (
    <div className="shell py-10">
      <JsonLd
        data={breadcrumbJson([
          { name: dict.common.home, url: absoluteUrl(locale) },
          { name: t(doc.title, locale), url: absoluteUrl(locale, doc.path) },
        ])}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: t(doc.title, locale) },
        ]}
      />
      <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl">{t(doc.title, locale)}</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{t(doc.lede, locale)}</p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <Image src={doc.image} alt={t(doc.imageAlt, locale)} fill priority sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
        </div>
      </div>
      <div className="prose-xe8 mt-10 max-w-3xl">
        {doc.sections.map((section) => (
          <section key={t(section.heading, "en")}>
            <h2>{t(section.heading, locale)}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={t(paragraph, "en").slice(0, 48)}>{t(paragraph, locale)}</p>
            ))}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={t(item, "en").slice(0, 48)}>{t(item, locale)}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
      {faqs ? (
        <div className="mt-12 max-w-3xl">
          <Faq items={faqs} locale={locale} heading={dict.common.faq} />
        </div>
      ) : null}
      <p className="mt-8 text-sm text-muted">
        <Link href={localePath(locale, "/guides")} className="text-gold">
          {dict.nav.guides}
        </Link>
      </p>
    </div>
  );
}
