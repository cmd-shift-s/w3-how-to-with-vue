import { mount, renderer } from '#/unit/utils'
import SideNav from '@/components/menus/SideNav.vue'

describe('SideNav.vue', () => {
  it('render default', () => {
    const wrap = mount(SideNav)

    expect(wrap.hasClass('side-nav')).toBe(true)
    expect(wrap.find('.close-btn').is('a')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#active', () => {
    const wrap = mount(SideNav)

    wrap.setProps('active', true)
    wrap.update()

    const $closeBtn = wrap.vm.$el.querySelector('.close-btn')
    $closeBtn.click()

    expect(wrap.emitted()['update:active'][0]).toEqual([false])
    expect(wrap.emitted().close).toBeTruthy()
  })

  it('props#is-animated', () => {
    const wrap = mount(SideNav, {
      propsData: {
        isAnimated: true
      }
    })

    expect(wrap.hasClass('is-animated')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#text-center', () => {
    const wrap = mount(SideNav, {
      propsData: {
        textCenter: true
      }
    })

    expect(wrap.hasClass('has-text-centered')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
