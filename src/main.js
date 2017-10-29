import Vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(vuex)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
