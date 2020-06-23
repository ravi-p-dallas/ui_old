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
          :key="item.title"
          :to="item.link"
          text
          small
          class="ma-auto white--text font-weight-bold"
        ><v-icon dark left>{{ item.icon }}</v-icon>{{ item.title }}</v-btn>

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

    <v-navigation-drawer
      v-model="drawer"
      enable-resize-watcher
      app
      right
      color="green lighten-2"
    >
      <v-list-item two-line >
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Gopi Kancharla</v-list-item-title>
          <v-list-item-subtitle>Premium User</v-list-item-subtitle>
        </v-list-item-content>

         <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>

      </v-list-item>

      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader>Actions:</v-subheader>

        <v-list-item v-for="item in menu" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <v-btn
                :to="item.link"
                text
                small
                class="ma-auto white--text font-weight-bold"
              >{{ item.title }}</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader>
        <v-subheader>Choose Country</v-subheader>

        <v-list-item>
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
    clipped: false,
    key: "INDIA",
    menu: [
      { icon: "mdi-order-bool-descending-variant", title: "My Orders", path: "/" },
      { icon: "mdi-chef-hat", title: "My Chefs", path: "/" },
      { icon: "mdi-cart-outline", title: "My Cart", path: "/" }
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
