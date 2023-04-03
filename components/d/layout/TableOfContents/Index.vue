<script lang="ts">
export default {
  name: 'DLayoutTableOfContents'
}
</script>

<script setup lang="ts">
const { tableOfContents } = useDocsLayoutState()
</script>

<template>
  <aside class="px-4 md:px-0 md:w-72">
    <nav v-if="tableOfContents" class="md:sticky md:z-0 md:top-32 md:overflow-hidden">
      <h1 v-if="tableOfContents.links.length" class="text-neutral-500 mb-2">
        On this page:
      </h1>
      <ul>
        <DLayoutTableOfContentsItem
          v-for="link in tableOfContents.links"
          :key="link.id"
          :link="link"
          :active="[]"
        />
      </ul>
    </nav>
    <hr class="mt-5 md:hidden" />
  </aside>
</template>
