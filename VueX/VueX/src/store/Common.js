export default {
  state: {
    num: 1
  },
  mutations: {
    setAdd1 (state) {
      state.num ++
    },
    setAdd2 (state) {
      state.num += 2
    },
    setAddNum (state, number) {
      state.num += number
    },
    setReduceNum (state) {
      state.num --
    }
  },
  getters: {
    getAdd10: state => state.num + 10,
    getAdd20: state => state.num + 20,
    getAdd30: state => state.num + 30
  }
}
