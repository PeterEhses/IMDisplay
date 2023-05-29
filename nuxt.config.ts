// https://nuxt.com/docs/api/configuration/nuxt-config
// import { globSync } from "glob" // using glob here but any package you are comfortable with works
// const routes = globSync('./content/**/*.md')
//     .map(path => path.slice(7, -3))

export default defineNuxtConfig({
  ssr: true,
  // nitro: {
  //   preset: 'service-worker'
  // },
  // nitro: {
  //   prerender: {
  //     crawlLinks: true
  //   }
  // }, 
  // nitro: {
  //   preset: 'service-worker'
  // },

  app: {
    baseURL: '/IMDisplay/' // baseURL: '/<repository>/'
  },
  head: {
    title: 'IMDisplay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-content-assets',
    '@nuxt/content'

  ],

  // // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: '/',
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   manifest: {
  //     lang: 'en'
  //   }
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  // content: {
  //   experimental: {
  //     clientDb: true
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
})
