import { mount, renderer } from '#/unit/utils'
import Dropdown from '@/components/menus/Dropdown.vue'

describe('Dropdown.vue', () => {
  it('render default', () => {
    const wrap = mount(Dropdown, {
      propsData: {
        title: 'button'
      }
    })

    expect(wrap.classes()).toContain('dropdown')
    expect(wrap.find('button').text().trim()).toEqual('button')

    // button click is-active
    wrap.find('button').trigger('click')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('slots#default', () => {
    const wrap = mount(Dropdown, {
      propsData: {
        title: 'button'
      },
      slots: {
        default: `<a>Link</a>`
      }
    })

    expect(wrap.classes()).toContain('dropdown')
    expect(wrap.find('button').text().trim()).toEqual('button')
    expect(wrap.find('.content a').text()).toEqual('Link')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#icon', () => {
    const wrap = mount(Dropdown, {
      propsData: {
        title: 'button',
        icon: 'fa-caret-down'
      }
    })

    expect(wrap.classes()).toContain('dropdown')
    expect(wrap.find('button').text().trim()).toEqual('button')
    expect(wrap.find('i').classes()).toContains(['fa', 'fa-caret-down'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-hoverable', () => {
    const wrap = mount(Dropdown, {
      propsData: {
        title: 'button',
        isHoverable: true
      }
    })

    expect(wrap.classes()).toContain('dropdown')
    expect(wrap.classes()).toContain('is-hoverable')
    expect(wrap.find('button').text().trim()).toEqual('button')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
