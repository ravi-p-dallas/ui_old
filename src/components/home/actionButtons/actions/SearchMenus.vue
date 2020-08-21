<template>
  <v-container fluid mt-10>
    <ActionToolbar title="Explore Menus" />
    <v-row align="center" justify="center" class="ma-2">
      <v-col v-for="(Menu, i) in Menus" :key="i">
        <v-card max-width="320">
          <v-img height="250" :src="Menu.image" class="align-end">
            <v-card-title class="test font-weight-bold white--text">
              <v-icon color="orange lighten-1"> mdi-fire </v-icon> {{ Menu.itemName }}<v-spacer />
              <v-icon color="white lighten-1" small> mdi-currency-inr </v-icon>{{ Menu.price }}</v-card-title
            >
          </v-img>
          <v-card-text> {{ Menu.description }} </v-card-text>
          <v-card-title class="text-subtitle-1 mx-2 pa-2">
            {{ Menu.kitchenName }} <v-spacer />
            <div class="text-subtitle-1 blue-grey--text ml-1">{{ Menu.speciality }}</div>
          </v-card-title>
          <v-divider class="mx-2 pa-0"></v-divider>
          <v-card-title class="text-subtitle-2 mx-2 pa-2">
            Portion: {{ Menu.capacity }} person(s)<v-spacer />
            <v-rating v-model="Menu.rating" dense half-increments>
              <template v-slot:item="props">
                <v-icon color="green lighten-1" small @click="props.click">
                  {{ props.isFilled ? 'mdi-star-circle' : 'mdi-circle-outline' }}
                </v-icon>
              </template>
            </v-rating>
          </v-card-title>

          <v-card-text>
            <div class="text-subtitle-2">Orders Left: {{ Menu.orderCapacityLeft != null ? Menu.orderCapacityLeft : 0 }}</div>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip small class="ma-2" color="green" outlined>9:00 AM</v-chip>
              <v-chip small class="ma-2" color="green" outlined>12:00 PM</v-chip>
              <v-chip small class="ma-2" color="green" outlined>4:00 PM</v-chip>
              <v-chip small class="ma-2" color="green" outlined>7:00 PM</v-chip>
              <v-chip small class="ma-2" color="green" outlined>9:00 PM</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="snackbar = true">
              <v-icon color="green lighten-1">
                mdi-cart-plus
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn color="deep-purple lighten-2" text @click="snackbar = true"
              >Reccuring
              <v-icon color="green lighten-1">
                mdi-cart-arrow-right
              </v-icon>
            </v-btn>
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

    <v-snackbar v-model="snackbar" :timeout="-1" shaped color="success" bottom>
      Item added to cart. Click on cart to chekout on the right navigation drawer.

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<style lang="scss" scoped>
.test {
  color: rgb(8, 248, 68);
  text-shadow: 0 0 5px rgb(250, 0, 0), 0 0 10px rgb(248, 248, 248), 0 0 20px rgb(22, 214, 205), 0 0 40px rgb(161, 12, 12), 0 0 80px #8c7,
    0 0 90px rgb(151, 175, 141), 0 0 100px rgb(50, 211, 18), 0 0 150px rgb(41, 223, 17);
}
</style>>
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
  snackbar = false;
  Menus = [
    {
      image: 'https://images.food52.com/N6TN7x-H4ZTPEHbZVVuiO1iTqLc=/768x511/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg',
      kitchenName: 'Vegna',
      speciality: 'South Indian',
      rating: 2.5,
      itemName: 'Biryani',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
      orderCapacityLeft: 5,
      price: 220,
    },
    {
      image: 'https://mjskitchen.com/wp-content/uploads/2017/05/ArugulaPeaSaladV1_Web.jpg',
      kitchenName: 'Bawarchi',
      speciality: 'Italian',
      rating: 3.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
      orderCapacityLeft: 5,
      price: 220,
    },
    {
      image: 'https://media.cntraveler.com/photos/5703e5da62735b7f3cd8b9b1/16:9/w_1440,c_limit/pizza-cities-nyc-robertas-cr-courtesy.jpg',
      kitchenName: 'FireHouse',
      speciality: 'Italian',
      rating: 1.5,
      itemName: 'Cheese Pizza',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
      orderCapacityLeft: 5,
      price: 220,
    },
    {
      image: 'https://www.kohinoor-joy.com/wp-content/uploads/2016/11/north-Indian-food-featured-image-1068x712.jpg',
      kitchenName: 'MyKitchen4',
      speciality: 'Mexican4',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
      price: 220,
    },
    {
      image: 'https://www.abbeyskitchen.com/wp-content/uploads/2016/07/veggie-noodle-lemon-pasta-1-of-9.jpg',
      kitchenName: 'MyKitchen1',
      speciality: 'Mexican1',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
      price: 220,
    },
    {
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukh7i9riyebe4d6z8wtr',
      kitchenName: 'MyKitchen2',
      speciality: 'Mexican2',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
      price: 220,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'Mexican3',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
      price: 220,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'Mexican4',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'Mexican1',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen2',
      speciality: 'Mexican2',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
      price: 220,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'Mexican3',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'Mexican4',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
      price: 220,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'Mexican1',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 3,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen2',
      speciality: 'Mexican2',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 4,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'Mexican3',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 5,
      price: 220,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'Mexican4',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      capacity: 6,
      price: 220,
    },
  ];

  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }
}
</script>
