// Supported locales (must be kept the same as astro.config.mjs)
export const I18n = {
  locales: ["en", "vi", "yue", "cmn", "nan", "wuu", "yue_hans", "ja"],
  defaultLocale: "yue",
  slugGenerationLocale: "en",
} as const;

export type Locale = typeof I18n["locales"][number];

type TranslationResource = string | React.ReactElement | (string | React.ReactElement)[] | { [key: string]: TranslationResource };

const fallbackLocale = "en" as const;
const fallbackToYueRegex = /^(zh|chi|ltc|zho|zhx|(zh-)?(cdo|cjy|cmn|cnp|cpx|csp|czh|czo|gan|hak|hnm|hsn|luh|lzh|mnp|nan|och|sjc|wuu|yue))\b/i;

// Polyfill
Object.hasOwn ||= Function.prototype.call.bind(Object.prototype.hasOwnProperty);

// Returns a function that performs language negotiation and returns the resolved resource.
// Currently the logic is simplified and it only falls back to either Cantonese or English.
export function makeResource<T extends TranslationResource>(translations: Partial<Record<Locale, T>>) {
  return (locale: string): T => {
    if (Object.hasOwn(translations, locale)) {
      // If the translation in the specified locale is available, return that translation
      return translations[locale as keyof typeof translations] as T;
    } else if (fallbackToYueRegex.test(locale) && Object.hasOwn(translations, I18n.defaultLocale) || !Object.hasOwn(translations, fallbackLocale)) {
      // If the locale is one of the Chinese varieties (the user seems to know Chinese) or if English translation is not available, return the Cantonese translation
      return translations[I18n.defaultLocale] as T;
    } else {
      // Fallback to English translation
      return translations[fallbackLocale] as T;
    }
  }
}

// Computes the path for a given locale based on the current pathname.
export function getLocalePath(currentPathname: string, targetLocale: string): string {
  const currentLocalePrefix = I18n.locales.find(
    (locale) =>
      currentPathname.startsWith(`/${locale}/`) ||
      currentPathname === `/${locale}`
  );

  const basePath = currentLocalePrefix
    ? currentPathname.slice(`/${currentLocalePrefix}`.length) || "/"
    : currentPathname;

  if (targetLocale === I18n.defaultLocale) {
    return basePath;
  }
  return basePath === "/" ? `/${targetLocale}` : `/${targetLocale}${basePath}`;
}

// Performs language negotiation resource-agonistically.
// This method should only be used if the translations cannot be defined with `makeResource`, e.g. for page components differing by locale.
export function negotiateLocale(locale: string): Locale {
  if (I18n.locales.includes(locale as Locale)) {
    // If the locale is one of the valid locales, return it
    return locale as Locale;
  } else if (fallbackToYueRegex.test(locale)) {
    // If the locale is one of the Chinese varieties (the user seems to know Chinese), return Cantonese
    return I18n.defaultLocale;
  } else {
    // Fallback to English
    return fallbackLocale;
  }
}
