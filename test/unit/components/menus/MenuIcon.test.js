import {mount, renderer} from '#/unit/utils'
import MenuIcon from '@/components/menus/MenuIcon.vue'

describe('MenuIcon.vue', () => {
  it('render default', () => {
    const wrap = mount(MenuIcon)

    expect(wrap.hasClass('menu-icon')).toBe(true)

    // .bar1, .bar2, .bar3
    expect(wrap.vm.$el.children).toHaveLength(3)

    // should not do anything
    wrap.vm.$el.click()

    expect(wrap.hasClass('change')).not.toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-animated', async () => {
    const wrap = mount(MenuIcon, {
      propsData: {
        isAnimated: true
      }
    })

    expect(wrap.hasClass('menu-icon')).toBe(true)
    expect(wrap.hasClass('is-anime')).toBe(true)
    expect(wrap.hasClass('change')).not.toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    expect(wrap.vm.isChanged).toBe(false)

    // should change data and classList
    wrap.vm.$el.click()

    expect(wrap.vm.isChanged).toBe(true)
    await wrap.vm.$nextTick()
    expect(wrap.hasClass('change')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
