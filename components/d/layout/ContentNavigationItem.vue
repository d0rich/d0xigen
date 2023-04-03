<script setup lang="ts">
import { D0richNavItem } from '../../../utils/types'

defineProps<{
  navItem: D0richNavItem
  parentPath?: string
}>()

const { showContentTree } = useDocsLayoutState()
</script>

<template>
  <li class="items-start py-1 transition-colors">
    <DBtn
      :to="navItem._path"
      highlight="negative-list-item"
      no-rotate
      text-transform="none"
      class="!font-medium"
      @click="showContentTree = false"
    >
      {{ navItem.title }}
    </DBtn>
  </li>
</template>
