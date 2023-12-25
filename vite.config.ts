import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Cards Redux',
        short_name: 'Cards Redux',
        start_url: '/',
        display: 'standalone',
        orientation: 'any',
        background_color: '#000000',
        lang: 'en',
        scope: '/',
        icons: [
          {
            src: '/maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/logo384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#57534e',
      },
    }),
  ],
});
