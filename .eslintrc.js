module.exports = {
  root: true,
  plugins: [
    // plugins has no priority.
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'prettier',
  ],
  extends: [
    // extends has priority. Last index has the highest priority.
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'airbnb/hooks',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'react/forbid-prop-types': 'off', // PropTypes.any
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 15,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      // eslint-import-resolver-alias
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.sass'],
      },
    },
  },
};
