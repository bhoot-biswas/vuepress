import Vue from 'vue';
import Router from 'vue-router';
import PageLogin from '@/components/PageLogin';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

const mode = 'history';
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'PageLogin',
    component: PageLogin,
  },
];

export default new Router({ mode, routes });
