import type { Metadata } from "next";
import { locales, ogLocale, type Locale } from "@/i18n/locale";
import { absoluteUrl, siteUrl } from "@/lib/site";

type MetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = "/assets/social/og.jpg",
  noIndex = false,
}: MetaInput): Metadata {
  const url = absoluteUrl(locale, path);
  const languages: Record<string, string> = {
    "x-default": absoluteUrl("en", path),
  };

  for (const item of locales) {
    const key = item === "zh" ? "zh-Hans" : item;
    languages[key] = absoluteUrl(item, path);
  }

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: "XE8",
      locale: ogLocale(locale),
      type: "website",
      images: [
        {
          url: image.startsWith("http") ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${siteUrl}${image}`],
    },
  };
}
