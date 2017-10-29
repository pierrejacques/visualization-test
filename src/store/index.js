import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: 0,
    progress: 0,
  },
  mutations: {
    renew(state) {
      state.time = moment().format('x')
    },
    progress(state) {
      state.time = moment().format('x')
      state.progress++
    },
    refresh(state) {
      state.progress = 0
    }
  },
})
