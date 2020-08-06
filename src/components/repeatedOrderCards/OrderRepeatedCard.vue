<template>
  <v-card class="mx-auto" style="max-width:340px;">
    <v-list-item :class="CustomStyle">
      <v-list-item-avatar color="white" class="ma-auto">
        <div :class="Color">{{ Char }}</div>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline text-right white--text">{{ Title }}</v-list-item-title>

        <v-list-item-subtitle class="text-right mt-2">{{ Caption }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text class="ma-0 pa-0">
      <v-app-bar flat elevation="0" dense color="white" class="grey lighten-5">
        <blockquote>Upcoming Orders: (12)</blockquote>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }" class="ma-0">
            <span v-bind="attrs" v-on="on">
              <v-btn icon small>
                <v-icon color="cyan darken-4">mdi-minus</v-icon>
              </v-btn>
            </span>
          </template>
          <span>Cancel all upcoming orders</span>
        </v-tooltip>
      </v-app-bar>
      <v-divider class="ma-0"></v-divider>

      <ItemCard v-bind:scrollId="scrollId" :DividerStyle="DividerStyle" />
    </v-card-text>

    <v-card-actions class="grey lighten-5">
      <v-btn small text color="teal darken-4">Open Series</v-btn>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }" class="ma-0">
          <span v-bind="attrs" v-on="on">
            <v-btn icon small>
              <v-icon color="cyan darken-4">mdi-plus</v-icon>
            </v-btn>
          </span>
        </template>
        <span>Double the orders</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
@import "./OrderRepeatedCard.scss";
</style>

<script lang="ts">
import Vue from "vue";
import ItemCard from "./ItemCard.vue";

export default Vue.extend({
  name: "DesignedCard",
  props: ["Title", "Caption", "Char", "Color", "CustomStyle", "DividerStyle", "scrollId"],
  components: {
    ItemCard
  },
  data: () => ({
    scrollInvoked: 0
  }),
  methods: {}
});
</script>
