 <template>
  <v-container ma-0 pa-0>
    <v-fab-transition>
      <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right class="circle" @click="toTop">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ScrollTransitionBottomButton',
  data: () => ({ fab: false }),
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      if (top > 120) {
        this.fab = true;
      } else {
        this.fab = false;
      }
    },
    toTop(e) {
      this.$vuetify.goTo(0);
    },
  },
});
</script>