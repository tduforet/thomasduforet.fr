// @ts-check
import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/scripts/remark-reading-time.js'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://thomasduforet.fr',
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})
