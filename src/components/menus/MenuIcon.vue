<template>
  <div class="menu-icon" :class="{'is-anime': isAnimated}" @click="toggleIcon()">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
/**
 * MenuIcon Component
 */
export default {
  name: 'menu-icon',
  props: {
    isAnimated: Boolean // 애니메이션 효과
  },
  methods: {
    toggleIcon() {
      if (this.isAnimated) {
        this.$el.classList.toggle('change')
      }
    }
  }
}
</script>

<style lang="scss">
.menu-icon {
    display: inline-block;

    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }

    &.is-anime {
      cursor: pointer;
    }

    &.change {
      /* Rotate first bar */
      .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
        transform: rotate(-45deg) translate(-9px, 6px) ;
      }

      /* Fade out the second bar */
      .bar2 {
        opacity: 0;
      }

      /* Rotate last bar */
      .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
        transform: rotate(45deg) translate(-8px, -8px) ;
      }
    }
}
</style>
