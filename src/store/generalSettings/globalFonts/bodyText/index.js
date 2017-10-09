export default {
  state: {
    bodyText: {
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
    updateBodyText(state, payload) {
      state.globalFonts = payload;
    },
  },
  actions: {
    updateBodyText({ commit }, payload) {
      commit('updateBodyText', payload);
    },
  },
  getters: {
    bodyText(state) {
      return state.bodyText;
    },
  },
};
