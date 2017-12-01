import { mount, renderer } from '#/unit/utils'
import TopNav from '@/components/menus/TopNav.vue'

describe('TopNav.vue', () => {
  it('render default', () => {
    const wrap = mount(TopNav)

    expect(wrap.hasClass('top-nav')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('slots#default', () => {
    const wrap = mount(TopNav, {
      slots: {
        default: `<a>Test</a>`
      }
    })

    expect(wrap.hasClass('top-nav')).toBe(true)
    expect(wrap.find('a').text()).toEqual('Test')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-responsive', () => {
    const wrap = mount(TopNav, {
      propsData: {
        isResponsive: true
      }
    })

    expect(wrap.hasClass('top-nav')).toBe(true)
    expect(wrap.hasClass('is-responsive')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    wrap.vm.$el.querySelector('.toggle-menu').click()
    wrap.update()

    expect(wrap.hasClass('is-active')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-bottom', () => {
    const wrap = mount(TopNav, {
      propsData: {
        isBottom: true
      }
    })

    expect(wrap.hasClass('top-nav')).toBe(true)
    expect(wrap.hasClass('is-bottom')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
