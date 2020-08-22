<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <ToolBar style="position: absolute"/>
    <v-main style="width:100%; padding:0" v-if="activeComponent == 'Home'">
      <ScrollTransitionButtons />
      <BgVideo />
      <RepeatedOrders class="mb-0 grey lighten-5 overflow-y-auto" id="RO" />
      <ImageGallery class="ma-0 green lighten-5" id="IG" />
      <Feedback id="FD" />
      <ContactUs id="CU" />
      <LayoutContainer class="ma-auto grey lighten-4" id="LC" />
    </v-main>
    <SearchMenus v-show="activeComponent == 'Explore Menus'" />
    <BeAChef v-if="activeComponent == 'Be A Chef'" />
    <FindChefs v-if="activeComponent == 'Find Home Chefs'" />
    <Footer id="FT" />
    <ScrollTransitionBottomButton />
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
    FindChefs,
  },
})
export default class Home extends Vue {
  name = 'Home: ';
  activeComponent = '';

  toTop() {
    this.$vuetify.goTo(0);
  }

  created() {
    this.$log.info(this.name, 'Created');
    this.setActiveComponet();
  }

  setActiveComponet() {
    const cMod = getModule(ActionButtonsSwitch);
    this.activeComponent = cMod.activeComponent;
    this.$log.info(this.name, 'Active Component updated: ', this.activeComponent);
  }

  resetActiveComponent() {
    this.$log.info(this.name, 'Resetting Active Component. ');
    this.setActiveComponet();
  }

  @Watch('activeComponentChanged')
  updateActiveComponent() {
    this.$log.info(this.name, 'Watch Observed');
    this.resetActiveComponent();
  }

  get activeComponentChanged() {
    const cMod = getModule(ActionButtonsSwitch);
    this.$log.info(this.name, 'Active Component Changed: ' + cMod.activeComponent);
    return cMod.activeComponent;
  }
}
</script>
