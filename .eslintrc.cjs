module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    semi: ['error', 'never'],
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'no-multiple-empty-lines': 'off',
    'react/prop-types': 'off'
  }
}
