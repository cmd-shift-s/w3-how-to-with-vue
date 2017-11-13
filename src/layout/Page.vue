<template lang="html">
  <section class="page">
    <h1 class="title"><span v-if="isShowExample">How TO - </span>{{title}}</h1>
    <hr>

    <div class="intro" v-if="isShowExample">
      <p>Learn how to create {{intro}}.</p>
      <hr>
    </div>

    <slot></slot>
    
    <div class="examples" v-if="isShowExample">
      <slot name="examples"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    intro: String
  },
  computed: {
    isShowExample() {
      return this.$route.path !== '/'
    }
  }
}
</script>

<style lang="scss">
.page {
  .title {
    font-weight: 400;
    margin: 10px 0;
  }
}
</style>
