<template>
  <v-container fluid grid-list-md>
    <v-card class="transparent card_mgleft" outlined xs12 sm6 offset-sm6>
      <v-card-title class="justify-center text-center headline font-weight-bold">
    <div :style="$vuetify.breakpoint.mobile ? 'letter-spacing:0px' : 'letter-spacing:6px'" class="text_card_style text-align-center">
      INSTALL MOBILE APP for better experience
    </div>
      </v-card-title>
    <v-card max-width="400" class="mx-auto">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">For ANDROID </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
    </v-card>
    <v-card max-width="400" class="mx-auto">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">For IOS</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
    </v-card>
    <v-card max-width="600" class="mx-auto">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">For DESKTOP </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
    </v-card>
    </v-card>  </v-container>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
