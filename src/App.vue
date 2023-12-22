<script setup lang="ts">
import { ref } from 'vue';

import Header from './components/parts/Header.vue'
import Footer from './components/parts/Footer.vue'
import UtilDialog from './components/parts/utils/UtilDialog.vue';
import 'ress'

const isDialogOpen = ref(false)
const isLogin = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}
const closeDialog = () => {
  isDialogOpen.value = false
}

const login = () => {
  isLogin.value = true
  isDialogOpen.value = false
}
</script>

<template>
  <div class="app-container">

    <div class="header">
      <Header :isLogin="isLogin" @onClickDialogOpen="openDialog" />
    </div>
    <div class="content">
      <RouterView />
      <UtilDialog :visible="isDialogOpen" @onClickLoginButton="login" @onClickDialogClose="closeDialog" />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #f8f9fa;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
}

.content {
  background-color: #ecf5ff;
  display: flex;
  justify-content: center;
  padding: 120px;
}

.footer {
  background-color: #f8f9fa;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>