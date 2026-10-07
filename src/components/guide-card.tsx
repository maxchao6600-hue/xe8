import Image from "next/image";
import Link from "next/link";
import { guideCategoryLabels } from "@/content/guides";
import type { Guide } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function GuideCard({ guide, locale }: { guide: Guide; locale: Locale }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-elevated">
      <Link href={localePath(locale, `/guides/${guide.slug}`)} className="relative block aspect-video">
        <Image
          src={guide.cover}
          alt={t(guide.coverAlt, locale)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </Link>
      <div className="p-5">
        <p className="text-xs tracking-wide text-gold uppercase">
          {guideCategoryLabels[guide.category][locale]}
        </p>
        <h3 className="mt-2 text-xl font-semibold">
          <Link href={localePath(locale, `/guides/${guide.slug}`)} className="hover:text-gold">
            {t(guide.title, locale)}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{t(guide.excerpt, locale)}</p>
      </div>
    </article>
  );
}
