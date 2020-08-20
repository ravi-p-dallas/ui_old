<template>
  <v-row align="center" justify="center" class="ma-2">
    <v-col>
      <v-toolbar flat width="100%">
        <v-toolbar-title class="font-weight-bold ">
          <span style="letter-spacing:1px" class="text_card_style ma-0">
            Menus Section
          </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text class="mr-2" @click="handleFunctionCall('Home')"> <v-icon>mdi-arrow-left-bold</v-icon></v-btn>
        <v-text-field
          label="ZIP Code"
          class="ma-auto green--text text--lighten-3"
          outlined
          rounded
          solo
          clearable
          hide-details
          append-icon="mdi-magnify"
        ></v-text-field>

        <v-btn text class="ml-2 "><v-icon>mdi-book-open-page-variant</v-icon></v-btn>
        <v-btn text class="ml-2 "><v-icon>mdi-silverware</v-icon></v-btn>
        <v-btn text class="ml-2"><v-icon>mdi-chef-hat</v-icon></v-btn>
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
