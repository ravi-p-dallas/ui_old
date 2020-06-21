<template>
  <v-card class="transparent card_mgleft card_mgTop" outlined style="position: absolute; z-index: 99999">
    <v-card-actions>
      <div v-for="item in items" :key="item.btnText">
        <v-btn :class="countryChanged(item.className)">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.btnText}}
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<style scoped>

.card_mgTop {
  margin-top: 0px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ActionButtons",

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
  methods: {},
  data: () => ({
    items: [
      {
        btnText: "Find Chefs",
        icon: "mdi-chef-hat",
        className: "fCclass"
      },
      {
        btnText: "Be A Chef",
        icon: "mdi-chef-hat",
        className: "bCclass"
      },
      {
        btnText: "Search Menus",
        icon: "mdi-chef-hat",
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
      }
    }
  })
});
</script>
