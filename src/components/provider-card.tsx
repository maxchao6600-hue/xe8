import Image from "next/image";
import Link from "next/link";
import type { Provider } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function ProviderCard({
  provider,
  locale,
}: {
  provider: Provider;
  locale: Locale;
}) {
  return (
    <Link
      href={localePath(locale, `/providers/${provider.slug}`)}
      className="flex gap-4 rounded-3xl border border-line bg-elevated p-4 hover:border-gold/50"
    >
      {provider.logo ? (
        <span className="flex h-16 w-28 shrink-0 items-center justify-center rounded-2xl bg-[#f6f3ee] px-2">
          <Image src={provider.logo} alt="" width={140} height={40} className="h-8 w-auto object-contain" />
        </span>
      ) : (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-soft text-sm font-semibold tracking-wide text-gold">
          {provider.mark}
        </span>
      )}
      <span>
        <span className="block text-lg font-semibold text-ink">{provider.name}</span>
        <span className="mt-1 block text-sm leading-6 text-muted">{t(provider.description, locale)}</span>
      </span>
    </Link>
  );
}
