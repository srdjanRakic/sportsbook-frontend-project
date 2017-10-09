export default {
  state: {
    buttonColors: [
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
    buttonColors(state) {
      return state.buttonColors;
    },
  },
};

