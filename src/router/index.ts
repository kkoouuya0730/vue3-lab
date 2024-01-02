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
      path: '/dashbord',
      name: 'MyPageDashbord',
      component: () =>
        import('../components/pages/MyPageDashbord.vue'),
      props: true,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/dashbord/scrap-manage',
          name: 'ScrapManage',
          component: () =>
            import('../components/pages/dashbord/ScrapManage.vue'),
          props: true,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/dashbord/article-manage',
          name: 'ArticleManage',
          component: () =>
            import('../components/pages/dashbord/ArticleManage.vue'),
          props: true,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/dashbord/book-manage',
          name: 'BookManage',
          component: () =>
            import('../components/pages/dashbord/BookManage.vue'),
          props: true,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/dashbord/github-deploy',
          name: 'GitHubDeploy',
          component: () =>
            import('../components/pages/dashbord/GitHubDeploy.vue'),
          props: true,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/dashbord/favorite-articles',
          name: 'FavoriteArticle',
          component: () =>
            import(
              '../components/pages/dashbord/FavoriteArticle.vue'
            ),
          props: true,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/dashbord/reading-book',
          name: 'ReadingBook',
          component: () =>
            import('../components/pages/dashbord/ReadingBook.vue'),
          props: true,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/dashbord/sales',
          name: 'Dashbord',
          component: () =>
            import('../components/pages/dashbord/DashBord.vue'),
          props: true,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/dashbord/account-settings',
          name: 'AccountSettings',
          component: () =>
            import('../components/pages/dashbord/AccountSetting.vue'),
          props: true,
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (!auth.isLoggedIn && to.meta.requiresAuth) {
    return { name: 'top' }
  }
})

export default router
