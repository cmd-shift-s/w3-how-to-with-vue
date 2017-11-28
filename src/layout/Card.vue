<template lang="html">
  <div class="card">
    <div v-if="isLoaded">
      <div v-if="page" :is="component"></div>
      <slot v-else></slot>
    </div>
    <div class="loader" v-else></div>
    <p><router-link :to="link">Learn How To</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    page: [Function, Object],
    link: {
      type: String,
      required: true
    },
    isLazy: Boolean
  },
  data() {
    return {
      isLoaded: false,
      component: {}
    }
  },
  created() {
    if (this.isLazy) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  mounted() {
    this.isLazy ? this.onScroll() : this.load()
  },
  beforeDestroy() {
    if (this.isLazy && !this.isLoaded) {
      this.unbind()
    }
  },
  methods: {
    async load() {
      if (this.page) {
        this.component = typeof this.page === 'function'
          ? await this.page().then(component => component.default)
          : this.page
      }

      this.isLoaded = true
    },
    onScroll() {
      const scopeY = window.pageYOffset + window.innerHeight
      if (scopeY - this.$el.offsetTop >= 100) {
        this.load()
        this.unbind()
      }
    },
    unbind() {
      window.removeEventListener('scroll', this.onScroll)
    }
  }
}
</script>

<style lang="scss">
.card {
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
}
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
