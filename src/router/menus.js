import SubPage from '@/layout/SubPage.vue'
import IconBar from '@/pages/menus/IconBar.vue'

const route = {
  path: '/menus',
  title: 'Menus',
  component: SubPage,
  children: [
    {
      path: 'icon_bar',
      name: 'Icon Bar',
      component: IconBar
    }
  ]
}

export default route
