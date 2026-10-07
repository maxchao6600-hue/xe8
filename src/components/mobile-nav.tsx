"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/i18n/locale";

type Item = { href: string; label: string };

export function MobileNav({
  locale,
  items,
  login,
  register,
  openLabel,
  closeLabel,
  languageLabel,
}: {
  locale: Locale;
  items: Item[];
  login: Item;
  register: Item;
  openLabel: string;
  closeLabel: string;
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? closeLabel : openLabel}</span>
        <span aria-hidden="true" className="flex flex-col gap-1.5">
          <span className="block h-px w-4 bg-ink" />
          <span className="block h-px w-4 bg-ink" />
        </span>
      </button>
      {open ? (
        <div id="mobile-menu" className="fixed inset-x-0 top-14 z-40 border-b border-line bg-bg px-4 py-4 lg:hidden">
          <nav className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <LanguageSwitcher locale={locale} label={languageLabel} />
            <Link href={login.href} onClick={() => setOpen(false)} className="text-sm text-muted">
              {login.label}
            </Link>
          </div>
          <Link
            href={register.href}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-gold text-sm font-semibold text-night"
          >
            {register.label}
          </Link>
        </div>
      ) : null}
    </>
  );
}
