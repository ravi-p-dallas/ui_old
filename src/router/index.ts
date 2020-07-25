import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/legal",
    name: "legal",
    component: () => import("../views/Legal.vue")
  },
  {
    path: "/mobile",
    name: "mobile",
    component: () => import("../views/Mobile.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
