import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
// import Home from '@/components/Home'
import Demo from './Demo/Demo.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Layout
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
