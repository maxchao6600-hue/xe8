import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { StepList } from "@/components/step-list";
import { registerFaqs } from "@/content/faqs";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { localePath, registerUrl } from "@/lib/site";
import { t } from "@/lib/utils";

const steps = {
  en: [
    { title: "Use the official entry", text: "Start from the register control on the official XE8 site or app, not from a link in a chat." },
    { title: "Use your own details", text: "Username, password, mobile number and the name on the account you will pay from." },
    { title: "Keep one account", text: "If you already registered, recover the password instead of opening a second account." },
    { title: "Then open the cashier", text: "Read any welcome offer before you opt in. You can add balance without a promotion." },
  ],
  ms: [
    { title: "Gunakan pintu rasmi", text: "Mulakan dari butang daftar pada laman atau aplikasi rasmi XE8, bukan dari pautan dalam sembang." },
    { title: "Gunakan butiran anda", text: "Nama pengguna, kata laluan, nombor mudah alih dan nama pada akaun yang akan anda gunakan untuk bayar." },
    { title: "Simpan satu akaun", text: "Jika anda sudah mendaftar, pulihkan kata laluan daripada membuka akaun kedua." },
    { title: "Kemudian buka kaunter", text: "Baca tawaran alu-aluan sebelum menyertai. Anda boleh menambah baki tanpa promosi." },
  ],
  zh: [
    { title: "使用官方入口", text: "从官方 XE8 网站或应用里的注册按钮开始，不要用聊天链接。" },
    { title: "使用你自己的资料", text: "用户名、密码、手机号，以及你将用来付款的账户姓名。" },
    { title: "只保留一个账户", text: "如果已经注册，请找回密码，不要再开第二个账户。" },
    { title: "然后打开收银台", text: "领取迎新优惠前先阅读。你可以不加优惠只增加余额。" },
  ],
};

const copy = {
  en: {
    title: "Register for XE8",
    description: "How to open one XE8 account, what the form usually asks for, and where the live registration entry opens.",
    note: "The official registration address has not been added to this site's configuration. Use the register control on the official XE8 entry, and follow the checklist below.",
    cta: "Open registration",
  },
  ms: {
    title: "Daftar XE8",
    description: "Cara membuka satu akaun XE8, apa yang biasanya diminta borang, dan di mana pintu pendaftaran sebenar dibuka.",
    note: "Alamat pendaftaran rasmi belum ditambah pada konfigurasi laman ini. Gunakan butang daftar pada pintu rasmi XE8, dan ikut senarai semak di bawah.",
    cta: "Buka pendaftaran",
  },
  zh: {
    title: "注册 XE8",
    description: "如何开设一个 XE8 账户、表格通常会问什么，以及正式注册入口在哪里打开。",
    note: "官方注册地址尚未写入本站配置。请使用官方 XE8 入口上的注册按钮，并按照下面的清单操作。",
    cta: "打开注册",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/register",
    title: copy[locale].title,
    description: copy[locale].description,
    image: "/images/promo-welcome.jpg",
    noIndex: true,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = copy[locale];
  return (
    <div className="shell py-10">
      <JsonLd data={faqJson(registerFaqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) })))} />
      <h1 className="font-display max-w-3xl text-4xl sm:text-5xl">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{page.description}</p>
      {registerUrl ? (
        <a href={registerUrl} rel="noopener noreferrer" className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-night">
          {page.cta}
        </a>
      ) : (
        <p className="mt-6 max-w-2xl rounded-3xl border border-line p-5 text-sm leading-6 text-muted">{page.note}</p>
      )}
      <div className="mt-10">
        <StepList steps={steps[locale]} />
      </div>
      <div className="mt-12">
        <Faq items={registerFaqs} locale={locale} heading={dict.common.faq} />
      </div>
      <Link href={localePath(locale, "/guides/how-to-register")} className="mt-8 inline-flex text-sm font-semibold text-gold">
        {dict.common.readGuide}
      </Link>
    </div>
  );
}
