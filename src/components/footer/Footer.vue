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
                      <v-card-text style="text-align:center">
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                          <v-icon size="24px" color="green lighten-3">{{ icon }}</v-icon>
                        </v-btn>
                      </v-card-text>
                    </v-card>

                    <v-flex>
                      <v-row no-gutters align-content>
                        <v-col v-for="(item, i) in links.cards" :key="i" class="text-align: center ma-5">
                          <v-card flat outline color="transparent">
                            <v-card-title mb-2>
                              <h5 class="green--text text--lighten-3">
                                <strong>{{ item.title }}</strong>
                              </h5>
                            </v-card-title>

                            <v-card-text v-for="(listItem, j) in item.list" :key="j" class="ml-5 pa-1">
                              <v-btn text color="white" small :to="listItem.src"> <v-icon left>mdi-circle-small </v-icon> {{ listItem.title }} </v-btn>
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

              <v-card-text class="ma-0 pa-0">
                <v-spacer />
                <v-text-field
                  label="Enter your email"
                  class="ma-auto green--text text--lighten-3"
                  outlined
                  shaped
                  rounded
                  solo
                  clearable
                  hide-details
                ></v-text-field>
              </v-card-text>

              <v-card-actions color="ma-auto">
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
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    links: {
      cards: [
        {
          title: "Services",
          list: [
            { title: "Our Menu", src: "/" },
            { title: "How it Works", src: "/" },
            { title: "Login", src: "/" },
            { title: "Signup", src: "/" }
          ]
        },
        {
          title: "Resources",
          list: [
            { title: "Kitchen Ware", src: "/" },
            { title: "FAQs & Support", src: "/faqs" },
            { title: "Mobile Access", src: "mobile" }
          ]
        },
        {
          title: "Features",
          list: [
            { title: "Legal", src: "/" },
            { title: "Terms of Service", src: "/" },
            { title: "Privacy Policy", src: "/" },
            { title: "Don't sell my Info", src: "/" }
          ]
        }
      ]
    }
  })
};
</script>

<style scoped lang="scss">
</style>
