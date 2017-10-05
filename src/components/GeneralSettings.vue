<template>
<div class="container-fluid" >
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
</div>
</template>

<script>
import LayoutSettings from './Settings/LayoutSettings';
import GlobalColors from './Settings/GlobalColors';
import GlobalFonts from './Settings/GlobalFonts';
import MessageBox from './Settings/MessageBox';
import CustomStyles from './Settings/CustomStyles';

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


