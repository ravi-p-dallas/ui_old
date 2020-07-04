import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VideoBackground from "vue-responsive-video-background-player";
import VueMeta from "vue-meta";
import VueCoreVideoPlayer from 'vue-core-video-player'

Vue.use(VueCoreVideoPlayer)
Vue.use(VueMeta);
Vue.component("VideoBg", VideoBackground);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
