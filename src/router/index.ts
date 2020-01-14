import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import routeView from './routeView'

Vue.use(VueRouter);

const routes = [
  ...routeView,
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      isNoBar: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes,
});

export default router;

