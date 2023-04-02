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
// const toc = useToc()
const { data: doc } = await useAsyncData('page-data' + route.path, () => {
  return queryContent(route.path).findOne()
})
// toc.value = doc.value?.body?.toc ?? null
</script>

<template>
  <div>
    <NuxtLayout>
      <ContentRenderer v-if="doc && doc._type === 'markdown'" :value="doc" tag="article">
        <ContentRendererMarkdown :value="doc" class="d-article" />
      </ContentRenderer>
    </NuxtLayout>
  </div>
</template>

<style>
.d-article {
  @apply prose dark:prose-invert font-sans
         md:prose-lg
         mx-auto px-3 sm:px-0
         dark:prose-headings:text-cyan-400 dark:prose-a:text-inherit
         dark:prose-p:first-letter:bg-cyan-800
         dark:prose-blockquote:border-cyan-400
         dark:marker:text-cyan-400;
}
.d-article blockquote p::before {
  content: none;
}
</style>
