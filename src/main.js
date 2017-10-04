import 'bootstrap/dist/css/bootstrap.css';
import jQuery from 'jquery';
import Vue from 'vue';
import App from './App';


global.jQuery = jQuery;
require('bootstrap');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
