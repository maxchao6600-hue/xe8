import type { Provider } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { ProviderCard } from "@/components/provider-card";

export function ProviderGrid({
  providers,
  locale,
}: {
  providers: Provider[];
  locale: Locale;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {providers.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} locale={locale} />
      ))}
    </div>
  );
}
