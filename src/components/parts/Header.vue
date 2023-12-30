<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useToast } from 'primevue/usetoast'
import menuPageItems from '../../data/myPageMenuItems.json'
import type { MenuItem } from '@/types/menu'
const toast = useToast()

interface Props {
  isLogin: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['onClickDialogOpen', 'onClickLogout'])

const items: MenuItem[] = menuPageItems.menuItems
const menu = ref()
const isLogin = computed(() => props.isLogin)

watch(isLogin, (newLogin) => {
  if (newLogin === true) {
    showSuccess()
  }
})

const showSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Login Success',
    detail: 'User Login Success',
    life: 3000
  })
}

const showMyPageMenu = (event: any) => {
  menu.value.toggle(event)
}

const loginButtonClick = () => {
  emit('onClickDialogOpen')
}

const handleSignOut = () => {
  emit('onClickLogout')
}
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="title"><i>Link-Share</i></h1>
      <nav class="nav-icons">
        <RouterLink to="/" class="nav-link">
          <span class="pi pi-home icon"></span>
        </RouterLink>
        <RouterLink
          :to="{
            path: '/link/latestLink',
            params: { category: 'latestLink' }
          }"
          class="nav-link"
        >
          <span class="pi pi-link"></span>
        </RouterLink>
        <div v-if="isLogin" class="nav-link">
          <PrButton
            class="pi pi-user"
            @click="showMyPageMenu"
            aria-haspopup="true"
            aria-controls="overlay_menu"
          >
          </PrButton>
        </div>
        <PrButton v-if="!isLogin" @click="loginButtonClick"
          >Login</PrButton
        >
        <PrToast />
        <PrMenu
          ref="menu"
          id="overlay_menu"
          :model="items"
          :popup="true"
          class="my-page-menu"
        >
          <template #item="{ item, props }">
            <router-link
              v-if="item.route"
              v-slot="{ href, navigate }"
              :to="item.route"
              custom
            >
              <a
                v-ripple
                :href="href"
                v-bind="props.action"
                @click="navigate"
              >
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </router-link>
            <div
              v-else
              style="cursor: pointer"
              @click="handleSignOut"
            >
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </div>
          </template>
        </PrMenu>
      </nav>
    </div>
  </header>
</template>

<style>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.my-page-menu {
  margin-top: 15px;
}

.title {
  margin-left: 30px;
}

.nav-icons {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
</style>
