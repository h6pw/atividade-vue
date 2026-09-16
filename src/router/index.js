import { createRouter, createWebHistory } from 'vue-router'
import Homeview from './App.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', 
      component: Homeview 
    },
    {
      
    }
  ],
})

export default router
