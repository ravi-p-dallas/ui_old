<template>
  <v-container fluid fill-height class="ma-0 pa-0 flex-column" scroll-y>
    <ToolBar :tbStyle="tbStyle" />
    <ScrollTransitionButtons />

    <v-main style="width:100%" v-if="activeComponent == 'Home'">
      <BgVideo />
      <RepeatedOrders class="mb-0 grey lighten-5 overflow-y-auto" id="RO" />
      <ImageGallery class="ma-0 green lighten-5" id="IG" />
      <Feedback id="FD" />
      <ContactUs id="CU" />
      <LayoutContainer class="ma-auto grey lighten-4" id="LC" />
    </v-main>
    <SearchMenus v-if="activeComponent == 'Explore Menus'" />
    <BeAChef v-if="activeComponent == 'Be A Chef'" />
    <FindChefs v-if="activeComponent == 'Find Home Chefs'" />
    <Footer id="FT" />
    <ScrollTransitionBottomButton v-scroll="onScroll" />
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
import Vue from 'vue';
import ToolBar from '../components/home/toolbar/ToolBar.vue';
import BgVideo from '../components/home/BgVideo.vue';
import RepeatedOrders from '../components/repeatedOrderCards/RepeatedOrders.vue';
import ImageGallery from '../components/imageGallery/ImageGallery.vue';
import ContactUs from '../components/conatctUs/ContactUs.vue';
import Feedback from '../components/userFeedback/Feedback.vue';
import Footer from '../components/footer/Footer.vue';
import LayoutContainer from '../components/howDoWeOperate/LayoutContainer.vue';
import ScrollTransitionButtons from '../components/home/scrollTransitions/ScrollTransitionButtons.vue';
import ScrollTransitionBottomButton from '../components/home/scrollTransitions/ScrollTransitionBottomButton.vue';
import SearchMenus from '../components/home/actionButtons/actions/SearchMenus.vue';
import BeAChef from '../components/home/actionButtons/actions/BeAChef.vue';
import FindChefs from '../components/home/actionButtons/actions/FindChefs.vue';
import ActionButtonsSwitch from '../store/ActionButtonsSwitch';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';

@Component({
  components: {
    ToolBar,
    BgVideo,
    ScrollTransitionButtons,
    RepeatedOrders,
    ImageGallery,
    ContactUs,
    Feedback,
    LayoutContainer,
    Footer,
    ScrollTransitionBottomButton,
    SearchMenus,
    BeAChef,
    FindChefs
  },
})
export default class Home extends Vue {
  name = 'Home: ';
  tbStyle = 'background-color: transparent';
  activeComponent = '';
  onScroll(e) {
    if (typeof window === 'undefined') return;

    const top = window.pageYOffset || e.target.scrollTop || 0;

    if (top > 120) {
      this.tbStyle =
        'opacity:0.95; background-color: #263238; background: rgb(250,117,0); background: radial-gradient(circle, rgba(250,117,0,1) 0%, rgba(128,153,41,1) 76%, rgba(62,83,81,1) 100%);';
    } else {
      this.tbStyle = 'background-color: transparent';
    }
  }
  toTop() {
    this.$vuetify.goTo(0);
  }

  created() {
    this.$log.info(this.name, ' Created');
    this.setActiveComponet();
  }

  setActiveComponet() {
    const cMod = getModule(ActionButtonsSwitch);
    this.activeComponent = cMod.activeComponent;
    this.$log.info(this.name, ': Active Component updated', this.activeComponent);
  }

  resetActiveComponent() {
    this.$log.info(this.name, ': Resetting Active Components');
    this.setActiveComponet();
  }

  @Watch('activeComponentChanged')
  updateActiveComponent() {
    this.$log.info(this.name, 'Watch Observed');
    this.resetActiveComponent();
  }

  get activeComponentChanged() {
    const cMod = getModule(ActionButtonsSwitch);
    this.$log.info(this.name, ': Active Component Changed' + cMod.activeComponent);
    return cMod.activeComponent;
  }
}
</script>
