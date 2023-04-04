import mermaid from 'mermaid'

export default defineNuxtPlugin((nuxtApp) => {
  mermaid.initialize({ startOnLoad: false })
})
