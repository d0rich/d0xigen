<script lang="ts">
export default {
  name: 'DocsLayout'
}
</script>

<template>
  <DLayoutHeader />
  <div class="flex justify-between w-full flex-col-reverse md:flex-row gap-y-8">
    <DLayoutNavSidebar />
    <main class="md:pt-24 min-h-[150vh]">
      <slot />
    </main>
    <DLayoutTableOfContents />
  </div>
</template>
