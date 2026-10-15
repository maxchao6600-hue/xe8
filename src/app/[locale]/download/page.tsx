import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { MobileDownloadSection } from "@/components/mobile-download-section";
import { StepList } from "@/components/step-list";
import { downloadFaqs } from "@/content/faqs";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locale";
import { faqJson } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const copy = {
  en: {
    title: "XE8 download and mobile access",
    description: "Open XE8 in the mobile browser. Android can also install the official APK from xe8.net/download-apk/.",
    lede: "iOS uses Safari or Chrome. Android can use the browser or the official APK. This page does not show an App Store or Play Store badge.",
    eyebrow: "Download",
    points: ["iOS in Safari or Chrome", "Official Android APK on xe8.net/download-apk/", "No files from private chats"],
    cta: "How to sign in",
    steps: [
      { title: "Open the official address", text: "Type or bookmark the address you already trust. Do not follow a shortened link from a stranger." },
      { title: "Sign in", text: "Use the same account as on desktop. Recovery stays on the official login screen." },
      { title: "Add a shortcut if you want one", text: "The browser menu can place XE8 on the home screen. That icon opens the site." },
      { title: "Install only the official package", text: "The Android APK is published at xe8.net/download-apk/. Ignore APK files sent in chat." },
    ],
    security: "Check the address before you enter a password. Sign out on a shared phone. Staff will not ask you to install a file in order to unlock a withdrawal.",
  },
  ms: {
    title: "Muat turun dan akses mudah alih XE8",
    description: "Buka XE8 dalam pelayar mudah alih. Android juga boleh memasang APK rasmi dari xe8.net/download-apk/.",
    lede: "iOS menggunakan Safari atau Chrome. Android boleh guna pelayar atau APK rasmi. Halaman ini tidak memaparkan lencana App Store atau Play Store.",
    eyebrow: "Muat turun",
    points: ["iOS dalam Safari atau Chrome", "APK Android rasmi di xe8.net/download-apk/", "Tiada fail dari sembang peribadi"],
    cta: "Cara log masuk",
    steps: [
      { title: "Buka alamat rasmi", text: "Taip atau tandakan alamat yang sudah anda percayai. Jangan ikut pautan pendek daripada orang yang tidak dikenali." },
      { title: "Log masuk", text: "Gunakan akaun yang sama seperti di desktop. Pemulihan kekal pada skrin log masuk rasmi." },
      { title: "Tambah pintasan jika mahu", text: "Menu pelayar boleh meletakkan XE8 pada skrin utama. Ikon itu membuka laman." },
      { title: "Pasang hanya pakej rasmi", text: "APK Android diterbitkan di xe8.net/download-apk/. Abaikan fail APK dalam sembang." },
    ],
    security: "Semak alamat sebelum memasukkan kata laluan. Log keluar pada telefon kongsi. Kakitangan tidak akan meminta anda memasang fail untuk membuka pengeluaran.",
  },
  zh: {
    title: "XE8 下载与手机访问",
    description: "用手机浏览器打开 XE8。Android 也可以从 xe8.net/download-apk/ 安装官方 APK。",
    lede: "iOS 使用 Safari 或 Chrome。Android 可以用浏览器或官方 APK。本页不展示 App Store 或 Play Store 徽章。",
    eyebrow: "下载",
    points: ["iOS 使用 Safari 或 Chrome", "官方 Android APK：xe8.net/download-apk/", "不要用私聊里的文件"],
    cta: "如何登录",
    steps: [
      { title: "打开官方地址", text: "输入或收藏你已经信任的地址。不要跟随陌生人发来的短链接。" },
      { title: "登录", text: "使用与电脑相同的账户。找回密码仍在官方登录页。" },
      { title: "如果需要，添加快捷方式", text: "浏览器菜单可以把 XE8 放到主屏幕。那个图标打开的是网站。" },
      { title: "只安装官方安装包", text: "Android APK 发布在 xe8.net/download-apk/。忽略聊天里的 APK。" },
    ],
    security: "输入密码前核对地址。共用手机请退出。工作人员不会要求你安装文件才能解锁提款。",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "/download", title: copy[locale].title, description: copy[locale].description, image: "/assets/download/app-phone.webp" });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const page = copy[locale];
  return (
    <>
      <JsonLd data={faqJson(downloadFaqs.map((item) => ({ question: t(item.question, locale), answer: t(item.answer, locale) })))} />
      <MobileDownloadSection locale={locale} eyebrow={page.eyebrow} title={page.title} text={page.lede} points={page.points} cta={page.cta} href="/login" level="h1" />
      <section className="shell pb-16">
        <h2 className="font-display text-3xl">{locale === "zh" ? "安装与登录" : locale === "ms" ? "Pemasangan dan log masuk" : "Install and sign in"}</h2>
        <div className="mt-6">
          <StepList steps={page.steps} />
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted">{page.security}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={localePath(locale, "/login")} className="inline-flex h-11 items-center rounded-full bg-gold px-5 text-sm font-semibold text-night">
            {dict.nav.login}
          </Link>
          <Link href={localePath(locale, "/guides/mobile-access")} className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm">
            {dict.nav.guides}
          </Link>
        </div>
        <div className="mt-12">
          <Faq items={downloadFaqs} locale={locale} heading={dict.common.faq} />
        </div>
      </section>
    </>
  );
}
