<template>
  <div id="app">

    <side-menu></side-menu>

    <div class="page">
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
html, body {
  margin: 0;
  padding: 0;
}
.page {
  margin-left: 220px;
}
.page-enter-active, .page-leave-active {
  transition: all .35s;
}
.page-enter, .page-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
