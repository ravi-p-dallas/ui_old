<template>
  <v-row align="center" justify="center" class="ma-2">
    <v-col>
      <v-toolbar flat width="100%">
        <v-toolbar-title class="font-weight-bold ">
          <span style="letter-spacing:1px" class="text_card_style ma-0">
            {{ title }}
          </span>
        </v-toolbar-title>
        <v-btn dark color="indigo" text class="mr-2" @click="handleFunctionCall('Home')"> <v-icon class="green--text lighten-4">mdi-backburger</v-icon></v-btn>
        <v-text-field
          label="Search"
          class="ma-auto green--text text--lighten-3"
          outlined
          rounded
          solo
          clearable
          hide-details
          append-icon="mdi-magnify"
        ></v-text-field>

        <v-btn text class="ml-2"><v-icon class="green--text lighten-4">mdi-book-open-page-variant</v-icon></v-btn>
        <v-btn text class="ml-2"><v-icon class="green--text lighten-4">mdi-silverware</v-icon></v-btn>
        <v-btn text class="ml-2"><v-icon class="green--text lighten-4">mdi-chef-hat</v-icon></v-btn>

        <v-chip-group column multiple>
          <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Organic</v-chip>
          <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Healthy</v-chip>
          <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Veggie</v-chip>
          <v-chip small class="ma-2" color="green" outlined label filter filter-icon="mdi-check-box-outline">Calorie Smart</v-chip>
        </v-chip-group>
      </v-toolbar>
    </v-col>
  </v-row>
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
    console.log('LayoutContainer Object Contructor called');
  }

  handleFunctionCall(comp: string) {
    console.log(comp);
    const cMod = getModule(ActionButtonsSwitch);
    cMod.changeComponent(comp);
  }
}
</script>
