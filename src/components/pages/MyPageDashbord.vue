<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import SideBar from '../parts/SideBar.vue'
import { useAppStore } from '@/stores/app'

const useApp = useAppStore()

useApp.setIsFooter(false)

onBeforeUnmount(() => useApp.setIsFooter(true))
</script>
<template>
  <div class="container">
    <div class="side-bar">
      <SideBar></SideBar>
    </div>
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.side-bar {
  margin-right: 50px;
  width: auto;
}

.view {
  width: 100%;
}
</style>
