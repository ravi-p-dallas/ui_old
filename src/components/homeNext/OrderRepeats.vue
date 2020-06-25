
<template>
  <v-container fluid ma-10 pa-10>
    <v-row align="center" justify="center" no-gutters v-for="item in items" :key="item.Char"> 
      <v-col lg="2" class="ma-2">
        <DesignedCard title="BiWeekly" char="B" Caption="Delivered on bi-weekly basis" />
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
        title: "BiWeekly",
        char: "W",
        Caption: "Delivered on bi-weekly basis"
      },
      {
        title: "BiWeekly",
        char: "B",
        Caption: "Delivered on bi-weekly basis"
      },
      {
        title: "BiWeekly",
        char: "M",
        Caption: "Delivered on bi-weekly basis"
      },
      {
        title: "BiWeekly",
        char: "M",
        Caption: "Delivered on bi-weekly basis"
      }
    ]
  })
});
</script>
