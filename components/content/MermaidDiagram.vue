<script setup lang="ts">
import mermaid from 'mermaid'

const props = defineProps<{
  code: string
}>()

const codeBlock = ref<HTMLPreElement | null>(null)
const isHidden = ref(true)

useSafeOnMounted(codeBlock as Ref<HTMLElement>, async () => {
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
  <pre
    ref="codeBlock"
    :class="{
      'opacity-0': isHidden
    }"
    v-text="decodedCode"
  ></pre>
</template>
