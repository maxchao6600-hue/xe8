import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { StepList } from "@/components/step-list";
import { withdrawalFaqs } from "@/content/faqs";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson, faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const steps = {
  en: [
    { title: "Check the offer", text: "If a promotion is active, read whether wagering is still open before you request a withdrawal." },
    { title: "Use the same name", text: "The destination account should match the name on your profile." },
    { title: "Choose a listed method", text: "Only methods on the withdrawal screen are available for that request." },
    { title: "Submit once", text: "Keep the history row. This site does not promise how long the status will take to change." },
  ],
  ms: [
    { title: "Semak tawaran", text: "Jika promosi aktif, baca sama ada syarat pertaruhan masih terbuka sebelum meminta pengeluaran." },
    { title: "Gunakan nama yang sama", text: "Akaun destinasi harus sepadan dengan nama pada profil anda." },
    { title: "Pilih kaedah yang disenaraikan", text: "Hanya kaedah pada skrin pengeluaran tersedia untuk permohonan itu." },
    { title: "Hantar sekali", text: "Simpan baris sejarah. Laman ini tidak menjanjikan berapa lama status akan berubah." },
  ],
  zh: [
    { title: "先看优惠", text: "如果优惠还在进行，申请提款前先看流水是否完成。" },
    { title: "使用相同姓名", text: "收款账户应与资料上的姓名一致。" },
    { title: "选择列出的方式", text: "只有提款画面上的方式可用于这次申请。" },
    { title: "只提交一次", text: "保留记录中的那一行。本站不承诺状态多久会变化。" },
  ],
};

const copy = {
  en: { title: "How to withdraw from XE8", description: "Withdrawal requirements, steps and common reasons a request comes back, without a promised processing time." },
  ms: { title: "Cara pengeluaran dari XE8", description: "Syarat pengeluaran, langkah dan sebab biasa permohonan dikembalikan, tanpa masa pemprosesan yang dijanjikan." },
  zh: { title: "如何从 XE8 提款", description: "提款要求、步骤和申请被退回的常见原因，不承诺处理时间。" },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "/withdrawal", title: copy[locale].title, description: copy[locale].description, image: "/images/promo-vip.jpg" });
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
            { name: page.title, url: absoluteUrl(locale, "/withdrawal") },
          ]),
          faqJson(withdrawalFaqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) }))),
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
      <h2 className="font-display mt-12 text-3xl">{locale === "zh" ? "安全" : locale === "ms" ? "Keselamatan" : "Security"}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        {locale === "zh"
          ? "不要把密码或验证码发给任何人。客服在已登录的账户里，不在私人聊天的新账号里。"
          : locale === "ms"
            ? "Jangan berikan kata laluan atau kod kepada sesiapa. Sokongan ada dalam akaun yang sudah log masuk, bukan pada akaun baharu dalam sembang peribadi."
            : "Do not give a password or a one-time code to anyone. Support lives in the signed-in account, not in a new account inside a private chat."}
      </p>
      <div className="mt-10">
        <Faq items={withdrawalFaqs} locale={locale} heading={dict.common.faq} />
      </div>
      <Link href={localePath(locale, "/guides/how-to-withdraw")} className="mt-8 inline-flex text-sm font-semibold text-gold">
        {dict.common.readGuide}
      </Link>
    </div>
  );
}
