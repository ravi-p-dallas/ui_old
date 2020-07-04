<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:1px'" class="text_card_style">
        BECOME A PROUD CHEF - WORLD IS WAITING FOR YOUR PASSION.
      </div>
    </v-card-title>
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-card-text>
      <div class="my-4 subtitle-1">
        VantaShala has Protocols for both Customers & Chefs.
      </div>

      <div>
        Follow the CHEF Guide Lines.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-text-field label="Name your Kitchen:" outlined clearable></v-text-field>
      <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss"></style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LayoutCard",
  props: [],
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
});
</script>
