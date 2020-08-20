<template>
  <v-container fluid class="pa-0 ma-0">
    <v-navigation-drawer v-model="isOpen" app right color="green lighten-2" disable-resize-watcher>
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
              <option v-for="country in countries" :key="country.name" :value="country.name">{{ country.name }}</option>
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

@Component({
  components: {},
  props: ['countries', 'menu', 'drawer'],
})
export default class NavigationDrawer extends Vue {
  isOpen = false;
  styles = {
    'background-color': `transparent`,
  };
  defaultCountry;
  drawer;
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
}
</script>


<style lang="scss">
@import './toolbar.scss';
</style>
