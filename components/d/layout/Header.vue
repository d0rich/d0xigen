<script lang="ts">
export default {
  name: 'DLayoutHeader'
}
</script>

<template>
  <DWrapShape tag="header" class="absolute top-0 left-0 right-0"
            shape-class="bg-black"
            :shape-style="{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1rem), 0 100%)'
            }">
    <nav class="p-4 font-serif font-semibold">
      <DBtn tag="button" class="text-2xl">
        <Icon name="ic:sharp-menu" />
      </DBtn>
      d0rich-docs
    </nav>
  </DWrapShape>
</template>
