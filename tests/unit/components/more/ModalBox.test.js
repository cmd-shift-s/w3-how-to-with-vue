import { mount, renderer } from '@/tests/unit/utils'
import ModalBox from '@/components/more/ModalBox.vue'

describe('ModalBox.vue', () => {
  it('render default', () => {
    const wrap = mount(ModalBox)

    expect(wrap.classes()).toContain('modal-box')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#isActive', () => {
    const wrap = mount(ModalBox, {
      propsData: {
        isActive: true
      }
    })

    expect(wrap.classes()).toContain('is-active')

    wrap.vm.close()

    const $emitted = wrap.emitted()
    expect($emitted.close).toBeTruthy()
    expect($emitted['update:isActive']).toBeTruthy()
    expect($emitted['update:isActive'][0]).toEqual([false])

    wrap.setProps({ isActive: false })
    wrap.update()

    expect(wrap.classes()).not.toContain('is-active')
  })

  it('props#isClosable', () => {
    const wrap = mount(ModalBox, {
      propsData: {
        isClosable: false
      }
    })

    wrap.vm.closeDim()
    expect(wrap.emitted().close).toBeFalsy()

    wrap.setProps({ isClosable: true })

    wrap.vm.closeDim()
    expect(wrap.emitted().close).toBeTruthy()
  })
})
