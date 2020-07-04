<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">
        How we operate?
      </div>
    </v-card-title>
    <vue-plyr>
      <video>
        <source src="https://vsassets.netlify.app/vantashala.mp4" type="video/mp4" size="720" />
      </video>
    </vue-plyr>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
        <div class="grey--text ml-4">5 (4413)</div>
        <v-spacer /> Encourage by liking us on Facebook
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title> VantaShala.com - Mission </v-card-title>

    <v-card-text> </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss"></style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LayoutCard",
  props: [],
  components: {},
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
