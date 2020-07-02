<template>
  <v-card
    tile
    outline
    v-scroll.self="onScroll"
    class="overflow-y-auto ma-0"
    max-height="300"
    flat
    v-bind:id="scrollId"
  >
    <v-card-text class="ma-0" v-for="n in 5" :key="n">
      <v-card-subtitle class="pb-2">
        <v-icon small class="mr-2" color="teal lighten-1">mdi-calendar</v-icon>July 29th, 2020 7:00 PM
      </v-card-subtitle>

      <v-card-text class="ma-0">
        <div class="text-left pb-2">
          <v-icon small class="mb-1 mr-2" color="teal lighten-1">mdi-chef-hat</v-icon>Rajulas Kitchen
        </div>
        <p class="text-left pb-2">
          <v-icon small class="mb-1 mr-2" color="teal lighten-1">mdi-chef-hat</v-icon>Number of Items: 2 View
        </p>
      </v-card-text>
      <v-divider class="ma-0 grey lighten-4"></v-divider>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
@import "./OrderRepeatedCard.scss";
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ItemCard",
  props: ["scrollId"],
  data: () => ({}),
  methods: {
    onScroll() {
      console.log("Scrolled")
    }
  }
});
</script>