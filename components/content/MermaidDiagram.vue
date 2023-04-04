<script setup lang="ts">
import mermaid from 'mermaid'
mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' })

const codeBlock = ref<HTMLPreElement | null>(null)
const isHidden = ref(true)
onMounted(async () => {
  if (codeBlock.value) {
    await mermaid.run({
      nodes: [codeBlock.value]
    })
    isHidden.value = false
  }
})
</script>

<template>
  <pre :class="{
    'hidden': isHidden,
  }" ref="codeBlock"><slot/></pre>
</template>
