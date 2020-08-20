<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">
        HOW WE OPERATE?
      </div>
    </v-card-title>

    <vue-plyr>
      <video poster="https://vsassets.netlify.app/Vantashala_Caption.png">
        <source src="https://vsassets.netlify.app/vantashala_slides.mp4" type="video/mp4" size="720" />
      </video>
    </vue-plyr>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
        <div class="grey--text ml-4">5 (4413)</div>
        <v-spacer />
        <div
          class="fb-like"
          data-href="https://developers.facebook.com/docs/plugins/"
          data-width=""
          data-layout="button"
          data-action="like"
          data-size="large"
          data-share="true"
        ></div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title> VantaShala.com - Mission </v-card-title>

    <v-card-text> Building healthy generations, providing, healthy food chocices and practicing traditions. </v-card-text>

    <v-card-actions :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column text-right ' : ''">
      <div class="text-center">
        <v-btn :class="findChefClass" @click.stop="handleFunctionCall('Find Home Chefs')">
          <v-icon left>mdi-chef-hat</v-icon>
          Find Chefs
        </v-btn>

        <v-btn :class="exploreMenusClass" @click.stop="handleFunctionCall('Explore Menus')">
          <v-icon left>mdi-book-open-page-variant</v-icon>
          Explore Menus
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss"></style>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import CountryFlip from '../../store/CountryFlip';

@Component
export default class LayoutVideoCard extends Vue {
  loading = false;
  selection = 1;
  items: any = '';

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