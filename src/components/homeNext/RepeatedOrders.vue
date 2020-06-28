
<template>
  <v-container fluid v-scroll="onScroll">
    <v-row align="center" justify="center" no-gutters>
      <v-col lg="2" class="ma-2" v-for="item in items" :key="item.Char">
        <OrderRepeatedCard
          :Title="item.title"
          :Char="item.char"
          :Caption="item.caption"
          :CustomStyle="item.customStyle"
          :scrollId="item.scrollId"
          class="mt-15 mb-15"
        />
        <v-btn v-show="fab" fab fixed bottom right color="primary" @click="toTop">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.bg {
  background: rgb(255, 255, 255);
  
  background: linear-gradient(0deg, rgba(255, 248, 225, 1) 0%, rgba(255, 255, 255, 1) 100%);
}
</style>

<script lang="ts">
import Vue from "vue";
import OrderRepeatedCard from "./OrderRepeatedCard.vue";

export default Vue.extend({
  name: "ActionButtons",

  components: {
    OrderRepeatedCard
  },
  data: () => ({
    fab: false,
    items: [
      {
        title: "BiWeekly Orders",
        char: "B",
        caption: "Delivered on bi-weekly basis",
        customStyle: "green lighten-3",
        scrollId: "biWeekly_id"
      },
      {
        title: "Monthly Orders",
        char: "M",
        caption: "Delivered on bi-weekly basis",
        customStyle: "orange lighten-3",
        scrollId: "monthly_id"
      },
      {
        title: "Weekly Orders",
        char: "W",
        caption: "Delivered on bi-weekly basis",
        customStyle: "red lighten-3 white--text",
        scrollId: "weekly_id"
      },
      {
        title: "Daily Orders",
        char: "D",
        caption: "Delivered on bi-weekly basis",
        customStyle: "blue lighten-3",
        scrollId: "daily_id"
      }
    ]
  }),
  methods: {
    onScroll(e) {
      console.log(typeof window);
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
});
</script>
