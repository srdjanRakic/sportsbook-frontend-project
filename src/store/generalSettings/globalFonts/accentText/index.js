export default {
  state: {
    accentText: {
      fontFamily: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
      ],
      fontWeight: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
      ],
      fontSize: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
      ],
    },
  },
  mutations: {
    updateAccentText(state, payload) {
      state.accentText = payload;
    },
  },
  actions: {
    updateAccentText({ commit }, payload) {
      commit('updateAccentText', payload);
    },
  },
  getters: {
    accentText(state) {
      return state.accentText;
    },
  },
};
