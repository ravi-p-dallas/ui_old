<template>
  <!-- <v-toolbar flat width="100%" align="center" justify="center" class="mt-10"> -->
  <v-container class="grey lighten-5" fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-card class="pa-2 justify-center" outlined tile>
          <v-row no-gutters>
            <v-col cols="12" md="3" lg="4" class="my-auto">
              <v-col class="my-auto px-5">
              <span style="letter-spacing:1px; width:100%; height:100%" class="ma-auto text_card_style justify-center text-left">
                {{ title }}
              </span></v-col>
            </v-col>
            <v-col cols="12" md="4" lg="4" class="text-center">
              <v-text-field
                label="Search"
                class="green--text text--lighten-3 ma-2"
                outlined
                clear-icon="mdi-close-circle"
                clearable
                shaped
                type="text"
                flat
                hide-details
                prepend-inner-icon="mdi-magnify"
                @keydown.enter="create"
                dense
                style="max-width:320px; max-height:30px; min-width: 125px "
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5" lg="4" class="text-right">
              <v-col class="my-auto">
              <v-btn color="green lighten-5" class="mr-3"><v-icon class="green--text">mdi-backburger</v-icon></v-btn>
              <!-- <v-btn color="green lighten-5" class="ma-1"><v-icon class="green--text">mdi-book-open-page-variant</v-icon></v-btn>
              <v-btn color="green lighten-5" class="ma-1"><v-icon class="green--text">mdi-silverware</v-icon></v-btn> -->
              <v-btn color="green lighten-5" class=""><v-icon class="green--text">mdi-chef-hat</v-icon></v-btn>
              </v-col>
            </v-col>
          </v-row>

          <!-- <v-toolbar text-center align="center" class="pa-0 d-flex flex-column" elevation="0">
            <v-btn dark color="indigo" text class="mr-2" @click="handleFunctionCall('Home')">
              <v-icon class="green--text lighten-4">mdi-backburger</v-icon></v-btn
            >

            <v-toolbar-title style="letter-spacing:1px" class="text_card_style ma-0 hidden-sm-and-down">
              {{ title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="justify-center text-center">
              <v-text-field
                label="Search"
                class="green--text text--lighten-3"
                outlined
                clear-icon="mdi-close-circle"
                clearable
                shaped
                type="text"
                flat
                hide-details
                prepend-inner-icon="mdi-magnify"
                @keydown.enter="create"
                dense
                style="max-width:320px; max-height:30px; min-width: 125px"
              ></v-text-field>
              <v-btn text class="ml-2"><v-icon class="green--text lighten-4">mdi-book-open-page-variant</v-icon></v-btn>
              <v-btn text class="ml-2"><v-icon class="green--text lighten-4">mdi-silverware</v-icon></v-btn>
              <v-btn text class="ml-2"><v-icon class="green--text lighten-4">mdi-chef-hat</v-icon></v-btn>
            </v-toolbar-items>
          </v-toolbar> -->
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3">
        <v-card class="pa-2 justify-center" outlined tile>
          <v-system-bar color="green lighten-2">
            <v-spacer></v-spacer>
            Time Filters
          </v-system-bar>
          <v-chip-group column multiple>
            <v-chip small class="ma-2" color="orange" outlined label filter filter-icon="mdi-check-box-outline">Breafast</v-chip>
            <v-chip small class="ma-2" color="orange" outlined label filter filter-icon="mdi-check-box-outline">Lunch</v-chip>
            <v-chip small class="ma-2" color="orange" outlined label filter filter-icon="mdi-check-box-outline">Snack</v-chip>
            <v-chip small class="ma-2" color="orange" outlined label filter filter-icon="mdi-check-box-outline">Dinner</v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-2 justify-center" outlined tile>
          <v-system-bar color="green lighten-2">
            <v-spacer></v-spacer>
            Food Type Filters
          </v-system-bar>
          <v-chip-group column multiple>
            <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Yogurt</v-chip>
            <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Organic</v-chip>
            <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Non-Veg</v-chip>
            <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Veg</v-chip>
            <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Calorie Smart</v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-2" outlined tile>
          <v-system-bar color="green lighten-2">
            <v-spacer></v-spacer>
            Medical Friendly Filters
          </v-system-bar>
          <v-chip-group column multiple>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Pureed</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Low Sodium</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Gluten Free</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Heart Friendly</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Cancer Support</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Renal Friendly</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Gastric Friendly</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Diabetes Friendly</v-chip>
            <v-chip small class="ma-2" color="blue" outlined label filter filter-icon="mdi-check-box-outline">Generall Wellness</v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import ActionButtonsSwitch from '@/store/ActionButtonsSwitch';

@Component({
  components: {},
  props: ['title'],
})
export default class ActionToolbar extends Vue {
  name = 'ActionToolbar';

  constructor(parameters) {
    super();
    console.log('ActionToolBar Contructed');
  }

  handleFunctionCall(comp: string) {
    console.log(comp);
    const cMod = getModule(ActionButtonsSwitch);
    cMod.changeComponent(comp);
  }
  create(key) {
    console.log('Pressed Key: ', key);
  }
}
</script>
