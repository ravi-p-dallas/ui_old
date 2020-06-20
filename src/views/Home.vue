<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <BgVideo msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import BgVideo from "@/components/BgVideo.vue";

export default {
  name: "Home",
  components: {
    BgVideo
  }
};
</script>
