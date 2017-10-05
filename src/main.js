import vSelect from 'vue-select';
import { Chrome } from 'vue-color';
import Vue from 'vue';
import App from './App';
import AlertCmp from './components/Shared/Alert';
import { store } from './store';


require('./assets/css/main.css');

Vue.component('v-color-picker', Chrome);
Vue.component('v-select', vSelect);
Vue.component('app-alert', AlertCmp);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
