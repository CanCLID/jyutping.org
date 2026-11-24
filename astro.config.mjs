// @ts-check
import { existsSync } from "node:fs";
import path from "node:path";
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import { rehypeAccessibleContent } from "./src/utils/rehypeAccessibleContent";

const siteUrl = "https://jyutping.org";
const sitemapLocales = {
  cmn: "zh",
  en: "en",
  ja: "ja",
  nan: "nan",
  vi: "vi",
  wuu: "wuu",
  yue: "yue",
  yue_hans: "yue-Hans",
};
const nonDefaultLocales = Object.keys(sitemapLocales).filter((locale) => locale !== "yue");

/** @param {string} url */
function hasBlogPostForUrl(url) {
  const pathname = new URL(url).pathname.replace(/\/+$/, "");
  const segments = pathname.split("/").filter(Boolean);
  let locale = "yue";
  let rest = segments;

  if (segments.length > 0 && nonDefaultLocales.includes(segments[0])) {
    locale = segments[0];
    rest = segments.slice(1);
  }

  if (rest[0] !== "blog" || rest.length < 2) {
    return true;
  }

  const slug = rest.slice(1).join("/");
  const baseDir = path.join(process.cwd(), "src/content/blog", locale);
  return (
    existsSync(path.join(baseDir, `${slug}.mdx`)) ||
    existsSync(path.join(baseDir, `${slug}.md`)) ||
    existsSync(path.join(baseDir, slug, "index.mdx")) ||
    existsSync(path.join(baseDir, slug, "index.md"))
  );
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  markdown: {
    syntaxHighlight: false,
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Chiron Hei HK WS",
      cssVariable: "--font-chiron-hei-hk-ws",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/chiron-hei-hk-ws-variable.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Chiron Hei HK Jyutping",
      cssVariable: "--font-chiron-hei-hk-jyutping",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/chiron-hei-hk-jyutping-subset.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans JP",
      cssVariable: "--font-noto-sans-jp",
      weights: ["100 900"],
      styles: ["normal"],
    },
  ],
  i18n: {
    locales: ["en", "vi", "yue", "cmn", "nan", "wuu", "yue_hans", "ja"],
    defaultLocale: "yue",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  security: {
    csp: {
      directives: [
        "base-uri 'none'",
        "connect-src 'self' https://cloud.umami.is https://*.umami.is",
        "default-src 'self'",
        "font-src 'self'",
        "frame-src 'self' https://www.youtube-nocookie.com",
        "img-src 'self' data:",
        "media-src 'self'",
        "object-src 'none'",
      ],
      scriptDirective: {
        resources: ["'self'", "https://cloud.umami.is"],
      },
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        jpeg: { mozjpeg: true },
        webp: { effort: 6, alphaQuality: 80 },
        avif: { effort: 4, chromaSubsampling: "4:2:0" },
        png: { compressionLevel: 9 },
      },
    },
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeAccessibleContent],
    }),
    sitemap({
      i18n: {
        defaultLocale: "yue",
        locales: sitemapLocales,
      },
      serialize(item) {
        if (!item.links) {
          return item;
        }
        return {
          ...item,
          links: item.links.filter((link) => hasBlogPostForUrl(link.url)),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
