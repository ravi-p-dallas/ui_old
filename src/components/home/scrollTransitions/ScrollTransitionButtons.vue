<template>
  <v-container ma-0 pa-0 fluid fill-heght id="tansBtns" style="position: absolute; height: 100vh;">
    <v-fab-transition>
      <v-btn
        style="left: 50%;transform: translateX(-50%);"
        class="mb-10"
        icon
        fab
        medium
        dark
        bottom
        absolute
        @click.stop="
          event => {
            clicked(event, 'RO');
          }
        "
        v-if="$vuetify.breakpoint.mdAnddown"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-fab-transition>
      <v-speed-dial
        style="left: 50%;transform: translateX(-50%);"
        v-if="$vuetify.breakpoint.mdAndUp"
        v-model="fab"
        icon
        fab
        medium
        dark
        absolute
        bottom
        direction="right"
        transition="slide-x-reverse-transition"
        :open-on-hover="hover"
      >
        <template v-slot:activator>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }" class="ma-0">
              <span v-bind="attrs" v-on="on">
                <v-btn
                  icon
                  fab
                  medium
                  dark
                  bottom
                  @click.stop="
                    event => {
                      clicked(event, 'RO');
                    }
                  "
                >
                  <v-icon v-if="fab">mdi-close</v-icon>
                  <v-icon v-else>mdi-chevron-down</v-icon>
                </v-btn>
              </span>
            </template>
            <span>Move to Next Section</span>
          </v-tooltip>
        </template>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }" class="ma-0">
            <span v-bind="attrs" v-on="on">
              <v-btn
                fab
                dark
                small
                color="green"
                @click.stop="
                  event => {
                    clicked(event, 'IG');
                  }
                "
              >
                <v-icon>mdi-orbit</v-icon>
              </v-btn>
            </span>
          </template>
          <span>Move to Gallery Section</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }" class="ma-0">
            <span v-bind="attrs" v-on="on">
              <v-btn
                fab
                dark
                small
                color="indigo"
                @click.stop="
                  event => {
                    clicked(event, 'FD');
                  }
                "
              >
                <v-icon>mdi-skip-forward</v-icon>
              </v-btn>
            </span>
          </template>
          <span>Feedback Section</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }" class="ma-0">
            <span v-bind="attrs" v-on="on">
              <v-btn
                fab
                dark
                small
                color="red"
                @click.stop="
                  event => {
                    clicked(event, 'LC');
                  }
                "
              >
                <v-icon>mdi-comment-arrow-right-outline</v-icon>
              </v-btn>
            </span>
          </template>
          <span>Chef Opearations Area</span>
        </v-tooltip>
      </v-speed-dial>
    </v-fab-transition>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ScrollTransitionButtons',
  data: () => ({ fab: false, hover: true }),
  methods: {
    clicked: function(e, obj) {
      let objId = 'RO';
      if (obj != 'undefined') {
        objId = obj;
      }

      console.log(objId);
      this.$nextTick(() => {
        this.$vuetify.goTo('#' + objId, {
          duration: 900,
          offset: 0,
          easing: 'easeOutCubic',
        });
      });
      return;
    },
  },
});
</script>
