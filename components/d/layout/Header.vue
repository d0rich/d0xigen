<script lang="ts">
export default {
  name: 'DLayoutHeader'
}
</script>

<script setup lang="ts">
const { showContentTree } = useDocsLayoutState()
</script>

<template>
  <DWrapShape
    tag="header"
    class="fixed top-0 z-50 left-0 right-0"
    shape-class="bg-black"
    :shape-style="{
      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1rem), 0 100%)'
    }"
  >
    <nav class="p-4 font-serif font-semibold">
      <DBtn
        tag="button"
        class="!inline-block text-2xl md:!hidden"
        @click="showContentTree = !showContentTree"
      >
        <Icon
          :name="showContentTree ? 'ic:sharp-menu-open' : 'ic:sharp-menu'"
        />
      </DBtn>
      <DAnimationHypnosis class="inline-block w-12 -my-2" />
      d0rich-docs
    </nav>
  </DWrapShape>
</template>
