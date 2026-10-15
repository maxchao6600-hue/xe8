import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = [
    { href: localePath(locale, "/games"), label: dict.nav.games },
    { href: localePath(locale, "/promotions"), label: dict.nav.promotions },
    { href: localePath(locale, "/vip"), label: dict.nav.vip },
    { href: localePath(locale, "/download"), label: dict.nav.download },
    { href: localePath(locale, "/guides"), label: dict.nav.guides },
    { href: localePath(locale, "/payment-methods"), label: dict.nav.payment },
    { href: localePath(locale, "/contact"), label: dict.nav.support },
  ];
  const login = { href: localePath(locale, "/login"), label: dict.nav.login };
  const register = { href: localePath(locale, "/register"), label: dict.nav.register };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="shell flex h-14 items-center gap-2 md:h-16">
        <Link href={localePath(locale)} className="mr-2 shrink-0">
          <BrandLogo />
        </Link>
        <MobileNav
          locale={locale}
          items={items}
          login={login}
          register={register}
          openLabel={dict.nav.openMenu}
          closeLabel={dict.nav.closeMenu}
          languageLabel={dict.nav.language}
        />
        <nav className="ml-4 hidden items-center gap-5 lg:flex" aria-label="Primary">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher locale={locale} label={dict.nav.language} />
          </div>
          <Link href={login.href} className="px-2 text-sm text-muted hover:text-ink">
            {login.label}
          </Link>
          <Link
            href={register.href}
            className="inline-flex h-9 items-center rounded-full bg-gold px-3 text-[13px] font-semibold text-night hover:bg-gold-deep sm:h-10 sm:px-4 sm:text-sm"
          >
            {register.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
