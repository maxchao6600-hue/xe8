export const locales = ["en", "ms", "zh"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function htmlLang(locale: Locale): string {
  if (locale === "zh") return "zh-Hans";
  if (locale === "ms") return "ms";
  return "en";
}

export function ogLocale(locale: Locale): string {
  if (locale === "zh") return "zh_CN";
  if (locale === "ms") return "ms_MY";
  return "en_MY";
}
