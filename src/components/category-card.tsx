import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function CategoryCard({
  category,
  locale,
  cta,
  large = false,
}: {
  category: Category;
  locale: Locale;
  cta: string;
  large?: boolean;
}) {
  return (
    <Link
      href={localePath(locale, `/games/${category.slug}`)}
      className={`group relative flex min-h-64 overflow-hidden rounded-3xl bg-elevated ${large ? "md:min-h-80 lg:col-span-2" : ""}`}
    >
      <Image
        src={category.image}
        alt={t(category.imageAlt, locale)}
        fill
        sizes={large ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/10" />
      <div className="relative mt-auto p-5 sm:p-6">
        <h3 className="font-display text-3xl text-ink">{t(category.name, locale)}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-ink/80">{t(category.description, locale)}</p>
        <span className="mt-4 inline-flex text-sm font-semibold text-gold">{cta}</span>
      </div>
    </Link>
  );
}
