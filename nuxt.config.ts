// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  components: [
    '~/components',
  ],
  imports: {
    dirs: ['composables/api'],
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
  ],
  colorMode: {
    preference: 'light',
  },
  runtimeConfig: {
    apiBaseUrl: '',
    public: {
      apiKey: '',
    },
  },
  compatibilityDate: '2025-02-05',
  nitro: {
    compressPublicAssets: true,
  },
  postcss: {
    plugins: {
      'postcss-hexrgba': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'postcss-lighten-darken': {},
      'autoprefixer': {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
        quoteProps: 'consistent-as-needed',
        commaDangle: 'always-multiline',
        blockSpacing: true,
        arrowParens: true,
      },
    },
  },
  googleFonts: {
    preload: true,
    display: 'swap',
    families: {
      Montserrat: '100..900',
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
