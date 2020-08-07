<template>
  <v-footer dark padless style="width: 100%" class="pa-10">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md8>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-layout row wrap align-center>
                <v-flex d-flex xs12>
                  <v-flex xs12 fill-height>
                    <v-card dark>
                      <v-card-text class="row mx-auto" style="text-align:center">
                        <v-btn v-for="icon in icons" :key="icon" class=" white--text  mx-auto col-3 col-sm-3 col-lg-3" icon>
                          <v-icon size="24px" color="green lighten-3">{{ icon }}</v-icon>
                        </v-btn>
                      </v-card-text>
                    </v-card>

                    <v-flex>
                      <v-row no-gutters align-content>
                        <v-col v-for="(item, i) in cards" :key="i" class="text-align: center ma-5">
                          <v-card flat outline color="transparent">
                            <v-card-title mb-2>
                              <h5 class="green--text text--lighten-3">
                                <strong>{{ item.title }}</strong>
                              </h5>
                            </v-card-title>

                            <v-card-text v-for="(listItem, j) in item.list" :key="j" class="ml-5 pa-1">
                              <v-btn text color="white" target="_blank" small :to="listItem.src"> <v-icon left>mdi-circle-small </v-icon> {{ listItem.title }} </v-btn>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-flex>
                    <v-flex>
                      <v-row no-gutters align-content>
                        <v-col>
                          <v-card outlined color="transparent">
                            <v-card-text class="grey--text" style="text-align:center">
                              Head Quartes <br />
                              Beside CPM Office, Raitupeta, Nandigama, AP, India, 521185

                              <br />
                              <br />

                              {{ new Date().getFullYear() }} — VantaShala © Patent Pending
                            </v-card-text>
                          </v-card>
                          <v-spacer />
                        </v-col>
                      </v-row>
                    </v-flex>
                  </v-flex>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12 sm6 md4>
          <v-layout justify-center align-center>
            <v-card color="transaparent" dark outlined>
              <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

              <v-card-title class="green--text text--lighten-3">Get Special Offers Delivered to your Inbox</v-card-title>

              <v-card-text class="pb-0">
                <v-text-field
                  label="Enter your email"
                  class="ma-auto green--text text--lighten-3"
                  outlined
                  shaped
                  rounded
                  solo
                  clearable
                  hide-details
                  full-width
                ></v-text-field>
              </v-card-text>

              <v-card-actions :class="{'mr-2':this.$vuetify.breakpoint.lgAndDown}">
                <v-spacer />
                <v-btn color="green" class="ma-auto">Subscribe</v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>
<style scoped>
.v-text-field{
  height: 57px;
}
</style>
<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],

    cards: [
      {
        title: 'Services',
        list: [
          { title: 'Our Menu', src: 'ourMenu' },
          { title: 'How it Works', src: 'howItWorks' },
          { title: 'Login', src: 'login' },
          { title: 'Signup', src: 'signUp' },
        ],
      },
      {
        title: 'Resources',
        list: [
          { title: 'Kitchen Ware', src: 'kitchen' },
          { title: 'FAQs & Support', src: 'about' },
          { title: 'Mobile Access', src: 'mobile' },
        ],
      },
      {
        title: 'Features',
        list: [
          { title: 'Legal', src: 'legal' },
          { title: 'Terms of Service', src: 'termsOfService' },
          { title: 'Privacy Policy', src: 'privacyPolicy' },
          { title: "Don't sell my Info", src: 'info' },
        ],
      },
    ],
  }),
};
</script>
