module.exports = {
  '*': [
    'npx prettier --check',
    'npx editorconfig-checker -config .editorconfig-checker.json',
  ],
  '*.{js,jsx}': 'npx eslint',
  '*.md': 'npx markdownlint',
};
