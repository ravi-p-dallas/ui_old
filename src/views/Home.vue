<template>
  <!-- d-flex flex-column -->
  <v-container fluid fill-height class="ma-0 pa-0 d-flex flex-column">
    <ToolBar scroll-target="#scrolling-techniques-2" hide-on-scroll prominent />
    <BgVideo />

    <v-btn v-show="fab" fab fixed bottom right color="primary" @click="toTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <RepeatedOrders id="scrolling-techniques-5" class="mb-0 grey lighten-5" />
    <ImageGallery class="ma-0 grey lighten-4" />
    <Feedback />
    <ContactUs />

    <Footer />
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import Vue from "vue";
import ToolBar from "../components/home/toolbar/ToolBar.vue";
import BgVideo from "../components/home/BgVideo.vue";
import RepeatedOrders from "../components/repeatedOrderCards/RepeatedOrders.vue";
import ImageGallery from "../components/imageGallery/ImageGallery.vue";
import ContactUs from "../components/conatctUs/ContactUs.vue";
import Feedback from "../components/userFeedback/Feedback.vue";
import Footer from "../components/footer/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    ToolBar,
    BgVideo,
    RepeatedOrders,
    ImageGallery,
    ContactUs,
    Feedback,
    Footer
  },

  data: () => ({ fab: false }),

  methods: {
    onScroll(e) {
      console.log(typeof window);
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },
  metaInfo: {
    title: "VantaShala",
    titleTemplate: "%s | My Organic Chef",
    link: [{ rel: "favicon", href: "favicon.ico" }],
    meta: [
      {
        vmid: "Organaic Chef",
        name: "Clean Healthy Home Cooked Food",
        content: "Home food at your door"
      }
    ]
  }
});
</script>
