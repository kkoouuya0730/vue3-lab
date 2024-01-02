import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  // state
  const isFooter = ref(true)

  // computed

  // action
  function setIsFooter(toggle: boolean) {
    isFooter.value = toggle
  }

  // return
  return { isFooter, setIsFooter }
})
