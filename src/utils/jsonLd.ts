import { getPageMeta } from "@/i18n/pageMeta";
import { getNavTranslation } from "@/i18n/pageHeadings";
import { I18n, formatBcp47Locale, getLocalePath } from "@/i18n/utils";
import { toCanonicalUrl } from "@/utils/content";

type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
};

type BasePageJsonLdInput = {
  siteUrl: URL;
  locale: string;
  title: string;
  description: string;
  canonicalUrl: string;
};

const PUBLISHER_ID = "https://jyutping.org/#organization";
const OG_IMAGE_URL = "https://jyutping.org/og-image.png";

const organizationNode: Record<string, unknown> = {
  "@type": "Organization",
  "@id": PUBLISHER_ID,
  name: "CanCLID (Cantonese Computational Linguistics Infrastructure Development)",
  alternateName: ["粵語計算語言學基礎建設組", "jyutping.org"],
  url: "https://jyutping.org/",
  logo: {
    "@type": "ImageObject",
    url: OG_IMAGE_URL,
    width: 1200,
    height: 630,
  },
  sameAs: [
    "https://github.com/CanCLID/jyutping.org",
    "https://huggingface.co/CanCLID",
    "https://x.com/Can_CLID",
  ],
};

function createWebSiteNode(siteUrl: URL, locale: string): Record<string, unknown> {
  const meta = getPageMeta(locale);
  const bcp47 = formatBcp47Locale(locale);
  const homeUrl = toCanonicalUrl(getLocalePath("/", locale), siteUrl);

  return {
    "@type": "WebSite",
    "@id": `${homeUrl}#website`,
    name: meta.siteName,
    alternateName: ["Jyutping", "粵拼", "粵語拼音方案", "LSHK Cantonese Romanization"],
    url: homeUrl,
    inLanguage: bcp47,
    publisher: { "@id": PUBLISHER_ID },
  };
}

function createBreadcrumbNode(
  items: Array<{ name: string; url: string }>,
  pageUrl: string,
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function getHomeCrumb(siteUrl: URL, locale: string): { name: string; url: string } {
  const meta = getPageMeta(locale);
  return {
    name: meta.siteName,
    url: toCanonicalUrl(getLocalePath("/", locale), siteUrl),
  };
}

function baseGraph(
  input: BasePageJsonLdInput,
  extraNodes: Record<string, unknown>[],
  breadcrumbs?: Array<{ name: string; url: string }>,
): JsonLdGraph {
  const graph: Record<string, unknown>[] = [
    organizationNode,
    createWebSiteNode(input.siteUrl, input.locale),
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push(createBreadcrumbNode(breadcrumbs, input.canonicalUrl));
  }

  graph.push(...extraNodes);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildHomeJsonLd(input: BasePageJsonLdInput): JsonLdGraph {
  const bcp47 = formatBcp47Locale(input.locale);
  return baseGraph(input, [
    {
      "@type": "WebPage",
      "@id": `${input.canonicalUrl}#webpage`,
      url: input.canonicalUrl,
      name: input.title,
      description: input.description,
      inLanguage: bcp47,
      isPartOf: { "@id": `${toCanonicalUrl(getLocalePath("/", input.locale), input.siteUrl)}#website` },
      about: {
        "@type": "Thing",
        name: "Jyutping (LSHK Cantonese Romanization Scheme)",
        sameAs: [
          "https://en.wikipedia.org/wiki/Jyutping",
          "https://lshk.org/jyutping-scheme/",
        ],
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE_URL,
      },
    },
  ]);
}

export function buildJyutpingSchemeJsonLd(input: BasePageJsonLdInput): JsonLdGraph {
  const bcp47 = formatBcp47Locale(input.locale);
  const home = getHomeCrumb(input.siteUrl, input.locale);

  return baseGraph(
    input,
    [
      {
        "@type": "TechArticle",
        "@id": `${input.canonicalUrl}#article`,
        headline: input.title,
        description: input.description,
        url: input.canonicalUrl,
        inLanguage: bcp47,
        image: OG_IMAGE_URL,
        author: { "@id": PUBLISHER_ID },
        publisher: { "@id": PUBLISHER_ID },
        mainEntity: { "@id": `${input.canonicalUrl}#scheme` },
        citation: [
          "Matthews, Stephen (1992). Jyutping 粵拼 - Cantonese Romanization Scheme. The Linguistic Society of Hong Kong.",
          "Zee, Eric (1991). Chinese (Hong Kong Cantonese). Journal of the International Phonetic Association 21.1: 46-48.",
          "Bauer, Robert S., and Paul K. Benedict (2011). Modern Cantonese Phonology. Vol. 102. Walter de Gruyter.",
        ],
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${input.canonicalUrl}#scheme`,
        name: "LSHK Jyutping Cantonese Romanization Scheme (香港語言學學會粵語拼音方案)",
        description:
          "Standard Cantonese romanization system published by the Linguistic Society of Hong Kong (LSHK) in 1993: 19 onsets, 2 syllabic nasals, 9 vowel nuclei, 8 codas, 56+ finals, and 6 tones.",
        inLanguage: bcp47,
        url: input.canonicalUrl,
        hasDefinedTerm: [
          { "@type": "DefinedTerm", name: "Onsets (聲母)", description: "19 Cantonese consonant initials: b, p, m, f, d, t, n, l, g, k, ng, h, gw, kw, w, z, c, s, j" },
          { "@type": "DefinedTerm", name: "Syllabic Nasals (鼻音單獨成韻)", description: "m [m̩] and ng [ŋ̩]" },
          { "@type": "DefinedTerm", name: "Vowel Nuclei (韻腹)", description: "9 nuclei: aa, a, e, i, o, u, eo, oe, yu" },
          { "@type": "DefinedTerm", name: "Codas (韻尾)", description: "8 codas: glides -i, -u; nasals -m, -n, -ng; checked plosives -p, -t, -k" },
          { "@type": "DefinedTerm", name: "Tones (聲調)", description: "6 distinctive Cantonese tone contours (1: 55/53, 2: 35, 3: 33, 4: 21/11, 5: 23/13, 6: 22), including checked tones 1, 3, and 6" },
        ],
      },
    ],
    [home, { name: getNavTranslation("jyutping", input.locale), url: input.canonicalUrl }],
  );
}

export function buildLearnJsonLd(input: BasePageJsonLdInput): JsonLdGraph {
  const bcp47 = formatBcp47Locale(input.locale);
  const home = getHomeCrumb(input.siteUrl, input.locale);

  return baseGraph(
    input,
    [
      {
        "@type": "LearningResource",
        "@id": `${input.canonicalUrl}#learning-resource`,
        name: input.title,
        description: input.description,
        url: input.canonicalUrl,
        inLanguage: bcp47,
        image: OG_IMAGE_URL,
        educationalLevel: "Beginner",
        learningResourceType: "Guide",
        teaches: "Cantonese Jyutping pronunciation, initials, finals, and tones",
        author: { "@id": PUBLISHER_ID },
        publisher: { "@id": PUBLISHER_ID },
      },
    ],
    [home, { name: getNavTranslation("learn", input.locale), url: input.canonicalUrl }],
  );
}

export function buildBlogIndexJsonLd(
  input: BasePageJsonLdInput & {
    posts: Array<{ title: string; slug: string; description?: string }>;
  },
): JsonLdGraph {
  const bcp47 = formatBcp47Locale(input.locale);
  const home = getHomeCrumb(input.siteUrl, input.locale);

  return baseGraph(
    input,
    [
      {
        "@type": "Blog",
        "@id": `${input.canonicalUrl}#blog`,
        name: input.title,
        description: input.description,
        url: input.canonicalUrl,
        inLanguage: bcp47,
        publisher: { "@id": PUBLISHER_ID },
        blogPost: input.posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: toCanonicalUrl(post.slug, input.siteUrl),
        })),
      },
    ],
    [home, { name: getNavTranslation("blog", input.locale), url: input.canonicalUrl }],
  );
}

export function buildBlogPostJsonLd(input: BasePageJsonLdInput): JsonLdGraph {
  const bcp47 = formatBcp47Locale(input.locale);
  const home = getHomeCrumb(input.siteUrl, input.locale);
  const blogIndexUrl = toCanonicalUrl(getLocalePath("/blog", input.locale), input.siteUrl);

  return baseGraph(
    input,
    [
      {
        "@type": "Article",
        "@id": `${input.canonicalUrl}#article`,
        headline: input.title,
        description: input.description,
        url: input.canonicalUrl,
        inLanguage: bcp47,
        image: OG_IMAGE_URL,
        author: { "@id": PUBLISHER_ID },
        publisher: { "@id": PUBLISHER_ID },
        isPartOf: { "@id": `${blogIndexUrl}#blog` },
      },
    ],
    [
      home,
      { name: getNavTranslation("blog", input.locale), url: blogIndexUrl },
      { name: input.title, url: input.canonicalUrl },
    ],
  );
}

export function buildResourcesJsonLd(input: BasePageJsonLdInput): JsonLdGraph {
  const bcp47 = formatBcp47Locale(input.locale);
  const home = getHomeCrumb(input.siteUrl, input.locale);
  const resources = [
    { name: "TypeDuck Cantonese Keyboard", url: "https://www.typeduck.hk/" },
    { name: "Jyutping App (粵拼輸入法)", url: "https://jyutping.app" },
    { name: "Rime Cantonese (rime-cantonese)", url: "https://jyutping.net/" },
    { name: "Gboard Cantonese", url: "https://apps.apple.com/app/id1091700242" },
    { name: "Cantoboard", url: "https://apps.apple.com/app/id6752963850" },
    { name: "OtterBoard", url: "https://apps.apple.com/app/id6803947273" },
    { name: "LearnDuck 粵拼打字入門", url: "https://chaaklau.github.io/LearnDuck/" },
    { name: "jyutping.io Typing Practice", url: "https://jyutping.io/" },
    { name: "粵音資料集叢 jyut.net", url: "https://jyut.net/" },
    { name: "粵語辭叢 jyutjyu.com", url: "https://jyutjyu.com/" },
    { name: "粵典 words.hk", url: "https://words.hk/" },
    { name: "羊羊粵語 shyyp.net", url: "https://shyyp.net/hant" },
    { name: "注入粵拼 inject-jyutping", url: "https://github.com/CanCLID/inject-jyutping" },
    { name: "冚唪唥粵文 hambaanglaang.hk", url: "https://hambaanglaang.hk/" },
    { name: "視覺粵拼字體 visual-fonts.com", url: "https://visual-fonts.com/" },
    { name: "Wing Font", url: "https://wing-fonts.chunlaw.io/" },
  ];

  return baseGraph(
    input,
    [
      {
        "@type": "CollectionPage",
        "@id": `${input.canonicalUrl}#collection`,
        name: input.title,
        description: input.description,
        url: input.canonicalUrl,
        inLanguage: bcp47,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: resources.length,
          itemListElement: resources.map((resource, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: resource.name,
            url: resource.url,
          })),
        },
      },
    ],
    [home, { name: getNavTranslation("keyboard", input.locale), url: input.canonicalUrl }],
  );
}

export function buildAboutJsonLd(input: BasePageJsonLdInput): JsonLdGraph {
  const bcp47 = formatBcp47Locale(input.locale);
  const home = getHomeCrumb(input.siteUrl, input.locale);

  return baseGraph(
    input,
    [
      {
        "@type": "AboutPage",
        "@id": `${input.canonicalUrl}#about`,
        name: input.title,
        description: input.description,
        url: input.canonicalUrl,
        inLanguage: bcp47,
        mainEntity: { "@id": PUBLISHER_ID },
      },
    ],
    [home, { name: getNavTranslation("about", input.locale), url: input.canonicalUrl }],
  );
}

export function getCanonicalSiteUrl(site?: URL): URL {
  return site ?? new URL("https://jyutping.org");
}

export function resolveLocaleOrDefault(locale?: string): string {
  return locale && I18n.locales.includes(locale as (typeof I18n.locales)[number])
    ? locale
    : I18n.defaultLocale;
}
