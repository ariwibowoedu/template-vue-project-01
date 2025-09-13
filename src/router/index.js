import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/landing/LandingPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LandingPage,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/about/AboutPage.vue')
    }
  ],
})

export default router
