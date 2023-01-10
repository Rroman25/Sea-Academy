export default {
  mode: 'universal',
  cache: true,
  server: {
    port: 3339,
    host: '0.0.0.0'
  },
  vue: {
    config: {
      watchOptions: {
        poll: true
      }
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title:
      '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.4.1.min.js',
        integrity: 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=',
        crossorigin: 'anonymous',
        async: true
      }
    ],
    link: [
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/layout/Loading.vue',
  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/main.scss',
    '~/assets/style/routes_transitions.scss',
    'leaflet/dist/leaflet.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vueSlider.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/moment',
      {
        defaultTimezone: 'Europe/Moscow',
        locales: ['ru'],
        defaultLocale: 'ru'
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /* postcss: {
      autoprefixer: require('autoprefixer')({
        browsers: ['last 2 version', '> 2%']
      })
    }, */
    /* loaders: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                require('autoprefixer')({
                  browsers: ['last 2 version', '> 2%']
                })
              }
            }
          }
        ]
      },
      'sass-loader'
    ], */
    /*
     ** You can extend webpack config here
     */
    extend (config, { isDev, isClient }) {
      /* if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      } */
    }
  },
  router: {
  }
}
