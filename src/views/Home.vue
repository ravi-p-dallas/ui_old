<template>
  <v-container fluid fill-height class="ma-0 pa-0 d-flex flex-column" scroll-y>
    <ToolBar scroll-target="#scrolling-techniques-2" hide-on-scroll prominent />
    <BgVideo />
    <v-fab-transition>
      <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right class="circle" @click="toTop">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
    <RepeatedOrders id="scrolling-techniques-5" class="mb-0 grey lighten-5" />
    <ImageGallery class="ma-0 grey lighten-4" />
    <Feedback />
    <ContactUs />
    <LayoutContainer class="ma-auto grey lighten-4" />

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
import LayoutContainer from "../components/howDoWeOperate/LayoutContainer.vue";

export default Vue.extend({
  name: "App",

  components: {
    ToolBar,
    BgVideo,
    RepeatedOrders,
    ImageGallery,
    ContactUs,
    Feedback,
    LayoutContainer,
    Footer
  },

  data: () => ({ fab: false }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
});
</script>

<style scoped lang="scss">
</style>
