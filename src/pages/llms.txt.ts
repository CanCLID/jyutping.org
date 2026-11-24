import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { languageNames } from "@/i18n/languageNames";
import { getTitle } from "@/i18n/pageHeadings";
import { getPageMeta } from "@/i18n/pageMeta";
import { I18n, formatBcp47Locale, getLocalePath } from "@/i18n/utils";
import {
  getEntryLocale,
  getLocalizedContentPath,
  getRssPath,
  toCanonicalUrl,
} from "@/utils/content";
import { getCanonicalSiteUrl } from "@/utils/jsonLd";

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = getCanonicalSiteUrl(site);
  const learnEntries = await getCollection("learn");
  const blogEntries = await getCollection("blog");

  const learnLines = I18n.locales.flatMap((locale) => {
    const entry = learnEntries.find((item) => getEntryLocale(item.id) === locale);
    if (!entry) return [];
    const url = toCanonicalUrl(getLocalizedContentPath("learn", entry.id), siteUrl);
    const label = languageNames[locale] ?? locale;
    return [`- [${entry.data.title} (${label})](${url}): ${entry.data.description ?? getPageMeta(locale).descriptions.index}`];
  });

  const blogLines = I18n.locales.flatMap((locale) => {
    const localePosts = blogEntries
      .filter((item) => getEntryLocale(item.id) === locale)
      .toSorted((a, b) => (a.data.weight || 0) - (b.data.weight || 0));
    return localePosts.map((post) => {
      const url = toCanonicalUrl(getLocalizedContentPath("blog", post.id), siteUrl);
      return `- [${post.data.title} [${formatBcp47Locale(locale)}]](${url}): ${post.data.description ?? post.data.title}`;
    });
  });

  const schemeLines = I18n.locales.map((locale) => {
    const url = toCanonicalUrl(getLocalePath("/jyutping", locale), siteUrl);
    const title = getTitle("jyutping", locale);
    return `- [${title} (${languageNames[locale] ?? locale})](${url}): ${getPageMeta(locale).descriptions.jyutping}`;
  });

  const rssLines = I18n.locales.map((locale) => {
    const url = toCanonicalUrl(getRssPath(locale), siteUrl);
    return `- [${getPageMeta(locale).rssTitle} (${languageNames[locale] ?? locale})](${url})`;
  });

  const body = `# jyutping.org — 粵拼 LSHK Cantonese Romanization Scheme

> Official multilingual portal for Jyutping (粵拼 / 香港語言學學會粵語拼音方案), published by the Linguistic Society of Hong Kong (LSHK) in 1993 and maintained by CanCLID across 8 locales (${I18n.locales.map((l) => formatBcp47Locale(l)).join(", ")}).

## Complete Reference for LLMs

- [Complete Jyutping Scheme Reference (llms-full.txt)](${new URL("/llms-full.txt", siteUrl).toString()}): Full machine-readable specification with all 19 onsets, 2 syllabic nasals, 9 nuclei, 8 codas, 56+ finals with IPA and examples, 6 tones, citations, and ecosystem tools.

## Jyutping Scheme Specification

${schemeLines.join("\n")}

## Learning Guides

${learnLines.join("\n")}

## Keyboards, Dictionaries & Tools

- [粵拼輸入法及工具 Resources (Default: Yue)](${toCanonicalUrl("/keyboard", siteUrl)}): ${getPageMeta(I18n.defaultLocale).descriptions.keyboard}
- [Keyboards & Tools (English)](${toCanonicalUrl("/en/keyboard", siteUrl)}): ${getPageMeta("en").descriptions.keyboard}
- [TypeDuck Cantonese Keyboard](https://www.typeduck.hk/): Cross-platform Jyutping input method with English/multilingual reverse lookup.
- [Jyutping App](https://jyutping.app/): Open-source Cantonese Jyutping IME for iOS, Android, macOS, and Windows.
- [rime-cantonese](https://jyutping.net/): Rime Cantonese input schema and converter.
- [粵典 words.hk](https://words.hk/) & [粵音資料集叢 jyut.net](https://jyut.net/) & [粵語辭叢 jyutjyu.com](https://jyutjyu.com/): Cantonese dictionaries indexed by Jyutping.

## Articles & Blog

${blogLines.join("\n")}

## Optional: Sitemaps & RSS Feeds

- [XML Sitemap Index](${new URL("/sitemap-index.xml", siteUrl).toString()})
${rssLines.join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
