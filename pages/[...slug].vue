<script lang="ts">
export default {
  name: 'DocPage'
}
</script>

<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})
const route = useRoute()
const { tableOfContents } = useDocsLayoutState()
const { data: doc, error } = await useAsyncData('page-data' + route.path, () =>
  queryContent(route.path).findOne()
)

function setToc() {
  tableOfContents.value = doc.value?.body?.toc ?? null
}

// It is main ToC setter
setToc()

// For some reason, ToC dissappears on initial load on page with Mermaid diagram. So set ToC again on mounted.
onMounted(() => {
  setToc()
})
</script>

<template>
  <div>
    <DAsyncSafeMeta
      v-if="doc"
      :title="doc.title"
      :description="doc.description"
    />
    <DAsyncSafeMeta v-else-if="error" title="Page not found" />
    <NuxtLayout>
      <ContentRenderer v-if="doc && doc._type === 'markdown'" :value="doc">
        <ContentRendererMarkdown tag="article" class="d-article" :value="doc" />
      </ContentRenderer>
      <DError404 v-else-if="error" class="mt-[20vh]" />
    </NuxtLayout>
  </div>
</template>

<style>
.d-article :is(h1, h2, h3, h4, h5, h6) {
  @apply !pt-20 !-mt-20;
}
</style>
