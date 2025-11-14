import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/CardView.vue'),
      meta: {
        requiresAuth: false,
        title: 'Home',
      },
    },
    {
      path: '/selection',
      name: 'selection',
      component: () => import('@/pages/SelectionView.vue'),
      meta: {
        requiresAuth: false,
        title: 'Selection',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/pages/NotFoundView.vue'),
      meta: {
        requiresAuth: false,
        title: 'Alguien se ha hecho caquita...',
      },
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string) || 'Mi App Vue'
  next()
})

export default router
