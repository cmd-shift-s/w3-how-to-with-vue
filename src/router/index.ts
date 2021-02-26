import Vue from 'vue'
import Router from 'vue-router'
import SubPage from '@/layout/SubPage.vue'

import Home from '@/views/Home.vue'

import * as menus from '@/views/menus'
import * as images from '@/views/images'
import * as more from '@/views/more'

// import * as examples from '@/examples'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPages(views: any) {
  return Object.keys(views).map(page => {
    const item = {
      path: page
        .replace(/([A-Z])/g, str => `-${str.toLowerCase()}`)
        .substring(1),
      name:
        views[page].menu ||
        page.replace(/([A-Z])/g, str => ` ${str}`).substring(1),
      component: views[page].page || views[page]
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
  // {
  //   path: '/examples',
  //   title: 'Examples',
  //   name: 'Examples',
  //   component: SubPage,
  //   children: Object.keys(examples).map(example => {
  //     return {
  //       path: example,
  //       title: 'More Examples',
  //       name: 'More Examples',
  //       component: SubPage,
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       children: getPages((examples as any)[example])
  //     }
  //   })
  // },
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
