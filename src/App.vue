<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
.page-enter-active, .page-leave-active {
  transition: all .35s;
}
.page-enter, .page-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
