export default {
  state: {
    linkColors: [
      { title: 'Primary', chosenColor: '#194d33' },
      { title: 'Second', chosenColor: '#194d33' },
      { title: 'Text', chosenColor: '#194d33' },
      { title: 'Accent', chosenColor: '#194d33' },
    ],
  },
  mutations: {
    updateLinkColors(state, payload) {
      const tableColors = state.linkColors;

      tableColors.forEach((item) => {
        if (item.title === payload.title) {
          item.chosenColor = payload.chosenColor;
        }
      });
    },
  },
  actions: {
    updateLinkColors({ commit }, payload) {
      commit('updateLinkColors', payload);
    },
  },
  getters: {
    linkColors(state) {
      return state.linkColors;
    },
  },
};
