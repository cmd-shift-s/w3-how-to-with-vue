import { mount, renderer } from '#/unit/utils'
import Dropdown from '@/components/menus/Dropdown.vue'

describe('Dropdown.vue', () => {
  it('render default', () => {
    const wrap = mount(Dropdown, {
      propsData: {
        title: 'button'
      }
    })

    expect(wrap.hasClass('dropdown')).toBe(true)
    expect(wrap.find('button').text().trim()).toEqual('button')

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

    expect(wrap.hasClass('dropdown')).toBe(true)
    expect(wrap.find('button').text().trim()).toEqual('button')
    expect(wrap.find('.content a').text()).toEqual('Link')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
