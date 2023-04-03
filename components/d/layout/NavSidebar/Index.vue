<script lang="ts">
export default {
  name: 'DLayoutNavSidebar'
}
</script>

<script setup lang="ts">
const { showContentTree } = useDocsLayoutState()
</script>

<template>
  <aside
    class="w-72 px-3 fixed z-20 h-full bg-neutral-50 top-0 transition-all md:h-auto md:relative md:bg-inherit md:left-0"
    :class="{
      '-left-72': !showContentTree,
      'left-0': showContentTree
    }"
  >
    <nav class="sticky top-32">
      <ContentNavigation v-slot="{ navigation }: { navigation: DNavItem[] }">
        <ul>
          <DLayoutNavSidebarRootItem
            v-for="navItem in navigation"
            :key="navItem._path"
            :nav-item="navItem"
          />
        </ul>
      </ContentNavigation>
    </nav>
  </aside>
</template>
