// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import remarkGfm from 'remark-gfm';

import tailwindcss from '@tailwindcss/vite';


import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://jyutping.org',
  // Add i18n configuration
  i18n: {
    // An array of supported locales
    locales: ['en', 'vi', 'yue', 'cmn', 'nan', 'wuu', 'yue_hans', 'ja'],
    // The default locale
    defaultLocale: 'yue',
    // Strategy for routing locales
    routing: {
      // The default locale will not have a prefix (e.g. `/blog`)
      prefixDefaultLocale: false,
      // Redirect /en/ to /en automatically
      // Not strictly needed based on middleware, but good practice
      redirectToDefaultLocale: false,
    },
  },

  integrations: [react(), mdx({
    remarkPlugins: [remarkGfm],
  }), sitemap(), partytown()],

  vite: {
    plugins: [tailwindcss()]
  },
});
