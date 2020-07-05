<template>
  <v-card fluid class="mx-auto mt-10 mb-10" flat>
    <v-list-item class="mt-5">
      <v-list-item-content class="ma-0 pa-0">
        <v-list-item-title class="text-center headline mx-auto font-weight-bold">
          <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:6px'" class="text_card_style">
            WHAT OUR FANTASTIC USERS SAY
          </div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-text class="ma-0 mb-10 pa-0">
      <v-timeline>
        <v-timeline-item v-for="n in 4" :key="n" large>
          <template v-slot:icon>
            <v-avatar>
              <img src="http://i.pravatar.cc/64" />
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span class="orange--text">Gopi Kancharala</span>
            <p class="grey--text">Dec 02, 2020 - 7:28 PM CST</p>
          </template>
          <v-card class="elevation-2">
            <v-card-text class="orange--text font-weight-bold">“Didn't expect this level of service. Very nice and continue it.”</v-card-text>
          </v-card>
        </v-timeline-item>
        <div class="ma-auto text-center">
          <v-btn color="blue-grey dark-3 mr-1 white--text" small>
            <v-icon small>mdi-arrow-left</v-icon>
          </v-btn>

          <v-btn color="blue-grey dark-3 white--text" small>
            <v-icon small>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Feedback"
});
</script>
