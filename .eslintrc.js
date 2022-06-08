module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    // JavaScript and JSX
    {
      files: ['*.{js,jsx}'],
      parserOptions: {
        sourceType: 'module',
      },
      extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
      plugins: ['prettier'],
    },

    // Typescript and TSX
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.test.js', 'gatsby-node.js', 'gatsby-config.js'],
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb-typescript-prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'react/prop-types': 0,
      },
    },

    // Gatsby and ESLint config files
    {
      files: ['.eslintrc.js', 'gatsby-config.js'],
      env: {
        es2021: true,
        node: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
