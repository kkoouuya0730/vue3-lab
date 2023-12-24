import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const isLoggedIn = computed(() => {
    if (!user.value) return false
    return true
  })

  function setUser(userData: any) {
    user.value = userData
  }

  function clearUser() {
    user.value = null
  }

  return { user, isLoggedIn, setUser, clearUser }
})
