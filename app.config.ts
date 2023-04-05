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
    description: '🌬🕮 Docs to breath life into your project',
    url: 'https://d0xigen.d0rich.me',
    author: 'Nikolay Dorofeev',
    social: {
      github: 'https://github.com/d0rich/d0xigen'
    },
    seo: {
      keywords: [
        'documentation',
        'docs',
        'software development',
        'd0xigen',
        'd0rich'
      ]
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