// import axios, { AxiosPromise } from 'axios';

import Vue from 'vue';
import Component from 'vue-class-component';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';


const initOptions = {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js -  check-sso
    onLoad: 'check-sso',
  },
  config: {
    url: 'http://keycloak:9080/auth',
    realm: 'VantaShala',
    clientId: 'vantashala',
  },
  onReady: (keycloak: any) => {
    //this.tokenInterceptor();
    console.log('I wonder what Keycloak returns: ' + Vue.prototype.$keycloak);
  },
};
Vue.use(VueKeyCloak, initOptions);

@Component
class AuthService extends Vue {
  public login(loc = window.location) {
    console.log('Login Initiatied');
    const keyCloak = Vue.prototype.$keycloak;

    if (keyCloak != undefined) {
      if (!keyCloak.authenticated) {
        Vue.prototype.$keycloak.login();
        return;
      }
      console.log('User Already Logged in');
    } else {
      console.log('Problem with keycloak');
    }
  }

  public logout(): void {
    //   return axios.post('api/logout');
    // Vue.axios.get('api/logout').then(response => {
    //   console.log(response.data);
    // });

    Vue.prototype.$keycloak.logout();
  }

  public tokenInterceptor(): void {
    //   return axios.post('api/logout');
    // axios.interceptors.request.use(config => {
    //   config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
    //   return config
    // }, error => {
    //   return Promise.reject(error)
    // })

    console.log('intercepting the request');
  }
}



export const authService = new AuthService();