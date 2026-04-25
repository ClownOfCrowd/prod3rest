import { notFound } from "next/navigation";

import CookieBanner from "@/components/CookieBanner";
import FloatingReserveModal from "@/components/FloatingReserveModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/lib/dictionaries";
import { getHomeExperienceContent } from "@/lib/home-experience-content";
import { hasLocale, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const homeContent = getHomeExperienceContent(lang);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar locale={lang} dict={dict} />
      <main>{children}</main>
      <Footer locale={lang} dict={dict} />
      <FloatingReserveModal
        labels={{
          ...homeContent.reserveModal,
          date: dict.reservations.form.date,
          time: dict.reservations.form.time,
          guests: dict.reservations.form.guests,
        }}
      />
      <CookieBanner dict={dict} />
    </div>
  );
}
