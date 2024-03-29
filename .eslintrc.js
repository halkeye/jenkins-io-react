module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.esm.json']
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': ['error', {
      allowString: true,
      allowNullableString: true,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: false,
      allowNullableNumber: false,
      allowAny: false
    }],
    "@typescript-eslint/semi": ["error", "always"]
  }
};
