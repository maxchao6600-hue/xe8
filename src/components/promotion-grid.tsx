import type { Promotion } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { PromotionCard } from "@/components/promotion-card";

export function PromotionGrid({
  promotions,
  locale,
  cta,
}: {
  promotions: Promotion[];
  locale: Locale;
  cta: string;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {promotions.map((promotion, index) => (
        <PromotionCard
          key={promotion.id}
          promotion={promotion}
          locale={locale}
          cta={cta}
          featured={index === 0}
        />
      ))}
    </div>
  );
}
