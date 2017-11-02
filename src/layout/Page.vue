<template lang="html">
  <section class="page">
    <h1 class="title">{{title}}</h1>
    <hr>
    <div class="contents">
      <slot></slot>
    </div>
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
  .contents {
    display: flex;
    width: 100%;
  }
}
</style>
