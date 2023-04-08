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
    gtag?: {
      id?: string
    }
  }
  d0richIndex?: {
    complexity?: number
    tags?: string[]
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
      mermaid: true,
      gtag: {
        id: 'G-XXXXXXXXXX'
      }
    },
    d0richIndex: {
      complexity: undefined,
      tags: []
    }
  }
})
