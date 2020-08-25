<template>
  <v-container fluid>
    <v-card-title class="justify-center text-center headline font-weight-bold mt-1">
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:3px' : 'letter-spacing:6px'" class="text_card_style">
        MY UPCOMING ORDERS
      </div>
    </v-card-title>

    <v-row align="center" justify="center" class="pa-5">
      <v-col lg="2" md="6" v-for="item in items" :key="item.Char">
        <OrderRepeatedCard
          :Title="item.title"
          :Char="item.char"
          :Color="item.color"
          :Caption="item.caption"
          :CustomStyle="item.customStyle"
          :DividerStyle="item.dividerStyle"
          :scrollId="item.scrollId"
          class="mt-5 mb-15"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import Vue from 'vue';
import OrderRepeatedCard from './OrderRepeatedCard.vue';

export default Vue.extend({
  name: 'ActionButtons',

  components: {
    OrderRepeatedCard,
  },
  data: () => ({
    items: [
      {
        title: 'BiWeekly Orders',
        char: 'B',
        color: 'ma-auto font-weight-bold green--text text--lighten-3',
        caption: 'Delivered on bi-weekly basis',
        customStyle: 'green lighten-3',
        dividerStyle: 'green lighten-4',
        scrollId: 'biWeekly_id',
      },
      {
        title: 'Monthly Orders',
        char: 'M',
        color: 'ma-auto font-weight-bold orange--text text--lighten-3',
        caption: 'Delivered on bi-weekly basis',
        customStyle: 'orange lighten-3',
        dividerStyle: 'orange lighten-4',
        scrollId: 'monthly_id',
      },
      {
        title: 'Weekly Orders',
        char: 'W',
        color: 'ma-auto font-weight-bold red--text text--lighten-3',
        caption: 'Delivered on bi-weekly basis',
        customStyle: 'red lighten-3 white--text',
        dividerStyle: 'red lighten-4',
        scrollId: 'weekly_id',
      },
      {
        title: 'Daily Orders',
        char: 'D',
        color: 'ma-auto font-weight-bold blue--text text--lighten-3',
        caption: 'Delivered on bi-weekly basis',
        customStyle: 'blue lighten-3',
        dividerStyle: 'blue lighten-4',
        scrollId: 'daily_id',
      },
      {
        title: 'One Time',
        char: 'N',
        color: 'ma-auto font-weight-bold blue--text text--lighten-3',
        caption: 'Delivered for once',
        customStyle: 'blue-grey lighten-3',
        dividerStyle: 'blue-grey lighten-4',
        scrollId: 'onetime_id',
      },
    ],
  }),
});
</script>
