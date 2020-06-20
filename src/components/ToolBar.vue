<template>
  <v-container fluid >
    <v-toolbar flat dense elevate-on-scroll v-bind:style="styles">
      <v-toolbar-title class="ma-2 text-h6 white--text font-weight-bold">VantaShala</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <div>
          <v-btn
            v-for="item in menu"
            :key="item.icon"
            :to="item.link"
            text
            small
            class="ma-2 white--text font-weight-bold"
          >
            {{ item.title }}
          </v-btn>
          <v-autocomplete
              v-model="friends"
              :disabled="isUpdating"
              :items="people"
              filled
              chips
              color="blue-grey lighten-2"
              label="Select"
              item-text="name"
              item-value="name"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  <v-avatar left>
                    <v-img :src="data.item.avatar"></v-img>
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-avatar>
                    <img :src="data.item.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
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
    styles: {
      "background-color": `transparent`
    }
  })
});
</script>
