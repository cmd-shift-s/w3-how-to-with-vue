<template lang="html">
  <section class="page">
    <h1 class="title" v-if="isShowExample"><span>How TO - </span>{{title}}</h1>
    <h2 v-else>{{title}}</h2>

    <template v-if="isShowExample">
    <hr>
    <p>Learn how to create {{intro}}.</p>
    <hr>
    <slot name="header"></slot>
    </template>

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
