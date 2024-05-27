module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    // avoid errors like it/describe in test
    jest: true,
    // avoid errors like window/document
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh',"simple-import-sort", "import", "unused-imports"],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'warn',
    "no-console": "warn",
    eqeqeq: ["warn", "always"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": "error",
    "prefer-const": ["error", { destructuring: "all", ignoreReadBeforeAssign: true }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/triple-slash-reference": ["error", { path: "always", types: "never", lib: "never" }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-useless-path-segments": ["error"],
    "@typescript-eslint/ban-types": ["error", { types: { Function: false, Object: false } }],
    "unused-imports/no-unused-imports": "warn",
    curly: ["warn", "all"]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
