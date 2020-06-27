<template>
  <v-card min-width="300" max-width="300" class="mx-auto">
    <v-list-item :class="CustomStyle" sticly>
      <v-list-item-avatar color="white" class="ma-auto">
        <div class="ma-auto font-weight-bold green--text">{{Char}}</div>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline text-right white--text">{{Title}}</v-list-item-title>

        <v-list-item-subtitle class="text-right mt-2">{{Caption}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-card-text class="ma-0 pa-0">
      <v-card
        tile
        outline
        v-scroll.self="onScroll"
        class="overflow-y-auto ma-0"
        max-height="300"
        flat
        v-bind:id="scrollId"
      >
        <v-card-text>
          Upcoming Order:
          <br />Date: July 29th, 2020 7:00 PM
          <br />Chef: Rajulas Kitchen
          <br />Numbe of Items: 2 View
          <v-divider class="mt-2 mb-2 grey lighten-4"></v-divider>Upcoming Order:
          <br />Date: July 29th, 2020 7:00 PM
          <br />Chef: Rajulas Kitchen
          <br />Numbe of Items: 2 View
          <v-divider class="mt-2 mb-2 grey lighten-4"></v-divider>Upcoming Order:
          <br />Date: July 29th, 2020 7:00 PM
          <br />Chef: Rajulas Kitchen
          <br />Numbe of Items: 2 View
          <v-divider class="mt-2 mb-2 grey lighten-4"></v-divider>Upcoming Order:
          <br />Date: July 29th, 2020 7:00 PM
          <br />Chef: Rajulas Kitchen
          <br />Numbe of Items: 2 View
          <br />
        </v-card-text>
      </v-card>
    </v-card-text>
    <v-divider class></v-divider>
    <v-card-actions class="grey lighten-5">
      <v-btn small text color="teal darken-4">Open Series</v-btn>
      <v-btn small text color="light-blue darken-4">Cancel Upcoming</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="cyan darken-4">mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
@import "./OrderRepeatedCard.scss";
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DesignedCard",
  props: ["Title", "Caption", "Char", "CustomStyle", "scrollId"],
  data: () => ({
    scrollInvoked: 0
  }),
  methods: {
    onScroll() {
      this.scrollInvoked++;
    }
  }
});
</script>