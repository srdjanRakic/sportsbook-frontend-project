export default {
  state: {
    secondaryHeadline: {
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
    updateSecondaryHeadline(state, payload) {
      state.secondaryHeadline = payload;
    },
  },
  actions: {
    updateSecondaryHeadline({ commit }, payload) {
      commit('updateGlobalFonts', payload);
    },
  },
  getters: {
    secondaryHeadline(state) {
      return state.secondaryHeadline;
    },
  },
};
