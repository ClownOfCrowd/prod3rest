import Link from "next/link";
import { notFound } from "next/navigation";

import FaqAccordion from "@/components/home/FaqAccordion";
import GallerySplitTabs from "@/components/home/GallerySplitTabs";
import OpeningHoursPanel from "@/components/home/OpeningHoursPanel";
import PopularTimesQuickReserve from "@/components/home/PopularTimesQuickReserve";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionCta from "@/components/SectionCta";
import { getDictionary } from "@/lib/dictionaries";
import { getHomeExperienceContent } from "@/lib/home-experience-content";
import { hasLocale } from "@/lib/i18n";

const galleryBackgrounds = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
];

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const homeExperience = getHomeExperienceContent(lang);

  return (
    <>
      <Hero
        locale={lang}
        eyebrow={dict.home.eyebrow}
        title={dict.home.title}
        subtitle={dict.home.subtitle}
        primaryCta={dict.home.heroPrimary}
        secondaryCta={dict.home.heroSecondary}
        microcopy={homeExperience.hero.microcopy}
        scrollIndicator={homeExperience.hero.scrollIndicator}
        quickLinks={homeExperience.hero.links.map((item) => ({
          label: item.label,
          href: item.target,
        }))}
      />

      <section id="home-story" className="section-pad border-b border-[var(--border)]">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <article className="glass-card rounded-3xl p-7 md:p-9">
              <h2 className="font-display text-3xl md:text-4xl">
                {homeExperience.philosophy.title}
              </h2>
              <p className="mt-4 text-[var(--muted)]">{homeExperience.philosophy.intro}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                {homeExperience.philosophy.body}
              </p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article className="glass-card rounded-3xl p-7">
              <div className="space-y-4">
                {homeExperience.philosophy.principles.map((principle) => (
                  <div key={principle.title} className="rounded-xl border border-[var(--border)] p-4">
                    <h3 className="font-display text-xl">{principle.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{principle.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass-card rounded-3xl p-7">
              <h2 className="font-display text-3xl">{homeExperience.sourcing.title}</h2>
              <p className="mt-3 text-[var(--muted)]">{homeExperience.sourcing.intro}</p>
              <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
                {homeExperience.sourcing.points.map((point) => (
                  <li key={point} className="rounded-xl border border-[var(--border)] px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="glass-card rounded-3xl p-7">
              <h2 className="font-display text-3xl">{homeExperience.chefStory.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {homeExperience.chefStory.story}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {homeExperience.chefStory.styleTitle}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">{homeExperience.chefStory.style}</p>
              <blockquote className="mt-5 border-l-2 border-[var(--accent)] pl-4 font-display text-2xl text-[#f1e5cf]">
                &ldquo;{homeExperience.chefStory.quote}&rdquo;
              </blockquote>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {dict.home.highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="glass-card h-full rounded-2xl p-6">
                <h2 className="font-display text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad border-y border-[var(--border)] bg-[#0f0f12]">
        <div className="container-shell">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              {dict.home.testimonialTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {dict.home.testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 100}>
                <figure className="glass-card rounded-2xl p-6">
                  <blockquote className="text-sm leading-relaxed text-[var(--foreground)]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                    {testimonial.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="home-experience" className="section-pad">
        <div className="container-shell">
          <h2 className="font-display text-3xl md:text-4xl">
            {homeExperience.diningExperience.title}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {homeExperience.diningExperience.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 100}>
                <article className="glass-card h-full rounded-2xl p-6">
                  <h3 className="font-display text-2xl">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-[var(--border)] bg-[#10181f]/55">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <Reveal>
            <article className="glass-card h-full rounded-3xl p-6">
              <h3 className="font-display text-3xl">{homeExperience.privateEvents.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{homeExperience.privateEvents.text}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {homeExperience.privateEvents.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="glass-card h-full rounded-3xl p-6">
              <h3 className="font-display text-3xl">{homeExperience.giftCards.title}</h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{homeExperience.giftCards.text}</p>
              <button type="button" className="btn-secondary mt-6">
                {homeExperience.giftCards.cta}
              </button>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className="glass-card h-full rounded-3xl p-6">
              <h3 className="font-display text-3xl">{homeExperience.micro.todaySpecial.title}</h3>
              <p className="mt-3 font-display text-2xl">{homeExperience.micro.todaySpecial.name}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{homeExperience.micro.todaySpecial.text}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <h2 className="font-display text-3xl md:text-4xl">{homeExperience.testimonials.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {homeExperience.testimonials.items.map((item, index) => (
              <Reveal key={`${item.author}-${item.context}`} delay={index * 100}>
                <article className="glass-card h-full rounded-2xl p-6">
                  <blockquote className="text-sm leading-relaxed text-[var(--foreground)]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm text-[var(--accent)]">{item.author}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    {item.context}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySplitTabs content={homeExperience.gallerySplit} />

      <section className="section-pad">
        <div className="container-shell">
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl">{dict.gallery.title}</h2>
            <Link href={`/${lang}/gallery`} className="gold-link text-sm tracking-wide">
              {dict.nav.gallery}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {dict.gallery.items.slice(0, 3).map((caption, index) => (
              <Reveal key={caption} delay={index * 100}>
                <article className="overflow-hidden rounded-2xl border border-[var(--border)]">
                  <div
                    className="aspect-[4/3] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${galleryBackgrounds[index]}')` }}
                  />
                  <p className="bg-[#111114] px-4 py-3 text-sm text-[var(--muted)]">
                    {caption}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="home-location" className="section-pad border-y border-[var(--border)] bg-[#10171e]/45">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass-card rounded-3xl p-7">
              <h2 className="font-display text-3xl">{homeExperience.location.title}</h2>
              <p className="mt-4 text-[var(--muted)]">{homeExperience.location.text}</p>
              <p className="mt-4 text-sm text-[var(--muted)]">{homeExperience.location.transport}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{homeExperience.location.parking}</p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <OpeningHoursPanel content={homeExperience.openingHours} />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-2xl">{homeExperience.micro.popularTimes.title}</h3>
            <PopularTimesQuickReserve times={homeExperience.micro.popularTimes.times} />
          </article>
          <article className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-2xl">{homeExperience.micro.chefNote.title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{homeExperience.micro.chefNote.text}</p>
          </article>
        </div>
      </section>

      <section id="home-faq">
        <FaqAccordion title={homeExperience.faq.title} items={homeExperience.faq.items} />
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
