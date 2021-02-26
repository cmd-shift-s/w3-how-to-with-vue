<template>
  <div v-if="showExamples">
    <router-view></router-view>
  </div>
  <div id="app" v-else>
    <app-menu></app-menu>

    <div class="container">
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import AppMenu from '@/layout/AppMenu.vue'

@Component({
  components: {
    AppMenu
  }
})
export default class App extends Vue {
  @Prop() private msg!: string;

  get showExamples() {
    return location.hash.startsWith('#/examples')
  }
}
</script>

<style lang="scss">
.container {
  margin-left: 220px;
  padding: 15px;
}

@media (max-width: 1080px) {
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
