import { resolve } from 'node:path';
import { defineConfig, globalIgnores } from 'eslint/config';
import bananass from 'eslint-config-bananass';
import mark from 'eslint-plugin-mark';

/** @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  globalIgnores(['**/build/', '**/coverage/'], 'global/ignores'),

  bananass.configs.jsxReact,
  bananass.configs.tsxReact,
  bananass.configs.json,
  bananass.configs.jsonc,
  bananass.configs.json5,
  mark.configs.recommended,
  mark.configs.stylistic,

  {
    name: 'global',
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
  {
    name: 'md/global',
    files: ['**/*.md'],
    rules: {
      'mark/allow-link-url': [
        'error',
        {
          disallowUrls: [/^\.\//],
        },
      ],
    },
  },
]);
