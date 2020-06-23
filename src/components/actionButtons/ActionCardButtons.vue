<template>
  <v-card class="transparent card_mgleft card_mgTop" outlined style="position: absolute;">
    <v-card-actions :class="this.$vuetify.breakpoint.smAndDown?'d-flex flex-column':''">
      <div class="text-center" v-for="item in items" :key="item.btnText">
        <v-btn :class="countryChanged(item.className)" @click.stop="`{item.clickAction}`">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.btnText }}
        </v-btn>
      </div>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="290"></v-dialog>
  </v-card>
</template>
<style scoped>
.card_mgTop {
  top: 0px;
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

  data: () => ({
    dialog: false,
    items: [
      {
        btnText: "Find Chefs",
        icon: "mdi-chef-hat",
        className: "fCclass",
        clickAction: "openDialog"
      },
      {
        btnText: "Be A Chef",
        icon: "mdi-silverware",
        className: "bCclass",
        clickAction: "dialog = true"
      },
      {
        btnText: "Search Menus",
        icon: "mdi-book-open-page-variant",
        className: "sMclass",
        clickAction: "dialog = true"
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
  }),
  methods: {
    openDialog: function(event) {
      this.dialog = true;
    }
  }
});
</script>
