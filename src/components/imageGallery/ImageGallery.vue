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
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="400"
                  >
                    <v-img :aspect-ratio="16/9" :src="item.src">
                      <v-expand-transition>
                        <v-card
                          v-if="hover"
                          tile
                          outline
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                          flat
                        >
                          <v-card-text class="ma-0">
                            <v-card-subtitle class="pb-2">Authentic Hyderabad Biryani - $14.99</v-card-subtitle>

                            <v-card-text class="ma-0">
                              <div class="text-left pb-2" style="opacity: 1;">
                                <v-icon
                                  small
                                  class="mb-1 mr-2"
                                  color="orange lighten-1"
                                >mdi-chef-hat</v-icon>Rajulas Kitchen
                              </div>
                              <p class="text-left pb-2">
                                <v-icon
                                  small
                                  class="mb-1 mr-2"
                                  color="orange lighten-1"
                                >mdi-chef-hat</v-icon>102 people liked
                              </p>
                              <v-btn
                                absolute
                                color="orange"
                                class="white--text"
                                fab
                                x-small
                                right
                                top
                                 style="top:10px; right: 5%"
                              >
                                <v-icon color="white">mdi-heart</v-icon>
                              </v-btn>
                              <v-btn
                                absolute
                                color="orange"
                                class="white--text"
                                fab
                                x-small
                                right
                                top
                                style="top:10px; right: 15%"
                              >
                                <v-icon color="white">mdi-share-circle</v-icon>
                              </v-btn>
                            </v-card-text>
                          </v-card-text>
                        </v-card>

                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          Gopi Kitchen - $14.99
                          <v-btn
                            absolute
                            color="orange"
                            class="white--text"
                            fab
                            small
                            right
                            top
                            style="top:10px"
                          >
                            <v-icon color="pink">mdi-heart</v-icon>
                          </v-btn>
                        </div>
                      </v-expand-transition>
                    </v-img>

                    <v-btn
                      absolute
                      color="orange"
                      class="white--text"
                      fab
                      small
                      right
                      bottom
                      style="bottom:10px"
                    >
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
  opacity: 0.9;
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
        src:
          "https://media.gettyimages.com/photos/vegetarian-biryani-on-dark-metal-background-with-copy-space-picture-id522286984?s=2048x2048",
        gradient: "",
        class: "fill-height bottom-gradient"
      },
      {
        src:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukh7i9riyebe4d6z8wtr",
        gradient: "",
        class: "fill-height repeating-gradient"
      },
      {
        src:
          "https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2016/03/Kerela-food-channel-copy-e1458019341128.jpg?resize=600%2C320&ssl=1",
        gradient: "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
        class: ""
      },
      {
        src:
          "https://i2.wp.com/indiathedestiny.com/wp-content/uploads/2016/03/Andhra-Pradesh-thali-2086-e1458019595406.jpg?resize=600%2C406&ssl=1",
        gradient: "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
        class: ""
      },
      {
        src:
          "https://i1.wp.com/indiathedestiny.com/wp-content/uploads/2016/07/gujrati-thali-1-e1469279481962.jpg?resize=700%2C324",
        gradient: "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
        class: ""
      },
      {
        src:
          "https://b.zmtcdn.com/data/pictures/9/18553229/24b384a53109b870423dfc99e97cb162_top_thumb_620_314.jpg?output-format=webp",
        gradient: "to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)",
        class: ""
      }
    ]
  })
});
</script>
