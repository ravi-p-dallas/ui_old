<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">
        BECOME A PROUD CHEF - WORLD IS WAITING FOR YOUR PASSION.
      </div>
    </v-card-title>

    <v-img height="526" :src="image"></v-img>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="blue-grey--text ml-2">Rest assured. Strat Simple.</div>
        <v-spacer />
        <div class="blue--text">Follow the Guidelines</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="ma-0 pa-6 justify-right">
      <v-text-field id="kitchName" name="kitchName" label="Name your Kitchen" outlined clearable></v-text-field>
      <v-btn class="white--text font-weight-bold red darken-1 ">
        <v-icon left>mdi-chef-hat</v-icon>
        Reserve
      </v-btn>
    </v-card-text>
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
    selection: 1,
    image: require("@/assets/biryani_2.jpg")
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
});
</script>