import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/views/MusicView.vue'),
    },
    {
      path: '/art',
      name: 'art',
      component: () => import('@/views/ArtView.vue'),
    },
    {
      path: '/languages',
      name: 'languages',
      component: () => import('@/views/LanguagesView.vue'),
    },
    {
      path: '/elearning',
      name: 'elearning',
      component: () => import('@/views/ElearningView.vue'),
    },
    {
      path: '/fees',
      name: 'fees',
      component: () => import('@/views/FeesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/referral',
      name: 'referral',
      component: () => import('@/views/ReferralView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
