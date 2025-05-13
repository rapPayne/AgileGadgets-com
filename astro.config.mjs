// @ts-check
import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://agilegadgets.com',
  base: '/',
  output: 'server',
  adapter: netlify(),
})