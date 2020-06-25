<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="grey">{{Char}}</v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{Title}}</v-list-item-title>
        <v-list-item-subtitle>{{Caption}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
   
    <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

    <v-card-actions>
      <v-btn text color="deep-purple accent-4">Open Series</v-btn>
      <v-btn text color="deep-purple accent-4">Cancel Next</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DesignedCard",
  props: ["Title", "Caption", 'Char']
});
</script>
