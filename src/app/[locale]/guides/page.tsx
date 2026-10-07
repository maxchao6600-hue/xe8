import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GuideGrid } from "@/components/guide-grid";
import { JsonLd } from "@/components/json-ld";
import { guideCategoryLabels, guides } from "@/content/guides";
import { guideCategories } from "@/content/types";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";

const copy = {
  en: {
    title: "XE8 guides",
    description: "Practical guides for registration, slots, live casino, sports, payments, mobile access and account care on XE8 Malaysia.",
    lede: "Short guides for the questions players actually ask. Each one stops where the lobby, the game or the cashier takes over.",
  },
  ms: {
    title: "Panduan XE8",
    description: "Panduan praktikal untuk pendaftaran, slot, kasino langsung, sukan, pembayaran, akses mudah alih dan penjagaan akaun di XE8 Malaysia.",
    lede: "Panduan ringkas untuk soalan yang benar-benar ditanya pemain. Setiap satu berhenti di tempat lobi, permainan atau kaunter mengambil alih.",
  },
  zh: {
    title: "XE8 指南",
    description: "关于 XE8 Malaysia 的注册、老虎机、真人娱乐场、体育、支付、手机访问和账户事项的实用指南。",
    lede: "针对玩家真正会问的问题而写的短指南。每篇都停在大厅、游戏或收银台接手的地方。",
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
    path: "/guides",
    title: copy[locale].title,
    description: copy[locale].description,
    image: "/images/guide.jpg",
  });
}

export default async function GuidesPage({
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
          { name: page.title, url: absoluteUrl(locale, "/guides") },
        ])}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: dict.nav.guides },
        ]}
      />
      <h1 className="font-display text-4xl sm:text-5xl">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{page.lede}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {guideCategories.map((category) => (
          <li key={category}>
            <Link href={`#${category}`} className="rounded-full border border-line px-3 py-1 text-sm text-muted hover:text-ink">
              {guideCategoryLabels[category][locale]}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10 space-y-12">
        {guideCategories.map((category) => {
          const group = guides.filter((guide) => guide.category === category);
          if (group.length === 0) return null;
          return (
            <section key={category} id={category}>
              <h2 className="font-display text-3xl">{guideCategoryLabels[category][locale]}</h2>
              <div className="mt-5">
                <GuideGrid guides={group} locale={locale} />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
