import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/faq";
import { PageHero } from "@/components/page-hero";
import { homeFaqs } from "@/content/faqs";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { JsonLd } from "@/components/json-ld";
import { faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const copy = {
  en: { title: "XE8 questions", description: "Answers about XE8 Malaysia accounts, payments, mobile access and who can play." },
  ms: { title: "Soalan XE8", description: "Jawapan tentang akaun XE8 Malaysia, pembayaran, akses mudah alih dan siapa yang boleh bermain." },
  zh: { title: "XE8 问题", description: "关于 XE8 Malaysia 账户、支付、手机访问以及谁可以玩的回答。" },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "/faq", title: copy[locale].title, description: copy[locale].description, image: "/images/guide.jpg" });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <JsonLd data={faqJson(homeFaqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) })))} />
      <PageHero
        eyebrow={dict.footer.faq}
        title={copy[locale].title}
        lede={copy[locale].description}
        image="/images/guide.jpg"
        alt={copy[locale].title}
      />
      <div className="shell pb-16">
        <Faq items={homeFaqs} locale={locale} />
        <p className="mt-8">
          <Link href={localePath(locale, "/guides")} className="text-sm font-semibold text-gold">
            {dict.nav.guides}
          </Link>
        </p>
      </div>
    </>
  );
}
