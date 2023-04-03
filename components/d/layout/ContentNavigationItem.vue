<script setup lang="ts">
import { D0richNavItem } from '../../../utils/types'

const props = defineProps<{
  navItem: D0richNavItem
  parentPath?: string
}>()

const route = useRoute()

const { showContentTree } = useDocsLayoutState()
const showChildren = ref(false)
const isActive = computed(() => {
  const path = props.navItem._path
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
})
// const isExact = computed(() => {
//   return route.path === props.navItem._path
// })
const haveChildren = computed(() => {
  return !!props.navItem.children && !!props.navItem.children.length
})

onBeforeMount(() => {
  showChildren.value = isActive.value
})
</script>

<template>
  <li>
    <div
      class="grid grid-cols-[24px_1fr] items-start gap-x-4 py-1 transition-colors"
    >
      <DBtn
        v-if="haveChildren"
        tag="button"
        no-rotate
        @click="showChildren = !showChildren"
      >
        <Icon
          :name="
            !showChildren ? 'ic:sharp-chevron-right' : 'ic:sharp-expand-more'
          "
          class="text-2xl"
        />
      </DBtn>
      <div v-else />

      <div>
        <DBtn
          :to="navItem._path"
          highlight="negative-list-item"
          no-rotate
          text-transform="none"
          @click="showContentTree = false"
        >
          {{ navItem.title }}
        </DBtn>
        <ul v-show="haveChildren && showChildren">
          <DLayoutContentNavigationItem
            v-for="child in navItem.children"
            :key="child._path"
            :nav-item="child"
            :parent-path="navItem._path"
          />
        </ul>
      </div>
    </div>
  </li>
</template>
