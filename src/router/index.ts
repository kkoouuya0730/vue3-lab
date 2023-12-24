import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
      props: true,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(to => {
  const auth = useAuthStore()
  if (!auth.isLoggedIn && to.meta.requiresAuth) {
    return { name: 'top'}
  }
})

export default router
