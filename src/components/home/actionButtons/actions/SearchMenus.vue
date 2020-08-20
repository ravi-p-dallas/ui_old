<template>
  <v-container fluid mt-10>
    <ActionToolbar />
    <v-row align="center" justify="center" class="ma-2">
      <v-col v-for="(Menu, i) in Menus" :key="i">
        <v-card max-width="320">
          <v-img height="250" :src="Menu.image" class="white--text text-subtitle-1 align-end">
            <v-card-title class="">{{ Menu.itemName }}</v-card-title>
          </v-img>
          <v-card-text> {{ Menu.description }} </v-card-text>
          <v-card-title class="text-subtitle-1 mx-2 pa-2">
            {{ Menu.kitchenName }} <v-spacer />
            <div class="text-subtitle-1 blue-grey--text ml-1">{{ Menu.speciality }}</div>
          </v-card-title>

          <v-divider class="mx-2 pa-0"></v-divider>
          <v-card-title class="green--text text-subtitle-1 align-end"
            >Availability
            <v-spacer />
            <v-row class="ml-2">
              <v-rating :value="Menu.rating" color="amber" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ml-4">{{ Menu.rating }} ({{ Menu.noOfReviews }})</div>
            </v-row></v-card-title
          >
          <div class="grey--text ml-4">Sufficient for {{ Menu.capacity }} person(s)</div>
          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip>BreakFast</v-chip>
              <v-chip>Lunch</v-chip>
              <v-chip>Dinner</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>Reserve</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple lighten-2" text>Ingradients</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="3" v-for="(Menu, i) in Menus" :key="i"> </v-col>
        <v-btn style="background: transparent;" to="/ourMenu" class="mx-auto my-12 text-center" width="300" height="100" cols="12">View more Menus</v-btn>
      </v-row>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import ActionToolbar from './ActionToolbar.vue';
import { getModule } from 'vuex-module-decorators';
import CountryFlip from '../../../../store/CountryFlip';

@Component({
  components: { ActionToolbar },
})
export default class SearchMenus extends Vue {
  name = 'SearchMenus';
  Menus = [
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'South Indian',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen2',
      speciality: 'Italian',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'FireHouse',
      speciality: 'Italian',
      rating: 4.5,
      itemName: 'Cheese Pizza',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'All rounder4',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'All rounder1',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen2',
      speciality: 'All rounder2',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'All rounder3',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'All rounder4',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'All rounder1',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen2',
      speciality: 'All rounder2',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'All rounder3',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'All rounder4',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'All rounder1',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen2',
      speciality: 'All rounder2',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'All rounder3',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'All rounder4',
      rating: 4.5,
      itemName: 'sandwiches',
      description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
    },
  ];

  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }
}
</script>
