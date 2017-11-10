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
    },
    {
      path: 'vertical_tabs',
      name: 'Vertical Tabs',
      component: menus.VerticalTabs
    },
    {
      path: 'tab_headers',
      name: 'Tab Headers',
      component: menus.TabHeaders
    },
    {
      path: 'top_navigation',
      name: 'Top Navigation',
      component: menus.TopNavigation
    },
    {
      path: 'responsive_top_navigation',
      name: 'Responsive Topnav'
    }
  ]
}

export default route
