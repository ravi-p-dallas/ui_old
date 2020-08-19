<template>
  <v-container fluid class="ma-0 pa-0" id="create">
    <actionButtons class="pb-8" />
    <VideoBg :src="BGvidsrc" style="height: 100vh;" class="green lighten-4" v-bind:overlay="countryChanged">
      <component class="pt-15" :is="currentComp"></component>
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
import { bus } from '../../App.vue';

export default Vue.extend({
  name: 'BgVideo',

  created() {
    bus.$on('switchComp', event => {
      console.log(event);
      this.currentComp = event;
      this.BGvidsrc = '';
    });
  },
  components: {
    Carousel,
    SearchMenus,
    actionButtons
  },
  computed: {
    countryChanged: {
      get() {
        const country = this.$store.getters.getCountry;
        const styles = this.visuals[country];
        return styles['overlay'];
      },
    },
  },
  data: () => ({
    visuals: {
      INDIA: {
        overlay: 'linear-gradient(45deg,#2a4ae4B3,#fb949eB3)',
      },
      USA: {
        overlay: 'linear-gradient(45deg,#aed581B3,#b3e5fcB3)',
      },
      SINGAPORE: {
        overlay: 'linear-gradient(45deg,#ffcc80B3,#fb949eB3)',
      },
      CANADA: {
        overlay: 'linear-gradient(45deg, #30e8bfB3,#ff8235B3)',
      },
      MALAYSIA: {
        overlay: 'linear-gradient(45deg, #ffd89bB3, #19547bB3)',
      },
    },
    currentComp: Carousel,
    BGvidsrc: 'https://vsassets.netlify.app/vantashala_1.mp4',
  }),
  methods: {
    
  },
});
</script>
