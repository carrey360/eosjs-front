import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/pages/demo/home/home'

Vue.use(Router)

export default new Router({
  // base: 'demo',
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    }
  ]
})
