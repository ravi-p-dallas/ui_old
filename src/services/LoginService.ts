// import axios, { AxiosPromise } from 'axios';

import Vue from 'vue'
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(VueKeyCloak, {
    init: {
        // Use 'login-required' to always require authentication
        // If using 'login-required', there is no need for the router guards in router.js
        onLoad: 'check-sso'
    },
    config: {
        url: 'http://keycloak:9080/auth/', realm: 'keycloak-demo', clientId: 'vs'
    },
    onReady: (keycloak) => {
        this.isUserLoggedIn = true;

        this.tokenInterceptor();

    }
});

export default class LoginService {

    isUserLoggedIn: boolean = false;
    public login(loc = window.location) {

        console.log("Login Initiatied");
        const port = loc.port ? ':' + loc.port : '';
        let contextPath = location.pathname;
        if (contextPath.endsWith('accessdenied')) {
            contextPath = contextPath.substring(0, contextPath.indexOf('accessdenied'));
        }
        if (!contextPath.endsWith('/')) {
            contextPath = contextPath + '/';
        }
        // If you have configured multiple OIDC providers, then, you can update this URL to /login.
        // It will show a Spring Security generated login page with links to configured OIDC providers.
        loc.href = `//${loc.hostname}${port}${contextPath}oauth2/authorization/oidc`;
    }

    public logout(): void {
        //   return axios.post('api/logout');
        Vue.axios.get('api/logout').then((response) => {
            console.log(response.data)
        })
    };

    public tokenInterceptor(): void {
        //   return axios.post('api/logout');
        // axios.interceptors.request.use(config => {
        //   config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
        //   return config
        // }, error => {
        //   return Promise.reject(error)
        // })
        console.log("intercepting the request");
    };

}





