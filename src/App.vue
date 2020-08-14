<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped></style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
    //HomeView
  },
  metaInfo: {
    title: 'VantaShala',
    titleTemplate: '%s | Organic Chef',
    meta: [
      {
        vmid: 'Organaic Chef',
        name: 'Clean Healthy Home Cooked Food',
        content: 'Home food at your door',
      },
    ],
  },
  data() {
    return {};
  },
});
</script>
