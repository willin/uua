module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['willin', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  settings: {
    'import/core-modules': ['@rollup/plugin-typescript', 'rollup-plugin-dts']
  },
  overrides: [
    // typescript configs
    {
      files: ['*.ts'],
      excludedFiles: ['packages/docs/**/*.vue'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'prettier/@typescript-eslint'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./packages/@uua/core/tsconfig.json', './packages/@uua/ip2c/tsconfig.json']
      },
      rules: {
        'import/extensions': [
          1,
          {
            ts: 'never'
          }
        ],
        // '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    },

    // jest configs
    {
      files: ['*.spec.ts', '*.test.ts'],

      env: {
        jest: true
      },

      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
};
