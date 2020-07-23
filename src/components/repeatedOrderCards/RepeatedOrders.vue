<template>
  <v-container fluid>
    <v-card-title class="justify-center text-center headline font-weight-bold mt-10 pa-0">
        <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:3px' : 'letter-spacing:6px'" class="text_card_style">
          MY UPCOMING ORDERS
        </div>
    </v-card-title>

    <v-row align="center" justify="center" class="pa-5">
      <v-col lg="2" md="6" v-for="item in items" :key="item.Char">
        <OrderRepeatedCard
          :Title="item.title"
          :Char="item.char"
          :Caption="item.caption"
          :CustomStyle="item.customStyle"
          :DividerStyle="item.dividerStyle"
          :scrollId="item.scrollId"
          class="mt-10 mb-15"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import OrderRepeatedCard from "./OrderRepeatedCard.vue";

export default Vue.extend({
  name: "ActionButtons",

  components: {
    OrderRepeatedCard
  },
  data: () => ({
    items: [
      {
        title: "BiWeekly Orders",
        char: "B",
        caption: "Delivered on bi-weekly basis",
        customStyle: "green lighten-3",
        dividerStyle: "green lighten-4",
        scrollId: "biWeekly_id"
      },
      {
        title: "Monthly Orders",
        char: "M",
        caption: "Delivered on bi-weekly basis",
        customStyle: "orange lighten-3",
        dividerStyle: "orange lighten-4",
        scrollId: "monthly_id"
      },
      {
        title: "Weekly Orders",
        char: "W",
        caption: "Delivered on bi-weekly basis",
        customStyle: "red lighten-3 white--text",
        dividerStyle: "red lighten-4",
        scrollId: "weekly_id"
      },
      {
        title: "Daily Orders",
        char: "D",
        caption: "Delivered on bi-weekly basis",
        customStyle: "blue lighten-3",
        dividerStyle: "blue lighten-4",
        scrollId: "daily_id"
      }
    ]
  })
});
</script>
