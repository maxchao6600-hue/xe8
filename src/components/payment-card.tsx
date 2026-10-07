import type { PaymentMethod } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { t } from "@/lib/utils";

export function PaymentCard({
  method,
  locale,
  depositLabel,
  withdrawalLabel,
}: {
  method: PaymentMethod;
  locale: Locale;
  depositLabel: string;
  withdrawalLabel: string;
}) {
  return (
    <article className="rounded-3xl border border-line bg-elevated p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{method.name}</h3>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-soft text-xs font-semibold text-gold">
          {method.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{t(method.summary, locale)}</p>
      <p className="mt-4 text-xs tracking-wide text-ink/80 uppercase">
        {[method.deposit ? depositLabel : null, method.withdrawal ? withdrawalLabel : null]
          .filter(Boolean)
          .join(" · ")}
      </p>
    </article>
  );
}
