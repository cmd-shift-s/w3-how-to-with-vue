import Vue from 'vue'
import App from './App.vue'

// load style sheet
import './app.scss'

import router from './router'

import Page from './layout/Page.vue'
Vue.component('page', Page)

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
