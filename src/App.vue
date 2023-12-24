<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from './supabase';
import { useAuthStore } from './stores/auth';
import type { UserInfo } from './types/auth';
const auth = useAuthStore();

import Header from './components/parts/Header.vue'
import Footer from './components/parts/Footer.vue'
import UtilDialog from './components/parts/utils/UtilDialog.vue';
import 'ress'

const isDialogOpen = ref(false)
const isLoading = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}
const closeDialog = () => {
  isDialogOpen.value = false
  isLoading.value = false
}

const authAction = async (userInfo: UserInfo, mode: string) => {
  try {
    isLoading.value = true
    let rdata = null;
    let rerror = null;

    switch (mode) {
      case 'signup': {
        const { data, error } = await supabase.auth.signUp({
          email: userInfo.email,
          password: userInfo.password,
          options: {
            emailRedirectTo: 'http://localhost:5173'
          }
        })
        rdata = data
        rerror = error
        break;
      }
      case 'signin': {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: userInfo.email,
          password: userInfo.password
        })
        rdata = data
        rerror = error
        break;
      }
      default:
        break;
    }
    if (rerror) throw rerror
    if (rdata?.user?.identities?.length === 0) {
      throw new Error('this mail is already used')
    }
    if (rdata) {
      auth.setUser(rdata.user)
    }
  } catch (error: any) {
    alert(error.message)
  } finally {
    isLoading.value = false
    isDialogOpen.value = false
  }
}

</script> 

<template>
  <div class="app-container">

    <div class="header">
      <Header :isLogin="auth.isLoggedIn" @onClickDialogOpen="openDialog" />
    </div>
    <div class="content">
      <RouterView />
      <UtilDialog :visible="isDialogOpen" :is-loading="isLoading" @onClickLoginButton="authAction"
        @onClickSignupButton="authAction" @onClickDialogClose="closeDialog" />
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