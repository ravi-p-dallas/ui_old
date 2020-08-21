<template>
  <v-container fluid grid-list-md pa-16>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md8>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap align-center>
              <v-flex d-flex xs12>
                <v-flex xs12 fill-height>
                  <v-card dark>
                    <v-card-text style="text-align:center">
                      HOW IT WORKS
                      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                        <v-icon size="24px" color="green lighten-3"> mdi-circle-small </v-icon>
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-flex>
            </v-layout>
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
