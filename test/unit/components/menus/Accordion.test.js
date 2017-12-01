import { mount, renderer } from '#/unit/utils'
import Accordion from '@/components/menus/Accordion.vue'

describe('Accordion.vue', () => {
  it('render default', () => {
    const wrap = mount(Accordion)

    expect(wrap.hasClass('accordion')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#title', () => {
    const wrap = mount(Accordion, {
      propsData: {
        title: 'Section 1'
      }
    })

    expect(wrap.hasClass('accordion')).toBe(true)
    expect(wrap.find('button').text()).toEqual('Section 1')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#has-icon', () => {
    const wrap = mount(Accordion, {
      propsData: {
        hasIcon: true
      }
    })

    expect(wrap.hasClass('accordion')).toBe(true)
    expect(wrap.hasClass('has-icon')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-animated', () => {
    const wrap = mount(Accordion, {
      propsData: {
        isAnimated: true
      }
    })

    expect(wrap.hasClass('accordion')).toBe(true)
    expect(wrap.hasClass('is-animated')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('button@click', () => {
    const wrap = mount(Accordion)

    expect(wrap.hasClass('accordion')).toBe(true)

    expect(wrap.hasClass('is-active')).not.toBe(true)

    const button = wrap.find('button')
    button.trigger('click')

    expect(wrap.hasClass('is-active')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
