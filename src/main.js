// Absolute imports
import VueGridLayout from 'vue-grid-layout';
import { Chrome } from 'vue-color';
import Vue from 'vue';

// Relative imports
import App from './App';
import ColorPickerModal from './components/Shared/ColorPickerModal';
import { store } from './store';

// Global CSS
require('./assets/css/main.css');

// Grid Layout
const GridLayout = VueGridLayout.GridLayout;
const GridItem = VueGridLayout.GridItem;

// Global components
Vue.component('color-picker', Chrome);
Vue.component('color-picker-modal', ColorPickerModal);
Vue.component('grid-layout', GridLayout);
Vue.component('grid-item', GridItem);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
