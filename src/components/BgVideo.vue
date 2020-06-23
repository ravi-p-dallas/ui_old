<template>
  <v-container overflow-y fluid class="ma-0 pa-0" style="position:relative">
    <VideoBg
      src="https://vsassets.netlify.app/vantashala.mp4"
      style="height: 100vh;"
      class="green lighten-4"
      v-bind:overlay="countryChanged"
    >
      <ToolBar style="position: absolute;" />
      <Carousel />
      <v-fab-transition>
        <v-btn class="downArrow" icon fab medium dark bottom>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-fab-transition>
    </VideoBg>
  </v-container>
</template>

<style scoped>
.downArrow {
  bottom: 0;
  position: absolute;
  margin: 0 0 6px 6px;
  left: 50%;
}
</style>
<script lang="ts">
import Vue from "vue";
import ToolBar from "./toolbar/ToolBar.vue";
import Carousel from "./Carousel.vue";

export default Vue.extend({
  name: "BgVideo",

  components: {
    ToolBar,
    Carousel
  },
  computed: {
    countryChanged: {
      get() {
        const country = this.$store.getters.getCountry;
        const styles = this.visuals[country];
        return styles["overlay"];
      }
    },
    activeFab() {
      return { color: "success", icon: "share" };
    }
  },
  data: () => ({
    visuals: {
      INDIA: {
        overlay: "linear-gradient(45deg,#2a4ae4B3,#fb949eB3)"
      },
      USA: {
        overlay: "linear-gradient(45deg,#aed581B3,#b3e5fcB3)"
      },
      SINGAPORE: {
        overlay: "linear-gradient(45deg,#ffcc80B3,#fb949eB3)"
      }
    }
  })
});
</script>
