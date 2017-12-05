// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueTable from 'vue-table2'

import App from './App'
import router from './router'
import Corner from './components/Corner'

Vue.config.productionTip = false

Vue.component('Corner', Corner)
Vue.component('vueTable', vueTable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
