<template>
  <v-container fluid>
    <v-app-bar
      flat
      dense
      elevate-on-scroll
      v-bind:style="styles"
      text-center
      align="center"
      clipped-right
    >
      <v-toolbar-title class="ma-2 text-h6 white--text font-weight-bold">VantaShala</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          text
          small
          class="ma-auto white--text font-weight-bold"
        >{{ item.title }}</v-btn>

        <div class="dropdown ma-auto">
          <select name="country" @change="onchange()" class="dropdown-select ma-auto" v-model="key">
            <option
              default
              v-for="country in countries"
              :key="country.name"
              :value="country.value"
            >{{ country.name }}</option>
          </select>
        </div>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary absolute width="200" id="drawer" color="green">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in menu" :key="item.icon">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-btn
              :to="item.link"
              text
              small
              class="ma-auto white--text font-weight-bold"
            >{{ item.title }}</v-btn>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <div class="dropdown ma-auto">
              <select
                name="country"
                @change="onchange()"
                class="dropdown-select ma-auto"
                v-model="key"
              >
                <option
                  default
                  v-for="country in countries"
                  :key="country.name"
                  :value="country.value"
                >{{ country.name }}</option>
              </select>
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ToolBar",

  data: () => ({
    drawer: false,
    key: "INDIA",
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
