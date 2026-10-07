import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryCard } from "@/components/category-card";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { GameGrid } from "@/components/game-grid";
import { GuideGrid } from "@/components/guide-grid";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { LogoMarquee } from "@/components/logo-marquee";
import { MobileDownloadSection } from "@/components/mobile-download-section";
import { PaymentCard } from "@/components/payment-card";
import { PromotionGrid } from "@/components/promotion-grid";
import { SectionHeading } from "@/components/section-heading";
import { categories } from "@/content/categories";
import { homeFaqs } from "@/content/faqs";
import { games } from "@/content/games";
import { guides } from "@/content/guides";
import { paymentMethods } from "@/content/payments";
import { promotions } from "@/content/promotions";
import { providers } from "@/content/providers";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath, siteUrl } from "@/lib/site";
import { t } from "@/lib/utils";

const heroAlt = {
  en: "A private gaming salon in warm low light",
  ms: "Salon permainan peribadi dalam cahaya rendah yang hangat",
  zh: "暖色低光中的私人游戏沙龙",
};

const mobileCopy = {
  en: {
    eyebrow: "Mobile",
    title: "Open the lobby in the browser you already use",
    text: "Android and iOS can reach XE8 without a store listing. A home-screen shortcut is optional. Install a package only from the official entry.",
    points: [
      "Mobile browser on Android and iOS",
      "Home-screen shortcut from the browser menu",
      "Android package only if the official entry offers it",
    ],
    cta: "Mobile access",
  },
  ms: {
    eyebrow: "Mudah alih",
    title: "Buka lobi dalam pelayar yang sudah anda guna",
    text: "Android dan iOS boleh mencapai XE8 tanpa senarai kedai. Pintasan skrin utama adalah pilihan. Pasang pakej hanya dari pintu rasmi.",
    points: [
      "Pelayar mudah alih pada Android dan iOS",
      "Pintasan skrin utama dari menu pelayar",
      "Pakej Android hanya jika pintu rasmi menawarkannya",
    ],
    cta: "Akses mudah alih",
  },
  zh: {
    eyebrow: "手机",
    title: "用你已经在用的浏览器打开大厅",
    text: "Android 和 iOS 不必经过应用商店就能打开 XE8。主屏幕快捷方式是可选的。只有官方入口提供时才安装安装包。",
    points: ["Android 和 iOS 的手机浏览器", "从浏览器菜单添加到主屏幕", "仅当官方入口提供时才安装 Android 包"],
    cta: "手机访问",
  },
};

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
    path: "/",
    title: dict.hero.title,
    description: dict.hero.lede,
    image: "/images/og.jpg",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const mobile = mobileCopy[locale];
  const featured = games.filter((game) => game.featured).slice(0, 8);
  const depositLabel = locale === "zh" ? "存款" : locale === "ms" ? "Deposit" : "Deposit";
  const withdrawalLabel = locale === "zh" ? "提款" : locale === "ms" ? "Pengeluaran" : "Withdrawal";

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "XE8",
            url: siteUrl,
            logo: `${siteUrl}/images/mark.jpg`,
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "XE8",
            url: absoluteUrl(locale),
            inLanguage: locale === "zh" ? "zh-Hans" : locale,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((item) => ({
              "@type": "Question",
              name: t(item.question, locale),
              acceptedAnswer: { "@type": "Answer", text: t(item.answer, locale) },
            })),
          },
        ]}
      />
      <Hero
        locale={locale}
        eyebrow={dict.hero.eyebrow}
        title={dict.hero.title}
        lede={dict.hero.lede}
        primary={dict.hero.primary}
        secondary={dict.hero.secondary}
        imageAlt={heroAlt[locale]}
      />

      <section className="shell py-16 lg:py-24">
        <SectionHeading
          eyebrow={dict.home.categoriesEyebrow}
          title={dict.home.categoriesTitle}
          text={dict.home.categoriesText}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              locale={locale}
              cta={dict.common.explore}
              large={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="shell py-4 lg:py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={dict.home.featuredEyebrow}
            title={dict.home.featuredTitle}
            text={dict.home.featuredText}
          />
          <Link href={localePath(locale, "/games")} className="text-sm font-semibold text-gold">
            {dict.home.viewAllGames}
          </Link>
        </div>
        <div className="mt-8">
          <GameGrid games={featured} locale={locale} cta={dict.common.viewGame} />
        </div>
      </section>

      <section className="shell py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={dict.home.promotionsEyebrow}
            title={dict.home.promotionsTitle}
            text={dict.home.promotionsText}
          />
          <Link href={localePath(locale, "/promotions")} className="text-sm font-semibold text-gold">
            {dict.home.viewAllPromotions}
          </Link>
        </div>
        <div className="mt-8">
          <PromotionGrid promotions={promotions.slice(0, 3)} locale={locale} cta={dict.common.viewOffer} />
        </div>
      </section>

      <section className="border-y border-line py-12">
        <div className="shell mb-8">
          <SectionHeading
            eyebrow={dict.home.providersEyebrow}
            title={dict.home.providersTitle}
            text={dict.home.providersText}
          />
        </div>
        <LogoMarquee
          label={dict.home.providersTitle}
          items={providers.map((provider) => ({ name: provider.name, mark: provider.mark }))}
        />
        <div className="shell mt-8">
          <Link href={localePath(locale, "/providers")} className="text-sm font-semibold text-gold">
            {dict.home.viewProviders}
          </Link>
        </div>
      </section>

      <section className="shell grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image
            src="/images/why.jpg"
            alt={locale === "zh" ? "通向暖色房间的深色走廊" : locale === "ms" ? "Koridor gelap menuju bilik yang hangat" : "A dark corridor opening onto a warm room"}
            fill
            sizes="(max-width: 1024px) 100vw, 540px"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading eyebrow={dict.home.whyEyebrow} title={dict.home.whyTitle} />
          <ol className="mt-8 space-y-6">
            {dict.home.why.map((point, index) => (
              <li key={point.title} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="text-sm text-gold">0{index + 1}</span>
                <span>
                  <span className="block font-semibold">{point.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{point.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <MobileDownloadSection locale={locale} {...mobile} />

      <section className="shell py-8 lg:py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={dict.nav.payment}
            title={locale === "zh" ? "先看收银台，再转账" : locale === "ms" ? "Lihat kaunter sebelum memindahkan wang" : "Read the cashier before you transfer"}
            text={dict.common.officialNote}
          />
          <Link href={localePath(locale, "/payment-methods")} className="text-sm font-semibold text-gold">
            {dict.nav.payment}
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paymentMethods.slice(0, 3).map((method) => (
            <PaymentCard
              key={method.id}
              method={method}
              locale={locale}
              depositLabel={depositLabel}
              withdrawalLabel={withdrawalLabel}
            />
          ))}
        </div>
      </section>

      <section className="shell py-16 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={dict.nav.guides}
            title={locale === "zh" ? "指南，写给真正要操作的人" : locale === "ms" ? "Panduan untuk orang yang mahu bertindak" : "Guides for the next practical step"}
            text={dict.home.faqText}
          />
          <Link href={localePath(locale, "/guides")} className="text-sm font-semibold text-gold">
            {dict.nav.guides}
          </Link>
        </div>
        <div className="mt-8">
          <GuideGrid guides={guides.slice(0, 3)} locale={locale} />
        </div>
      </section>

      <section className="shell py-8 pb-16">
        <SectionHeading eyebrow={dict.home.faqEyebrow} title={dict.home.faqTitle} text={dict.home.faqText} />
        <div className="mt-8">
          <Faq items={homeFaqs} locale={locale} />
        </div>
      </section>

      <CtaSection
        locale={locale}
        title={dict.home.ctaTitle}
        text={dict.home.ctaText}
        primary={dict.hero.primary}
        secondary={dict.hero.secondary}
      />
    </>
  );
}
