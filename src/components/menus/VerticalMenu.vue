<template lang="html">
  <div class="vertical-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vertical-menu'
}
</script>

<style lang="scss">
.vertical-menu {
  // width: 200px; /* Set a width if you like */
  width: 100%;

  a {
    background-color: #eee; /* Grey background color */
    color: black; /* Black text color */
    display: block; /* Make the links appear below each other */
    padding: 12px; /* Add some padding */
    text-decoration: none; /* Remove underline from links */

    &:hover {
      background-color: #ccc; /* Dark grey background on mouse-over */
    }

    &.active {
      background-color: #4CAF50; /* Add a green color to the "active/current" link */
      color: white;
    }
  }
}
</style>
