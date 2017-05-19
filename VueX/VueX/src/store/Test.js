export default {
  state: {
    num: 20
  },
  mutations: {
    addNum (state) {
      state.num ++
    },
    reduceNum (state) {
      state.num --
    }
  },
  getters: {
    getAddResults: state => state.num + 10,
    getreduceResults: state => state.num + 10
  }
}
