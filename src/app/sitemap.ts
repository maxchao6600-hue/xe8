import type { MetadataRoute } from "next";
import { categories } from "@/content/categories";
import { games } from "@/content/games";
import { guides } from "@/content/guides";
import { promotions } from "@/content/promotions";
import { providers } from "@/content/providers";
import { locales, type Locale } from "@/i18n/locale";
import { absoluteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/games",
  "/providers",
  "/promotions",
  "/vip",
  "/download",
  "/payment-methods",
  "/deposit",
  "/withdrawal",
  "/guides",
  "/about",
  "/contact",
  "/faq",
  "/terms",
  "/privacy",
  "/responsible-gaming",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...categories.map((category) => `/games/${category.slug}`),
    ...games.map((game) => `/games/${game.slug}`),
    ...providers.map((provider) => `/providers/${provider.slug}`),
    ...promotions.map((promotion) => `/promotions/${promotion.slug}`),
    ...guides.map((guide) => `/guides/${guide.slug}`),
  ];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(locale as Locale, path),
      lastModified: new Date("2026-10-04"),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          en: absoluteUrl("en", path),
          ms: absoluteUrl("ms", path),
          "zh-Hans": absoluteUrl("zh", path),
        },
      },
    })),
  );
}
