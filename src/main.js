// Absolute imports
import { Chrome } from 'vue-color';
import Vue from 'vue';

// Relative imports
import App from './App';
import AlertCmp from './components/Shared/Alert';
import ColorPickerModal from './components/Shared/ColorPickerModal';
import { store } from './store';

// Global CSS
require('./assets/css/main.css');

// Global components
Vue.component('app-alert', AlertCmp);
Vue.component('color-picker', Chrome);
Vue.component('color-picker-modal', ColorPickerModal);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
