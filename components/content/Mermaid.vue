<script setup lang="ts">
const { $mermaid } = useNuxtApp()

const props = defineProps<{
  code: string
}>()

const decodedCode = computed(() => {
  return atob(props.code)
})

const root = ref<HTMLElement | null>(null)
const codeBlock = ref<HTMLElement | null>(null)
const isDiagramLoading = ref(true)

async function renderMermaidDiagram() {
  isDiagramLoading.value = true
  if (codeBlock.value && $mermaid) {
    try {
      await $mermaid.run({
        nodes: [codeBlock.value],
        suppressErrors: true
      })
    } catch (e) {}

    isDiagramLoading.value = false
  }
}

useSafeOnMounted(root as Ref<HTMLElement>, () => {
  renderMermaidDiagram()
})
</script>

<template>
  <figure ref="root" class="relative">
    <pre
      ref="codeBlock"
      :class="{
        'opacity-0': isDiagramLoading
      }"
      v-text="decodedCode"
    ></pre>
    <div>
      <div v-if="isDiagramLoading" class="absolute inset-0 font-serif">
        <DAnimationSpinner class="max-h-[calc(100%_-_2rem)]" />
        Mermaid diagram is loading...
      </div>
    </div>
  </figure>
</template>
