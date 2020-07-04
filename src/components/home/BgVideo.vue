<template>
  <v-container overflow-y fluid class="ma-0 pa-0">
    <VideoBg src="https://vsassets.netlify.app/vantashala.mp4" style="height: 100vh;" class="green lighten-4" v-bind:overlay="countryChanged" id="create">
      <Carousel class="overflow-y-auto" />
      <v-fab-transition>
        <v-speed-dial mdAndUp v-model="fab" icon fab medium dark bottom direction="right" open-on-hover="true" transition="slide-x-reverse-transition">
          <template v-slot:activator>
            <v-btn v-model="fab" dark fab>
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small color="green">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn fab dark small color="indigo">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn fab dark small color="red">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-speed-dial>
      </v-fab-transition>
      <v-fab-transition smAndDown>
        <v-btn class="downArrow" smAndDown icon fab medium dark bottom @click.stop="clicked()">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </v-fab-transition>
    </VideoBg>
  </v-container>
</template>

<style scoped>
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
    fab: false
  }),
  methods: {
    clicked: function() {
      this.$nextTick(() => {
        this.$vuetify.goTo("#RO", {
          duration: 900,
          offset: 0,
          easing: "easeOutCubic"
        });
      });
    }
  }
});
</script>
