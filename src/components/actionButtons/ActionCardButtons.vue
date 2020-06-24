<template>
  <v-card :class="!$vuetify.breakpoint.mobile?'transparent card_mgleft card_mgTop':'transparent card_mgTop'" outlined style="position: absolute; width:100%">
    <v-card-actions :class="this.$vuetify.breakpoint.smAndDown?'d-flex flex-column text-right ':''">
      <div class="text-center" v-for="item in items" :key="item.btnText">
        <v-btn
          :class="countryChanged(item.className)"
          @click.stop="handleFunctionCall(item.btnText)"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.btnText }}
        </v-btn>
      </div>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="290" :fullscreen="$vuetify.breakpoint.mobile">
      <v-btn v-if="dialogAction == this.items[0].btnText" @click:stop="this.dialog=!this.dialog">sdf</v-btn>
      <BeAChef v-if="dialogAction == this.items[1].btnText" @click:stop="this.dialog=false" />
      <v-btn v-if="dialogAction == this.items[2].btnText" @click:stop="this.dialog=!this.dialog">rtd</v-btn>
    </v-dialog>
  </v-card>
</template>
<style scoped>
.card_mgTop {
  top: 0px;
}
</style>

<script lang="ts">
import Vue from "vue";
import BeAChef from "./actions/BeAChef.vue";
export default Vue.extend({
  name: "ActionButtons",

  components: {
    BeAChef
  },

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
    dialogAction: "",
    items: [
      {
        btnText: "Find Chefs",
        icon: "mdi-chef-hat",
        className: "fCclass"
      },
      {
        btnText: "Be A Chef",
        icon: "mdi-silverware",
        className: "bCclass"
      },
      {
        btnText: "Search Menus",
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
      }
    }
  }),
  methods: {
    handleFunctionCall: function(event) {
      this.dialog = true;
      this.dialogAction = event;
    }
  }
});
</script>
