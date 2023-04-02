<script setup lang="ts">
import { NavItem } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  navItem: NavItem
  parentPath?: string
}>()

const route = useRoute()

const { showContentTree } = useDocsLayoutState()
const showChildren = ref(false)
const link = computed(() => {
  if (props.navItem?.children?.length) {
    return props.navItem.children[0]._path
  } else {
    return props.navItem._path
  }
})
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
      class="w-full flex items-center pl-5 py-1 transition-colors"
    >
      <DBtn tag="button" class="w-4 h-4 -ml-4 pr-1 " @click="showChildren = !showChildren">
        <Icon
          v-if="haveChildren"
          name="heroicons:chevron-right"
          class="transition-transform"
          :class="{ 'rotate-90': showChildren }"
        />
      </DBtn>

      <DBtn :to="navItem._path" @click="showContentTree = false" highlight="negative-list-item">
        {{ navItem.title }}
      </DBtn>
    </div>
    <ul v-show="haveChildren && showChildren">
      <DLayoutContentNavigationItem
        v-for="child in navItem.children"
        :key="child._path"
        :nav-item="child"
        :parent-path="navItem._path"
      />
    </ul>
  </li>
</template>

<style scoped>
.active {
  @apply border-r-4 border-green-400;
}
li ul {
  @apply pl-3;
}
</style>
