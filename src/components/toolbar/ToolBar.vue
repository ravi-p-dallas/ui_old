<template>
  <v-container fluid>
    <v-toolbar flat dense elevate-on-scroll v-bind:style="styles" text-center align="center">
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
          <select name="country" class="dropdown-select">
            <option value="1">USA</option>
            <option value="2">INDIA</option>
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

    items: ["USA", "INDIA"],
    value: ["USA", "INDIA"],

    styles: {
      "background-color": `transparent`
    }
  })
});
</script>

<style lang="scss">
  @import "./toolbar.scss";
</style>