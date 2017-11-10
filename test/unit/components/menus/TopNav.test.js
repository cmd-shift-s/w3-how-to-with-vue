import {mount, renderer} from '#/unit/utils'
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
})
