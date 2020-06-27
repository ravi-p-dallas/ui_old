
<template>
  <v-container fluid ma-10 pa-10>
    <v-row align="center" justify="center" no-gutters>
      <v-col lg="2" class="ma-2" v-for="item in items" :key="item.Char">
        <DesignedCard
          :Title="item.title"
          :Char="item.char"
          :Caption="item.caption"
          :CustomStyle="item.customStyle"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from "vue";
import DesignedCard from "./DesignedCard.vue";

export default Vue.extend({
  name: "ActionButtons",

  components: {
    DesignedCard
  },
  data: () => ({
    items: [
      {
        title: "BiWeekly Orders",
        char: "W",
        caption: "Delivered on bi-weekly basis",
        customStyle: "green lighten-3"
      },
      {
        title: "Monthly Orders",
        char: "B",
        caption: "Delivered on bi-weekly basis",
        customStyle: "orange lighten-3"
      },
      {
        title: "Weekly Orders",
        char: "M",
        caption: "Delivered on bi-weekly basis",
        customStyle: "red lighten-3 white--text"
      },
      {
        title: "Daily Orders",
        char: "D",
        caption: "Delivered on bi-weekly basis",
        customStyle: "blue lighten-3"
      }
    ]
  })
});
</script>
