module.exports = {
  overrides: [
    {
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      // extends: ['eslint:recommended'],
      rules: {
        'no-console': 'error',
      },
    },
  ],
};
