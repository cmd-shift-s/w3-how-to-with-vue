import { mount, renderer } from '#/unit/utils'
import Pagination from '@/components/menus/Pagination.vue'

describe('Pagination.vue', () => {
  it('render default', () => {
    const wrap = mount(Pagination, {
      propsData: {
        currentPage: 1
      }
    })

    expect(wrap.hasClass('pagination')).toBe(true)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#total-pages', () => {
    const totalPages = 5
    const wrap = mount(Pagination, {
      propsData: {
        currentPage: 1,
        totalPages
      }
    })

    expect(wrap.findAll('a').length).toBe(totalPages + 2) // 2: <<, >>

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('emit$page-changed', () => {
    const wrap = mount(Pagination, {
      propsData: {
        currentPage: 1,
        totalPages: 5
      }
    })

    wrap.findAll('a').at(3).trigger('click')

    const pageChanged = wrap.emitted()['page-changed']
    expect(pageChanged).toBeTruthy()
    expect(pageChanged.length).toBe(1)
    expect(pageChanged[0]).toEqual([3])
  })
})
