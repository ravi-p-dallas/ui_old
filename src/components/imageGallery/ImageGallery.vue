<template>
  <v-container fluid>
    <v-card class="transparent card_mgleft" outlined xs12 sm6 offset-sm3>
      <v-list-item class="ma-0 pa-0">
        <v-list-item-content class="ma-0 pa-0">
          <v-list-item-title class="text-center headline mx-auto font-weight-bold">
            <div style="letter-spacing:6px">ORDERED IMAGE GALLERY</div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-carousel hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-card-text>
            <v-row class="ma-0 pa-0">
              <v-col cols="6" sm="4" v-for="(item, i) in items" :key="i" pa-0 ma-0>
                <!-- <v-img :src="item.src" :gradient="item.gradient" :class="item.class">
                  <v-icon>mdi-folder-account</v-icon>
                </v-img>-->

                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >$14.99</div>
                      </v-expand-transition>
                    </v-img>

                    <v-btn absolute color="orange" class="white--text" fab small right bottom style="bottom:10px">
                      <v-icon>mdi-cart</v-icon>
                    </v-btn>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card-text>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImageGallery",

  components: {},
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        gradient: "",
        class: "fill-height bottom-gradient"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        gradient: "",
        class: "fill-height repeating-gradient"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        gradient: "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
        class: ""
      },
      {
        src: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
        gradient: "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
        class: ""
      }
    ]
  })
});
</script>
