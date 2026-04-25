import Link from "next/link";

import type { Locale } from "@/lib/i18n";

export default function SectionCta({
  locale,
  title,
  text,
  buttonLabel,
}: {
  locale: Locale;
  title: string;
  text: string;
  buttonLabel: string;
}) {
  return (
    <section className="section-pad section-bg-d border-t border-[var(--border)]">
      <div className="container-shell">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
            <p className="mt-4 text-[var(--muted)] md:text-lg">{text}</p>
            <Link href={`/${locale}/reservations`} className="btn-primary mt-8">
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
