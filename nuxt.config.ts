import svgLoader from 'vite-svg-loader'
import { hoistUseStatements } from './utils/vite/hoist-use-statements'
import { version } from './package.json'

export default defineNuxtConfig({
  // devtools: true,
  // routes: getRoutes(),
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@nuxt/image',
    '@nuxtjs/svg-sprite',
    '@vueuse/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
      },
    ],
  ],
  // https://github.com/storybook-vue/storybook-nuxt/issues/57
  components: [
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],
  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: hoistUseStatements(`@import "~/assets/scss/_style-resources.scss";`),
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
  runtimeConfig: {
    public: {
      // Default values only
      // Override these values in your .env file
      baseURL: '',
      apiURL: '',
      apiEndpointPrefix: '/api',
      version,
    },
  },
  // https://github.com/nuxt-modules/svg-sprite#options
  svgSprite: {
    input: '~/assets/images/icons',
    output: '~/assets/images/sprites',
  },
  // https://github.com/rezozero/intervention-request-provider
  image: {
    providers: {
      storyblok: {
        baseURL: 'https://a.storyblok.com'
      },
    //   interventionRequest: {
    //     name: 'interventionRequest',
    //     provider: '~/node_modules/@rezo-zero/intervention-request-provider/dist/runtime/index',
    //   },
    },
    quality: 75,
    screens: {
      xs: 375, // override size to match our breakpoints
      xl: 1440, // override size to match our breakpoints
      hd: 1920, // additional size
      qhd: 2500, // additional size
    },
    // @ts-ignore not working with [1]
    densities: '1',
  },
})
