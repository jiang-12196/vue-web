import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import helloWorld from '@/components/helloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
