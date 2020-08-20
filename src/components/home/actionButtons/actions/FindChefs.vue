<template>
  <v-container fill-height fluid>
    <ActionToolbar />
    <v-row align="center" justify="center" class="ma-2">
      <v-col>
        FindChefs
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
export default class FindChefs extends Vue {
  name = 'FindChefs';

  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }
}
</script>
