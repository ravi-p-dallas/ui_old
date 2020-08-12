<template>
    <v-container fill-height fluid ma-0 pa-0>
        <h1 :class="this.$vuetify.breakpoint.mdAndDown ? 'mx-auto':'pl-13'">Hello Menu</h1>
    </v-container>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SearchMenus",

  components: {},

  computed: {},

  data: () => ({}),
  methods: {}
});
</script>