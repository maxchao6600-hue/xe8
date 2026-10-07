import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { vipFaqs } from "@/content/faqs";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { breadcrumbJson, faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const copy = {
  en: {
    title: "XE8 VIP",
    description: "What the XE8 VIP area is for, without invented cashback rates or tier points.",
    lede: "VIP is an account status. If you are invited, the offers and the host details appear after you sign in. This page does not publish a points table.",
    benefits: [
      { title: "A closer support channel", text: "When a tier includes it, support is handled with more context than the general queue." },
      { title: "Offers that are not on the public board", text: "Invitation offers stay on your account. They still have an expiry and a game list." },
      { title: "A host, when one is assigned", text: "Not every account has a named host. If one is assigned, the VIP area shows how to reach them." },
    ],
  },
  ms: {
    title: "VIP XE8",
    description: "Untuk apa bahagian VIP XE8, tanpa kadar pulangan tunai atau mata tier yang direka.",
    lede: "VIP ialah status akaun. Jika anda dijemput, tawaran dan butiran hos muncul selepas log masuk. Halaman ini tidak menerbitkan jadual mata.",
    benefits: [
      { title: "Saluran sokongan yang lebih rapat", text: "Apabila tier menyertakannya, sokongan dikendalikan dengan lebih konteks daripada barisan umum." },
      { title: "Tawaran yang tiada di papan awam", text: "Tawaran jemputan kekal pada akaun anda. Ia tetap mempunyai tarikh luput dan senarai permainan." },
      { title: "Hos, apabila seseorang ditugaskan", text: "Bukan setiap akaun mempunyai hos bernama. Jika ditugaskan, bahagian VIP menunjukkan cara menghubungi mereka." },
    ],
  },
  zh: {
    title: "XE8 VIP",
    description: "XE8 VIP 区域是做什么的，这里不编造返水比例或等级积分。",
    lede: "VIP 是账户状态。如果你受到邀请，优惠和接待信息会在登录后出现。本页不公布积分表。",
    benefits: [
      { title: "更直接的客服渠道", text: "如果等级包含这项，客服会比一般队列掌握更多账户背景。" },
      { title: "不在公开板上的优惠", text: "邀请优惠留在你的账户里。它们仍有有效期和游戏列表。" },
      { title: "被指派后的接待", text: "不是每个账户都有具名接待。如果已指派，VIP 区域会显示如何联系。" },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "/vip", title: copy[locale].title, description: copy[locale].description, image: "/images/vip.jpg" });
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
            { name: page.title, url: absoluteUrl(locale, "/vip") },
          ]),
          faqJson(vipFaqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) }))),
        ]}
      />
      <Breadcrumbs label={dict.common.home} items={[{ label: dict.common.home, href: localePath(locale) }, { label: "VIP" }]} />
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl">{page.title}</h1>
          <p className="mt-4 text-lg leading-8 text-muted">{page.lede}</p>
          <Link href={localePath(locale, "/login")} className="mt-6 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-night">
            {dict.nav.login}
          </Link>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-3xl">
          <Image src="/images/vip.jpg" alt={page.title} fill priority sizes="(max-width: 1024px) 100vw, 540px" className="object-cover" />
        </div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {page.benefits.map((benefit) => (
          <article key={benefit.title} className="rounded-3xl border border-line bg-elevated p-5">
            <h2 className="text-xl font-semibold">{benefit.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{benefit.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <Faq items={vipFaqs} locale={locale} heading={dict.common.faq} />
      </div>
    </div>
  );
}
