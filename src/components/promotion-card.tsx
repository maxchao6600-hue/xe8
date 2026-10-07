import Image from "next/image";
import Link from "next/link";
import type { Promotion } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function PromotionCard({
  promotion,
  locale,
  cta,
  featured = false,
}: {
  promotion: Promotion;
  locale: Locale;
  cta: string;
  featured?: boolean;
}) {
  return (
    <article className={`overflow-hidden rounded-3xl bg-elevated ${featured ? "lg:col-span-2" : ""}`}>
      <Link href={localePath(locale, `/promotions/${promotion.slug}`)} className="relative block aspect-video">
        <Image
          src={promotion.image}
          alt={t(promotion.imageAlt, locale)}
          fill
          sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover"
        />
      </Link>
      <div className="p-5">
        <h3 className="font-display text-2xl">
          <Link href={localePath(locale, `/promotions/${promotion.slug}`)}>{t(promotion.title, locale)}</Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{t(promotion.summary, locale)}</p>
        <Link
          href={localePath(locale, `/promotions/${promotion.slug}`)}
          className="mt-4 inline-flex text-sm font-semibold text-gold"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
