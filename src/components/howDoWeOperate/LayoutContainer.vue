<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <!-- v-for="i in 2" :key="`6${i}`"  -->
      <v-flex xs6>
        <v-card flat>
          <v-card-text class="px-0">
            <LayoutSignInBeAChefCard />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card  flat>
          <v-card-text class="px-0">
            <LayoutVideoCard />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import LayoutSignInBeAChefCard from "./LayoutSignInBeAChefCard.vue";
import LayoutVideoCard from "./LayoutVideoCard.vue";

export default Vue.extend({
  name: "LayoutContainer",

  components: {
    LayoutSignInBeAChefCard,
    LayoutVideoCard
  },
  data: () => ({})
});
</script>
