import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: 0,
    dt: 0,
    progress: 0,
  },
  mutations: {
    tic(state) {
      state.time = moment().format('x')
    },
    toc(state) {
      const lastTime = state.time
      state.time = moment().format('x')
      state.dt = state.time - lastTime
      state.progress++
    },
    refresh(state) {
      state.progress = 0
    }
  },
})
