interface ThemeConfig {
  title?: string
  description?: string
  url?: string
  author?: string
  social?: {
    github?: string
  }
  seo?: {
    keywords?: string[]
  }
  og?: {
    image?: string
  }
  features?: {
    mermaid?: boolean
  }
}

declare module 'nuxt/schema' {
  interface AppConfigInput {
    d0xigen?: ThemeConfig
  }
}

export default defineAppConfig({
  d0xigen: {
    title: 'd0xigen',
    description: 'My awesome docs',
    url: 'https://d0rich.me',
    author: 'Nikolay Dorofeev',
    social: {
      github: undefined
    },
    seo: {
      keywords: []
    },
    og: {
      image: '/og/image.jpg'
    },
    features: {
      /**
       * At the moment, you need to include/exclude mermaid plugin from imports in nuxt.config.ts in d0xigen
       */
      mermaid: false
    }
  }
})
