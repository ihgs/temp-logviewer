import Vue from 'vue'
import Router from 'vue-router'
import LogViewer from '@/components/LogViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogViewer',
      component: LogViewer
    }
  ]
})
