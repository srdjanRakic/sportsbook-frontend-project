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

  <div class="row mar-top" v-if="showGeneralSettings">
     <general-settings></general-settings>
  </div>
   <div class="row mar-top" v-if="showWidgets">
     <widgets></widgets>
  </div>
</div>
</template>

<script>

import Widgets from './Widgets';
import GeneralSettings from './GeneralSettings';

export default {
  name: 'side-menu',
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

<style>
  #accordion .glyphicon { margin-right:10px; }
  .panel-collapse>.list-group .list-group-item:first-child {border-top-right-radius: 0;border-top-left-radius: 0;}
  .panel-collapse>.list-group .list-group-item {border-width: 1px 0;}
  .panel-collapse>.list-group {margin-bottom: 0;}
  .panel-collapse .list-group-item {border-radius:0;}

  .panel-collapse .list-group .list-group {margin: 0;margin-top: 10px;}
  .panel-collapse .list-group-item li.list-group-item {margin: 0 -15px;border-top: 1px solid #ddd !important;border-bottom: 0;padding-left: 30px;}
  .panel-collapse .list-group-item li.list-group-item:last-child {padding-bottom: 0;}

  .panel-collapse div.list-group div.list-group{margin: 0;}
  .panel-collapse div.list-group .list-group a.list-group-item {border-top: 1px solid #ddd !important;border-bottom: 0;padding-left: 30px;}
  .panel-collapse .list-group-item li.list-group-item {border-top: 1px solid #DDD !important;}

  .mar-top {
    margin-top: 10px;
  }
</style>



