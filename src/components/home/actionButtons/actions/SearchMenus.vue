<template>
  <v-container fluid mt-10>
    <ActionToolbar title="Explore Menus" />

    <v-row>
      <v-col v-for="(Menu, i) in Menus" :key="i" align-content="center" class="ma-0" align="center" justify="space-around">
        <MenuItem :Menu="Menu" />
      </v-col>
     
    </v-row>
    <v-row>
     <v-col align-content="center" class="ma-0" align="center">
       <v-btn to="/ourMenu" >View more Menus</v-btn>
      </v-col>
   </v-row>
   
    <v-snackbar v-model="snackbar" :timeout="-1" shaped color="success" bottom>
      Item added to cart. Click on cart to chekout on the right navigation drawer.

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
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
import CartStore from '../../../../store/CartStore';

import MenuItem from './MeniItem/MenuItem.vue';

@Component({
  components: { ActionToolbar, MenuItem },
})
export default class SearchMenus extends Vue {
  name = 'SearchMenus';
  snackbar = false;
  dialog = true;
  startDate = false;
  myMap = new Map();

  Menus = [
    {
      image: 'https://images.food52.com/N6TN7x-H4ZTPEHbZVVuiO1iTqLc=/768x511/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg',
      kitchenName: 'Vegna',
      speciality: 'South Indian',
      rating: 2.5,
      itemName: 'Biryani',
      description:
        'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seatinSmall plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seatinSmall plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seatin sdf ds fds fdsfdsfjkdshfjksd fdshfjhds fhsdfjhdsjfh dskfhsdfhdsjkfhs',
      noOfReviews: 13,
      serves: 3,
      orderLimit: 5,
      price: 220,
      tags: ['organic', 'healthy', 'veggie', 'breakfast', 'lunch', 'snack'],
      id: 'two',
      deliveryOptions: ['delivery', 'pickup'],
      paymentOptions: ['onlineOnly'],
      recurringOptions: ['Daily', 'Weekly', 'BiWeekly', 'Monthly', 'OneTime'],
      nonOrganicIgradients: ['Rice', 'almonds', 'Flower', 'Turmeric'],
      Orgnaicingradients: ['Rice', 'almonds', 'Flower', 'Turmeric'],
      timeslots:['9:00 AM','4:00 PM', '7:00 PM'],
    },
    {
      image: 'https://mjskitchen.com/wp-content/uploads/2017/05/ArugulaPeaSaladV1_Web.jpg',
      kitchenName: 'Bawarchi',
      speciality: 'Italian',
      rating: 3.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 4,
      orderLimit: 5,
      price: 220,
      tags: ['organic', 'healthy', 'veggie', 'breakfast', 'lunch', 'snack', 'gastric', 'cancer', 'glutenfree', 'diabetes', 'lowsodium'],
      id: 'one',

      deliveryOptions: ['delivery', 'pickup'],
      paymentOptions: ['onlineOnly'],
      recurringOptions: ['Daily', 'Weekly', 'BiWeekly', 'Monthly', 'OneTime'],
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11 PM']
    },
    {
      image: 'https://media.cntraveler.com/photos/5703e5da62735b7f3cd8b9b1/16:9/w_1440,c_limit/pizza-cities-nyc-robertas-cr-courtesy.jpg',
      kitchenName: 'FireHouse',
      speciality: 'Italian',
      rating: 1.5,
      itemName: 'Cheese Pizza',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 5,
      orderLimit: 5,
      price: 220,
      tags: ['organic', 'healthy', 'veggie', 'breakfast', 'lunch', 'snack', 'gastric', 'cancer', 'glutenfree', 'diabetes', 'lowsodium'],
       timeslots:['12:00 PM', '7:00 PM']
    },
    {
      image: 'https://www.kohinoor-joy.com/wp-content/uploads/2016/11/north-Indian-food-featured-image-1068x712.jpg',
      kitchenName: 'MyKitchen4',
      speciality: 'Mexican4',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 6,
      price: 220,
      orderLimit: -1,
      tags: ['organic', 'healthy', 'veggie'],
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    },
    {
      image: 'https://www.abbeyskitchen.com/wp-content/uploads/2016/07/veggie-noodle-lemon-pasta-1-of-9.jpg',
      kitchenName: 'MyKitchen1',
      speciality: 'Mexican1',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 3,
      price: 220,
      tags: ['organic', 'healthy', 'veggie', 'breakfast', 'lunch', 'snack', 'gastric', 'cancer', 'glutenfree', 'diabetes', 'lowsodium'],
      timeslots:['4:00 PM', '7:00 PM', '11:00 PM'],

    },
    {
      image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukh7i9riyebe4d6z8wtr',
      kitchenName: 'MyKitchen2',
      speciality: 'Mexican2',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 4,
      price: 220,
      tags: ['organic', 'healthy', 'veggie'],
      timeslots:['09:00 AM', '12:00 PM']
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'Mexican3',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 5,
      price: 220,
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'Mexican4',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 6,
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'Mexican1',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 3,
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen2',
      speciality: 'Mexican2',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 4,
      price: 220,
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen3',
      speciality: 'Mexican3',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 5,
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen4',
      speciality: 'Mexican4',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 6,
      price: 220,
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      kitchenName: 'MyKitchen1',
      speciality: 'Mexican1',
      rating: 4.5,
      itemName: 'Sandwich',
      description: 'Small plates, salads & Sandwich - an intimate setting with 12 indoor seats plus patio seating.',
      noOfReviews: 13,
      serves: 3,
      timeslots:['09:00 AM', '12:00 PM', '4:00 PM', '7:00 PM', '11:00 PM']
    }
  ];

  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }

  addTocart(menu: any) {
    console.log('Adding to cart', menu);
    getModule(CartStore).addToCart(menu);
    this.snackbar = true;
  }

  slide(id) {
    console.log('==>', id, this.myMap.get(id));

    if (this.myMap.has(id)) {
      this.myMap.set(id, false);
    } else {
      this.myMap.set(id, !this.myMap.get(id));
    }
    const rVal = this.myMap.get(id);
    console.log('===>', rVal);
    return rVal;
  }
}
</script>
