import { mount, renderer } from '#/unit/utils'
import IconBar from '@/components/menus/IconBar.vue'

describe('IconBar.vue', () => {
  it('render default', () => {
    const wrap = mount(IconBar)

    expect(wrap.hasClass('icon-bar')).toBe(true)
    expect(wrap.hasClass('horizontal')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-vertical', () => {
    const wrap = mount(IconBar, {
      context: {
        props: { isVertical: true }
      }
    })

    expect(wrap.hasClass('icon-bar')).toBe(true)
    expect(wrap.hasClass('vertical')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
