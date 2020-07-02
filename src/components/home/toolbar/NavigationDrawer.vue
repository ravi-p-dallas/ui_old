<template>
  <v-container fluid class="pa-0 ma-0">
    <v-navigation-drawer v-model="isOpen" app right color="green lighten-2" disable-resize-watcher>
      <v-list-item two-line>
        <v-list-item-avatar size="36" tile>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Gopi Kancharla</v-list-item-title>
          <v-list-item-subtitle>Premium User</v-list-item-subtitle>
        </v-list-item-content>

        <v-btn icon @click.stop="updateDrawerState">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-list subheader>
        <v-subheader>Actions:</v-subheader>

        <v-list-item v-for="item in menu" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-subtitle class="ma-auto white--text font-weight-bold">{{ item.title }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader>
        <v-subheader>Choose Country</v-subheader>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-flag</v-icon>
          </v-list-item-icon>
          <div class="dropdown ma-0">
            <select
              name="country"
              @change="onchange()"
              class="dropdown-select ma-auto"
              v-model="defaultCountry"
            >
              <option
                v-for="country in countries"
                :key="country.name"
                :value="country.value"
              >{{ country.name }}</option>
            </select>
          </div>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list subheader>
        <v-subheader>Actions:</v-subheader>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-subtitle class="ma-auto white--text font-weight-bold">Logout</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavigationDrawer",

  props: ["countries", "menu", "drawer", "defaultCountry", "countryChange"],

  watch: {
    drawer: function(newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.isOpen = newVal;
    }
  },
  data: () => ({
    isOpen: false,
    styles: {
      "background-color": `transparent`
    }
  }),
  methods: {
    updateDrawerState: function() {
      this.isOpen = !this.isOpen;
      this.$emit("updateDrawerState", this.isOpen);
    },
    onchange: function() {
      this.countryChange();
    }
  }
});
</script>

<style lang="scss">
@import "./toolbar.scss";
</style>
