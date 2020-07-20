<template>
  <v-container fluid ma-0 pa-0>
    <v-footer dark padless>
      <v-card
        flat
        tile
        class="grey-blue lighten-1 white--text text-center"
        style="width:100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Gopi to Work on this
          <pre>
ASIA
Beside CPM Office, Raitupeta
Nandigama, India, 521185

USA
2700 Main St, #120
Frisco, TX, USA, 75034

UK
Kemp House, 152 - 160 City Road,
London EC1V 2NX
</pre
          >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>VantaShala &copy; Patent Pending</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
