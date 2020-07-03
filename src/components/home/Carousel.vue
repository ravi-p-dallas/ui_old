<template>
  <v-container fill-height fluid ma-0 pa-0>
    <v-carousel hide-delimiters continuous show-arrows-on-hover cycle>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-container fill-height fluid ma-0 pa-0>
          <v-card class="transparent card_mgleft" outlined xs12 sm6 offset-sm3>
            <v-list-item>
              <v-list-item-content>
                <div
                  class="overline mb-10 font-weight-bold"
                  style="text-shadow: 1px 1px 4px rgba(0,0,0,0.25);"
                >{{ item.caption }}</div>
                <v-list-item-title
                  :class="$vuetify.breakpoint.smAndDown?'text-h5 font-weight-bold mb-5 text_style':'text-h2 font-weight-bold mb-5 text_style'"
                >{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-1 font-weight-bold" mb-2>
                  {{ item.desc }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-container>
      </v-carousel-item>
      <ActionCardButtons />
    </v-carousel>
  </v-container>
</template>
<style scoped>
.card_mgleft {
  margin-left: 10%;
}

.text_style {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  background: -webkit-linear-gradient(
    rgba(255, 255, 255, 1) 100%,
    rgba(255, 255, 255, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -moz-background-clip: text;
  background-size: 100%;
  background-repeat: repeat;
}
.text_style:hover {
  background-image: linear-gradient(
    -45deg,
    #ff0000 16.666%,
    #fffb00 16.666%,
    #e16541 33.333%,
    #f18f43 33.333%,
    #f18f43 50%,
    #8b9862 50%,
    #8b9862 66.666%,
    #476098 66.666%,
    #476098 83.333%,
    #f03fd8 83.333%
  );
  animation: rainbow-text-simple-animation 5s ease-in forwards;
}

@keyframes rainbow-text-simple-animation-rev {
  0% {
    background-size: 650%;
  }
  40% {
    background-size: 650%;
  }
  100% {
    background-size: 100%;
  }
}

@keyframes rainbow-text-simple-animation {
  0% {
    background-size: 100%;
  }
  80% {
    background-size: 650%;
  }
  100% {
    background-size: 650%;
  }
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
        caption: "Homeliness",
        title: "Its Homemade",
        desc: "No Chemicals. Qaulity and healthy. Increasing Family & Education Time.",
        btnText: "Find Chefs"
      },
      {
        caption: "Daily Suppliments",
        title: "Highly Nutritious",
        desc: "Mixed with Quinoa & Bazra.",
        btnText: "Find Chefs"
      },
      {
        caption: "Public Health",
        title: "Organic Food",
        desc: "Complete Organic. Unlike restaurants.",
        btnText: "Find Chefs"
      },
      {
        caption: "Culture",
        title: "Ancient Traditions Applied",
        desc: "Made by passion. Using Clay Pots & Slow Cooking Techniques",
        btnText: "Find Chefs"
      }
    ]
  })
});
</script>
