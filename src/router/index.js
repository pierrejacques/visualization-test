import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Survey from '@/components/Survey/survey'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
  ]
})
