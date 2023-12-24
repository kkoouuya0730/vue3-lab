<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { Email, Password } from '@/valueObject/auth';

const MODE = {
  SIGNUP: 'signup',
  SIGNIN: 'signin'
}

interface Props {
  visible: boolean
  isLoading: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['onClickDialogClose', 'onClickLoginButton', 'onClickSignupButton'])

const mode = ref(MODE.SIGNUP)
const inputEmail = ref('')
const inputPassword = ref('')
const inputUserInfo = reactive(
  {
    email: '',
    password: ''
  }
)

const isOpen = computed(() => props.visible)
const isLoading = computed(() => props.isLoading)
const isLoginBtnDisabledByValid = computed(() => {
  if (inputEmail.value === '' || inputPassword.value === '') return true
  return false
})

const switchMode = () => {
  mode.value = mode.value === MODE.SIGNUP ? MODE.SIGNIN : MODE.SIGNUP
}

const cancelButtonClick = () => {
  emit('onClickDialogClose')
}

const handlerButtonClick = () => {
  validateInputUserInfo()
  switch (mode.value) {
    case MODE.SIGNUP:
      emit('onClickSignupButton', inputUserInfo, mode.value)
      break;
    case MODE.SIGNIN:
      emit('onClickLoginButton', inputUserInfo, mode.value)
      break;
    default:
      break;
  }
}

const validateInputUserInfo = () => {
  try {
    const email = new Email(inputEmail.value)
    const password = new Password(inputPassword.value)
    inputUserInfo.email = email.value
    inputUserInfo.password = password.value
  } catch (error: any) {
    alert(error.message)
    emit('onClickDialogClose')
  }
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
          <label for="email" class="text-primary-50 font-semibold">Email</label>
          <PrInputText v-model="inputEmail" id="email" class="bg-white-alpha-20 border-none p-3 text-primary-50">
          </PrInputText>
        </div>
        <div class="inline-flex flex-column gap-2">
          <label for="password" class="text-primary-50 font-semibold">Password</label>
          <PrInputText v-model="inputPassword" id="password" class="bg-white-alpha-20 border-none p-3 text-primary-50"
            type="password">
          </PrInputText>
        </div>
        <div class="flex align-items-center gap-2">
          <PrButton v-if="mode === MODE.SIGNUP" label="Sign-Up" @click="handlerButtonClick" text
            :disabled="isLoading || isLoginBtnDisabledByValid"
            class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></PrButton>
          <PrButton v-if="mode === MODE.SIGNIN" label="Sign-In" @click="handlerButtonClick" text
            :disabled="isLoading || isLoginBtnDisabledByValid"
            class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></PrButton>
          <PrButton label="Cancel" @click="cancelButtonClick" text :disabled="isLoading"
            class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></PrButton>
        </div>
        <div class="flex align-items-center gap-2">
          <PrButton label="Sigh-Up" @click="switchMode" text :disabled="isLoading || mode === MODE.SIGNUP"
            class="p-1 text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></PrButton>
          /
          <PrButton label="Sign-In" @click="switchMode" text :disabled="isLoading || mode === MODE.SIGNIN"
            class="p-1 text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></PrButton>
        </div>
      </div>
      <PrProgressBar v-if="isLoading" mode="indeterminate"></PrProgressBar>
    </template>
  </PrDialog>
</template>
