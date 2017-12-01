import { mount, renderer } from '#/unit/utils'
import VerticalMenu from '@/components/menus/VerticalMenu.vue'

describe('VerticalMenu.vue', () => {
  it('render default', () => {
    const wrap = mount(VerticalMenu)

    expect(wrap.hasClass('vertical-menu')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
