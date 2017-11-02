<template>
  <div id="side-menu">
    <div class="row">
      <div class="container-fluid">
        <div class="btn-group btn-group-justified" role="group">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" @click="toggleGeneralSettings">Settings</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" @click="toggleWidgets">Widgets</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row mar-top-10" v-if="showGeneralSettings">
      <settings></settings>
    </div>
    <div class="row mar-top-10" v-if="showWidgets">
      <widgets></widgets>
    </div>
  </div>
</template>

<script>
import Widgets from './Widgets/Widgets';
import Settings from './Settings/Settings';

export default {
  name: 'the-side-menu',
  components: {
    Widgets,
    Settings,
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

