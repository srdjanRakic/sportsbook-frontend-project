<template>
  <v-expansion-panel>
    <layout-settings></layout-settings>
    <global-fonts></global-fonts>
    <global-colors></global-colors>
    <custom-styles></custom-styles>
    <message-box></message-box>
  </v-expansion-panel>
</template>

<script>
import LayoutSettings from './Settings/LayoutSettings';
import GlobalColors from './Settings/GlobalColors';
import GlobalFonts from './Settings/GlobalFonts';
import MessageBox from './Settings/MessageBox';
import CustomStyles from './Settings/CustomStyles';

export default {
  name: 'settings',
  components: {
    LayoutSettings,
    GlobalColors,
    GlobalFonts,
    MessageBox,
    CustomStyles,
  },
};
</script>


