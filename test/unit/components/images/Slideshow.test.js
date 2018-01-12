import { mount, renderer } from '#/unit/utils'
import Slideshow from '@/components/images/Slideshow.vue'

describe('Slideshow.vue', () => {
  const propsData = {
    slides: [
      {
        link: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        text: 'Caption Text'
      },
      {
        link: 'https://www.w3schools.com/howto/img_fjords_wide.jpg',
        text: 'Caption Two'
      }
    ]
  }

  it('render default', () => {
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.hasClass('slideshow')).toBe(true)
    expect(wrap.vm.slideLength).toEqual(2)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('methods@nextSlide', () => {
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.vm.curIdx).toEqual(0)

    wrap.find('.next').trigger('click')
    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    expect(wrap.vm.curIdx).toEqual(1)

    wrap.find('.next').trigger('click')
    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    expect(wrap.vm.curIdx).toEqual(0)

    const $changeSlide = wrap.emitted()['change-slide']
    expect($changeSlide.length).toEqual(2)
    expect($changeSlide[0]).toEqual([1])
    expect($changeSlide[1]).toEqual([0])
  })

  it('methods@prevSlide', () => {
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.vm.curIdx).toEqual(0)

    wrap.find('.prev').trigger('click')
    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    expect(wrap.vm.curIdx).toEqual(1)

    wrap.find('.prev').trigger('click')
    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    expect(wrap.vm.curIdx).toEqual(0)

    const $changeSlide = wrap.emitted()['change-slide']
    expect($changeSlide.length).toEqual(2)
    expect($changeSlide[0]).toEqual([1])
    expect($changeSlide[1]).toEqual([0])
  })

  it('methods@changeSlide', () => {
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.vm.curIdx).toEqual(0)

    wrap.vm.changeSlide(1)

    expect(wrap.vm.curIdx).toEqual(1)

    const $changeSlide = wrap.emitted()['change-slide']
    expect($changeSlide.length).toEqual(1)
    expect($changeSlide[0]).toEqual([1])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
