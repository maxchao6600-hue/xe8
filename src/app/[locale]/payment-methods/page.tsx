import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PaymentCard } from "@/components/payment-card";
import { paymentFaqs } from "@/content/faqs";
import { paymentMethods } from "@/content/payments";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson, faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const copy = {
  en: {
    title: "XE8 payment methods",
    description: "Touch 'n Go, Maybank2u, Boost, GrabPay, DuitNow and USDT on the xe8 cashier.",
    lede: "The cashier is the list that matters. A method below is usable only when it appears there. This page does not state a processing time.",
  },
  ms: {
    title: "Kaedah pembayaran XE8",
    description: "Touch 'n Go, Maybank2u, Boost, GrabPay, DuitNow dan USDT pada kaunter xe8.",
    lede: "Kaunter ialah senarai yang penting. Kaedah di bawah hanya boleh digunakan apabila ia muncul di sana. Halaman ini tidak menyatakan masa pemprosesan.",
  },
  zh: {
    title: "XE8 支付方式",
    description: "xe8 收银台中的 Touch 'n Go、Maybank2u、Boost、GrabPay、DuitNow 和 USDT。",
    lede: "收银台才是有效清单。下面的方式只有出现在那里时才可使用。本页不写处理时间。",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "/payment-methods", title: copy[locale].title, description: copy[locale].description, image: "/assets/payments/tng.webp" });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = copy[locale];
  const depositLabel = locale === "zh" ? "存款" : locale === "ms" ? "Deposit" : "Deposit";
  const withdrawalLabel = locale === "zh" ? "提款" : locale === "ms" ? "Pengeluaran" : "Withdrawal";
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJson([
            { name: dict.common.home, url: absoluteUrl(locale) },
            { name: page.title, url: absoluteUrl(locale, "/payment-methods") },
          ]),
          faqJson(paymentFaqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) }))),
        ]}
      />
      <PageHero eyebrow={dict.nav.payment} title={page.title} lede={page.lede} image="/assets/payments/tng.webp" alt="Touch 'n Go" />
      <div className="shell pb-16">
        <Breadcrumbs
          label={dict.common.home}
          items={[
            { label: dict.common.home, href: localePath(locale) },
            { label: dict.nav.payment },
          ]}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {paymentMethods.map((method) => (
            <PaymentCard key={method.id} method={method} locale={locale} depositLabel={depositLabel} withdrawalLabel={withdrawalLabel} />
          ))}
        </div>
        <h2 className="font-display mt-12 text-3xl">{locale === "zh" ? "安全" : locale === "ms" ? "Keselamatan" : "Security"}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{dict.common.officialNote}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={localePath(locale, "/deposit")} className="text-sm font-semibold text-gold">{depositLabel}</Link>
          <Link href={localePath(locale, "/withdrawal")} className="text-sm font-semibold text-gold">{withdrawalLabel}</Link>
        </div>
        <div className="mt-12">
          <Faq items={paymentFaqs} locale={locale} heading={dict.common.faq} />
        </div>
      </div>
    </>
  );
}
