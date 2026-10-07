import type { Locale } from "@/i18n/locale";

export type L10n = Record<Locale, string>;

export function t(copy: L10n, locale: Locale): string {
  return copy[locale];
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function formatDate(iso: string, locale: Locale): string {
  const tag = locale === "zh" ? "zh-Hans" : locale === "ms" ? "ms-MY" : "en-MY";
  return new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kuala_Lumpur",
  }).format(new Date(`${iso}T00:00:00+08:00`));
}
