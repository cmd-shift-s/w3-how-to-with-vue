<template lang="html">
  <section class="page">
    <h1 class="title">{{title}}</h1>
    <hr>
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
    title: String,
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
