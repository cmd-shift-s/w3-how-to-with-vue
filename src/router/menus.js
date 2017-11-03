import SubPage from '@/layout/SubPage.vue'
import IconBar from '@/pages/menus/IconBar.vue'
import MenuIcon from '@/pages/menus/MenuIcon.vue'

const route = {
  path: '/menus',
  title: 'Menus',
  component: SubPage,
  children: [
    {
      path: 'icon_bar',
      name: 'Icon Bar',
      component: IconBar
    },
    {
      path: 'menu_icon',
      name: 'Menu Icon',
      component: MenuIcon
    }
  ]
}

export default route
