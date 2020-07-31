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
    return {
      deferredPrompt: null,
      snackbar: true,
      text: "Get our free app. It won't take up space on your phone and also works offline!",
      vertical: true,
    };
  },
  created() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    },
  },
});
</script>
