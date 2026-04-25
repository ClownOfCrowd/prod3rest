"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const links = [
  { key: "home", href: "" },
  { key: "menu", href: "/menu" },
  { key: "about", href: "/about" },
  { key: "chef", href: "/chef" },
  { key: "gallery", href: "/gallery" },
  { key: "reservations", href: "/reservations" },
  { key: "contact", href: "/contact" },
] as const;

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(15,21,26,0.78)] backdrop-blur-lg">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="font-display text-2xl tracking-[0.12em] text-[var(--foreground)]"
        >
          {dict.brand}
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {links.map((link) => {
            const href = `/${locale}${link.href}`;
            const active = pathname === href;

            return (
              <Link
                key={link.key}
                href={href}
                className={`nav-link ${
                  active ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {dict.nav[link.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher
            currentLocale={locale}
            labels={dict.locales}
            ariaLabel={dict.localeLabel}
          />
          <Link href={`/${locale}/reservations`} className="btn-primary whitespace-nowrap px-5">
            {dict.common.reserveNow}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] xl:hidden"
          aria-expanded={open}
          aria-label={dict.nav.toggleNavigation}
          onClick={() => setOpen((value) => !value)}
        >
          {dict.nav.menuButton}
        </button>
      </div>

      {open && (
        <div className="container-shell max-h-[calc(100vh-5rem)] overflow-y-auto pb-5 xl:hidden">
          <nav className="grid gap-3" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                className="rounded-xl border border-[var(--border)] px-4 py-3 text-[var(--foreground)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav[link.key]}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <LanguageSwitcher
              currentLocale={locale}
              labels={dict.locales}
              ariaLabel={dict.localeLabel}
            />
            <Link
              href={`/${locale}/reservations`}
              className="btn-primary w-full justify-center whitespace-nowrap text-xs sm:w-auto"
            >
              {dict.common.reserveNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
