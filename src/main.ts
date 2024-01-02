/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import ProgressSpinner from 'primevue/progressspinner'
import ProgressBar from 'primevue/progressbar'
import Toast from 'primevue/toast'
import Menu from 'primevue/menu'
import TabMenu from 'primevue/tabmenu'
import Tag from 'primevue/tag'

import 'primevue/resources/primevue.min.css' // ベース
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/luna-blue/theme.css'
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('PrCard', Card)
app.component('PrButton', Button)
app.component('PrDialog', Dialog)
app.component('PrInputText', InputText)
app.component('PrProgressSpinner', ProgressSpinner)
app.component('PrProgressBar', ProgressBar)
app.component('PrToast', Toast)
app.component('PrMenu', Menu)
app.component('PrTabMenu', TabMenu)
app.component('PrTag', Tag)
app.use(ToastService)

app.mount('#app')
