import { mount, renderer } from '@/tests/unit/utils'
import TopNav from '@/components/menus/TopNav.vue'

describe('TopNav.vue', () => {
  it('render default', () => {
    const wrap = mount(TopNav)

    expect(wrap.classes()).toContain('top-nav')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('slots#default', () => {
    const wrap = mount(TopNav, {
      slots: {
        default: '<a>Test</a>'
      }
    })

    expect(wrap.classes()).toContain('top-nav')
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

    expect(wrap.classes()).toContains(['top-nav', 'is-responsive'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    wrap.vm.$el.querySelector('.toggle-menu').click()
    wrap.update()

    expect(wrap.classes()).toContain('is-active')

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

    expect(wrap.classes()).toContains(['top-nav', 'is-bottom'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
