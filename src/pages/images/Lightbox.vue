<template lang="html">
  <page
    title="Lightbox"
    intro="a modal image gallery (lightbox) with CSS and JavaScript"
    class="lightbox-page">

    <template slot="header">
    <h2 class="title">Lightbox (Modal Image Gallery)</h2>
    <p>Click on one of the images to open the lightbox:</p>
    </template>

    <sample>
      <a class="btn-modal" v-for="(slide, index) of slides" @click="openModal(index)">
        <img :src="slide.thumbnail" :alt="slide.text" width="300" height="200">
      </a>
      <modal-box :is-active.sync="modal.isActive">
        <div class="modal-header">
          <span class="close" @click="modal.isActive = false">&times;</span>
        </div>
        <div class="modal-body">
          <slideshow :active-index.sync="slideIndex" :slides="slides" is-gallery></slideshow>
        </div>
      </modal-box>
    </sample>

  </page>
</template>

<script>
import Slideshow from '@/components/images/Slideshow.vue'
import ModalBox from '@/components/more/ModalBox.vue'

export default {
  name: 'lightbox-page',
  data: () => ({
    modal: {
      isActive: false
    },
    slideIndex: 0,
    slides: [
      {
        link: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        thumbnail: 'https://www.w3schools.com/howto/img_nature.jpg',
        text: 'Nature and sunrise'
      },
      {
        link: 'https://www.w3schools.com/howto/img_fjords_wide.jpg',
        thumbnail: 'https://www.w3schools.com/howto/img_fjords.jpg',
        text: 'Trolltunga, Norway'
      },
      {
        link: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
        thumbnail: 'https://www.w3schools.com/howto/img_mountains.jpg',
        text: 'Mountains and fjords'
      },
      {
        link: 'https://www.w3schools.com/howto/img_lights_wide.jpg',
        thumbnail: 'https://www.w3schools.com/howto/img_lights.jpg',
        text: 'Northern Lights'
      }
    ]
  }),
  methods: {
    openModal(num) {
      this.modal.isActive = true
      this.slideIndex = num
    }
  },
  components: {
    Slideshow, ModalBox
  }
}
</script>

<style lang="scss">
.lightbox-page {
  .sample {
    .btn-modal {
      cursor: pointer;
      transition: .3s;
      padding-right: 10px;

      &:hover {
        opacity: 0.7;
      }

      & > img {
        border-radius: 5px;
      }
    }

    .modal-box {
      background-color: rgba(0, 0, 0, 0.9);

      .modal-content {
        background-color: transparent;
        border: none;
        box-shadow: none;

        .modal-header {
          background-color: inherit;
          text-align: right;

          .close {
            font-size: 35px;
            float: none;
          }
        }

        .modal-body {
          .gallery-container {
            margin: auto;

            .column {
              max-width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
