const path = require("path");

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended',"airbnb", "prettier", "prettier"],
  plugins: ["react", "prettier", "jsx-a11y",'@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
          },
        },
      },
    },
  },
  rules: {
    "react/no-unescaped-entities": 0,
    "no-var": "error", // optional, recommended when using es6+
    "no-unused-vars": 1, // recommended
    "arrow-spacing": ["error", { before: true, after: true }], // recommended
    indent: 0,
    "comma-dangle": [
      "error",
      {
        objects: "only-multiline",
        arrays: "only-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],

    // react plugin - options
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-loop-func": 0,
    "react/no-array-index-key": 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
