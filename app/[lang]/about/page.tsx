import { notFound } from "next/navigation";

import Reveal from "@/components/Reveal";
import SectionCta from "@/components/SectionCta";
import { getDictionary } from "@/lib/dictionaries";
import { getHomeExperienceContent } from "@/lib/home-experience-content";
import { hasLocale } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: PageProps<"/[lang]/about">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const homeExperience = getHomeExperienceContent(lang);

  return (
    <>
      <section className="section-pad section-bg-a border-b border-[var(--border)]">
        <div className="container-shell max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl">{dict.about.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            {dict.about.lead}
          </p>
          <p className="mt-6 text-[var(--muted)]">{dict.about.body}</p>
        </div>
      </section>

      <section className="section-pad section-bg-b">
        <div className="container-shell max-w-4xl">
          <Reveal>
            <div className="glass-card rounded-3xl p-8">
              <h2 className="font-display text-3xl">{dict.about.principlesTitle}</h2>
              <ul className="mt-5 grid gap-3 text-[var(--muted)]">
                {dict.about.values.map((value) => (
                  <li key={value} className="rounded-xl border border-[var(--border)] px-4 py-3">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section-bg-c border-y border-[var(--border)]">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass-card rounded-3xl p-7">
              <h2 className="font-display text-3xl">{homeExperience.sourcing.title}</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{homeExperience.sourcing.intro}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {homeExperience.sourcing.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="glass-card rounded-3xl p-7">
              <h2 className="font-display text-3xl">{homeExperience.privateEvents.title}</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{homeExperience.privateEvents.text}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {homeExperience.privateEvents.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
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
