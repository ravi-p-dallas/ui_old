<template>
  <v-card :loading="loading" class="mx-auto">
    <v-card-title>
      <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:0px' : 'letter-spacing:3px'" class="text_card_style">
        BE A PROUD CHEF - COOKING IS A BLESSED GIFT
      </div>
    </v-card-title>

    <v-img height="420" src="https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg"></v-img>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="blue-grey--text ml-2 mt-1">Rest assured. Strat Simple.</div>
        <v-spacer />
        <div class="blue--text">Follow the Guidelines</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-text-field id="kitchName" name="kitchName" label="Name your Kitchen" outlined clearable></v-text-field>
    </v-card-text>
    
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

<style lang="scss">
.v-text-field{
  height: 71px;
}
</style>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LayoutCard",
  props: [],
  
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
    image: require("@/assets/biryani_2.jpg"),
    items: [
      {
        btnText: "RESERVE",
        icon: "mdi-chef-hat",
        className: "fCclass"
      },

      {
        btnText: "EXISTING CHEF? LOGIN",
        icon: "mdi-key",
        className: "sMclass"
      }
    ],
    visuals: {
      INDIA: {
        fCclass: "ma-2 white--text font-weight-bold orange darken-1",
        sMclass: "ma-2 white--text font-weight-bold green darken-1"
      },
      USA: {
        fCclass: "ma-2 white--text font-weight-bold red darken-1",
        sMclass: "ma-2 white--text font-weight-bold blue darken-1"
      },
      SINGAPORE: {
        fCclass: "ma-2 white--text font-weight-bold red lighten-1",
        sMclass: "ma-2 red--text font-weight-bold white darken-1"
      },
      CANADA: {
        fCclass: "ma-2 white--text font-weight-bold red lighten-1",
        sMclass: "ma-2 red--text font-weight-bold white darken-1"
      },
      MALAYSIA: {
        fCclass: "ma-2 white--text font-weight-bold red lighten-1",
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
