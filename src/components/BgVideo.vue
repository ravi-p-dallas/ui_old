<template>
  <v-container overflow-y fluid class="ma-0 pa-0">
    <VideoBg
      src="https://vsassets.netlify.app/vantashala.mp4"
      style="height: 100vh;"
      class= "green lighten-4"
      overlay="linear-gradient(45deg, #1b5e20fb,#fbc8e6c9)"
    >
      <ToolBar style="position: absolute" />
      <Carousel />
    </VideoBg>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import VideoBackground from "./VideoBackground.vue";
import ToolBar from "./toolbar/ToolBar.vue";
import Carousel from "./Carousel.vue";

export default Vue.extend({
  name: "BgVideo",

  components: {
    // VideoBackground,
    ToolBar,
    Carousel
  },

  data: () => ({})
});
</script>
