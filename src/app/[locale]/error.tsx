"use client";

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/locale";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const pathname = usePathname();
  const segment = pathname.split("/")[1] ?? "en";
  const locale: Locale = isLocale(segment) ? segment : "en";
  const dict = getDictionary(locale);

  return (
    <div className="shell py-24">
      <h1 className="font-display text-4xl">{dict.error.title}</h1>
      <p className="mt-4 max-w-lg text-muted">{dict.error.text}</p>
      <button type="button" onClick={reset} className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-night">
        {dict.error.retry}
      </button>
    </div>
  );
}
