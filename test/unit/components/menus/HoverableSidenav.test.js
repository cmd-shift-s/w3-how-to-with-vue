import {mount, renderer} from '#/unit/utils'
import HoverableSidenav from '@/components/menus/HoverableSidenav.vue'

describe('HoverableSidenav.vue', () => {
  it('render default', () => {
    const wrap = mount(HoverableSidenav)

    expect(wrap.hasClass('hoverable-sidenav')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
