<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  visible: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['onClickDialogClose', 'onClickLoginButton'])

const inputUsername = ref('')
const inputPassword = ref('')
const isLoading = ref(false)
const isLoginBtnDisabled = ref(false)
const isCancelBtnDisabled = ref(false)

const isOpen = computed(() => props.visible)
const isLoginBtnDisabledByValid = computed(() => {
  if (inputUsername.value === '' || inputPassword.value === '') return true
  return false
})

const cancelButtonClick = () => {
  emit('onClickDialogClose')
}

const loginButtonClick = () => {
  isLoading.value = true
  isLoginBtnDisabled.value = true
  isCancelBtnDisabled.value = true

  setTimeout(() => {
    isLoading.value = false
    emit('onClickLoginButton')
  }, 5000);
}

</script>
<template>
  <PrDialog modal position="center" v-model:visible="isOpen" :pt="{
    mask: {
      style: 'backdrop-filter: blur(2px)'
    }
  }">
    <template #container>
      <div class="flex flex-column px-8 py-5 gap-4"
        style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--primary-400), var(--primary-700))">
        <div class="inline-flex flex-column gap-2">
          <label for="username" class="text-primary-50 font-semibold">Username</label>
          <PrInputText v-model="inputUsername" id="username" class="bg-white-alpha-20 border-none p-3 text-primary-50">
          </PrInputText>
        </div>
        <div class="inline-flex flex-column gap-2">
          <label for="password" class="text-primary-50 font-semibold">Password</label>
          <PrInputText v-model="inputPassword" id="password" class="bg-white-alpha-20 border-none p-3 text-primary-50"
            type="password">
          </PrInputText>
        </div>
        <div class="flex align-items-center gap-2">
          <PrButton label="Sign-In" @click="loginButtonClick" text :disabled="isLoginBtnDisabled || isLoginBtnDisabledByValid"
            class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></PrButton>
          <PrButton label="Cancel" @click="cancelButtonClick" text :disabled="isCancelBtnDisabled"
            class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></PrButton>
        </div>
      </div>
      <PrProgressBar v-if="isLoading" mode="indeterminate"></PrProgressBar>
    </template>
  </PrDialog>
</template>
