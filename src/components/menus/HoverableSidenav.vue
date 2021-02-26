<template lang="html">
  <div class="hoverable-sidenav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hoverable-sidenav'
}
</script>

<style lang="scss">
/* Style the links inside the sidenav */
.hoverable-sidenav {
  display: flex;
  flex-direction: column;
  // overflow: hidden;

  a {
    position: relative; /* Position them relative to the browser window */
    left: 0; /* Position them outside of the screen */
    transition: 0.3s; /* Add transition on hover */
    padding: 15px; /* 15px padding */
    margin: 5px 0;
    margin-left: -90px;
    width: 100px; /* Set a specific width */
    text-decoration: none; /* Remove underline */
    font-size: 20px; /* Increase font size */
    color: white; /* White text color */
    border-radius: 0 5px 5px 0; /* Rounded corners on the top right and bottom right side */

    &:hover {
      left: 80px;
    }
  }
}
</style>
