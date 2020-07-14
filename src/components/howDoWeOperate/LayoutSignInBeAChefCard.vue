<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">
        BECOME A PROUD CHEF - WORLD IS WAITING FOR YOUR PASSION.
      </div>
    </v-card-title>

    <v-img height="395" src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg"></v-img>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="blue-grey--text ml-2">Rest assured. Strat Simple.</div>
        <v-spacer />
        <div class="blue--text">Follow the Guidelines</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="ma-0 pa-7">
    <v-row align="center" class="mx-0">
      <v-text-field id="kitchName" name="kitchName" label="Name your Kitchen" outlined clearable></v-text-field>
      <v-spacer />
    <v-card-actions :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column ma-5' : ''">
      <div class="text-center">
        <v-btn class="white--text font-weight-bold red darken-1 ">
          <v-icon left>mdi-chef-hat</v-icon>
          Reserve
        </v-btn>
        <v-btn class="white--text font-weight-bold blue darken-1 ml-4"> Existing Chef? <v-icon class">mdi-key</v-icon> Login </v-btn>
      </div>
    </v-card-actions>
    </v-row>
    </v-text-field>
  </v-card>
</template>

<style lang="scss">
.v-text-field{
    width: 300px;
  }
</style>
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
