import 'babel-polyfill' // 适配较低版本的浏览器如ie8，es6语法转es5
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// Vue.config.productionTip = false

import 'common/stylus/index.styl'

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
