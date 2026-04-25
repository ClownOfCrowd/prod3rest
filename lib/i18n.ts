export const locales = ["en", "es", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getLocaleFromPathname = (pathname: string): Locale => {
  const segment = pathname.split("/")[1];
  return hasLocale(segment) ? segment : defaultLocale;
};

export const replaceLocaleInPathname = (
  pathname: string,
  nextLocale: Locale,
): string => {
  const segments = pathname.split("/");

  if (segments.length < 2 || !hasLocale(segments[1])) {
    return `/${nextLocale}`;
  }

  segments[1] = nextLocale;
  const normalized = segments.join("/").replace(/\/$/, "");
  return normalized.length ? normalized : `/${nextLocale}`;
};
