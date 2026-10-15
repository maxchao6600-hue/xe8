import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function MobileDownloadSection({
  locale,
  eyebrow,
  title,
  text,
  points,
  cta,
  href = "/download",
  level = "h2",
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  cta: string;
  href?: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;
  return (
    <section className="shell grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <Heading className="font-display mt-3 text-3xl sm:text-4xl">{title}</Heading>
        <p className="mt-4 max-w-xl text-muted leading-7">{text}</p>
        <ul className="mt-6 space-y-3 text-sm leading-6 text-ink">
          {points.map((point) => (
            <li key={point} className="border-l border-gold pl-4">
              {point}
            </li>
          ))}
        </ul>
        <Link
          href={localePath(locale, href)}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-night"
        >
          {cta}
        </Link>
      </div>
      <div className="relative mx-auto aspect-[680/913] w-full max-w-sm">
        <Image
          src="/assets/download/app-phone.webp"
          alt="XE8 open on a phone, showing the lobby"
          width={680}
          height={913}
          sizes="(max-width: 1024px) 80vw, 360px"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
