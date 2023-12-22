import { createRouter, createWebHistory } from 'vue-router'
import Top from '../components/pages/TopPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/link/:category',
      name: 'Link',
      component: () => import('../components/pages/LinksPage.vue'),
      props: true
    }
  ]
})

export default router
