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
const { data: doc } = await useAsyncData('page-data' + route.path, () =>
  queryContent(route.path).findOne()
)

tableOfContents.value = doc.value?.body?.toc ?? null
</script>

<template>
  <div>
    <DAsyncSafeMeta
      v-if="doc"
      :title="doc.title"
      :description="doc.description"
    />
    <NuxtLayout>
      <ContentRenderer v-if="doc && doc._type === 'markdown'" :value="doc">
        <ContentRendererMarkdown tag="article" class="d-article" :value="doc" />
      </ContentRenderer>
    </NuxtLayout>
  </div>
</template>

<style>
.d-article :is(h1, h2, h3, h4, h5, h6) {
  @apply !pt-20 !-mt-20;
}
</style>
