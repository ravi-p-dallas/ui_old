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
                          <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                      </v-card-text>
                    </v-card>

                    <v-flex>
                      <v-row no-gutters align-content>
                        <v-col v-for="(item, i) in links.cards" :key="i" class="text-align: center">
                          <v-card flat outline color="transparent">
                            <v-card-title mb-2>
                              <h5 style="color:green">{{ item.title }}</h5>
                            </v-card-title>

                            <v-card-text v-for="(listItem, j) in item.list" :key="j" class="ml-5 pa-1">
                              <a :href="listItem.src" class="customLink">{{ listItem.title }} </a>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-flex>
                    <v-flex>
                      <v-row no-gutters align-content>
                        <v-col>
                          <v-card dark>
                            <v-card-text class="white--text" style="text-align:center">
                              Head Quartes <br />
                              Beside CPM Office, Raitupeta, Nandigama, India, 521185 | Contact Us

                              <br />
                              <br />

                              <strong style="text-align: right;"> {{ new Date().getFullYear() }} — VantaShala © Patent Pending</strong>
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
            <v-card color="green lighten-1" dark outlined>
              <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

              <v-card-title>Get Special Offers Delivered to your Inbox</v-card-title>

              <v-card-text class="ma-0 pa-0">
                <v-text-field v-model="label" label="Enter your email" class="ml-3 mr-3" outlined shaped rounded solo clearable hide-details></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" dark class="mr-2">Subscribe</v-btn>
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
          title: "Service",
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
            { title: "FAQs & Support", src: "/" }
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
.customLink {
  color: azure;
  text-decoration: none;
}
</style>
