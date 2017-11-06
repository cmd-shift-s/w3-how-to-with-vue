<template lang="html">
  <section class="page">
    <h1 class="title"><span v-if="isShowExample">How TO - </span>{{title}}</h1>
    <hr>

    <div class="intro" v-if="isShowExample">
      <p>Learn how to create {{intro}}.</p>
      <hr>
    </div>

    <slot></slot>

    <div v-if="isShowExample">
      <example v-for="(exam, index) of examples" :key="index"
        :title="exam.title"
        :subtitle="exam.subtitle"
        :step="exam.step"
        :name="exam.name"
        :code="exam.code"
        :hide-hr="exam.hide_hr"
        :explained="exam.explained"
      ></example>
    </div>
  </section>
</template>

<script>
import Example from './Example.vue'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    intro: {
      type: String,
      required: true
    },
    examples: Array
  },
  computed: {
    isShowExample() {
      return this.$route.path !== '/'
    }
  },
  components: {
    Example
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
