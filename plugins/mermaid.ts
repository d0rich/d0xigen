import type mermaid from 'mermaid'

declare module '#app' {
  interface NuxtApp {
    $mermaid: typeof mermaid
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $mermaid: typeof mermaid
  }
}

export default defineNuxtPlugin(async () => {
  const colorMode = useColorMode()
  const { default: mermaid } = await import('mermaid')
  mermaid.initialize({
    startOnLoad: false,
    theme: colorMode.value
  })

  watch(colorMode, (mode) => {
    mermaid.initialize({
      theme: mode.value
    })
  })

  return {
    provide: {
      mermaid: mermaid
    }
  }
})
