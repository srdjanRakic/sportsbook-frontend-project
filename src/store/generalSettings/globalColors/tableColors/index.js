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
  },
  actions: {
  },
  getters: {
    tableColors(state) {
      return state.tableColors;
    },
  },
};

