<script setup lang="ts">
import menuPageItems from '../../data/myPageMenuItems.json'
import type { MenuItem } from '@/types/menu'
import { useRoute } from 'vue-router'

const route = useRoute()

const items: MenuItem[] = menuPageItems.menuItems

const sideButtonStyle = (navInfo: MenuItem) => {
  if (navInfo.route && navInfo.route === route.fullPath) {
    return 'side-button'
  }
  return ''
}
</script>
<template>
  <div>
    <ul class="side-nav">
      <li class="link" v-for="item in items" :key="item.icon">
        <PrButton :class="sideButtonStyle(item)">
          <span
            :class="item.sidebarIcon ? item.sidebarIcon : item.icon"
          />
          <span class="link-title">
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

.side-button {
  background-color: lightblue;
  border-radius: 30px;
  width: 100%;
}

.link-title {
  margin-left: 10px;
}
</style>
