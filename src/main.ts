import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VideoBackground from 'vue-responsive-video-background-player';
import VueMeta from 'vue-meta';
import VuePlyr from 'vue-plyr';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLogger from 'vue-logger-plugin'
Vue.use(VueLogger, {
  enabled: true,
  level: 'debug',
})


const isProduction = process.env.NODE_ENV === 'production';

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false },
  },
  emit: ['ended'],
});

Vue.use(VueMeta);
Vue.component('VideoBg', VideoBackground);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
