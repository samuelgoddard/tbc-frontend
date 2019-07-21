export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#e5d1d1' },
  css: [
    '~/assets/css/main.css'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@ax2/lozad-module',
    'nuxt-purgecss',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: 'tailwind.config.js'
      }
    }
  },
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['nuxt-link-exact-active', 'fade-enter-active', 'fade-leave-active', 'fade-enter', '.fade-leave-to']
  },
  lozad: {
  },
  axios: {
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    extend(config, ctx) {
    }
  }
}
