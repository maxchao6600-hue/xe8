import type { Locale } from "@/i18n/locale";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xe8.net"
).replace(/\/$/, "");

/** Official account entry points. Leave unset until the live addresses are confirmed. */
export const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL ?? "";
export const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL ?? "";

export function localePath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function absoluteUrl(locale: Locale, path = "/"): string {
  return `${siteUrl}${localePath(locale, path)}`;
}
