// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['@nuxt-themes/typography', '@d0rich/nuxt-design-system'],
  app: {
    pageTransition: {
      name: 'section',
      mode: 'out-in'
    }
  },
  // css: ['assets/css/theme.css'],
  runtimeConfig: {
    public: {
      isDev: process.env.NODE_ENV === 'development',
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'one-dark-pro'
      }
    },
    // sources: {
    //   fa: {
    //     prefix: '/', // All contents inside this source will be prefixed with `/fa`
    //     driver: 'fs',
    //     base: './',
    //     ignore: /.*(?<!README\.md)$/
    //   }
    // },
    markdown: {
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  }
})
