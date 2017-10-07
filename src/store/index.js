import Vue from 'vue';
import Vuex from 'vuex';
import generalSettings from './generalSettings';
import widget from './widget';
import shared from './shared';

Vue.use(Vuex);
// eslint-disable-next-line
export const store = new Vuex.Store({
  modules: {
    generalSettings,
    widget,
    shared,
  },
});

