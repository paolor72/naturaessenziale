import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.naturaessenziale.net',

  server: {
    host: true,
    port: 4321,
  },

  vite: {
    server: {
      allowedHosts: ['code.serverecasa1.online'],
    },

    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});