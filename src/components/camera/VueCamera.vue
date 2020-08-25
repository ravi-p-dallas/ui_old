
<template>
  <video autoplay></video>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      stream: null,
    };
  },
  methods: {
    init: async function() {
        console.log("asdsadsa");
      if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        const constraints = {
          video: {
            width: { min: 1280 },
            height: { min: 720 },
          },
        };
        console.log("asdsadsa");
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const video = document.querySelector('video');
        console.log("asdsadsa");
      }
    },
    getDevices: async function() {
      // const devices = await navigator.mediaDevices.enumerateDevices();
    },
  },
  beforeMount: function() {
    this.init();
  },
};
</script>

<style>
video {
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
}
</style>