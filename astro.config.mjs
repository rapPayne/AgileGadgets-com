// @ts-check
import { defineConfig } from 'astro/config'

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://rapPayne.github.io',
  base: '/',
  output: 'server',
  adapter: netlify(),
})