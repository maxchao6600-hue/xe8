"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/locale";

const labels: Record<Locale, string> = { en: "EN", ms: "MS", zh: "中文" };

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|ms|zh)(?=\/|$)/, "") || "/";

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((item) => {
        const href = rest === "/" ? `/${item}` : `/${item}${rest}`;
        const active = item === locale;
        return (
          <Link
            key={item}
            href={href}
            hrefLang={item === "zh" ? "zh-Hans" : item}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2 py-1 text-xs font-semibold ${active ? "text-gold" : "text-muted hover:text-ink"}`}
          >
            {labels[item]}
          </Link>
        );
      })}
    </div>
  );
}
