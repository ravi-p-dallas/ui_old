<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">
        BE A PROUD CHEF - COOKING IS A BLESSED GIFT
      </div>
    </v-card-title>

    <v-img height="420" src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg"></v-img>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="blue-grey--text ml-2 mt-1">Rest assured. Strat Simple.</div>
        <v-spacer />
        <div class="blue--text">Follow the Guidelines</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-text-field id="kitchName" name="kitchName" label="Name your Kitchen" outlined clearable></v-text-field>
    </v-card-text>

    <v-card-actions :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column text-right ' : ''">
      <div class="text-center">
        <v-btn :class="findChefClass" @click.stop="handleFunctionCall('Find Home Chefs')">
          <v-icon left>mdi-chef-hat</v-icon>
          RESERVE
        </v-btn>

        <v-btn :class="exploreMenusClass" @click.stop="handleFunctionCall('Explore Menus')">
          <v-icon left>mdi-key</v-icon>
          EXISTING CHEF? LOGIN
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.v-text-field {
  height: 71px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import CountryFlip from '../../store/CountryFlip';

@Component({})
export default class LayoutSignInBeAChefCard extends Vue {
  loading = false;
  image = require('@/assets/biryani_2.jpg');

  exploreMenusStyle = '';
  findChefStyle = '';

  created() {
    this.updateStyles();
  }

  updateStyles() {
    const cMod = getModule(CountryFlip);
    const styles = cMod.visualStyle;
    this.findChefStyle = styles['fCclass'];
    this.exploreMenusStyle = styles['sMclass'];

    console.log('===> ', this.findChefStyle, this.exploreMenusStyle);
  }
  handleFunctionCall(event) {
    console.log('-->', event);
  }

  get findChefClass() {
    return this.findChefStyle;
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

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
</script>
