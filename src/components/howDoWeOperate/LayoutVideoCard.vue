<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">
        HOW WE OPERATE?
      </div>
    </v-card-title>

    <vue-plyr>
      <video poster="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg">
        <source src="https://vsassets.netlify.app/vantashala.mp4" type="video/mp4" size="720" />
      </video>
    </vue-plyr>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
        <div class="grey--text ml-4">5 (4413)</div>
        <v-spacer />
        <div
          class="fb-like"
          data-href="https://developers.facebook.com/docs/plugins/"
          data-width=""
          data-layout="button"
          data-action="like"
          data-size="large"
          data-share="true"
        ></div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title> VantaShala.com - Mission </v-card-title>

    <v-card-text> Building healthy generations, providing, healthy food chocices and practicing traditions. </v-card-text>

    <v-card-actions :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column text-right ' : ''">
      <div class="text-center" v-for="item in items" :key="item.btnText">
        <v-btn :class="countryChanged(item.className)" @click.stop="handleFunctionCall(item.btnText)">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.btnText }}
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss"></style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LayoutVideoCard",
  props: [],
  components: {},

  computed: {
    countryChanged: {
      get() {
        return className => {
          const country = this.$store.getters.getCountry;
          const styles = this.visuals[country];
          return styles[className];
        };
      }
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
    items: [
      {
        btnText: "Find Chefs",
        icon: "mdi-chef-hat",
        className: "fCclass"
      },

      {
        btnText: "Explore Menus",
        icon: "mdi-book-open-page-variant",
        className: "sMclass"
      }
    ],
    visuals: {
      INDIA: {
        fCclass: "ma-2 white--text font-weight-bold orange darken-1",
        bCclass: "ma-2 green--text font-weight-bold white darken-1",
        sMclass: "ma-2 white--text font-weight-bold green darken-1"
      },
      USA: {
        fCclass: "ma-2 white--text font-weight-bold red darken-1",
        bCclass: "ma-2 blue--text font-weight-bold white darken-1",
        sMclass: "ma-2 white--text font-weight-bold blue darken-1"
      },
      SINGAPORE: {
        fCclass: "ma-2 white--text font-weight-bold red lighten-1",
        bCclass: "ma-2 white--text font-weight-bold red lighten-1",
        sMclass: "ma-2 red--text font-weight-bold white darken-1"
      },
      CANADA: {
        fCclass: "ma-2 white--text font-weight-bold red lighten-1",
        bCclass: "ma-2 white--text font-weight-bold red lighten-1",
        sMclass: "ma-2 red--text font-weight-bold white darken-1"
      },
      MALAYSIA: {
        fCclass: "ma-2 white--text font-weight-bold red lighten-1",
        bCclass: "ma-2 blue--text font-weight-bold white lighten-1",
        sMclass: "ma-2 white--text font-weight-bold blue darken-1"
      }
    }
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
});
</script>
