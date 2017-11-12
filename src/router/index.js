import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import helloWorld from '@/components/helloWorld'
import Home from './Home'
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
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: helloWorld
    }
  ]
})
