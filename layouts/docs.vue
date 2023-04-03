<script lang="ts">
export default {
  name: 'DocsLayout'
}
</script>

<template>
  <DLayoutHeader />
  <div class="pt-24 flex justify-around w-fit flex-col-reverse md:flex-row">
    <DLayoutNavSidebar />
    <main class="min-h-[150vh]">
      <slot />
    </main>
  </div>
</template>
