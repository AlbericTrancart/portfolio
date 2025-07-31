const eslint = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const preferArrowPlugin = require('eslint-plugin-prefer-arrow');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const risxssPlugin = require('eslint-plugin-risxss');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  tseslint.configs.recommendedTypeChecked,
  jsxA11yPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactHooksPlugin.configs['recommended-latest'],
  {
    ignores: ['cache/*', 'node_modules/*', 'public/*'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        ...globals.jest,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    plugins: {
      'prefer-arrow': preferArrowPlugin,
      'unused-imports': unusedImports,
      risxss: risxssPlugin,
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // Specific NextJS accessibility config
      // Not necessary with NextJS links
      'jsx-a11y/anchor-is-valid': 'off',
      // Add alt attributes to NextJS Images
      'jsx-a11y/alt-text': [2, { img: ['Image'] }],
      'risxss/catch-potential-xss-react': 'error',
      'react/no-string-refs': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@next/next/google-font-display': 'off',
      'react/react-in-jsx-scope': 'off',

      // TODO remove this disable once all eslint config are migrated to new flatConfig
      // then we can change all eslint configs to ESM
      '@typescript-eslint/no-require-imports': 'off',
      curly: ['error', 'all'],
      complexity: ['error', 8],
      'max-lines': ['error', 750],
      'max-depth': ['error', 3],
      'max-params': ['error', 4],
      'no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],
      'prefer-const': 'error',
      'unused-imports/no-unused-imports': 'error',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@bifrost/*/*'],
              message:
                'import of internal modules must be done at the root level.',
            },
          ],
          paths: [
            {
              name: 'lodash',
              message: 'Please use lodash/{module} import instead',
            },
            {
              name: '.',
              message: 'Please use explicit import file',
            },
          ],
        },
      ],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
      'import/order': [
        'error',
        {
          pathGroups: [{ pattern: '@bifrost/**', group: 'unknown' }],
          groups: [
            ['external', 'builtin'],
            'unknown',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      'import/no-duplicates': 'error',
      'import/namespace': 'off',
      'import/no-anonymous-default-export': 'error',
    },
  },
  {
    files: ['**/*.ts?(x)'],
    extends: [importPlugin.flatConfigs.typescript],
    rules: {
      '@typescript-eslint/prefer-optional-chain': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: true,
        },
      ],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          minimumDescriptionLength: 10,
        },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/interface-name-prefix': 0,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
        'error',
        { allowComparingNullableBooleansToTrue: false },
      ],
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
          allowBoolean: true,
        },
      ],
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            FC: 'Use `const MyComponent = (props: Props): JSX.Element` instead',
            SFC: 'Use `const MyComponent = (props: Props): JSX.Element` instead',
            FunctionComponent:
              'Use `const MyComponent = (props: Props): JSX.Element` instead',
            'React.FC':
              'Use `const MyComponent = (props: Props): JSX.Element` instead',
            'React.SFC':
              'Use `const MyComponent = (props: Props): JSX.Element` instead',
            'React.FunctionComponent':
              'Use `const MyComponent = (props: Props): JSX.Element` instead',
          },
        },
      ],
      'react/self-closing-comp': ['error'],
    },
  },
);
