import Vue from 'vue'
import Router from 'vue-router'
import LogViewer from '@/components/LogViewer'
import RegisterRegexp from '@/components/RegisterRegexp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogViewer',
      component: LogViewer
    },
    {
      path: '/regexp',
      name: 'RegisterRegexp',
      component: RegisterRegexp
    }
  ]
})
