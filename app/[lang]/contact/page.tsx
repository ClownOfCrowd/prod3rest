import { notFound } from "next/navigation";

import SectionCta from "@/components/SectionCta";
import { getDictionary } from "@/lib/dictionaries";
import { getHomeExperienceContent } from "@/lib/home-experience-content";
import { hasLocale } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const homeExperience = getHomeExperienceContent(lang);

  return (
    <>
      <section className="section-pad border-b border-[var(--border)]">
        <div className="container-shell">
          <h1 className="font-display text-4xl md:text-5xl">{dict.contact.title}</h1>
          <p className="mt-4 max-w-xl text-[var(--muted)]">{dict.contact.subtitle}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          <article className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {dict.contact.reachTitle}
            </p>
            <p className="mt-4 text-[var(--muted)]">{dict.common.address}</p>
            <p className="mt-2 text-[var(--muted)]">{dict.common.phone}</p>
            <p className="mt-2 text-[var(--muted)]">{dict.common.email}</p>
          </article>

          <article className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {dict.contact.hoursTitle}
            </p>
            <p className="mt-4 text-[var(--muted)]">{dict.common.openingHours}</p>
            <p className="mt-6 text-sm text-[var(--muted)]">{dict.contact.privateNote}</p>
          </article>
        </div>
      </section>

      <section className="section-pad border-y border-[var(--border)] bg-[#101821]/45">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          <article className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {homeExperience.location.title}
            </p>
            <p className="mt-4 text-[var(--muted)]">{homeExperience.location.text}</p>
            <p className="mt-3 text-sm text-[var(--muted)]">{homeExperience.location.transport}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{homeExperience.location.parking}</p>
          </article>

          <article className="glass-card rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {homeExperience.micro.popularTimes.title}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {homeExperience.micro.popularTimes.times.map((slot) => (
                <li key={slot}>{slot}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <SectionCta
        locale={lang}
        title={dict.common.ctaTitle}
        text={dict.common.ctaText}
        buttonLabel={dict.common.reserveNow}
      />
    </>
  );
}
