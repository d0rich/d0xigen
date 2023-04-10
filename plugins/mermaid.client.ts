import type { Mermaid } from 'mermaid'
// @ts-ignore 2307
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'

declare module '#app' {
  interface NuxtApp {
    $mermaid: Mermaid | undefined
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $mermaid: Mermaid | undefined
  }
}

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  if (!appConfig.d0xigen.features.mermaid) {
    return {
      provide: {
        mermaid: undefined
      }
    }
  }
  const colorMode = useColorMode()
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
      mermaid: mermaid as Mermaid | undefined
    }
  }
})
