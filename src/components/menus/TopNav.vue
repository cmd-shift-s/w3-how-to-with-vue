<template lang="html">
  <nav class="top-nav" :class="classes">
    <slot></slot>

    <a v-if="isResponsive" class="toggle-menu" @click="toggleMenu()">&#9776;</a>
  </nav>
</template>

<script>
export default {
  name: 'top-nav',
  props: {
    isResponsive: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    classes() {
      const cx = []
      if (this.isResponsive) cx.push('is-responsive')
      if (this.isActive) cx.push('is-active')
      return cx
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.top-nav {
  width: 100%;
  background-color: #333;
  overflow: auto;
  display: flex;

  &.is-responsive {
    display: block;

    a {
      float: left;
    }
  }

  a {
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
      color: black;
    }

    &.is-active {
      background-color: #4CAF50;
      color: white;
    }

    &.toggle-menu {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .top-nav {
     &.is-responsive {
      a:not(.is-active) {display: none;}
      .toggle-menu {
        float: right;
        display: block !important;
      }

      &.is-active {
        position: relative;

        .toggle-menu {
          position: absolute;
          right: 0;
          top: 0;
        }
        a {
          float: none;
          display: block;
          text-align: left;
        }
      }
    }
  }
}
</style>
