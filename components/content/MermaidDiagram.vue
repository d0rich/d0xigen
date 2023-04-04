<script setup lang="ts">
import mermaid from 'mermaid'

const props = defineProps<{
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
const decodedCode = computed(() => {
  return atob(props.code)
})
</script>

<template>
  <pre :class="{
    'opacity-0': isHidden,
  }" ref="codeBlock" v-text="decodedCode"></pre>
</template>
