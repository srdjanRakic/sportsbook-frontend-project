export default {
  state: {
    tableColors: [
      { title: 'Primary', chosenColor: '#194d33' },
      { title: 'Second', chosenColor: '#194d33' },
      { title: 'Text', chosenColor: '#194d33' },
      { title: 'Accent', chosenColor: '#194d33' },
    ],
  },
  mutations: {
    updateTableColors(state, payload) {
      const tableColors = state.tableColors;

      tableColors.forEach((item) => {
        if (item.title === payload.title) {
          item.chosenColor = payload.chosenColor;
        }
      });
    },
  },
  actions: {
    updateTableColors({ commit }, payload) {
      commit('updateTableColors', payload);
    },
  },
  getters: {
    tableColors(state) {
      return state.tableColors;
    },
  },
};

