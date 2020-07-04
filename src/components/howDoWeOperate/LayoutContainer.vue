
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <!-- v-for="i in 2" :key="`6${i}`"  -->
      <v-flex xs6>
        <v-card flat>
          <v-list-item class="mt-5">
            <v-list-item-content class="ma-0 pa-0">
              <v-list-item-title class="text-center headline mx-auto font-weight-bold">
                <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">How we operate?</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text class="px-0">
            <LayoutSignInBeAChefCard />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card flat>
          <v-list-item class="mt-5">
            <v-list-item-content class="ma-0 pa-0">
              <v-list-item-title class="text-center headline mx-auto font-weight-bold">
               
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text class="px-0">
            <LayoutVideoCard />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from 'vue';
import LayoutSignInBeAChefCard from './LayoutSignInBeAChefCard.vue';
import LayoutVideoCard from './LayoutVideoCard.vue';

export default Vue.extend({
  name: 'LayoutContainer',

  components: {
    LayoutSignInBeAChefCard,
    LayoutVideoCard,
  },
  data: () => ({}),
});
</script>
