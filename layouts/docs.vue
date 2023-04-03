<script lang="ts">
export default {
  name: 'DocsLayout'
}
</script>

<template>
  <DLayoutHeader />
  <div
    class="grid md:grid-cols-[1fr,_auto] lg:grid-cols-[auto,_1fr,_auto] w-full gap-y-8"
  >
    <DLayoutNavSidebar class="order-1" />
    <main class="order-2 md:pt-24 px-4 md:px-6 min-h-[150vh]">
      <slot />
    </main>
    <DLayoutTableOfContents class="order-1 md:order-3" />
  </div>
</template>
