import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { PromotionGrid } from "@/components/promotion-grid";
import { promotions } from "@/content/promotions";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";

const copy = {
  en: {
    title: "XE8 promotions",
    description: "How to read welcome, ongoing, VIP and seasonal offers on XE8 without relying on figures that change.",
    lede: "Each offer in your account has its own value, wagering and expiry. These pages explain the types of offer. They do not publish a bonus amount.",
  },
  ms: {
    title: "Promosi XE8",
    description: "Cara membaca tawaran alu-aluan, berterusan, VIP dan bermusim di XE8 tanpa bergantung pada angka yang berubah.",
    lede: "Setiap tawaran dalam akaun mempunyai nilai, syarat pertaruhan dan tarikh luput sendiri. Halaman ini menerangkan jenis tawaran. Ia tidak menerbitkan jumlah bonus.",
  },
  zh: {
    title: "XE8 优惠",
    description: "如何阅读 XE8 的迎新、持续、VIP 和节日优惠，而不依赖会变动的数字。",
    lede: "账户里的每条优惠都有自己的金额、流水和有效期。这些页面说明优惠类型，不公布奖金数字。",
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
    path: "/promotions",
    title: copy[locale].title,
    description: copy[locale].description,
    image: "/assets/promotions/mega-bonus.webp",
  });
}

export default async function PromotionsPage({
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
          { name: page.title, url: absoluteUrl(locale, "/promotions") },
        ])}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: dict.nav.promotions },
        ]}
      />
      <h1 className="font-display text-4xl sm:text-5xl">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{page.lede}</p>
      <div className="mt-8">
        <PromotionGrid promotions={promotions} locale={locale} cta={dict.common.viewOffer} />
      </div>
    </div>
  );
}
