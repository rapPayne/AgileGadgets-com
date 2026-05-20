// @ts-check
import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify';
import rehypeMermaid from 'rehype-mermaid';

export default defineConfig({
  site: 'https://agilegadgets.com',
  base: '/',
  output: 'server',
  adapter: netlify(),
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    rehypePlugins: [rehypeMermaid],
  },
})