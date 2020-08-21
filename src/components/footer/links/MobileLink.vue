<template>
  <v-container fluid grid-list-md pa-16>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md8>
        <v-layout row wrap align-center>
          <v-flex d-flex xs12>
            <v-flex xs12 fill-height>
              <v-card class="transparent card text-center" outlined>
                <div :style="$vuetify.breakpoint.smAndDown ? 'letter-spacing:1px' : 'letter-spacing:6px'" class="text_card_style">
                  <h2>INSTALL MOBILE APP FOR BETTER EXPERIENCE</h2>
                </div>
              </v-card>
              <v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-center headline text_card_style">For ANDROID </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <video :key="video" center height="340" width="320" autoplay source src="https://vsassets.netlify.app/vs_android.mp4" type="video/mp4"></video>
              </v-card>
              <v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-center headline text_card_style">For IOS</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <video :key="video" height="340" width="320" autoplay source src="https://vsassets.netlify.app/vs_ios.mp4" type="video/mp4"></video> </v-card
              ><v-card>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-center headline text_card_style">For DESKTOP </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <video :key="video" width="320" autoplay source src="https://vsassets.netlify.app/vs_web.mp4" type="video/mp4"></video>
              </v-card>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
