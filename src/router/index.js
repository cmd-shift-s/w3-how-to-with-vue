import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'

import Menus from './menus'

export const routes = [
  {
    path: '/',
    title: 'HOW TO',
    name: 'HowTo Home',
    component: Home
  },
  Menus
]

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes
})

export default router
