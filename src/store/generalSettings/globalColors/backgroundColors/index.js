export default {
  state: {
    backgroundColors: [
      { title: 'Primary', chosenColor: '#194d33' },
      { title: 'Second', chosenColor: '#194d33' },
      { title: 'Text', chosenColor: '#194d33' },
      { title: 'Accent', chosenColor: '#194d33' },
    ],
  },
  mutations: {
    updateBackgroundColors(state, payload) {
      const tableColors = state.backgroundColors;

      tableColors.forEach((item) => {
        if (item.title === payload.title) {
          item.chosenColor = payload.chosenColor;
        }
      });
    },
  },
  actions: {
    updateBackgroundColors({ commit }, payload) {
      commit('updateBackgroundColors', payload);
    },
  },
  getters: {
    backgroundColors(state) {
      return state.backgroundColors;
    },
  },
};
