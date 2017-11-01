<template>
  <div id="app">

    <side-menu></side-menu>

    <div class="container">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import SideMenu from '@/layout/SideMenu.vue'

export default {
  name: 'app',
  components: {
    SideMenu
  }
}
</script>

<style lang="scss">
.container {
  margin-left: 220px;
  padding: 15px;
}
.page-enter-active, .page-leave-active {
  transition: opacity .35s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
