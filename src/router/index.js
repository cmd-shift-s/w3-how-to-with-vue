import Vue from 'vue'
import Router from 'vue-router'
import SubPage from '@/layout/SubPage.vue'

import Home from '@/pages/Home.vue'

import * as menus from '@/pages/menus'
import * as images from '@/pages/images'
import * as more from '@/pages/more'

import * as examples from '@/examples'

function getPages(pages) {
  return Object.keys(pages).map(page => {
    const item = {
      path: page
        .replace(/([A-Z])/g, str => `-${str.toLowerCase()}`)
        .substring(1),
      name:
        pages[page].menu ||
        page.replace(/([A-Z])/g, str => ` ${str}`).substring(1),
      component: pages[page].page || pages[page]
    }
    return item
  })
}

export const routes = [
  {
    path: '/',
    title: 'HOW TO',
    name: 'HowTo Home',
    component: Home
  },
  {
    path: '/examples',
    title: 'Examples',
    name: 'Examples',
    component: SubPage,
    children: Object.keys(examples).map(example => {
      return {
        path: example,
        title: 'More Examples',
        name: 'More Examples',
        component: SubPage,
        children: getPages(examples[example])
      }
    })
  },
  {
    path: '/menus',
    title: 'Menus',
    component: SubPage,
    children: getPages(menus)
  },
  {
    path: '/images',
    title: 'Images',
    component: SubPage,
    children: getPages(images)
  },
  {
    path: '/more',
    title: 'More',
    component: SubPage,
    children: getPages(more)
  }
]

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
