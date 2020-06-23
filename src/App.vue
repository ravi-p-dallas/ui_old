<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="ma-0 pa-0">
        <BgVideo />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import BgVideo from "./components/BgVideo.vue";

export default Vue.extend({
  name: "App",

  components: {
    BgVideo
  },

  data: () => ({}),

  methods: {},
  metaInfo: {
    title: "VantaShala",
    titleTemplate: "%s | My Organic Chef",
    link: [{ rel: "favicon", href: "favicon.ico" }],
    meta: [{
      vmid: 'Organaic Chef',
      name: 'Clean Helathy Home Cookoed Food',
      content: 'Home food at your door'
    }],
  },
  
});
</script>
