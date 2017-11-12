<template lang="html">
  <div class="card">
    <slot></slot>
    <p><router-link :to="link">Learn How To</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    link: {
      type: String,
      required: true
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
</style>
