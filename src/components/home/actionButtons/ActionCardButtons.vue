<template>
  <v-card class="transparent card_mgTop" outlined style="position: absolute; width:100%">
    <v-card-actions
      :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column' : ''"
      :style="this.$vuetify.breakpoint.smAndDown ? '' : 'margin-left: 10%'"
    >
      <div class="text-center">
        <v-btn :class="findChefClass" @click.stop="handleFunctionCall('Find Home Chefs')" id="findChef">
          <v-icon left>mdi-chef-hat</v-icon>
          Find Home Chefs
        </v-btn>
        <v-btn :class="beAChefClass" @click.stop="handleFunctionCall('Be A Chef')" id="beAChef">
          <v-icon left>mdi-silverware</v-icon>
          Be A Chef
        </v-btn>
        <v-btn :class="exploreMenusClass" @click.stop="handleFunctionCall('Explore Menus')" id="iMenus">
          <v-icon left>mdi-book-open-page-variant</v-icon>
          Explore Menus
        </v-btn>
      </div>
    </v-card-actions>
    <!-- <v-dialog v-model="dialog" max-width="290" :fullscreen="$vuetify.breakpoint.mobile">
      <v-btn v-if="dialogAction == this.items[0].btnText" @click:stop="this.dialog = !this.dialog">sdf</v-btn>
      <BeAChef v-if="dialogAction == this.items[1].btnText" @click:stop="this.dialog = false" />
    </v-dialog> -->
  </v-card>
</template>
<style scoped>
.card_mgTop {
  top: 0px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import BeAChef from './actions/BeAChef.vue';
import { bus } from '../../../App.vue';
import store from '@/store';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import CountryFlip from '../../../store/CountryFlip';
import ActionButtonsSwitch from '../../../store/ActionButtonsSwitch';

@Component({
  components: { BeAChef },
  props: ['tbStyle'],
})
export default class ActionButtons extends Vue {
  name = 'ActionButtons';
  dialog = false;
  dialogAction = '';
  items: any = '';

  beAchefStyle = '';
  exploreMenusStyle = '';
  findChefStyle = '';

  created() {
    this.updateStyles();
  }

  updateStyles() {
    const cMod = getModule(CountryFlip);
    const styles = cMod.visualStyle;
    this.findChefStyle = styles['fCclass'];
    this.beAchefStyle = styles['bCclass'];
    this.exploreMenusStyle = styles['sMclass'];

    console.log('===> ', this.findChefStyle, this.beAchefStyle, this.exploreMenusStyle);
  }
  handleFunctionCall(event) {
    console.log(this.name, '-clicked-', event);
    const actionButtonsSwitch = getModule(ActionButtonsSwitch);
    actionButtonsSwitch.changeComponent(event);
  }

  get findChefClass() {
    return this.findChefStyle;
  }
  get beAChefClass() {
    return this.beAchefStyle;
  }
  get exploreMenusClass() {
    return this.exploreMenusStyle;
  }

  @Watch('countryChanged')
  updateClasses() {
    console.log(this.constructor.name, ': Country Changed');
    this.updateStyles();
  }

  get countryChanged() {
    const cMod = getModule(CountryFlip);
    return cMod.country;
  }
}
</script>
