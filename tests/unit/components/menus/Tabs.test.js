import { mount, renderer } from '@/tests/unit/utils'
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

    expect(wrap.classes()).toContains(['tabs', 'is-top'])
    expect(wrap.vm.currentLink).toEqual('test')

    wrap.update()

    expect(wrap.find('.tab-link').classes()).toContain('is-active')

    // tab-content의 is-active는 renderer에서 상태 값이 없기 때문에 볼 수 없다.
    const $test = wrap.find('#test')
    expect($test.classes()).toContains(['tab-content', 'is-active'])
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

    expect(wrap.classes()).toContain('tabs')
    expect(wrap.vm.currentLink).toEqual('test1')

    wrap.update()

    // 첫번째 버튼
    const $btn1 = wrap.find('.tab-link')

    expect($btn1.classes()).toContain('is-active')

    const $test1 = wrap.find('#test1')
    expect($test1.classes()).toContains(['tab-content', 'is-active'])
    expect($test1.text()).toEqual('test1 content')

    const $btn2 = wrap.find('.tab-link:nth-child(2)')
    expect($btn2.classes()).not.toContain('is-active')

    // 2번째 탭 클릭
    $btn2.trigger('click')
    wrap.update()

    expect(wrap.vm.currentLink).toEqual('test2')

    expect($btn2.classes()).toContain('is-active')

    const $test2 = wrap.find('#test2')
    expect($test2.classes()).toContains(['tab-content', 'is-active'])
    expect($test2.text()).toEqual('test2 content')

    // 이전에 선택된 tab의 is-active가 사라짐
    expect(wrap.find('.tab-link').classes()).not.toContain('is-active')
    expect(wrap.find('#test1').classes()).not.toContain('is-active')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#is-animated', () => {
    const wrap = mount(Tabs, {
      propsData: {
        links: ['test'],
        isAnimated: true
      },
      slots: {
        default: '<div id="test" class="tab-content">test content</div>'
      },
      attachToDocument: true
    })

    expect(wrap.classes()).toContains(['tabs', 'is-animated'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#position:top', () => {
    const wrap = mount(Tabs, {
      propsData: {
        links: ['test'],
        position: 'top'
      },
      slots: {
        default: '<div id="test" class="tab-content">test content</div>'
      },
      attachToDocument: true
    })

    expect(wrap.classes()).toContains(['tabs', 'is-top'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#position:right', () => {
    const wrap = mount(Tabs, {
      propsData: {
        links: ['test'],
        position: 'right'
      },
      slots: {
        default: '<div id="test" class="tab-content">test content</div>'
      },
      attachToDocument: true
    })

    expect(wrap.classes()).toContains(['tabs', 'is-right'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#position:bottom', () => {
    const wrap = mount(Tabs, {
      propsData: {
        links: ['test'],
        position: 'bottom'
      },
      slots: {
        default: '<div id="test" class="tab-content">test content</div>'
      },
      attachToDocument: true
    })

    expect(wrap.classes()).toContains(['tabs', 'is-bottom'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#position:left', () => {
    const wrap = mount(Tabs, {
      propsData: {
        links: ['test'],
        position: 'left'
      },
      slots: {
        default: '<div id="test" class="tab-content">test content</div>'
      },
      attachToDocument: true
    })

    expect(wrap.classes()).toContains(['tabs', 'is-left'])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
