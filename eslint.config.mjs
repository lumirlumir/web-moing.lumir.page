import { resolve } from 'node:path';
import bananass from 'eslint-config-bananass';
import mark from 'eslint-plugin-mark';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: 'global/ignores',
    ignores: ['**/build/', '**/coverage/'],
  },
  bananass.configs.jsxReact,
  bananass.configs.tsxReact,
  mark.configs.recommendedGfm,
  {
    settings: {
      node: {
        resolverConfig: {
          // `eslint-plugin-n` uses webpack's `enhanced-resolve` under the hood.
          alias: {
            '@': resolve(import.meta.dirname, 'src'),
          },
        },
      },
    },
  },
];
