"use client";

import { useEffect, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  hasLocale,
  type Locale,
  replaceLocaleInPathname,
} from "@/lib/i18n";

type Labels = Record<Locale, string>;

const STORAGE_KEY = "preferred-locale";

export default function LanguageSwitcher({
  currentLocale,
  labels,
  ariaLabel,
}: {
  currentLocale: Locale;
  labels: Labels;
  ariaLabel: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    document.documentElement.lang = currentLocale;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored || !hasLocale(stored) || stored === currentLocale) {
      return;
    }

    const nextPath = replaceLocaleInPathname(pathname, stored);
    router.replace(nextPath, { scroll: false });
  }, [currentLocale, pathname, router]);

  const onSwitch = (nextLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, nextLocale);

    startTransition(() => {
      router.replace(replaceLocaleInPathname(pathname, nextLocale), {
        scroll: false,
      });
    });
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="relative grid grid-cols-3 items-center rounded-full border border-[var(--border)] bg-black/25 p-1"
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-1 top-1 z-0 rounded-full bg-[var(--accent)]/22 transition-transform duration-300 ${
          currentLocale === "en"
            ? "translate-x-0"
            : currentLocale === "es"
              ? "translate-x-[100%]"
              : "translate-x-[200%]"
        }`}
        style={{ width: "calc((100% - 0.5rem) / 3)" }}
      />
      {(["en", "es", "ru"] as Locale[]).map((locale) => (
        <button
          key={locale}
          type="button"
          disabled={isPending}
          onClick={() => onSwitch(locale)}
          className={`relative z-10 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.16em] transition ${
            locale === currentLocale
              ? "text-[var(--foreground)]"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
          aria-pressed={locale === currentLocale}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  );
}
