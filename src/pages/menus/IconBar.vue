<template lang="html">
  <page>
    <div class="flex1">
      <p>Vertical:</p>
      <icon-bar is-vertical>
        <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
          <i class="fa" :class="`fa-${menu}`"></i>
        </a>
      </icon-bar>
    </div>

    <div class="flex2">
      <p>Horizontal:</p>
      <icon-bar>
        <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
          <i class="fa" :class="`fa-${menu}`"></i>
        </a>
      </icon-bar>
    </div>
  </page>
</template>

<script>
import IconBar from '@/components/menus/IconBar.vue'
export default {
  name: 'icon-bar-page',
  data() {
    return {
      menus: ['home', 'search', 'envelope', 'globe', 'trash'],
      pos: 0
    }
  },
  components: {
    IconBar
  }
}
</script>

<style lang="scss">
</style>
