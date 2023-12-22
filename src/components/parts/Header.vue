<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, watch } from 'vue';
import { useToast } from "primevue/usetoast";
const toast = useToast();

interface Props {
  isLogin: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['onClickDialogOpen'])

const loginButtonClick = () => {
  emit('onClickDialogOpen')
}

const isLogin = computed(() => props.isLogin)

watch(isLogin, (newLogin) => {
  if (newLogin === true) {
    showSuccess()
  }
})

const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Login Success', detail: 'User Login Success', life: 3000 });
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
        <RouterLink :to="{ path: '/link/latestLink', params: { category: 'latestLink' } }" class="nav-link">
          <span class="pi pi-link"></span>
        </RouterLink>
        <RouterLink v-if="isLogin" to="/my-page" class="nav-link">
          <span class="pi pi-user"></span>
        </RouterLink>
        <PrButton v-if="!isLogin" @click="loginButtonClick">Login</PrButton>
        <PrToast />
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

.title {
  margin-left: 30px;
}

.nav-icons {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
</style>
