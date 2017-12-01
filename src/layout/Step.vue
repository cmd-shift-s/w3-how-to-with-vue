<template lang="html">
  <div class="step">
    <h5>
      Step {{no}}) {{type}}:
    </h5>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'step',
  props: {
    no: {
      type: String,
      required: true
    },
    html: Boolean,
    css: Boolean,
    js: Boolean,
    title: String
  },
  computed: {
    type() {
      switch (true) {
        case this.html:
          return 'Add HTML'
        case this.css:
          return 'Add CSS'
        case this.js:
          return 'Add JavaScript'
        default:
          return this.title
      }
    }
  }
}
</script>

<style lang="css">
</style>
