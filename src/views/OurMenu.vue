<template>
  <v-container fluid fill-height class="ma-0 pa-0 d-flex flex-column" scroll-y>
    <ToolBar> </ToolBar>
    <OurMenuLink class="mt-15" />
    <Footer id="FT" />
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import Vue from 'vue';
import ToolBar from '../components/home/toolbar/ToolBar.vue';

import Footer from '../components/footer/Footer.vue';
import OurMenuLink from '../components/footer/links/OurMenuLink.vue';

export default Vue.extend({
  name: 'App',

  components: {
    ToolBar,
    Footer,
    OurMenuLink,
  },
});
</script>
