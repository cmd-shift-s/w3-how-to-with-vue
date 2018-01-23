const Slideshow = () => import(/* webpackChunkName: "pages/images/Slideshow" */ './Slideshow.vue')
const SlideshowGallery = () => import(/* webpackChunkName: "pages/images/SlideshowGallery" */ './SlideshowGallery.vue')

export default {
  Slideshow, SlideshowGallery
}
