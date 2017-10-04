<template>
  <v-navigation-drawer
    permanent
    clipped
    class="pb-0"
    height="100%"
    light >

    <v-layout>
      <v-flex xs6 class="text-xs-center">
        <v-btn small flat @click="toggleGeneralSettings">General Settings</v-btn>
      </v-flex>
      <v-flex xs6 class="text-xs-center">
        <v-btn small flat @click="toggleWidgets">Widgets</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row class="mt-2">
      <general-settings v-if="showGeneralSettings"></general-settings>
      <widgets v-if="showWidgets"></widgets>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>

import Widgets from './Widgets';
import GeneralSettings from './GeneralSettings';

export default {
  name: 'settings',
  components: {
    Widgets,
    GeneralSettings,
  },
  data: () => ({
    showGeneralSettings: true,
    showWidgets: false,
  }),
  methods: {
    toggleGeneralSettings() {
      this.showGeneralSettings = true;
      this.showWidgets = false;
    },
    toggleWidgets() {
      this.showGeneralSettings = false;
      this.showWidgets = true;
    },
  },
};
</script>


