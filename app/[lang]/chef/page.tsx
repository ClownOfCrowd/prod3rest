import { notFound } from "next/navigation";

import Reveal from "@/components/Reveal";
import SectionCta from "@/components/SectionCta";
import { getDictionary } from "@/lib/dictionaries";
import { getHomeExperienceContent } from "@/lib/home-experience-content";
import { hasLocale } from "@/lib/i18n";

export default async function ChefPage({ params }: PageProps<"/[lang]/chef">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const homeExperience = getHomeExperienceContent(lang);

  return (
    <>
      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <h1 className="font-display text-4xl md:text-5xl">{dict.chef.title}</h1>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                {dict.chef.subtitle}
              </p>
              <p className="mt-6 leading-relaxed text-[var(--muted)]">{dict.chef.bio}</p>
              <blockquote className="mt-8 border-l-2 border-[var(--accent)] pl-5 font-display text-2xl leading-tight text-[#f1e5cf] md:text-3xl">
                &ldquo;{dict.chef.quote}&rdquo;
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div
              className="min-h-[460px] rounded-3xl border border-[var(--border)] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.22), rgba(0,0,0,0.44)), url('https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-[var(--border)] bg-[#101820]/50">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          {homeExperience.diningExperience.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <article className="glass-card h-full rounded-2xl p-6">
                <h2 className="font-display text-2xl">{card.title}</h2>
                <p className="mt-3 text-sm text-[var(--muted)]">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell max-w-4xl">
          <article className="glass-card rounded-3xl p-7">
            <h2 className="font-display text-3xl">{homeExperience.chefStory.styleTitle}</h2>
            <p className="mt-4 text-[var(--muted)]">{homeExperience.chefStory.style}</p>
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
