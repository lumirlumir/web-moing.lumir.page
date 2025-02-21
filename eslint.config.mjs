import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import bananass from 'eslint-config-bananass';

export default [
  {
    ignores: ['**/build/', '**/coverage/'],
  },
  bananass.configs.jsx.react,
  {
    settings: {
      node: {
        resolverConfig: {
          // `eslint-plugin-n` uses webpack's `enhanced-resolve` under the hood.
          // TODO: Sync with `webpack.config.js`.
          alias: {
            '@': resolve(dirname(fileURLToPath(import.meta.url)), 'src'),
          },
          extensions: ['.js', '.jsx'],
          mainFiles: ['index'],
        },
      },
    },
  },
];
