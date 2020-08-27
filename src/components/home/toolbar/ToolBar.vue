<template>
  <v-container fluid fill-height class="pa-0 ma-0" style="position: absolute">
    <v-app-bar :style="tbStyle" text-center align="center" class="pa-0" elevate-on-scroll fixed v-scroll="onScroll">
      <v-app-bar-nav-icon :class="this.$vuetify.breakpoint.mdAndDown ? 'pa-0' : 'ml-2 pb-1 '">
        <a href="/">
          <v-img :src="image" width="48px"></v-img>
        </a>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="pl-2 text-h6 white--text font-weight-bold gradient-text-logo"
        ><a href="/">{{ this.getSiteName() }}</a></v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-toolbar-items v-if="deferredPrompt">
        <v-badge color="purple lighten-4" text small overlap class="ma-auto mr-5">
          <span slot="badge" class="purple--text font-weight-bold">alert</span>
          <v-btn id="install-button" color="purple lighten-4" text small class="ma-auto white--text font-weight-bold" @click="install">
            <v-icon class="gradient-button-logo" left>mdi-open-in-new</v-icon>
            <div class="gradient-text">Install App</div>
          </v-btn>
        </v-badge>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-badge color="purple lighten-4" text small overlap class="ma-auto mr-5">
          <span slot="badge" class="purple--text font-weight-bold">?</span>
          <v-btn id="login-button" color="purple lighten-4" text small class="ma-auto white--text font-weight-bold " @click="login">
            <v-icon class="gradient-button-logo" left>mdi-open-in-new</v-icon>
            <div class="gradient-text">Login</div>
          </v-btn>
        </v-badge>
        <v-badge color="purple lighten-4" text small overlap class="ma-auto mr-5">
          <span slot="badge" class="purple--text font-weight-bold">?</span>
          <v-btn id="camera-button" color="purple lighten-4" text small class="ma-auto white--text font-weight-bold" @click="openCamera">
            <v-icon class="gradient-button-logo" left>mdi-camera</v-icon>
            <div class="gradient-text">Streaming</div>
          </v-btn>
        </v-badge>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-badge color="purple lighten-4" v-for="(item, i) in menu" :key="i" :to="item.link" text small overlap class="ma-auto mr-5" :value="item.badge != '?'">
          <span slot="badge" class="purple--text font-weight-bold">{{ item.badge }}</span>
          <v-btn id="orders-chefs-button" text small class="ma-auto white--text font-weight-bold gradient-button">
            <v-icon class="gradient-button-logo" left>{{ item.icon }}</v-icon>
            <div class="gradient-text">{{ item.title }}</div>
          </v-btn>
        </v-badge>

        <v-badge color="purple lighten-4" text small overlap class="ma-auto mr-5" :value="this.cartCount != 0">
          <span slot="badge" class="purple--text font-weight-bold">{{ cartCount }}</span>
          <v-btn id="cart-button" text small class="ma-auto white--text font-weight-bold">
            <v-icon class="gradient-button-logo" left>mdi-cart-outline</v-icon>
            <div class="gradient-text">My Cart</div>
          </v-btn>
        </v-badge>

        <div class="dropdown ma-auto">
          <v-btn text small class="ma-auto white--text font-weight-bold">
            <v-icon left>mdi-earth</v-icon>
            <select name="country" @change="onchange()" class="dropdown-select ma-auto" v-model="defaultCountry">
              <option v-for="country in visualsClassAttributes" :key="country.name" :value="country.name">{{ country.name }}</option>
            </select>
          </v-btn>
        </div>

        <!-- <button @click="$keycloak != undefined && $keycloak.logoutFn" v-if="$keycloak != undefined && $keycloak.authenticated">Log out</button> -->
        <button v-if="isLoggedIn()">Log out</button>

        <v-avatar class="ma-auto ml-3 white--text font-weight-bold" size="36" tile link>
          <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Gopi" @click.stop="manageDrawer" />
        </v-avatar>
      </v-toolbar-items>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" color="white"></v-app-bar-nav-icon>
    </v-app-bar>

    <NavigationDrawer :drawer="drawer" :menu="menu" @updateDrawerState="updateDrawerState" />

    <v-dialog v-model="updateExists" persistent max-width="310">
      <v-card>
        <v-card-title class="headline orange lighten-1">
          Reload Required
        </v-card-title>

        <v-card-text class="mt-10">
          VantaShala needs an update. Lets refresh.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" dark @click="refreshApp()"> <v-icon left>mdi-download-box</v-icon> Refresh </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Video Streaming</span>
        </v-card-title>
        <v-card-text>
          <Camera />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<style lang="scss">
@import './toolbar.scss';
</style>

<script lang="ts">
import Vue from 'vue';
import NavigationDrawer from './NavigationDrawer.vue';
import { authService } from '../../../services/AuthService';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store';
import CountryFlip from '../../../store/CountryFlip';
import ActionButtonsSwitch from '@/store/ActionButtonsSwitch';
import CartStore from '@/store/CartStore';
import Camera from '../../camera/Camera.vue';
@Component({
  components: { NavigationDrawer, Camera },
})
export default class ToolBar extends Vue {
  name = 'ToolBar: ';
  drawer = false;
  defaultCountry;
  collapseOnScroll = true;
  refreshing = false;
  registration;
  updateExists = false;
  deferredPrompt = '';
  visualsClassAttributes = getModule(CountryFlip).visualsClassAttributes;
  tbStyle = 'background-color: transparent;';
  tbStyleNonTransparent =
    'opacity:0.95; background-color: #263238; background: rgb(250,117,0); background: radial-gradient(circle, rgba(250,117,0,1) 0%, rgba(128,153,41,1) 76%, rgba(62,83,81,1) 100%);';
  activeComponent = 'Home';
  cartCount = 0;
  dialog = false;
  menu = [
    {
      icon: 'mdi-order-bool-descending-variant',
      title: 'My Orders',
      path: '/',
      badge: '?',
    },
    { icon: 'mdi-chef-hat', title: 'My Chefs', path: '/', badge: '?', action: 'login' },
  ];
  image = require('@/assets/logo.png');

  created() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.$data.deferredPrompt = e;
      console.log('deferredPrompt -->', this.$data.deferredPrompt);
    });
    window.addEventListener('appinstalled', () => {
      this.$data.deferredPrompt = null;
      console.log('deferredPrompt ->', this.$data.deferredPrompt);
    });
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      // Here the actual reload of the page occurs
      console.log('Reloading.....');
      window.location.reload();
    });
    this.defaultCountry = getModule(CountryFlip).country;
  }

  isLoggedIn() {
    //console.log('Is User Authenticated ==> ' + Vue.prototype.$keycloak.authenticated);
    //return Vue.prototype.$keycloak.authenticated;
  }
  onchange() {
    const cMod = getModule(CountryFlip);
    cMod.changeCountry(this.defaultCountry);
    console.log('Change Country Triggered');
  }
  manageDrawer() {
    this.drawer = !this.drawer;
  }
  updateDrawerState(status) {
    console.log(this.name, ' Drawrer State: ', this.drawer, status);
    if (!this.drawer === status) {
      this.drawer = status;
    }
  }
  async install() {
    this.$data.deferredPrompt.prompt();
  }

  login() {
    authService.login();
  }
  openCamera() {
    this.dialog = true;
  }
  updateAvailable(event) {
    this.registration = event.detail;
    this.updateExists = true;
  }
  refreshApp() {
    console.log('->Reloading....');
    this.updateExists = false;
    if (!this.registration || !this.registration.waiting) return;
    this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }

  @Watch('countryChanged')
  setbackCountry() {
    this.$log.info(this.name, 'Country Changed: ', getModule(CountryFlip).country);
    this.defaultCountry = getModule(CountryFlip).country;
  }

  get countryChanged() {
    this.$log.info(this.name, 'Country Chnaged');
    const cMod = getModule(CountryFlip);
    return cMod.visualStyle.overlay;
  }

  @Watch('activeComponentChanged')
  updateActiveComponent() {
    this.activeComponent = getModule(ActionButtonsSwitch).activeComponent;
    this.$log.info(this.name, 'Watch Observed: ', this.activeComponent);
    if (this.activeComponent != 'Home') {
      this.tbStyle = this.tbStyleNonTransparent;
    } else {
      this.tbStyle = 'background-color: transparent';
    }
    this.$log.info(this.name, 'Style Applied: ', this.tbStyle);
  }

  get activeComponentChanged() {
    const cMod = getModule(ActionButtonsSwitch);
    this.$log.info(this.name, 'Active Component Changed: ' + cMod.activeComponent);
    return cMod.activeComponent;
  }

  @Watch('cartCountChange')
  updateCartCount() {
    this.$log.info(this.name, 'Watch Observed', this.cartCount);
    const cMod = getModule(CartStore);
    this.cartCount = cMod.cartCount;
  }

  get cartCountChange() {
    const cMod = getModule(CartStore);
    this.$log.debug(this.name, ': Cart count changed : ' + cMod.cartCount);
    return cMod.cartCount;
  }

  onScroll(e) {
    if (typeof window === 'undefined') return;

    const top = window.pageYOffset || e.target.scrollTop || 0;

    if (top > 120) {
      this.tbStyle = this.tbStyleNonTransparent;
    } else {
      if (this.activeComponent == 'Home') {
        this.tbStyle = 'background-color: transparent';
      }
    }
  }

  private getSiteName(): string {
    if (window) {
      console.log('====>', window.location);
      if (window.location.host.toLowerCase().includes('vantashala')) {
        console.log('Visiting at VantaShala');
        return 'Under Construction';
      }
    }
    return 'VantaShala';
  }
}
</script>
