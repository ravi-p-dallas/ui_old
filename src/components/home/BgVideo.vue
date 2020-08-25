<template>
  <v-container fluid class="ma-0 pa-0" id="create">
    <actionButtons class="pb-8" />
    <VideoBg :src="BGvidsrc" style="height: 100vh;" class="green lighten-4" v-bind:overlay="countryChanged">
      <Carousel />
    </VideoBg>
  </v-container>
</template>

<style scoped>
#create .v-speed-dial {
  position: absolute;
  margin: 0 0 20px 0;
  left: 50%;
  transform: translateX(-50%);
}

#create .v-btn--floating {
  position: relative;
}
</style>
<script lang="ts">
import Vue from 'vue';
import Carousel from './Carousel.vue';
import SearchMenus from './actionButtons/actions/SearchMenus.vue';
import actionButtons from './actionButtons/ActionCardButtons.vue';
import CountryFlip from '../../store/CountryFlip';
import store from '@/store';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

@Component({
  components: { Carousel, SearchMenus, actionButtons },
})
export default class BgVideo extends Vue {
  BGvidsrc = '';
  visuals: any;
  name = 'BgVideo: ';
  created() {
    this.BGvidsrc = 'https://vsassets.netlify.app/vantashala_1.mp4';
  }

  get countryChanged() {
    this.$log.info(this.name, 'Overlay is about to change');
    const cMod = getModule(CountryFlip);
    return cMod.visualStyle.overlay;
  }
}
</script>
