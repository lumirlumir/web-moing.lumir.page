import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadEnvFile } from 'node:process';
import { defineConfig } from 'vite'; // eslint-disable-line import/no-extraneous-dependencies -- TODO: Should be fixed in `eslint-config-bananass`.
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
        additionalData: "@import '@/styles/mixins.scss';",
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
