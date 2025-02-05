import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'max-len': [
        'error',
        { code: 150, tabWidth: 2, comments: 150 },
      ],
      'vue/multi-word-component-names': 'off',
    },
    ignores: [
      '*.md',
      '.pnpm/**/*',
      '.devcontainer/*.json',
      '.vscode/*.json',
      'commitlint.config.cjs',
      'app.config.ts',
      'tailwind.config.ts',
    ],
  },
  {
    files: ['.pnpm/**/*'],
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
)
