import Vue from 'vue'
import Router from 'vue-router'
import SubPage from '@/layout/SubPage.vue'

import Home from '@/pages/Home.vue'

import menus from '@/pages/menus'
import images from '@/pages/images'

function getPages(pages) {
  return Object.keys(pages).map(page => {
    const item = {
      path: page
        .replace(/([A-Z])/g, str => `-${str.toLowerCase()}`)
        .substring(1),
      name:
        pages[page].menu ||
        page.replace(/([A-Z])/g, str => ` ${str}`).substring(1),
      component: pages[page]
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
