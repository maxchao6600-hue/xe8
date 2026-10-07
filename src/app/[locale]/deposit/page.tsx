import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { StepList } from "@/components/step-list";
import { depositFaqs } from "@/content/faqs";
import { paymentMethods } from "@/content/payments";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson, faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const steps = {
  en: [
    { title: "Sign in", text: "Open the official entry and sign in before you look for bank details." },
    { title: "Open the cashier", text: "Choose Deposit. The methods on that screen are the ones open for this attempt." },
    { title: "Match the amount and reference", text: "Copy the reference if one is shown. Do not add a note of your own." },
    { title: "Read the status", text: "Transaction history is the record. Do not send a second transfer while the first is pending." },
  ],
  ms: [
    { title: "Log masuk", text: "Buka pintu rasmi dan log masuk sebelum mencari butiran bank." },
    { title: "Buka kaunter", text: "Pilih Deposit. Kaedah pada skrin itu ialah yang dibuka untuk percubaan ini." },
    { title: "Padankan jumlah dan rujukan", text: "Salin rujukan jika dipaparkan. Jangan tambah nota sendiri." },
    { title: "Baca status", text: "Sejarah transaksi ialah rekod. Jangan hantar pindahan kedua semasa yang pertama tertangguh." },
  ],
  zh: [
    { title: "登录", text: "打开官方入口并登录，然后再找银行资料。" },
    { title: "打开收银台", text: "选择存款。那一屏上的方式才是这次可用的。" },
    { title: "核对金额和参考号", text: "如果显示参考号就复制。不要自己加备注。" },
    { title: "阅读状态", text: "交易记录才是依据。第一笔还在处理时不要再转一笔。" },
  ],
};

const copy = {
  en: { title: "How to deposit on XE8", description: "Deposit steps for the XE8 cashier, common problems, and what to check before you transfer again." },
  ms: { title: "Cara deposit di XE8", description: "Langkah deposit untuk kaunter XE8, masalah biasa, dan apa yang perlu disemak sebelum memindahkan lagi." },
  zh: { title: "如何在 XE8 存款", description: "XE8 收银台的存款步骤、常见问题，以及再次转账前要核对什么。" },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "/deposit", title: copy[locale].title, description: copy[locale].description, image: "/images/payment.jpg" });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = copy[locale];
  return (
    <div className="shell py-10">
      <JsonLd
        data={[
          breadcrumbJson([
            { name: dict.common.home, url: absoluteUrl(locale) },
            { name: dict.nav.payment, url: absoluteUrl(locale, "/payment-methods") },
            { name: page.title, url: absoluteUrl(locale, "/deposit") },
          ]),
          faqJson(depositFaqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) }))),
        ]}
      />
      <Breadcrumbs
        label={dict.common.home}
        items={[
          { label: dict.common.home, href: localePath(locale) },
          { label: dict.nav.payment, href: localePath(locale, "/payment-methods") },
          { label: page.title },
        ]}
      />
      <h1 className="font-display max-w-3xl text-4xl sm:text-5xl">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{page.description}</p>
      <div className="mt-8">
        <StepList steps={steps[locale]} />
      </div>
      <h2 className="font-display mt-12 text-3xl">{dict.nav.payment}</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {paymentMethods.filter((method) => method.deposit).map((method) => (
          <li key={method.id} className="rounded-full border border-line px-3 py-1 text-sm">{method.name}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">{dict.common.officialNote}</p>
      <div className="mt-10">
        <Faq items={depositFaqs} locale={locale} heading={dict.common.faq} />
      </div>
      <Link href={localePath(locale, "/guides/how-to-deposit")} className="mt-8 inline-flex text-sm font-semibold text-gold">
        {dict.common.readGuide}
      </Link>
    </div>
  );
}
