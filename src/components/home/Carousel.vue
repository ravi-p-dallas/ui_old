<template>
  <v-container fill-height fluid ma-0 pa-0>
    <v-hover v-slot:default="{ hover }">
      <v-carousel
        hide-delimiters
        continuous
        show-arrows-on-hover
        :cycle="hover ? false : true"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-container fill-height fluid ma-0 pa-0>
            <v-card
              class="transparent card_mgleft"
              outlined
              xs12
              sm6
              offset-sm3
            >
              <v-list-item>
                <v-list-item-content>
                  <div
                    class="overline mb-10 font-weight-bold"
                    style="text-shadow: 1px 1px 4px rgba(0,0,0,0.25);"
                  >
                    {{ item.caption }}
                  </div>
                  <v-list-item-title
                    :class="
                      $vuetify.breakpoint.smAndDown
                        ? 'text-h5 font-weight-bold mb-5 text_style'
                        : 'text-h2 font-weight-bold mb-5 text_style'
                    "
                    >{{ item.title }}</v-list-item-title
                  >
                  <v-list-item-subtitle
                    class="text-subtitle-1 font-weight-bold"
                    mb-2
                  >
                    {{ item.desc }}</v-list-item-subtitle
                  >
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
import Vue from "vue";
import ActionCardButtons from "./actionButtons/ActionCardButtons.vue";

export default Vue.extend({
  name: "Carousel",

  components: { ActionCardButtons },

  data: () => ({
    items: [
      {
        caption: "Home Made",
        title: "Ancient Traditions Applied",
        desc: "Using Clay Pots & Slow Cooking Techniques"
      },
      {
        caption: "How about this?",
        title: "Live Streaming",
        desc: "Watch live how your food is being made"
      },
      {
        caption: "Daily Suppliments @ Home",
        title: "Nutritiously Homemade",
        desc:
          "Organic Quinoa & Bazra Mixed. No Chemicals. <br> Qaulity and healthy. Increasing Family & Education Time. "
      },
      {
        caption: "Public Health",
        title: "Organic - Be Diet Specific ",
        desc:
          "Complete Organic. Unlike restaurants. Share your health profile. We take care rest"
      }
    ]
  })
});
</script>
