import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://bolty.in',
  integrations: [mdx(), sitemap()],
  vite: {
    css: {
      transformer: "scss",
    },
  },
});
