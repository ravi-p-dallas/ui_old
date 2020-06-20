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

  data: () => ({
    menu: [
      { icon: "home", title: "My Orders" },
      { icon: "info", title: "My Chefs" },
      { icon: "warning", title: "My Cart" }
    ]
  }),

  methods: {
    menuItems() {
      return this.menu;
    }
  }
});
</script>
