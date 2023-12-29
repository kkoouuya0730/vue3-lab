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
    },
    {
      path: '/scrap-manage',
      name: 'ScrapManage',
      component: () => import('../components/pages/ScrapManage.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/article-manage',
      name: 'ArticleManage',
      component: () => import('../components/pages/ArticleManage.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/book-manage',
      name: 'BookManage',
      component: () => import('../components/pages/BookManage.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/github-deploy',
      name: 'GitHubDeploy',
      component: () => import('../components/pages/GitHubDeploy.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/favorite-articles',
      name: 'FavoriteArticle',
      component: () => import('../components/pages/FavoriteArticle.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reading-book',
      name: 'ReadingBook',
      component: () => import('../components/pages/ReadingBook.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashbord',
      name: 'Dashbord',
      component: () => import('../components/pages/DashBord.vue'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account-settings',
      name: 'AccountSettings',
      component: () => import('../components/pages/AccountSetting.vue'),
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
