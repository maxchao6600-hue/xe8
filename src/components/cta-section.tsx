import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function CtaSection({
  locale,
  title,
  text,
  primary,
  secondary,
}: {
  locale: Locale;
  title: string;
  text: string;
  primary: string;
  secondary: string;
}) {
  return (
    <section className="shell py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-elevated px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gold/80" />
        <h2 className="font-display max-w-xl text-4xl text-ink sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-lg text-lg text-muted">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={localePath(locale, "/register")}
            className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-night hover:bg-gold-deep"
          >
            {primary}
          </Link>
          <Link
            href={localePath(locale, "/games")}
            className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold text-ink hover:border-gold"
          >
            {secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
