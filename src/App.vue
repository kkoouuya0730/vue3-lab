<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from './supabase'
import { useAuthStore } from './stores/auth'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/parts/Header.vue'
import Footer from './components/parts/Footer.vue'
import UtilAuthDialog from './components/parts/utils/UtilAuthDialog.vue'
import { useAppStore } from './stores/app'
import {
  signUpSupabase,
  signInSupabase,
  signOutSupabase
} from '@/supabase'
import type { UserInfo } from './types/auth'
import 'ress'

const auth = useAuthStore()
const route = useRoute()
const router = useRouter()
const useApp = useAppStore()

const isDialogOpen = ref(false)
const isLoading = ref(false)

const contentStyleClass = computed(() => {
  return useApp.isFooter ? 'content-footer' : 'content-no-footer'
})

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
    let data = null

    switch (mode) {
      case 'signup': {
        data = await signUpSupabase(userInfo)
        break
      }
      case 'signin': {
        data = await signInSupabase(userInfo)
        break
      }
      default:
        break
    }
    if (data?.user?.identities?.length === 0) {
      throw new Error('this mail is already used')
    }
    if (data) {
      auth.setUser(data.user)
    }
  } catch (error: any) {
    alert(error.message)
  } finally {
    isLoading.value = false
    isDialogOpen.value = false
  }
}

const signOut = async () => {
  isLoading.value = true
  try {
    await signOutSupabase()
    auth.clearUser()

    if (route.meta.requiresAuth) router.push({ name: 'top' })
  } catch (error: any) {
    alert(error.message)
  } finally {
    isLoading.value = false
  }
}

supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN' && session) auth.setUser(session.user)
  if (event == 'SIGNED_OUT') auth.clearUser()
})
</script>

<template>
  <div class="app-container">
    <div class="header">
      <Header
        :isLogin="auth.isLoggedIn"
        @onClickDialogOpen="openDialog"
        @onClickLogout="signOut"
      />
    </div>
    <div :class="contentStyleClass">
      <RouterView />
      <UtilAuthDialog
        :visible="isDialogOpen"
        :is-loading="isLoading"
        @onClickLoginButton="authAction"
        @onClickSignupButton="authAction"
        @onClickDialogClose="closeDialog"
      />
    </div>
    <div class="footer" v-if="useApp.isFooter">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #f8f9fa;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

/* TODO ここきれいにしたい */
.content-footer {
  background-color: #ecf5ff;
  display: flex;
  justify-content: center;
  padding: 120px;
  max-width: 1200px;
  margin: 0 auto;
}
.content-no-footer {
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  padding: 120px;
  max-width: 1200px;
  margin: 0 auto;
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
