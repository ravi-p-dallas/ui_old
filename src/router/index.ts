import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/legal',
    name: 'legal',
    component: () => import('../views/Legal.vue'),
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import('../views/Mobile.vue'),
  },
  {
    path: '/ourMenu',
    name: 'ourMenu',
    component: () => import('../views/OurMenu.vue'),
  },
  {
    path: '/howItWorks',
    name: 'howItWorks',
    component: () => import('../views/HowItWorks.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: () => import('../views/Kitchen.vue'),
  },
  {
    path: '/termsOfService',
    name: 'termsOfService',
    component: () => import('../views/TermsOfService.vue'),
  },
  {
    path: '/privacyPolicy',
    name: 'privacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue'),
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/Info.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
