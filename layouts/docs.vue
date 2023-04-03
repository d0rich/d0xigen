<script setup lang="ts">
import { D0richNavItem } from '../utils/types'

const { showContentTree } = useDocsLayoutState()
</script>

<template>
  <DLayoutHeader />
  <div class="pt-24 flex justify-around w-fit flex-col-reverse md:flex-row">
    <aside
      class="w-72 px-3 fixed z-20 h-full bg-neutral-50 top-0 transition-all md:h-auto md:relative md:bg-inherit md:left-0"
      :class="{
        '-left-72': !showContentTree,
        'left-0': showContentTree
      }"
    >
      <nav class="sticky top-32">
        <ContentNavigation
          v-slot="{ navigation }: { navigation: D0richNavItem[] }"
        >
          <ul>
            <DLayoutContentNavigationRootItem
              v-for="navItem in navigation"
              :key="navItem._path"
              :nav-item="navItem"
            />
          </ul>
        </ContentNavigation>
      </nav>
    </aside>
    <main class="min-h-[150vh]">
      <slot />
    </main>
  </div>
</template>
