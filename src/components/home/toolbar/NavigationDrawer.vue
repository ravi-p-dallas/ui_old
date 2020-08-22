<template>
  <v-container fluid class="pa-0 mx-0 mb-0 mt-16">
    <v-navigation-drawer v-model="isOpen" right color="green lighten-2 mt-16" disable-resize-watcher absolute>
      <v-list-item two-line>
        <v-list-item-avatar size="36" tile>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Gopi Kancharla</v-list-item-title>
          <v-list-item-subtitle>Premium User</v-list-item-subtitle>
        </v-list-item-content>

        <v-btn icon @click.stop="updateDrawerState">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader>Actions:</v-subheader>

        <v-list-item v-for="item in menu" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-subtitle class="ma-auto white--text font-weight-bold">{{ item.title }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cart-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-badge color="purple lighten-4" text small overlap class="ma-auto mr-5" :value="this.cartCount != 0">
              <v-list-item-subtitle class="ma-auto white--text font-weight-bold">
                My Cart
              </v-list-item-subtitle>
            </v-badge>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader>
        <v-subheader>Choose Country</v-subheader>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <div class="dropdown ma-0">
            <select name="country" @change="onchange()" class="dropdown-select ma-auto" v-model="defaultCountry">
              <option v-for="country in visualsClassAttributes" :key="country.name" :value="country.name">{{ country.name }}</option>
            </select>
          </div>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list subheader>
        <v-subheader>Actions:</v-subheader>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-subtitle class="ma-auto white--text font-weight-bold">
              <!-- <button @click="$keycloak.logoutFn" v-if="$keycloak.authenticated">Logout</button> -->
              Logout
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Carousel from './Carousel.vue';
import SearchMenus from './actionButtons/actions/SearchMenus.vue';
import actionButtons from './actionButtons/ActionCardButtons.vue';
import CountryFlip from '../../../store/CountryFlip';
import store from '@/store';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import CartStore from '@/store/CartStore';

@Component({
  components: {},
  props: ['menu', 'drawer'],
})
export default class NavigationDrawer extends Vue {
  name = 'NavigationDrawer';
  isOpen = false;
  visualsClassAttributes = getModule(CountryFlip).visualsClassAttributes;
  styles = {
    'background-color': `transparent`,
  };
  defaultCountry;
  drawer;
  cartCount = 0;

  created() {
    this.defaultCountry = getModule(CountryFlip).country;
  }
  updateDrawerState() {
    this.isOpen = !this.isOpen;
    this.$emit('updateDrawerState', this.isOpen);
  }

  onchange() {
    const cMod = getModule(CountryFlip);
    cMod.changeCountry(this.defaultCountry);
    console.log('Change Country Triggered from Drawer');
  }

  @Watch('drawer')
  updateClasses(newVal, oldVal) {
    this.$log.info('Prop changed: ', newVal, ' | was: ', oldVal);
    this.isOpen = newVal;
    this.defaultCountry = getModule(CountryFlip).country;
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

  @Watch('countryChanged')
  setbackCountry() {
    console.log(this.constructor.name, ': Country Changed', getModule(CountryFlip).country);
    this.defaultCountry = getModule(CountryFlip).country;
  }
  get countryChanged() {
    this.$log.info(name, ' Country Chnaged in Vuex Store');
    const cMod = getModule(CountryFlip);
    return cMod.visualStyle.overlay;
  }
}
</script>

<style lang="scss">
@import './toolbar.scss';
</style>
