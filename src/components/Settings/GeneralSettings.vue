<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <div class="panel-group" id="accordion">
          <layout-settings></layout-settings>
          <global-fonts></global-fonts>
          <global-colors></global-colors>
          <custom-styles></custom-styles>
          <message-box></message-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutSettings from './Layout/Layout';
import GlobalColors from './GlobalColors/GlobalColors';
import GlobalFonts from './GlobalFonts/GlobalFonts';
import MessageBox from './MessageBox/MessageBox';
import CustomStyles from './CustomStyles/CustomStyles';

export default {
  name: 'general-settings',
  components: {
    LayoutSettings,
    GlobalColors,
    GlobalFonts,
    MessageBox,
    CustomStyles,
  },
};
</script>


