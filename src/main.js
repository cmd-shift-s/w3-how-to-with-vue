import Vue from 'vue'
import App from './App.vue'

import './bootstrap'

import router from './router'

import Page from './layout/Page.vue'
Vue.component('page', Page)

// load style sheet
import './app.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
