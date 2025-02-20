import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({
    svgrOptions: {
      exportType: 'default',
      ref: true,
      svgo: false,
      titleProp: true,
    },
    include: '**/*.svg',
  }), sentryVitePlugin({
    org: "studit-dk",
    project: "javascript-react"
  })],
  optimizeDeps: {
    include: ['msw'],
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },

    sourcemap: true
  },
});