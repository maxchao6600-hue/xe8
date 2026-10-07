import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocumentView } from "@/components/document-view";
import { documents } from "@/content/documents";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const doc = documents.contact;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: doc.path, title: t(doc.title, locale), description: t(doc.description, locale), image: doc.image });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <DocumentView locale={locale} dict={dict} doc={doc} />
      <div className="shell -mt-4 pb-12 flex flex-wrap gap-3">
        <Link href={localePath(locale, "/faq")} className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm">
          {dict.footer.faq}
        </Link>
        <Link href={localePath(locale, "/login")} className="inline-flex h-11 items-center rounded-full bg-gold px-5 text-sm font-semibold text-night">
          {dict.nav.login}
        </Link>
      </div>
    </>
  );
}
