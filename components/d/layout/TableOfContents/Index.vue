<script lang="ts">
export default {
  name: 'DLayoutTableOfContents'
}
</script>

<script setup lang="ts">
const { tableOfContents } = useDocsLayoutState()
const headersToHighlight = useTocObserver()
</script>

<template>
  <aside class="top-0 md:sticky md:h-screen md:w-72">
    <div class="h-full grid md:grid-cols-[auto,_1fr]">
      <div
        class="h-full w-4 bg-white hidden md:block"
        style="clip-path: polygon(100% 0, 50% 0, 0 100%, 100% 100%)"
      />
      <nav
        v-if="tableOfContents"
        class="background-container"
      >
        <div
          class="absolute -z-10 inset-0 bg-black opacity-90"
        />
        <h2 v-if="tableOfContents.links.length" class="text-neutral-500 mb-2">
          On this page:
        </h2>
        <ul>
          <DLayoutTableOfContentsItem
            v-for="link in tableOfContents.links"
            :key="link.id"
            :link="link"
            :active="headersToHighlight"
          />
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.background-container {
  background-image: url(../../../../assets/img/d-bw.webp);
  @apply h-full relative px-4 pt-20 pb-10 isolate
         bg-cover bg-center;
}
</style>
