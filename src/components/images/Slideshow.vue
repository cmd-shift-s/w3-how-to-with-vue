<template lang="html">
  <div class="slideshow">
    <!-- Slideshow container -->
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
      <div
        v-for="(slide, index) of slides" :key="index"
        class="slide fade" :class="{'is-active': curIdx === index}">

        <div class="numbertext">{{index + 1}} / {{slideLength}}</div>
        <img :src="slide.link" :alt="slide.text">
        <div class="text" :class="{'is-overlapped': overlapText}">
          <p v-text="slide.text"></p>
        </div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" @click.prevent="prevSlide()">&#10094;</a>
      <a class="next" @click.prevent="nextSlide()">&#10095;</a>
    </div>
    <div class="gallery-container" v-if="isGallery">
      <div
        v-for="(slide, index) of slides" :key="index" class="column">
        <img :src="slide.link" :alt="slide.text" class="gallery" :class="{'is-active': curIdx === index}" @click="changeSlide(index)">
      </div>
    </div>
    <br>

    <!-- The dots/circles -->
    <div class="dots" v-if="showDots">
      <span v-for="(num, index) of slideLength" :key="index" class="dot" :class="{'is-active': curIdx === index}" @click="changeSlide(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  props: {
    slides: {
      type: Array,
      required: true
    },
    isGallery: Boolean,
    showDots: Boolean,
    overlapText: Boolean,
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      curIdx: this.activeIndex
    }
  },
  computed: {
    slideLength() {
      return this.slides.length
    }
  },
  watch: {
    activeIndex() {
      if (this.curIdx !== this.activeIndex) {
        this.curIdx = this.activeIndex
      }
    }
  },
  methods: {
    changeSlide(num) {
      this.curIdx = this.slideLength <= num ? 0 : num
      this.$emit('change-slide', this.curIdx)
      this.$emit('update:activeIndex', this.curIdx)
    },
    prevSlide() {
      this.changeSlide(this.curIdx > 0 ? this.curIdx - 1 : this.slideLength - 1)
    },
    nextSlide() {
      this.changeSlide(
        this.curIdx >= this.slideLength - 1 ? 0 : this.curIdx + 1
      )
    }
  }
}
</script>

<style lang="scss">
.slideshow {
  /* Slideshow container */
  .slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
  }

  /* Hide the images by default */
  .slide {
    display: none;
    flex-direction: column;

    &.is-active {
      display: flex;
    }

    img {
      width: 100%;
    }
  }

  .dots {
    text-align: center;
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }

  /* Caption text */
  .text {
    font-size: 15px;
    padding: 2px 15px;
    color: white;
    background-color: #222;
    text-align: center;

    &.is-overlapped {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0;
      color: #f2f2f2;
      background-color: unset;
    }
  }

  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  /* The dots/bullets/indicators */
  .dot {
    cursor:pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;

    &.is-active, &:hover {
      background-color: #717171;
    }
  }

  .gallery-container {
    display: flex;
    max-width: 1000px;
    overflow-y: hidden;
    overflow-x: auto;

    .column {
      max-width: 20%;
      min-width: 15%;
      height: 110px;

      .gallery {
        width: 100%;
        height: 100%;
        opacity: 0.6;
        cursor: pointer;

        &.is-active, &:hover {
          opacity: 1;
        }
      }
    }
  }

  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }
}
</style>
