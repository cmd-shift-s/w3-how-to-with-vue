import { mount, renderer } from '#/unit/utils'
import ButtonGroup from '@/components/menus/ButtonGroup.vue'

describe('ButtonGroup.vue', () => {
  it('render default', () => {
    const wrap = mount(ButtonGroup)

    expect(wrap.classes()).toContain('button-group')
    expect(wrap.isEmpty()).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-fullwidth', () => {
    const wrap = mount(ButtonGroup, {
      context: {
        props: { isFullwidth: true }
      }
    })

    expect(wrap.classes()).toContain('is-fullwidth')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-vertical', () => {
    const wrap = mount(ButtonGroup, {
      context: {
        props: { isVertical: true }
      }
    })

    expect(wrap.classes()).toContain('is-vertical')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
