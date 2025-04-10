export default {
  '*': [
    'npx prettier --check --ignore-unknown',
    'npx editorconfig-checker -config .editorconfig-checker.json',
  ],
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,md}': 'npx eslint',
  '*.md': 'npx markdownlint',
};
