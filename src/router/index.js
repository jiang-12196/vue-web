import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Demo from '@/components/Demo/Demo.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
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
