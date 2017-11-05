import Vue from 'vue'
import App from './App.vue'

// load style sheet
import './app.scss'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/solarized-dark.css'

import router from './router'

import Page from './layout/Page.vue'
import Sample from './layout/Sample.vue'

Vue.component('page', Page)
Vue.component('sample', Sample)

marked.setOptions({
  highlight(code) {
    return hljs.highlightAuto(code).value
  }
})

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
