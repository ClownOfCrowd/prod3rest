import Link from "next/link";

import type { Locale } from "@/lib/i18n";

export default function StickyReservationButton({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <div className="sticky-reserve-mobile fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[#0b0b0ccc] p-3 backdrop-blur md:hidden">
      <Link
        href={`/${locale}/reservations`}
        className="btn-primary w-full justify-center"
      >
        {label}
      </Link>
    </div>
  );
}
