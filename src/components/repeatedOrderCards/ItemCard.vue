<template>
  <v-card tile outline v-scroll.self="onScroll" class="overflow-y-auto ma-0" max-height="300" flat v-bind:id="scrollId" xs12 md6 lg3 xl4>
    <v-card-text class="ma-0" v-for="n in 5" :key="n">
      <v-card-text class="ma-0">
        <div class="text-left"><v-icon small class="mr-2" color="teal lighten-1">mdi-calendar</v-icon>July 29th, 2020 7:00 PM</div>
        <div class="text-left"><v-icon small class="mb-1 mr-2" color="teal lighten-1">mdi-chef-hat</v-icon>Rajulas Kitchen</div>
        <p class="text-left">
          <v-icon small class="mb-1 mr-2" color="teal lighten-1">mdi-chef-hat</v-icon>Number of Items:
          <a>2</a>
        </p>
        <div>
          <v-card-actions class="ma-0 pa-0">
            <v-spacer></v-spacer>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }" class="ma-0">
                <span v-bind="attrs" v-on="on">
                  <v-btn icon small>
                    <v-icon color="cyan darken-4">mdi-plus</v-icon>
                  </v-btn>
                </span>
              </template>
              <span>Cancel this order</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }" class="ma-0">
                <span v-bind="attrs" v-on="on">
                  <v-btn icon small>
                    <v-icon color="cyan darken-4">mdi-minus</v-icon>
                  </v-btn>
                </span>
              </template>
              <span>Cancel this order</span>
            </v-tooltip>
          </v-card-actions>
        </div>
      </v-card-text>

      <v-divider :class="DividerStyle"></v-divider>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
@import './OrderRepeatedCard.scss';
</style>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ItemCard',
  props: ['scrollId', 'DividerStyle'],
  data: () => ({}),
  methods: {
    onScroll() {
      this.$log.debug(this.name, 'Scrolled');
    },
  },
});
</script>
