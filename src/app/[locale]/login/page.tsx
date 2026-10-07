import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { buildMetadata } from "@/lib/seo";
import { localePath, loginUrl } from "@/lib/site";

const copy = {
  en: {
    title: "XE8 login",
    description: "Sign in to XE8 from the official entry, recover a password there, or register if you do not have an account.",
    lede: "Use the official login screen. This page does not collect your password.",
    help: "If you cannot sign in, use the recovery control on that screen. Do not register a second account.",
    cta: "Open login",
    note: "The official login address has not been added to this site's configuration. Open login from the official XE8 entry you already use.",
  },
  ms: {
    title: "Log masuk XE8",
    description: "Log masuk ke XE8 dari pintu rasmi, pulihkan kata laluan di sana, atau daftar jika anda belum ada akaun.",
    lede: "Gunakan skrin log masuk rasmi. Halaman ini tidak mengumpul kata laluan anda.",
    help: "Jika anda tidak boleh log masuk, gunakan kawalan pemulihan pada skrin itu. Jangan daftar akaun kedua.",
    cta: "Buka log masuk",
    note: "Alamat log masuk rasmi belum ditambah pada konfigurasi laman ini. Buka log masuk dari pintu rasmi XE8 yang sudah anda guna.",
  },
  zh: {
    title: "XE8 登录",
    description: "从官方入口登录 XE8，在那里找回密码；如果还没有账户，请注册。",
    lede: "请使用官方登录页。本页不收集你的密码。",
    help: "如果无法登录，请使用该页面上的找回功能。不要注册第二个账户。",
    cta: "打开登录",
    note: "官方登录地址尚未写入本站配置。请从你已经在用的官方 XE8 入口登录。",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/login",
    title: copy[locale].title,
    description: copy[locale].description,
    noIndex: true,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = copy[locale];
  return (
    <div className="shell max-w-xl py-16">
      <h1 className="font-display text-4xl">{page.title}</h1>
      <p className="mt-4 text-lg leading-8 text-muted">{page.lede}</p>
      {loginUrl ? (
        <a href={loginUrl} rel="noopener noreferrer" className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-night">
          {page.cta}
        </a>
      ) : (
        <p className="mt-6 text-sm leading-6 text-muted">{page.note}</p>
      )}
      <p className="mt-6 text-sm leading-6 text-muted">{page.help}</p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href={localePath(locale, "/register")} className="font-semibold text-gold">
          {dict.nav.register}
        </Link>
        <Link href={localePath(locale, "/guides/account-security")} className="text-muted hover:text-ink">
          {dict.footer.security}
        </Link>
      </div>
    </div>
  );
}
