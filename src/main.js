Vue.config.productionTip = false
require('./styles/app.scss')
import Vue from 'vue'
import index from './scripts/components/index.vue'
new Vue({
  el: '#app',
  components: { index },
  template: '<index />'
})
