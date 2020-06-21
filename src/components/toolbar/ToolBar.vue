<template>
  <v-container fluid>
    <v-toolbar
      flat
      dense
      elevate-on-scroll
      v-bind:style="styles"
      text-center
      align="center"
    >
      <v-toolbar-title class="ma-2 text-h6 white--text font-weight-bold"
        >VantaShala</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          text
          small
          class="ma-auto white--text font-weight-bold"
          >{{ item.title }}</v-btn
        >

        <div class="dropdown ma-auto">
          <select
            name="country"
            @change="onchange()"
            class="dropdown-select"
            v-model="key"
          >
            <option
              default
              v-for="country in countries"
              :key="country.name"
              :value="country.value"
              >{{ country.name }}</option
            >
          </select>
        </div>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ToolBar",

  data: () => ({
    menu: [
      { icon: "home", title: "My Orders" },
      { icon: "info", title: "My Chefs" },
      { icon: "warning", title: "My Cart" }
    ],

    countries: [
      {
        name: "INDIA",
        value: "INDIA"
      },
      {
        name: "SINGAPORE",
        value: "SINGAPORE"
      },
      {
        name: "USA",
        value: "USA"
      }
    ],
    key: "INDIA",

    styles: {
      "background-color": `transparent`
    }
  }),
  methods: {
    onchange: function() {
      this.$store.commit("setCountry", this.key);
      console.log(this.$store.getters.getCountry);
    }
  }
});
</script>

<style lang="scss">
@import "./toolbar.scss";
</style>
