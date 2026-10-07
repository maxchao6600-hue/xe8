import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentView } from "@/components/document-view";
import { documents } from "@/content/documents";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";
import { t } from "@/lib/utils";

const doc = documents.terms;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: doc.path, title: t(doc.title, locale), description: t(doc.description, locale), image: doc.image });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <DocumentView locale={locale} dict={getDictionary(locale)} doc={doc} />;
}
