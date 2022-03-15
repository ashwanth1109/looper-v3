module.exports = {
  extends: [require.resolve('configs..eslint')],
  parserOptions: {
    project: './tsconfig.json',
  },
};
