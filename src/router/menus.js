import SubPage from '@/layout/SubPage.vue'

import menus from '@/pages/menus'

const route = {
  path: '/menus',
  title: 'Menus',
  component: SubPage,
  children: [
    {
      path: 'icon_bar',
      name: 'Icon Bar',
      component: menus.IconBar
    },
    {
      path: 'menu_icon',
      name: 'Menu Icon',
      component: menus.MenuIcon
    },
    {
      path: 'accordion',
      name: 'Accordion',
      component: menus.Accordion
    },
    {
      path: 'tabs',
      name: 'Tabs',
      component: menus.Tabs
    }
  ]
}

export default route
