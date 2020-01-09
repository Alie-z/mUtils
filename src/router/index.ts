import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
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
  },
  {
    path: '/request',
    name: 'request',
    component: () => import('../views/utilsView/request.vue'),
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../views/utilsView/feedback.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
