import mermaid from 'mermaid'

export default defineNuxtPlugin(() => {
  mermaid.initialize({ startOnLoad: false })
})
