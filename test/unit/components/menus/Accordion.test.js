import { mount, renderer } from '#/unit/utils'
import Accordion from '@/components/menus/Accordion.vue'

describe('Accordion.vue', () => {
  it('render default', () => {
    const wrap = mount(Accordion)

    expect(wrap.classes()).toContain('accordion')

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

    expect(wrap.classes()).toContain('accordion')
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

    expect(wrap.classes()).toContains(['accordion', 'has-icon'])

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

    expect(wrap.classes()).toContain('accordion', 'is-animated')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('button@click', () => {
    const wrap = mount(Accordion)

    expect(wrap.classes()).toContain('accordion')

    expect(wrap.classes()).not.toContain('is-active')

    const button = wrap.find('button')
    button.trigger('click')

    expect(wrap.classes()).toContain('is-active')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
