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
    component: () => import('../views/footer/About.vue'),
  },
  {
    path: '/legal',
    name: 'legal',
    component: () => import('../views/footer/Legal.vue'),
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import('../views/footer/Mobile.vue'),
  },
  {
    path: '/ourMenu',
    name: 'ourMenu',
    component: () => import('../views/footer/OurMenu.vue'),
  },
  {
    path: '/howItWorks',
    name: 'howItWorks',
    component: () => import('../views/footer/HowItWorks.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/footer/Login.vue'),
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/footer/SignUp.vue'),
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    component: () => import('../views/footer/Kitchen.vue'),
  },
  {
    path: '/termsOfService',
    name: 'termsOfService',
    component: () => import('../views/footer/TermsOfService.vue'),
  },
  {
    path: '/privacyPolicy',
    name: 'privacyPolicy',
    component: () => import('../views/footer/PrivacyPolicy.vue'),
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/footer/Info.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
