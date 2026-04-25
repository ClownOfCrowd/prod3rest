import { notFound } from "next/navigation";

import Reveal from "@/components/Reveal";
import SectionCta from "@/components/SectionCta";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";

const galleryBackgrounds = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
];

export default async function GalleryPage({
  params,
}: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <>
      <section className="section-pad border-b border-[var(--border)]">
        <div className="container-shell">
          <h1 className="font-display text-4xl md:text-5xl">{dict.gallery.title}</h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">{dict.gallery.subtitle}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.gallery.items.map((caption, index) => (
            <Reveal key={caption} delay={index * 80}>
              <article className="overflow-hidden rounded-2xl border border-[var(--border)]">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url('${galleryBackgrounds[index]}')` }}
                />
                <p className="bg-[#0f0f12] px-4 py-3 text-sm text-[var(--muted)]">
                  {caption}
                </p>
              </article>
            </Reveal>
          ))}
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
