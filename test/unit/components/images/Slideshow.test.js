import { mount, renderer } from '#/unit/utils'
import Slideshow from '@/components/images/Slideshow.vue'

describe('Slideshow.vue', () => {
  const slides = [
    {
      link: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
      text: 'Caption Text'
    },
    {
      link: 'https://www.w3schools.com/howto/img_fjords_wide.jpg',
      text: 'Caption Two'
    }
  ]

  it('render default', () => {
    const propsData = { slides }
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.classes()).toContain('slideshow')
    expect(wrap.vm.slideLength).toEqual(2)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('methods@nextSlide', () => {
    const propsData = { slides }
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
    const propsData = { slides }
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
    const propsData = { slides }
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

  it('props#is-gallery', () => {
    const propsData = { slides, isGallery: true }
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.find('.gallery-container').is('div')).toBe(true)

    const $gallery = wrap.findAll('.gallery')
    expect($gallery.length).toEqual(2)

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    $gallery.at(1).trigger('click')

    expect(wrap.vm.curIdx).toEqual(1)

    const $changeSlide = wrap.emitted()['change-slide']
    expect($changeSlide.length).toEqual(1)
    expect($changeSlide[0]).toEqual([1])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#show-dots', () => {
    const propsData = { slides, showDots: true }
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.find('.dots').is('div')).toBe(true)

    const $dot = wrap.findAll('.dot')
    expect($dot.length).toEqual(2)
    expect($dot.at(0).classes()).toContain('is-active')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })

    $dot.at(1).trigger('click')

    expect(wrap.vm.curIdx).toEqual(1)

    const $changeSlide = wrap.emitted()['change-slide']
    expect($changeSlide.length).toEqual(1)
    expect($changeSlide[0]).toEqual([1])

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('props#overlap-text', () => {
    const propsData = { slides, overlapText: true }
    const wrap = mount(Slideshow, { propsData })

    expect(wrap.find('.text').classes()).toContain('is-overlapped')

    renderer.renderToString(wrap.vm, (err, str) => {
      if (err) console.error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
