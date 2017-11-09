<template lang="html">
  <div class="tabs" :class="{'is-animated': isAnimated}">
    <div class="tabs-links">
      <button class="tab-link" :class="{'is-active': currentIndex === index}" v-for="(link, index) of links" @click="toggle($event, link, index)" :key="index" v-text="link"></button>
    </div>

    <slot></slot>

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
    isAnimated: Boolean
  },
  data() {
    return {
      currentIndex: 0,
      currentContentEl: null
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
    toggle($event, link, index) {
      if (this.currentContentEl) {
        // TODO 이전에 선택된 버튼의 is-active 제거
        this.currentContentEl.classList.remove('is-active')
      }

      $event.target.classList.add('is-active')

      const content = document.getElementById(link)
      content.classList.add('is-active')

      this.currentContentEl = content
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss">
.tabs {
  width: 100%;
  overflow: hidden;
  border: 1px solid #ccc;

  .tabs-links {
    display: flex;
    width: 100%;
    background-color: #f1f1f1;
    border-bottom: 1px solid #ccc;

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

  .tab-content {
    display: none;
    padding: 6px 12px;
    border-top: none;

    &.is-active {
      display: block;
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
