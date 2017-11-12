import SubPage from '@/layout/SubPage.vue'

import menus from '@/pages/menus'

const route = {
  path: '/menus',
  title: 'Menus',
  component: SubPage,
  children: [
    {
      path: 'icon-bar',
      name: 'Icon Bar',
      component: menus.IconBar
    },
    {
      path: 'menu-icon',
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
      path: 'vertical-tabs',
      name: 'Vertical Tabs',
      component: menus.VerticalTabs
    },
    {
      path: 'tab-headers',
      name: 'Tab Headers',
      component: menus.TabHeaders
    },
    {
      path: 'top-navigation',
      name: 'Top Navigation',
      component: menus.TopNavigation
    },
    {
      path: 'responsive-topnav',
      name: 'Responsive Topnav',
      component: menus.ResponsiveTopnav
    },
    {
      path: 'side-navigation',
      name: 'Side Navigation',
      component: menus.SideNavigation
    }
  ]
}

export default route
