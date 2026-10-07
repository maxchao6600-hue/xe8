import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ProviderGrid } from "@/components/provider-grid";
import { providers } from "@/content/providers";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";

const copy = {
  en: {
    title: "Game studios in the XE8 catalog",
    description: "Studios and lobbies named in the XE8 Malaysia game guide, with the titles listed under each one.",
    lede: "These pages describe the studios themselves. They do not claim an exclusive supply deal, and they do not restate game mathematics.",
  },
  ms: {
    title: "Studio permainan dalam katalog XE8",
    description: "Studio dan lobi yang dinamakan dalam panduan permainan XE8 Malaysia, dengan tajuk di bawah setiap satu.",
    lede: "Halaman ini menerangkan studio itu sendiri. Ia tidak mendakwa perjanjian bekalan eksklusif dan tidak menyalin matematik permainan.",
  },
  zh: {
    title: "XE8 目录中的游戏工作室",
    description: "XE8 Malaysia 游戏指南中提到的工作室和大厅，以及各自名下的作品。",
    lede: "这些页面介绍工作室本身。它们不声称独家供应，也不转载游戏数学参数。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/providers",
    title: copy[locale].title,
    description: copy[locale].description,
  });
}

export default async function ProvidersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = copy[locale];
  return (
    <div className="shell py-10">
      <JsonLd
        data={breadcrumbJson([
          { name: dict.common.home, url: absoluteUrl(locale) },
          { name: page.title, url: absoluteUrl(locale, "/providers") },
        ])}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: dict.home.providersEyebrow },
        ]}
      />
      <h1 className="font-display text-4xl sm:text-5xl">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{page.lede}</p>
      <div className="mt-8">
        <ProviderGrid providers={providers} locale={locale} />
      </div>
    </div>
  );
}
