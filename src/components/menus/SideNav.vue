<template lang="html">
  <div class="side-nav" :class="{'is-animated': isAnimated, 'has-text-centered': textCenter}">
    <div class="menus">
      <slot></slot>
      <a class="close-btn" @click="close()">&times;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-nav',
  props: {
    active: Boolean,
    isAnimated: Boolean,
    pushContent: Boolean,
    isDimmed: Boolean,
    textCenter: Boolean,
    selector: String,
    direction: {
      type: String,
      default: 'right',
      validator(val) {
        return ['right', 'down'].some(_ => _ === val)
      }
    },
    width: {
      type: String,
      default: '250px',
      validator(val) {
        return /^\d+(px|%)$/.test(val)
      }
    }
  },
  data() {
    return {
      contentMarginLeft: ''
    }
  },
  computed: {
    '$content'() {
      return this.selector
        ? document.querySelector(this.selector)
        : this.$el.parentElement
    },
    isGoToRight() {
      return this.direction === 'right'
    }
  },
  mounted() {
    if (this.isGoToRight) {
      this.$el.style.height = '100%'
    } else {
      this.$el.style.width = this.width
    }

    if (this.pushContent) {
      if (this.isAnimated) {
        this.$content.classList.add('pushable') // for animation
      }
      this.contentMarginLeft = this.$content.style.marginLeft
    }

    if (this.isDimmed) {
      const dim = document.createElement('div')
      dim.classList.add('dimmable')
      dim.addEventListener('click', this.close)
      document.body.appendChild(dim)
      this.dim = dim
    }
  },
  beforeDestroy() {
    if (this.dim) {
      this.dim.remove()
    }
  },
  watch: {
    active(isActive) {
      if (isActive) {
        if (this.isGoToRight) {
          this.$el.style.width = this.width
        } else {
          this.$el.style.height = '100%'
        }

        if (this.pushContent) {
          this.$content.style.marginLeft = this.width
        }

        if (this.isDimmed) {
          this.dim.classList.add('dimmed')
        }
      } else {
        if (this.isGoToRight) {
          this.$el.style.width = '0'
        } else {
          this.$el.style.height = '0'
        }

        if (this.pushContent) {
          this.$content.style.marginLeft = this.contentMarginLeft
        }

        if (this.isDimmed) {
          this.dim.classList.remove('dimmed')
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
      this.$emit('update:active', false)
    }
  }
}
</script>

<style lang="scss">
.side-nav {
  height: 0; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 2; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */

  &.is-animated {
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  &.has-text-centered {
    text-align: center;
  }

  .menus {
    padding-top: 60px; /* Place content 60px from the top */
  }

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    cursor: pointer;
    display: block;
    transition: 0.3s;

    &:hover {
      color: #f1f1f1;
    }
  }

  .close-btn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
}
.pushable {
  transition: margin-left .5s;
}
.dimmable {
  width: 0;
  height: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  transition: opacity 1s;
  opacity: 0;
}
.dimmed {
  width: 100%;
  opacity: 0.8;
}
</style>
