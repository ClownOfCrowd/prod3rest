import Link from "next/link";

import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-black/30 py-10">
      <div className="container-shell grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{dict.brand}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{dict.footer.tagline}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            {dict.contact.reachTitle}
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">{dict.common.address}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{dict.common.phone}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{dict.common.email}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            {dict.contact.hoursTitle}
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">{dict.common.openingHours}</p>
          <Link href={`/${locale}/reservations`} className="gold-link mt-4 inline-block">
            {dict.common.reserveNow}
          </Link>
        </div>
      </div>

      <div className="container-shell mt-8 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)]">
        {new Date().getFullYear()} {dict.brand}. {dict.footer.copyright}
      </div>
    </footer>
  );
}
