<template lang="html">
  <section class="page">
    <h1 class="title">{{title}}</h1>
    <hr>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: String
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
