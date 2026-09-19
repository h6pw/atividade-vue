import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../pages/inicioView.vue';
import AnimaisView from '../pages/AnimaisView.vue';
import CuidadosView from '../pages/CuidadosView.vue';
import Header from '../components/Header.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
      name: Homeview,
      component: Homeview 
    },
    {
      path: '/animais',
      name:  AnimaisView,
      component: AnimaisView
    },
    {
      path: '/cuidados',
      name: CuidadosView,
      component: CuidadosView
    }
  ],
})

export default router
