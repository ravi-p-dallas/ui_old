<template>
  <v-app>
    <v-main>
      <HomeView />
    </v-main>
  </v-app>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import HomeView from "./views/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    HomeView
  },

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
