<template>
  <v-container fill-height fluid ma-0 pa-0>
    <v-hover>
      <v-carousel hide-delimiters continuous show-arrows-on-hover cycle :interval="CarouselTime">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-container fill-height fluid ma-0 pa-0>
            <v-card :class="$vuetify.breakpoint.smAndDown ? 'transparent carousel-item text-center' : 'transparent card_mgleft'" outlined xs12 sm6 offset-sm3>
              <v-list-item>
                <v-list-item-content>
                  <div class="overline mb-10 font-weight-bold" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.25);">
                    {{ item.caption }}
                  </div>
                  <v-list-item-title
                    :class="$vuetify.breakpoint.smAndDown ? 'text-h5 font-weight-bold mb-5 text_style' : 'text-h2 font-weight-bold mb-5 text_style'"
                    >{{ item.title }}</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-wrap text-subtitle-1 font-weight-bold" mb-2> {{ item.desc }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-container>
        </v-carousel-item>
        <ActionCardButtons />
      </v-carousel>
    </v-hover>
  </v-container>
</template>
<style scoped>
.card_mgleft {
  margin-left: 10%;
}
</style>

<script lang="ts">
import Vue from 'vue';
import ActionCardButtons from './actionButtons/ActionCardButtons.vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

@Component({
  components: { ActionCardButtons },
  props: [],
})
export default class Carousel extends Vue {
  name = 'Carousel: ';
  CarouselTime = 15000;

  items = [
    {
      caption: 'Home Made',
      title: 'Ancient Traditions Applied',
      desc: 'Using Clay Pots & Slow Cooking Techniques',
    },
    {
      caption: 'Family & Education Time Matters',
      title: 'Home Made, Watch Live',
      desc: 'You have right to watch how your food is being made.',
    },
    {
      caption: 'Daily Suppliments @ Home',
      title: 'Nutritiously Homemade',
      desc: 'Chemical Free. Organic. Quinoa & Bazra & Cerels Mixed with Rice.',
    },
    {
      caption: 'Public & Social Health',
      title: 'Organic - Be Diet Specific ',
      desc: 'Unlike Restaurants, Every possible ingradient is organic. `<a>Check how we manage</a>`',
    },
  ];

  created() {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.items[i];
      this.items[i] = this.items[j];
      this.items[j] = temp;
    }
    this.$log.info(this.name, this.items);
  }
}
</script>
