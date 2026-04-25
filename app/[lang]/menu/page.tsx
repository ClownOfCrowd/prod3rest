import { notFound } from "next/navigation";

import MenuExperience from "@/components/menu/MenuExperience";
import SectionCta from "@/components/SectionCta";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { getMenuContent } from "@/lib/menu-content";

export default async function MenuPage({ params }: PageProps<"/[lang]/menu">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const menuContent = getMenuContent(lang);

  return (
    <>
      <MenuExperience locale={lang} content={menuContent} />

      <SectionCta
        locale={lang}
        title={dict.common.ctaTitle}
        text={dict.common.ctaText}
        buttonLabel={dict.common.reserveNow}
      />
    </>
  );
}
