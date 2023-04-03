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
const { data: doc } = await useAsyncData('page-data' + route.path, () => {
  return queryContent(route.path).findOne()
})

tableOfContents.value = doc.value?.body?.toc ?? null
</script>

<template>
  <div>
    <NuxtLayout>
      <ContentRenderer
        v-if="doc && doc._type === 'markdown'"
        :value="doc"
        tag="article"
      >
        <ContentRendererMarkdown :value="doc" />
      </ContentRenderer>
    </NuxtLayout>
  </div>
</template>
