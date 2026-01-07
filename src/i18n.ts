import { getRequestConfig } from "next-intl/server";

export const locales = ["pl", "en", "de", "fr"] as const;
export const defaultLocale = "pl" as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const validLocale = (locale && locales.includes(locale as Locale))
    ? locale
    : defaultLocale;

  return {
    locale: validLocale as string,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
