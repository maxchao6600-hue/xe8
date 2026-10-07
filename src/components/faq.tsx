import type { FaqItem } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { t } from "@/lib/utils";

export function Faq({
  items,
  locale,
  heading,
}: {
  items: FaqItem[];
  locale: Locale;
  heading?: string;
}) {
  return (
    <div>
      {heading ? <h2 className="font-display mb-4 text-3xl">{heading}</h2> : null}
      <div className="divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.id} className="group py-4">
            <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {t(item.question, locale)}
                <span aria-hidden="true" className="text-gold transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{t(item.answer, locale)}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
