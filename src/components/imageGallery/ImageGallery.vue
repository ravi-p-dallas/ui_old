<template>
  <v-container fluid>
    <v-card class="transparent card_mgleft" outlined xs12 sm6 offset-sm6>
      <v-card-title
        class="justify-center text-center headline font-weight-bold"
      >
        <div
          :style="
            $vuetify.breakpoint.smAndDown
              ? 'letter-spacing:2px'
              : 'letter-spacing:6px'
          "
          class="text_card_style"
        >
          ORDERED IMAGE GALLERY
        </div>
      </v-card-title>

      <v-card-text>
        <v-row align="center" class="ma-5">
          <v-item-group
            v-model="window"
            class="shrink"
            mandatory
            tag="v-flex"
            v-if="items.folders != null"
          >
            <v-item
              v-for="n in items.folders.length"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <div>
                <v-btn :input-value="active" icon @click="toggle">
                  <v-icon color=" blue-grey ">mdi-record-circle</v-icon>
                </v-btn>
              </div>
            </v-item>
          </v-item-group>

          <v-col class="ma-1 pa-1">
            <v-window
              v-model="window"
              class="elevation-0"
              vertical
              v-if="items.folders != null"
            >
              <v-window-item
                v-for="(folder, index) in items.folders"
                :key="index"
              >
                <v-item-group>
                  <v-container>
                    <v-row>
                      <v-col
                        v-for="(item, i) in folder.groups"
                        :key="i"
                        cols="12"
                        md="4"
                      >
                        <v-item v-slot:default="{}">
                          <!-- <v-card :color="active ? 'primary' : ''" class="d-flex align-center" dark height="200" @click="toggle">
                        <v-scroll-y-transition>
                          <div v-if="active" class="display-3 flex-grow-1 text-center">{{ item.class }}</div>
                        </v-scroll-y-transition>
                       
                      </v-card> -->
                          <v-hover>
                            <v-card
                              slot-scope="{ hover }"
                              class="mx-auto elevation-10"
                              color="grey lighten-4"
                            >
                              <v-img :aspect-ratio="16 / 9" :src="item.src">
                                <v-expand-transition>
                                  <v-card
                                    v-if="hover"
                                    tile
                                    outline
                                    class="d-flex transition-fast-in-fast-out orange darken-1 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                    flat
                                  >
                                    <v-card-text class="ma-0">
                                      <v-card-subtitle class="pb-2"
                                        >Authentic Hyderabad Biryani -
                                        $14.99</v-card-subtitle
                                      >

                                      <v-card-text class="ma-0">
                                        <div
                                          class="text-left pb-2"
                                          style="opacity: 1;"
                                        >
                                          <v-icon
                                            small
                                            class="mb-1 mr-2"
                                            color="orange lighten-1"
                                            >mdi-chef-hat</v-icon
                                          >Rajulas Kitchen
                                        </div>
                                        <p class="text-left pb-2">
                                          <v-icon
                                            small
                                            class="mb-1 mr-2"
                                            color="orange lighten-1"
                                            >mdi-chef-hat</v-icon
                                          >102 people liked
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
                                          <v-icon color="white"
                                            >mdi-heart</v-icon
                                          >
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
                                          <v-icon color="white"
                                            >mdi-share-circle</v-icon
                                          >
                                        </v-btn>
                                      </v-card-text>
                                    </v-card-text>
                                  </v-card>
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
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-card-text>
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
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ImageGallery",

  components: {},
  data: () => ({
    window: 0,
    items: {
      folders: [
        {
          groups: [
            {
              src:
                "https://media.gettyimages.com/photos/vegetarian-biryani-on-dark-metal-background-with-copy-space-picture-id522286984?s=2048x2048"
            },
            {
              src:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukh7i9riyebe4d6z8wtr"
            },
            {
              src:
                "https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2016/03/Kerela-food-channel-copy-e1458019341128.jpg?resize=600%2C320&ssl=1"
            },
            {
              src:
                "https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg"
            },
            {
              src:
                "https://www.kohinoor-joy.com/wp-content/uploads/2016/11/north-Indian-food-featured-image-1068x712.jpg"
            },
            {
              src:
                "https://www.lifetothefullest.abbott/content/dam/gmo/anthem2/india/_604811.jpg.transform/anthem-masthead-resizing-image/image.jpg"
            }
          ]
        },
        {
          groups: [
            {
              src:
                "https://media.gettyimages.com/photos/vegetarian-biryani-on-dark-metal-background-with-copy-space-picture-id522286984?s=2048x2048"
            },
            {
              src:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukh7i9riyebe4d6z8wtr"
            },
            {
              src:
                "https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2016/03/Kerela-food-channel-copy-e1458019341128.jpg?resize=600%2C320&ssl=1"
            },
            {
              src:
                "https://media.gettyimages.com/photos/vegetarian-biryani-on-dark-metal-background-with-copy-space-picture-id522286984?s=2048x2048"
            },
            {
              src:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukh7i9riyebe4d6z8wtr"
            },
            {
              src:
                "https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2016/03/Kerela-food-channel-copy-e1458019341128.jpg?resize=600%2C320&ssl=1"
            }
          ]
        },
        {
          groups: [
            {
              src:
                "https://media.gettyimages.com/photos/vegetarian-biryani-on-dark-metal-background-with-copy-space-picture-id522286984?s=2048x2048"
            },
            {
              src:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ukh7i9riyebe4d6z8wtr"
            }
          ]
        }
      ]
    }
  })
});
</script>
