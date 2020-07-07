<template>
  <v-container overflow-y fluid class="ma-0 pa-0" id="create">
    <VideoBg src="https://vsassets.netlify.app/vantashala_1.mp4" style="height: 100vh;" class="green lighten-4" v-bind:overlay="countryChanged">
      <Carousel class="overflow-y-auto" />

      <v-fab-transition>
        <v-btn
          class="downArrow"
          icon
          fab
          medium
          dark
          bottom
          @click.stop="
            event => {
              clicked(event, 'RO');
            }
          "
          v-show="$vuetify.breakpoint.mdAndDown"
        >
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-fab-transition>

      <v-fab-transition>
        <v-speed-dial
          v-show="$vuetify.breakpoint.mdAndUp"
          v-model="fab"
          icon
          fab
          medium
          dark
          bottom
          direction="right"
          transition="slide-x-reverse-transition"
          :open-on-hover="hover"
        >
          <template v-slot:activator>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }" class="ma-0">
                <span v-bind="attrs" v-on="on">
                  <v-btn
                    icon
                    fab
                    medium
                    dark
                    bottom
                    @click.stop="
                      event => {
                        clicked(event, 'RO');
                      }
                    "
                  >
                    <v-icon v-if="fab">mdi-close</v-icon>
                    <v-icon v-else>mdi-chevron-down</v-icon>
                  </v-btn>
                </span>
              </template>
              <span>Move to Next Section</span>
            </v-tooltip>
          </template>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }" class="ma-0">
              <span v-bind="attrs" v-on="on">
                <v-btn
                  fab
                  dark
                  small
                  color="green"
                  @click.stop="
                    event => {
                      clicked(event, 'IG');
                    }
                  "
                >
                  <v-icon>mdi-orbit</v-icon>
                </v-btn>
              </span>
            </template>
            <span>Move to Gallery Section</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }" class="ma-0">
              <span v-bind="attrs" v-on="on">
                <v-btn
                  fab
                  dark
                  small
                  color="indigo"
                  @click.stop="
                    event => {
                      clicked(event, 'FD');
                    }
                  "
                >
                  <v-icon>mdi-skip-forward</v-icon>
                </v-btn>
              </span>
            </template>
            <span>Feedback Section</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }" class="ma-0">
              <span v-bind="attrs" v-on="on">
                <v-btn
                  fab
                  dark
                  small
                  color="red"
                  @click.stop="
                    event => {
                      clicked(event, 'LC');
                    }
                  "
                >
                  <v-icon>mdi-comment-arrow-right-outline</v-icon>
                </v-btn>
              </span>
            </template>
            <span>Chef Opearations Area</span>
          </v-tooltip>
        </v-speed-dial>
      </v-fab-transition>
    </VideoBg>
  </v-container>
</template>

<style scoped>
.downArrow {
  bottom: 0;
  position: absolute;
  margin: 0 0 6px 0;
  left: 50%;
  transform: translateX(-50%);
}

#create .v-speed-dial {
  position: absolute;
  margin: 0 0 20px 0;
  left: 50%;
  transform: translateX(-50%);
}

#create .v-btn--floating {
  position: relative;
}
</style>
<script lang="ts">
import Vue from "vue";
import Carousel from "./Carousel.vue";

export default Vue.extend({
  name: "BgVideo",

  components: {
    Carousel
  },
  computed: {
    countryChanged: {
      get() {
        const country = this.$store.getters.getCountry;
        const styles = this.visuals[country];
        return styles["overlay"];
      }
    }
  },
  data: () => ({
    visuals: {
      INDIA: {
        overlay: "linear-gradient(45deg,#2a4ae4B3,#fb949eB3)"
      },
      USA: {
        overlay: "linear-gradient(45deg,#aed581B3,#b3e5fcB3)"
      },
      SINGAPORE: {
        overlay: "linear-gradient(45deg,#ffcc80B3,#fb949eB3)"
      }
    },
    fab: false,
    hover: true
  }),
  methods: {
    clicked: function(e, obj) {
      console.log(e, obj);
      let objId = "RO";
      if (obj != "undefined") {
        objId = obj;
      }

      console.log(objId);
      this.$nextTick(() => {
        this.$vuetify.goTo("#" + objId, {
          duration: 900,
          offset: 0,
          easing: "easeOutCubic"
        });
      });
      return;
    }
  }
});
</script>
