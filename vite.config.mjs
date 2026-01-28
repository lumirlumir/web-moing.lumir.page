/* eslint-disable import/no-extraneous-dependencies */

import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import '@/styles/mixins.scss';\n@import '@/styles/variables.scss';",
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
});
