<template>
  <v-container fluid class="pa-0 ma-0">
    <v-app-bar flat dense v-bind:style="styles" text-center align="center" absolute class="ma-5">
      <v-toolbar-title class="ma-2 text-h6 white--text font-weight-bold gradient-text-logo">VantaShala</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-badge color="purple lighten-4" v-for="(item, i) in menu" :key="i" :to="item.link" text small overlap class="ma-auto mr-5">
          <span slot="badge" class="purple--text font-weight-bold">{{ item.badge }}</span>
          <v-btn text small class="ma-auto white--text font-weight-bold">
            <v-icon left>{{ item.icon }}</v-icon>
            <div class="gradient-text">{{ item.title }}</div>
          </v-btn>
        </v-badge>
        <div class="dropdown ma-auto">
          <select name="country" @change="onchange()" class="dropdown-select ma-auto" v-model="defaultCountry">
            <option v-for="country in countries" :key="country.name" :value="country.value">{{ country.name }}</option>
          </select>
        </div>
        <v-avatar class="ma-auto ml-3 white--text font-weight-bold" size="36" tile link>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Gopi" @click.stop="manageDrawer" />
        </v-avatar>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" color="white"></v-app-bar-nav-icon>
    </v-app-bar>

    <NavigationDrawer
      :drawer="drawer"
      :countries="countries"
      :menu="menu"
      :defaultCountry="defaultCountry"
      @updateDrawerState="updateDrawerState"
      :countryChange="onchange"
    />
  </v-container>
</template>
<style lang="scss">
@import "./toolbar.scss";
</style>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "./NavigationDrawer.vue";
export default Vue.extend({
  name: "ToolBar",
  components: {
    NavigationDrawer
  },
  data: () => ({
    drawer: false,
    defaultCountry: "INDIA",
    menu: [
      {
        icon: "mdi-order-bool-descending-variant",
        title: "My Orders",
        path: "/",
        badge: "2"
      },
      { icon: "mdi-chef-hat", title: "My Chefs", path: "/", badge: "4" },
      { icon: "mdi-cart-outline", title: "My Cart", path: "/", badge: "0" }
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
      this.$store.commit("setCountry", this.defaultCountry);
      console.log(this.$store.getters.getCountry);
    },
    manageDrawer: function(status) {
      this.drawer = !this.drawer;
    },
    updateDrawerState: function(status) {
      console.log("--> ", this.drawer, status);
      if (!this.drawer === status) {
        this.drawer = status;
      }
    }
  }
});
</script>
