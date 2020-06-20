<template>
  <v-container overflow-y fluid class="ma-0 pa-0">
    <VideoBackground :sources="['http://allibilli.com/vantashala.mp4']">
      <ToolBar style="position: absolute" />
      <Carousel />
    </VideoBackground>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import VideoBackground from "./VideoBackground.vue";
import ToolBar from "./ToolBar.vue";
import Carousel from "./Carousel.vue";

export default Vue.extend({
  name: "BgVideo",

  components: {
    VideoBackground,
    ToolBar,
    Carousel
  },

  data: () => ({})
});
</script>
