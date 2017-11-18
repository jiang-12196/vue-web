import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/components/Layout'
import Home from '@/components/Home'
import Demo from './Demo/Demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
