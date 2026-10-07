import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const columns = [
    {
      title: "XE8",
      links: [
        { href: localePath(locale, "/about"), label: dict.footer.about },
        { href: localePath(locale, "/contact"), label: dict.footer.contact },
        { href: localePath(locale, "/responsible-gaming"), label: dict.footer.responsible },
      ],
    },
    {
      title: dict.footer.games,
      links: [
        { href: localePath(locale, "/games/slots"), label: "Slots" },
        { href: localePath(locale, "/games/live-casino"), label: locale === "zh" ? "真人娱乐场" : locale === "ms" ? "Kasino Langsung" : "Live Casino" },
        { href: localePath(locale, "/games/sports"), label: locale === "zh" ? "体育" : locale === "ms" ? "Sukan" : "Sports" },
        { href: localePath(locale, "/games/fishing"), label: locale === "zh" ? "捕鱼" : locale === "ms" ? "Memancing" : "Fishing" },
        { href: localePath(locale, "/games/4d"), label: "4D" },
      ],
    },
    {
      title: dict.footer.support,
      links: [
        { href: localePath(locale, "/payment-methods"), label: dict.nav.payment },
        { href: localePath(locale, "/deposit"), label: locale === "zh" ? "存款" : locale === "ms" ? "Deposit" : "Deposit" },
        { href: localePath(locale, "/withdrawal"), label: locale === "zh" ? "提款" : locale === "ms" ? "Pengeluaran" : "Withdrawal" },
        { href: localePath(locale, "/faq"), label: dict.footer.faq },
      ],
    },
    {
      title: dict.footer.guides,
      links: [
        { href: localePath(locale, "/guides/getting-started"), label: dict.footer.gettingStarted },
        { href: localePath(locale, "/guides/mobile-access"), label: dict.footer.mobile },
        { href: localePath(locale, "/guides/account-security"), label: dict.footer.security },
        { href: localePath(locale, "/guides/slots-on-xe8"), label: dict.footer.gameGuides },
      ],
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="text-lg font-semibold tracking-[0.18em]">XE8</p>
          <p className="mt-4 text-sm leading-6 text-muted">{dict.footer.blurb}</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-ink">{column.title}</p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {dict.footer.rights}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={localePath(locale, "/terms")}>{dict.footer.terms}</Link>
            <Link href={localePath(locale, "/privacy")}>{dict.footer.privacy}</Link>
            <Link href={localePath(locale, "/responsible-gaming")}>{dict.footer.responsible}</Link>
          </div>
        </div>
        <p className="shell pb-8 text-xs leading-5 text-muted">{dict.footer.age}</p>
      </div>
    </footer>
  );
}
