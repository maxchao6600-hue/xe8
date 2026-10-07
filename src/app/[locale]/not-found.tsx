"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1] ?? "en";
  const locale: Locale = isLocale(segment) ? segment : "en";
  const dict = getDictionary(locale);

  return (
    <div className="shell py-24">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-3 text-4xl sm:text-5xl">{dict.notFound.title}</h1>
      <p className="mt-4 max-w-lg text-muted">{dict.notFound.text}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href={localePath(locale)} className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-night">
          {dict.notFound.home}
        </Link>
        <Link href={localePath(locale, "/games")} className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm">
          {dict.notFound.games}
        </Link>
        <Link href={localePath(locale, "/guides")} className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm">
          {dict.notFound.guides}
        </Link>
      </div>
    </div>
  );
}
