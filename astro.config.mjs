import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// sitemap removed — @astrojs/sitemap@3.7.3 has a reduce bug with Astro 4 static output

export default defineConfig({
  site: 'https://networkscan.ai',
  output: 'static',
  integrations: [mdx()],
});
