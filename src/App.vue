<template>
  <div id="app">

    <app-menu></app-menu>

    <div class="container">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
import AppMenu from '@/layout/AppMenu.vue'

export default {
  name: 'app',
  components: {
    AppMenu
  }
}
</script>

<style lang="scss">
.container {
  margin-left: 220px;
  padding: 15px;
}

@media (max-width: 768px) {
  .container {
    margin-left: 0px;
    margin-top: 45px;
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity .35s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
