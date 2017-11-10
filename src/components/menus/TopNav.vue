<template lang="html">
  <nav class="top-nav">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>

<style lang="scss">
.top-nav {
  width: 100%;
  background-color: #333;
  overflow: hidden;

  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
      color: black;
    }

    &.is-active {
      background-color: #4CAF50;
      color: white;
    }
  }
}
</style>
