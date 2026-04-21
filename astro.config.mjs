// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import remarkGfm from "remark-gfm";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jyutping.org",
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
        "base-uri 'self'",
        "connect-src 'self' https://cloud.umami.is https://*.umami.is",
        "default-src 'self'",
        "font-src 'self'",
        "frame-src 'self' https://www.youtube.com https://youtube.com",
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
    react(),
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
