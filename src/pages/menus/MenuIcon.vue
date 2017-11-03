<template lang="html">
  <page title="Menu Icon">
    <div class="sample">
      <div>
        <p>Menu Icon:</p>
        <menu-icon></menu-icon>
      </div>
      <div>
        <p>Animated Menu Icon (click on it):</p>
        <menu-icon is-animated></menu-icon>
      </div>
    </div>
  </page>
</template>

<script>
import MenuIcon from '@/components/menus/MenuIcon.vue'
export default {
  name: 'menu-icon-page',
  components: {
    MenuIcon
  }
}
</script>

<style lang="scss" scoped>
.sample {
  display: flex;
  width: 100%;

  div {
    flex: 1;
    text-align: center;
  }
}
</style>
