<template>
  <v-container fill-height fluid ma-0 pa-0 class="overflow-y-auto overflow-x-hidden" :class="this.$vuetify.breakpoint.mdAndDown ? 'py-1 px-4' : 'py-12 px-4'">
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="3" v-for="(Menu, i) in Menus" :key="i" class="mx-auto my-16">
        <v-card max-width="300" class="mx-auto">
          <v-img height="250" :src="Menu.PicSrc"></v-img>
          <v-card-title>
            {{ Menu.KitchenName }}
            <div class="grey--text ml-1">{{ Menu.speciality }}</div>
          </v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="Menu.rating" color="amber" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ml-4">{{ Menu.rating }} ({{ Menu.NoOfReviews }})</div>
            </v-row>
            <div class="my-4 subtitle-1">{{ Menu.ItemName }}</div>
            <div>{{ Menu.description }}</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Availability</v-card-title>
          <div class="grey--text ml-4">Sufficien for {{ Menu.capacity }}People</div>
          <v-card-text>
            <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
              <v-chip>BreakFast</v-chip>
              <v-chip>Lunch</v-chip>
              <v-chip>Dinner</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple lighten-2" text @click="reserve">Ingradients</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-btn style="background: transparent;" to="/ourMenu" class="mx-auto my-12 text-center" width="300" height="100" cols="12">View more Menus</v-btn>
    </v-row>
    <ActionCardButtons class="pt-10" />
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import ActionCardButtons from '../ActionCardButtons.vue';
export default Vue.extend({
  name: 'SearchMenus',

  components: {ActionCardButtons},

  computed: {},

  data: () => ({
    Menus: [
      {
        PicSrc: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        KitchenName: 'MyKitchen1',
        speciality: 'All rounder1',
        rating: 4.5,
        ItemName: 'sandwiches',
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
        NoOfReviews: 13,
        capacity: 3,
      },
      {
        PicSrc: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        KitchenName: 'MyKitchen2',
        speciality: 'All rounder2',
        rating: 4.5,
        ItemName: 'sandwiches',
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
        NoOfReviews: 13,
        capacity: 4,
      },
      {
        PicSrc: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        KitchenName: 'MyKitchen3',
        speciality: 'All rounder3',
        rating: 4.5,
        ItemName: 'sandwiches',
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
        NoOfReviews: 13,
        capacity: 5,
      },
      {
        PicSrc: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
        KitchenName: 'MyKitchen4',
        speciality: 'All rounder4',
        rating: 4.5,
        ItemName: 'sandwiches',
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
        NoOfReviews: 13,
        capacity: 6,
      },
    ],
  }),
  methods: {},
});
</script>
