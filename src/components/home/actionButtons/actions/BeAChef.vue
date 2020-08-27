<template>
  <v-container fluid mt-10>
    <v-stepper v-model="e6" vertical non-linear >
      <v-stepper-step :complete="e6 > 1" step="1" editable>
        Kitchen Name
        <small>Summarize if needed</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card class="mb-2" flat>
          <v-card-text>
            <v-text-field id="kitchName" name="kitchName" label="Name your Kitchen" outlined clearable></v-text-field>
          </v-card-text>
        </v-card>

        <v-card-actions :class="this.$vuetify.breakpoint.smAndDown ? 'd-flex flex-column text-right ' : ''">
          <v-btn color="primary" @click="e6 = 2"> <v-icon left>mdi-chef-hat</v-icon>RESERVE</v-btn>
          <v-btn text>CANCEL</v-btn>
        </v-card-actions>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2" editable>Personal Details</v-stepper-step>

      <v-stepper-content step="2" editable>
        <v-card color="grey lighten-5" class="mb-4">
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
        </v-card>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3" editable>Options</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4" editable>Review & Finish</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>
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
  constructor(parameters) {
    super();
    console.log('LayoutContainer Object Contructor called');
  }
  getAddressData(addressData, placeResultData, id) {
    this.address = addressData;
  }
}
</script>
