import CardView from '@/views/CardView.vue'
import SelectionView from '@/views/SelectionView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: CardView },
    { path: '/selection', component: SelectionView },
  ],
})

export default router
