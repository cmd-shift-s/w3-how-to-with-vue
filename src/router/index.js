import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  }
]

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes
})

export default router
