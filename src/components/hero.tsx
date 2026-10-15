import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function Hero({
  locale,
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  imageAlt,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede: string;
  primary: string;
  secondary: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[34rem] overflow-hidden sm:min-h-[38rem] lg:min-h-[44rem]">
      <Image
        src="/assets/hero/xe8-hero-banner.webp"
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%] sm:object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/10 sm:bg-gradient-to-r sm:from-night sm:via-night/72 sm:to-transparent" />
      <div className="shell relative flex min-h-[34rem] items-end py-12 sm:min-h-[38rem] sm:py-16 lg:min-h-[44rem] lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display mt-4 text-[2rem] leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-ink/80 sm:text-lg">{lede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localePath(locale, "/register")}
              className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold tracking-wide text-night uppercase hover:bg-gold-deep"
            >
              {primary}
            </Link>
            <Link
              href={localePath(locale, "/games")}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold tracking-wide text-ink uppercase hover:border-gold"
            >
              {secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
