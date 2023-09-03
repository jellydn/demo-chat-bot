module.exports = {
  extends: ['productsway/react'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'tsup.config.ts'],
  parserOptions: {
    project: ['./tsconfig.json',],
  },
  rules: {},
};
