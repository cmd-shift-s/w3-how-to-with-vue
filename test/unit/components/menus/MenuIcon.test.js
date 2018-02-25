import { mount, renderer } from '#/unit/utils'
import MenuIcon from '@/components/menus/MenuIcon.vue'

describe('MenuIcon.vue', () => {
  it('render default', () => {
    const wrap = mount(MenuIcon)

    expect(wrap.classes()).toContain('menu-icon')

    // .bar1, .bar2, .bar3
    expect(wrap.vm.$el.children).toHaveLength(3)

    // should not do anything
    wrap.trigger('click')

    expect(wrap.classes()).not.toContain('change')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-animated', () => {
    const wrap = mount(MenuIcon, {
      propsData: {
        isAnimated: true
      }
    })

    expect(wrap.classes()).toContains(['menu-icon', 'is-anime'])
    expect(wrap.classes()).not.toContain('change')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    expect(wrap.vm.isChanged).toBe(false)

    // should change data and classList
    wrap.trigger('click')

    expect(wrap.vm.isChanged).toBe(true)
    wrap.update()
    expect(wrap.classes()).toContain('change')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
