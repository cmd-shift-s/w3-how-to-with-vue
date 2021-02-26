import { mount, renderer } from '@/tests/unit/utils'
import IconBar from '@/components/menus/IconBar.vue'

describe('IconBar.vue', () => {
  it('render default', () => {
    const wrap = mount(IconBar)

    expect(wrap.classes()).toContains(['icon-bar', 'horizontal'])

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

    expect(wrap.classes()).toContains(['icon-bar', 'vertical'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
