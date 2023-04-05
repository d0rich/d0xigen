<script setup lang="ts">
const { $mermaid } = useNuxtApp()

const props = defineProps<{
  code: string
}>()

const decodedCode = computed(() => {
  return atob(props.code)
})

const codeBlock = ref<HTMLPreElement | null>(null)
const isHidden = ref(true)

async function renderMermaidDiagram() {
  isHidden.value = true
  if (codeBlock.value) {
    await $mermaid.run({
      nodes: [codeBlock.value],
      suppressErrors: false
    })
    isHidden.value = false
  }
}

useSafeOnMounted(codeBlock as Ref<HTMLElement>, () => {
  renderMermaidDiagram()
})
</script>

<template>
  <figure
    ref="codeBlock"
    :class="{
      'opacity-0': isHidden
    }"
    v-text="decodedCode"
  ></figure>
</template>
