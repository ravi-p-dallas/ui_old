<template>
  <v-container fluid mt-10>
    <ActionToolbar />
    <v-row align="center" justify="center" class="ma-2">
      <v-col>
        BeAChef
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import ActionToolbar from './ActionToolbar.vue';

@Component({
  components: { ActionToolbar },
})
export default class BeAChef extends Vue {
  name = ' BeAChef';

  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }
}
</script>
