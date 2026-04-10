// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://manuelmennig.de',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
});
