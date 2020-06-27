<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="ma-0 pa-0">
        <ToolBar />
        <BgVideo />
        <OrderRepeats />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import BgVideo from "./components/homeTop/BgVideo.vue";
import OrderRepeats from "./components/homeNext/OrderRepeats.vue";
import ToolBar from "./components/homeTop/toolbar/ToolBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    ToolBar,
    BgVideo,
    OrderRepeats
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
