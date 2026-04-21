import { getCollection, type CollectionEntry, type CollectionKey } from "astro:content";
import { I18n, type Locale } from "@/i18n/utils";

function normalizeEntrySlug(slug: string): string {
  if (slug === "index") {
    return "";
  }

  return slug.replace(/\/index$/, "");
}

export function splitEntryId(id: string): { locale: string; slug: string } {
  const [locale = I18n.defaultLocale, ...slugParts] = id.split("/");

  return {
    locale,
    slug: normalizeEntrySlug(slugParts.join("/")),
  };
}

export function getEntryLocale(id: string): string {
  return splitEntryId(id).locale;
}

export function getEntrySlug(id: string): string {
  return splitEntryId(id).slug;
}

export function isLocaleEntry(id: string, locale: Locale): boolean {
  return getEntryLocale(id) === locale;
}

export function isSupportedLocale(locale: string): locale is Locale {
  return I18n.locales.includes(locale as Locale);
}

export function getLocalizedContentPath(
  collection: "about" | "blog" | "jyutping" | "learn",
  id: string,
): string {
  const locale = getEntryLocale(id);
  const slug = getEntrySlug(id);
  const localePrefix = locale === I18n.defaultLocale ? "" : `/${locale}`;
  const slugSuffix = slug ? `/${slug}` : "";

  return `${localePrefix}/${collection}${slugSuffix}`;
}

export async function getLocalizedSingletonEntry<C extends CollectionKey>(
  collection: C,
  locale: Locale,
): Promise<CollectionEntry<C>> {
  const [entry] = await getCollection(collection, ({ id }) =>
    getEntryLocale(id) === locale && getEntrySlug(id) === ""
  );

  if (!entry) {
    throw new Error(`Missing ${collection} entry for locale: ${locale}.`);
  }

  return entry;
}

export async function getLocalizedCollectionEntries<C extends CollectionKey>(
  collection: C,
  locale: Locale,
): Promise<CollectionEntry<C>[]> {
  return getCollection(collection, ({ id }) => getEntryLocale(id) === locale);
}

export async function getDefaultLocaleCollectionEntryStaticPaths<C extends CollectionKey>(
  collection: C,
) {
  const entries = await getLocalizedCollectionEntries(collection, I18n.defaultLocale);

  return entries.map((entry) => ({
    params: { slug: getEntrySlug(entry.id) || undefined },
    props: { entry },
  }));
}

export async function getNonDefaultLocaleCollectionEntryStaticPaths<C extends CollectionKey>(
  collection: C,
) {
  const entries = await getCollection(collection, ({ id }) => !isLocaleEntry(id, I18n.defaultLocale));

  return entries.flatMap((entry) => {
    const locale = getEntryLocale(entry.id);
    if (!isSupportedLocale(locale) || locale === I18n.defaultLocale) {
      return [];
    }

    return [
      {
        params: { locale, slug: getEntrySlug(entry.id) || undefined },
        props: { entry },
      },
    ];
  });
}
