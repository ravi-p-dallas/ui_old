<template>
  <v-container fluid mt-10>
    <v-card class="pa-2 justify-center" flat>
      <v-row no-gutters>
        <v-col cols="12" md="3" lg="4" class="my-auto">
          <v-col class="my-auto px-5">
            <span style="letter-spacing:1px; width:100%; height:100%" class="ma-auto text_card_style justify-center text-left">
              Be A Chef
            </span>

            <v-btn color="green lighten-5" class="ml-5"><v-icon class="green--text">mdi-backburger</v-icon></v-btn>
            <v-btn color="green lighten-5" class="ml-5"><v-icon class="green--text">mdi-chef-hat</v-icon></v-btn></v-col
          >
        </v-col>
      </v-row>
    </v-card>
    <v-stepper v-model="e6" vertical non-linear>
      <v-stepper-step :complete="e6 > 1" step="1" editable color="green">
        Kitchen Name
        <small>Expalins How customers can identify you</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card class="ma-auto" flat>
          <v-card-text>
            <v-text-field id="kitchName" name="kitchName" label="Name your Kitchen" outlined clearable></v-text-field>
            <v-btn color="primary" @click="e6 = 2"> <v-icon left>mdi-chef-hat</v-icon>RESERVE</v-btn>
          </v-card-text>
        </v-card>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2" editable color="orange">Personal Details <small>Address where you cook food.</small></v-stepper-step>

      <v-stepper-content step="2" editable>
        <v-card color="grey lighten-5" class="ma-auto" flat>
          <!-- <vuetify-google-autocomplete id="map" classname="form-control" placeholder="Start typing your address" v-on:placechanged="getAddressData">
          </vuetify-google-autocomplete> -->
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field label="Address Line 1" clearable></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                  <v-text-field label="Address Line 2" clearable></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                  <v-text-field label="City" clearable></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                  <v-text-field label="State" clearable></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                  <v-text-field label="Country" clearable></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="3">
                  <v-text-field label="ZIP" clearable></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
          <v-btn color="primary" class="ml-2" @click="e6 = 1">Back</v-btn>
        </v-card>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3" editable color="blue"
        >Identity Documents
        <small> Any Two Govt Issued Proofs</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="ma-5">
          <v-file-input
            v-model="files"
            placeholder="Upload your documents"
            multiple
            prepend-icon="mdi-paperclip"
            :rules="rules"
            accept="image/png, image/jpeg, image/jpg, image/bmp"
            show-size
            counter
            class="ma-10"
          >
            <template v-slot:selection="{ text }">
              <v-chip small label color="primary">
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn color="primary" class="ml-2" @click="e6 = 2">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4" editable color="pink">Review & Finish <small>Lets show to the world your talent</small></v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
          <v-btn color="primary">World is waiting! Let's ready.</v-btn>
        </v-card>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>
<style lang="scss" scoped>
</style>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import ActionToolbar from './ActionToolbar.vue';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

@Component({
  components: { ActionToolbar, VuetifyGoogleAutocomplete },
})
export default class BeAChef extends Vue {
  name = ' BeAChef';
  e6 = 1;
  address;
  files = [];
  rules = [value => !value || value.size < 2000000 || 'File size should be less than 2 MB!'];
  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }
  getAddressData(addressData, placeResultData, id) {
    this.address = addressData;
  }
}
</script>
