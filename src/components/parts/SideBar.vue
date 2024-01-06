<script setup lang="ts">
import menuPageItems from '../../data/myPageMenuItems.json'
import type { MenuItem } from '@/types/menu'

const items: MenuItem[] = menuPageItems.menuItems
</script>
<template>
  <div>
    <ul class="side-nav">
      <li class="link" v-for="item in items" :key="item.icon">
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

<style>
.side-nav {
  list-style: none;
}

.link {
  margin-bottom: 15px;
  font-size: large;
  white-space: nowrap;
}
</style>
