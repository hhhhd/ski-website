// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import skiCode from './components/showcase.vue'

require('normalize.css')
require('animate.css')

Vue.config.productionTip = false
Vue.component('ski-code', skiCode)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
