Vue.config.productionTip = false

require('./styles/app.scss')

import Vue from 'vue'

import router from './scripts/router'

new Vue({
  el: '#app',
  router,
  template: '<router-view></router-view>'
})
