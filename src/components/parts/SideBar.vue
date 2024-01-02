<script setup lang="ts">
import menuPageItems from '../../data/myPageMenuItems.json'
import type { MenuItem } from '@/types/menu'

const items: MenuItem[] = menuPageItems.menuItems
</script>
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.icon">
        <PrButton>
          <span
            :class="item.sidebarIcon ? item.sidebarIcon : item.icon"
          />
          <span>
            {{ item.sidebarLabel ? item.sidebarLabel : item.label }}
          </span>
        </PrButton>
      </li>
    </ul>
  </div>
</template>

<style></style>
