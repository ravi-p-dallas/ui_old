<template>
  <v-container overflow-y fluid class="ma-0 pa-0">
    <video-background
      src="https://vsassets.netlify.app/vantashala.mp4"
      style="height: 100vh;"
    >
      <ToolBar style="position: absolute" />
      <Carousel />
    </video-background>
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
