import Vue from 'vue'
import App from './App.vue'

// load style sheet
import './app.scss'

import './bootstrap'

import router from './router'

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
