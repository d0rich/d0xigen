<script lang="ts">
export default {
  name: 'DocsLayout'
}
</script>

<template>
  <DLayoutHeader />
  <div class="flex justify-around w-fit flex-col-reverse md:flex-row">
    <DLayoutNavSidebar />
    <main class="pt-24 min-h-[150vh]">
      <slot />
    </main>
  </div>
</template>
