import type { Guide } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { GuideCard } from "@/components/guide-card";

export function GuideGrid({ guides, locale }: { guides: Guide[]; locale: Locale }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} locale={locale} />
      ))}
    </div>
  );
}
