<template>
  <v-container fluid mt-10>
    <v-card max-width="320" min-width="320" class="mx-auto overflow-hidden">
      <v-img height="250" :src="Menu.image" class="align-end">
        <v-card-title class="test font-weight-bold white--text">
          <v-icon color="orange lighten-1"> mdi-fire </v-icon> {{ Menu.itemName }}<v-spacer /> <v-icon color="white lighten-1" small> mdi-currency-inr </v-icon
          >{{ Menu.price }}</v-card-title
        >
      </v-img>

      <v-card-text class="text-justify">
        <v-clamp autoresize :max-lines="2"> {{ Menu.description }} </v-clamp>
      </v-card-text>
      <v-card-title class="text-subtitle-1 mx-2 pa-2">
        {{ Menu.kitchenName }} <v-spacer />
        <div class="text-subtitle-1 blue-grey--text ml-1">{{ Menu.speciality }}</div>
      </v-card-title>
      <v-divider class="mx-2 pa-0"></v-divider>
      <v-card-title class="text-subtitle-2 mx-2 pa-2">
        Serves: {{ Menu.capacity }} person(s)<v-spacer />
        <v-btn icon x-small>
          <v-icon color="green">mdi-open-source-initiative </v-icon>
        </v-btn>
        <v-rating v-model="Menu.rating" dense half-increments class="pb-1">
          <template v-slot:item="props">
            <v-icon color="green lighten-1" small @click="props.click">
              {{ props.isFilled ? 'mdi-star-circle' : 'mdi-circle-outline' }}
            </v-icon>
          </template>
        </v-rating>
      </v-card-title>

      <v-card-title class="text-subtitle-2 mx-2 pa-2">
        Choose Dates:

        <v-icon color="green lighten-1" class="ml-2">
          mdi-calendar-clock
        </v-icon>
        <!-- <v-date-picker v-model="startDate" color="green lighten-1"></v-date-picker> -->
        <v-spacer />
        Order Limit:
        {{ Menu.orderCapacityLeft != null && Menu.orderCapacityLeft > 0 ? '' + Menu.orderCapacityLeft : '100' }}
      </v-card-title>

      <v-card-text class="ma-0">
        <v-chip-group column multiple active-class="green darken-4 white--text text--darken-4" class="pa-0">
          <v-chip small color="green lighten-4">09:00 AM</v-chip>
          <v-chip small color="green lighten-4">12:00 PM</v-chip>
          <v-chip small color="green lighten-4">04:00 PM</v-chip>
          <v-chip small color="green lighten-4">07:00 PM</v-chip>
          <v-chip small color="green lighten-4">09:00 PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-app-bar color="deep-green accent-1" dark dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-btn color="deep-purple lighten-2" text @click="addTocart(Menu)">
          <v-icon color="green lighten-1">
            mdi-cart-plus
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn color="yellow darken-3" text @click="addTocart(Menu)"
          >Reccuring
          <v-icon color="yellow darken-3">
            mdi-cart-arrow-right
          </v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary width="320" color="green lighten-2 ">
        <v-list dense>
          <v-list-item two-line>
            <v-list-item-avatar size="42" tile>
              <img :src="Menu.image" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ Menu.itemName }}</v-list-item-title>
            </v-list-item-content>

            <v-btn icon @click.stop="drawer = !drawer">
              <v-icon>mdi-chevron-left-box</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list subheader>
          <v-subheader>Description:</v-subheader>
          <v-list-item-content>{{ Menu.description }}</v-list-item-content>
        </v-list>

        <v-divider></v-divider>

        <v-list subheader>
          <v-subheader> <v-icon>mdi-barley</v-icon> Gradients</v-subheader>
          <v-subheader>
            <v-chip-group column>
              <v-chip small color="green lighten-4">Rice</v-chip>
              <v-chip small color="green lighten-4">almonds</v-chip>
              <v-chip small color="green lighten-4">test</v-chip>
              <v-chip small color="green lighten-4">Rice</v-chip>
              <v-chip small color="green lighten-4">almonds</v-chip>
              <v-chip small color="green lighten-4">test</v-chip>
              <v-chip small color="green lighten-4">Rice</v-chip>
              <v-chip small color="green lighten-4">almonds</v-chip>
              <v-chip small color="green lighten-4">test</v-chip>
              <v-chip small color="green lighten-4">Rice</v-chip>
              <v-chip small color="green lighten-4">almonds</v-chip>
              <v-chip small color="green lighten-4">test</v-chip>
            </v-chip-group></v-subheader
          >
        </v-list>
        <v-divider></v-divider>
      </v-navigation-drawer>
    </v-card>

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
import { getModule } from 'vuex-module-decorators';
import CountryFlip from '../../../../../store/CountryFlip';
import CartStore from '../../../../../store/CartStore';
import VClamp from 'vue-clamp';

@Component({
  components: { VClamp },
  props: ['Menu'],
})
export default class SearchMenus extends Vue {
  name = 'SearchMenus';
  snackbar = false;
  drawer = null;

  constructor(parameters) {
    super();
    console.log(' Constructing Menu Item ');
  }

  addTocart(menu: any) {
    console.log('Adding to cart', menu);
    getModule(CartStore).addToCart(menu);
    this.snackbar = true;
  }
}
</script>
