import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
    },
    {
      path: '/animations',
      name: 'animations',
      component: () => import('../views/AnimationsView.vue'),
    },
    {
      path: '/transitions',
      name: 'transitions',
      component: () => import('../views/TransitionsView.vue'),
    },
  ],
});

export default router;
