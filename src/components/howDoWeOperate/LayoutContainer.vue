<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column' : 'mb-10'">
      <!-- v-for="i in 2" :key="`6${i}`"  -->
      <v-flex xs12 md6 :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column' : 'mt-10'">
        <LayoutVideoCard />
      </v-flex>
      <v-flex xs12 md6 mt-10>
        <LayoutSignInBeAChefCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import Vue from 'vue';
import LayoutSignInBeAChefCard from './LayoutSignInBeAChefCard.vue';
import LayoutVideoCard from './LayoutVideoCard.vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: { LayoutSignInBeAChefCard, LayoutVideoCard },
})
export default class LayoutContainer extends Vue {
  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }
}
</script>
