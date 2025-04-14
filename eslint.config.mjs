import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

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
          // TODO: Sync with `webpack.config.js`.
          alias: {
            '@': resolve(dirname(fileURLToPath(import.meta.url)), 'src'),
          },
        },
      },
    },
  },
];
