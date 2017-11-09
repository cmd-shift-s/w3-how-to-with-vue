import { mount, renderer } from '#/unit/utils'
import Tabs from '@/components/menus/Tabs.vue'

describe('Tabs.vue', () => {
  it('render default', () => {
    const wrap = mount(Tabs, {
      propsData: {
        links: ['test']
      },
      slots: {
        default: '<div id="test" class="tab-content">test content</div>'
      },
      attachToDocument: true
    })

    expect(wrap.hasClass('tabs')).toBe(true)
    expect(wrap.vm.currentIndex).toEqual(0)

    expect(wrap.find('.tab-link').hasClass('is-active')).toBe(true)

    // tab-content의 is-active는 renderer에서 상태 값이 없기 때문에 볼 수 없다.
    const $test = wrap.find('#test')
    expect($test.hasClass('tab-content')).toBe(true)
    expect($test.hasClass('is-active')).toBe(true)
    expect($test.text()).toEqual('test content')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('tab-link@click', () => {
    const wrap = mount(Tabs, {
      propsData: {
        links: ['test1', 'test2']
      },
      slots: {
        default: `
          <div>
            <div id="test1" class="tab-content">test1 content</div>
            <div id="test2" class="tab-content">test2 content</div>
          </div>
        `
      },
      attachToDocument: true
    })

    expect(wrap.hasClass('tabs')).toBe(true)
    expect(wrap.vm.currentIndex).toEqual(0)

    // 첫번째 버튼
    const $btn1 = wrap.find('.tab-link')

    expect($btn1.hasClass('is-active')).toBe(true)

    const $test1 = wrap.find('#test1')
    expect($test1.hasClass('tab-content')).toBe(true)
    expect($test1.hasClass('is-active')).toBe(true)
    expect($test1.text()).toEqual('test1 content')

    const $btn2 = wrap.find('.tab-link:nth-child(2)')
    expect($btn2.hasClass('is-active')).toBe(false)

    // 2번째 탭 클릭
    $btn2.element.click()
    wrap.update()

    expect(wrap.vm.currentIndex).toEqual(1)

    expect($btn2.hasClass('is-active')).toBe(true)

    const $test2 = wrap.find('#test2')
    expect($test2.hasClass('tab-content')).toBe(true)
    expect($test2.hasClass('is-active')).toBe(true)
    expect($test2.text()).toEqual('test2 content')

    // 이전에 선택된 tab의 is-active가 사라짐
    expect(wrap.find('.tab-link').hasClass('is-active')).toBe(false)
    expect(wrap.find('#test1').hasClass('is-active')).toBe(false)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
