<template>
  <v-container fluid class="ma-0 pa-0">
  
    <v-parallax
      :src="image"
      style="opacity: 0.6; background-color: rgb(255, 255, 255);"
      class="pa-8"
    >
      <v-row align="center" justify="center" class="mt-10 mb-10">
        <v-col class="text-center" cols="12" min-height="550">
          <v-card
            fluid
            class="mx-auto"
            dense
            flat
            :max-width="$vuetify.breakpoint.smAndDown?'100%':'50%'"
            color="rgb(255, 255, 255, 0.9)"
          >
            <v-toolbar dark>
              <v-toolbar-title>
                <div style="letter-spacing:3px">COMPLAINTS & CONTACT FORM</div>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-folder-account</v-icon>
              </v-btn>
            </v-toolbar>

            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="10"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-textarea outlined name="input-7-4" label="Message" value></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <v-card-actions color="rgb(255, 0, 0, 0.1)" class="pa-0 ma-0">
              <v-spacer></v-spacer>
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
              >
                We act to sustain. Send!
                <v-icon right dark>mdi-email</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ContactUs",
  data: () => ({
    image: require("@/assets/biryani_2.jpg"),
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 15 || "Name must be less than 15 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {}
});
</script>

<style scoped lang="scss">
.v-parallax__image {
  transform: none !important;
  width: 100% !important;
}
</style>