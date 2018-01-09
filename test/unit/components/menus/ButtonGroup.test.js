import { mount, shallow, renderer } from '#/unit/utils'
import ButtonGroup from '@/components/menus/ButtonGroup.vue'

describe('ButtonGroup.vue', () => {
  it('render default', () => {
    const wrap = mount(ButtonGroup)

    expect(wrap.hasClass('button-group')).toBe(true)
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

    expect(wrap.hasClass('is-fullwidth')).toBe(true)

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

    expect(wrap.hasClass('is-vertical')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
