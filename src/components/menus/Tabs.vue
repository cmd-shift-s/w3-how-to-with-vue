<template lang="html">
  <div class="tabs" :class="classes">
    <div class="tabs-links">
      <button class="tab-link" :class="{'is-active': isActive(link)}" v-for="link of links" @click="toggle($event, link)" :key="link" v-text="link"></button>
    </div>
    <div class="tabs-contents">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    links: {
      type: Array,
      required: true
    },
    isAnimated: Boolean,
    isExpanded: Boolean,
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['left', 'right', 'top', 'bottom'].some(_ => _ === val)
      }
    }
  },
  data() {
    return {
      currentLink: ''
    }
  },
  computed: {
    classes() {
      const cx = []

      if (this.isAnimated) {
        cx.push('is-animated')
      }

      if (this.isExpanded) {
        cx.push('is-expanded')
      }

      cx.push(`is-${this.position}`)

      return cx
    }
  },
  mounted() {
    if (this.links && this.links.length !== 0) {
      // get first button element
      const firstBtn = this.$el.querySelector('.tab-link')
      firstBtn.click()
    }
  },
  methods: {
    isActive(link) {
      return this.currentLink === link
    },
    toggle($event, link) {
      if (this.currentLink) {
        this.$el.querySelector(`#${this.currentLink}`)
          .classList.remove('is-active')
      }

      const $content = this.$el.querySelector(`#${link}`)
      $content.classList.add('is-active')

      this.currentLink = link
    }
  }
}
</script>

<style lang="scss">
.tabs {
  width: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;

  &.is-left, &.is-right {
    flex-direction: row;

    .tabs-links {
      flex-direction: column;
      min-width: 100px;
      flex: 0.3;

      .tab-link {
        text-align: left;
      }
    }
    .tabs-contents {
      flex: 1;
    }
  }

  &.is-left {
    .tabs-links {
      border-right: 1px solid #ccc;
    }
  }

  &.is-right {
    flex-direction: row-reverse;

    .tabs-links {
      border-left: 1px solid #ccc;
    }
  }

  &.is-top {
    .tabs-links {
      border-bottom: 1px solid #ccc;
    }
  }
  &.is-bottom {
    flex-direction: column-reverse;

    .tabs-links {
      // border-top: 1px solid #ccc;
    }
  }

  &.is-expanded {
    .tabs-links {
      .tab-link {
        flex: 1;
      }
    }
  }

  .tabs-links {
    display: flex;
    width: 100%;
    background-color: #f1f1f1;

    .tab-link {
      background-color: inherit;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;

      &:hover {
        background-color: #ddd;
      }

      &.is-active {
        background-color: #ccc;
      }
    }
  }

  .tabs-contents {
    .tab-content {
      display: none;
      padding: 6px 12px;
      border-top: none;

      &.is-active {
        display: block;
      }
    }
  }

  &.is-animated {
    .tab-content {
      animation: fadeEffect 1s;
    }
  }
}

@keyframes fadeEffect {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
