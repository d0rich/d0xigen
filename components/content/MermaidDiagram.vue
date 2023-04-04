<script setup lang="ts">
import mermaid from 'mermaid'

defineProps<{
  code: string
}>()

const codeBlock = ref<HTMLPreElement | null>(null)
const isHidden = ref(true)
onMounted(async () => {
  if (codeBlock.value) {
    await mermaid.run({
      nodes: [codeBlock.value],
      suppressErrors: false
    })
    isHidden.value = false
  }
})
</script>

<template>
  <pre :class="{
    'opacity-0': isHidden,
  }" ref="codeBlock"><slot/></pre>
</template>
