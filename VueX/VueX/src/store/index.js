import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import Common from './Common'
import Test from './Test'
import Action from './Action'
export default new VueX.Store({
  modules: {
    Common,
    Test,
    Action
  }
})
