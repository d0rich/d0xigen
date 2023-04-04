import mermaid from 'mermaid'

declare module '#app' {
  interface NuxtApp {
    $mermaid: typeof mermaid
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$mermaid = mermaid
})
