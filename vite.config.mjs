/* eslint-disable import/no-extraneous-dependencies -- TODO */

import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadEnvFile } from 'node:process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

if (existsSync(resolve(import.meta.dirname, '.env'))) {
  loadEnvFile(resolve(import.meta.dirname, '.env'));
}

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
  define: {
    'process.env.BACKEND_PORT': JSON.stringify(process.env.BACKEND_PORT),
    'process.env.BACKEND_IP': JSON.stringify(process.env.BACKEND_IP),
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
});
