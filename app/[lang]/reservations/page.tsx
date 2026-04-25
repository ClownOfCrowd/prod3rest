import { notFound } from "next/navigation";

import ReservationForm from "@/components/ReservationForm";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";

export default async function ReservationsPage({
  params,
}: PageProps<"/[lang]/reservations">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <section className="section-pad">
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <Reveal>
          <div>
            <h1 className="font-display text-4xl md:text-5xl">
              {dict.reservations.title}
            </h1>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              {dict.reservations.subtitle}
            </p>
            <p className="mt-8 rounded-2xl border border-[var(--border)] p-4 text-sm text-[var(--muted)]">
              {dict.reservations.helper}
            </p>

            <div className="mt-8 space-y-2 text-sm text-[var(--muted)]">
              <p>{dict.common.address}</p>
              <p>{dict.common.openingHours}</p>
              <p>{dict.common.phone}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ReservationForm labels={dict.reservations.form} />
        </Reveal>
      </div>
    </section>
  );
}
