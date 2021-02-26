import { mount, renderer } from '@/tests/unit/utils'
import Breadcrumb from '@/components/menus/Breadcrumb.vue'

describe('Breadcrumb.vue', () => {
  it('render default', () => {
    const wrap = mount(Breadcrumb, {
      context: {
        props: {
          links: [
            { to: 'javascript:void(0)', title: 'Home' },
            { to: 'javascript:void(0)', title: 'Pictures' },
            { to: 'javascript:void(0)', title: 'Summer 15' },
            'Italy'
          ]
        }
      }
    })

    expect(wrap.classes()).toContain('breadcrumb')
    expect(wrap.findAll('a').length).toEqual(3)
    expect(wrap.findAll('li').length).toEqual(4)

    const $a = wrap.find('a')
    expect($a.element.getAttribute('href')).toEqual('javascript:void(0)')
    expect($a.text()).toEqual('Home')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
