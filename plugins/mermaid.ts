import mermaid from 'mermaid'

export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  mermaid.initialize({
    startOnLoad: false,
    theme: colorMode.value
  })

  watch(colorMode, (mode) => {
    mermaid.initialize({
      theme: colorMode.value
    })
  })
})
