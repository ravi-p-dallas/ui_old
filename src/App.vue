<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="ma-0 pa-0">
        <ToolBar scroll-target="#scrolling-techniques-2" hide-on-scroll prominent />
        <BgVideo />
        <RepeatedOrders id="scrolling-techniques-5" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import BgVideo from "./components/homeTop/BgVideo.vue";
import RepeatedOrders from "./components/homeNext/RepeatedOrders.vue";
import ToolBar from "./components/homeTop/toolbar/ToolBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    ToolBar,
    BgVideo,
    RepeatedOrders
  },

  data: () => ({}),

  methods: {},
  metaInfo: {
    title: "VantaShala",
    titleTemplate: "%s | My Organic Chef",
    link: [{ rel: "favicon", href: "favicon.ico" }],
    meta: [
      {
        vmid: "Organaic Chef",
        name: "Clean Healthy Home Cooked Food",
        content: "Home food at your door"
      }
    ]
  }
});
</script>
