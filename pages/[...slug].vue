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
const { data: doc, error } = useAsyncData(
  'page-data' + route.path,
  async () => {
    const docPromise = queryContent(route.path).findOne()
    const surroundPromise = queryContent().findSurround(route.path, {
      before: 1,
      after: 1
    })
    const [doc, surround] = await Promise.all([docPromise, surroundPromise])
    return {
      ...doc,
      before: surround[0],
      after: surround[1]
    }
  }
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
        <nav class="justify-center grid sm:grid-cols-2 gap-8 items-start mt-32">
          <NuxtLink
            v-if="doc.before"
            :to="doc.before._path"
            class="transition-transform hover:scale-90"
          >
            <DCard dense>
              <DCardTitle
                ><Icon name="ic:sharp-arrow-back-ios" />Previous</DCardTitle
              >
              <h4 class="text-xl font-bold">{{ doc.before.title }}</h4>
              <p>{{ doc.before.description }}</p>
            </DCard>
          </NuxtLink>
          <NuxtLink
            v-if="doc.after"
            :to="doc.after._path"
            class="transition-transform hover:scale-90"
          >
            <DCard dense>
              <DCardTitle
                >Next<Icon name="ic:sharp-arrow-forward-ios"
              /></DCardTitle>
              <h4 class="text-xl font-bold">{{ doc.after.title }}</h4>
              <p>{{ doc.after.description }}</p>
            </DCard>
          </NuxtLink>
        </nav>
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
