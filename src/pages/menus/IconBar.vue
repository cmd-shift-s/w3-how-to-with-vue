<template lang="html">
  <page title="Icon Bar">
    <div class="sample">
      <div>
        <p>Vertical:</p>
        <icon-bar is-vertical>
          <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
            <i class="fa" :class="`fa-${menu}`"></i>
          </a>
        </icon-bar>
      </div>

      <div>
        <p>Horizontal:</p>
        <icon-bar>
          <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
            <i class="fa" :class="`fa-${menu}`"></i>
          </a>
        </icon-bar>
      </div>
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

<style lang="scss" scoped>
.sample {
  display: flex;
  width: 100%;

  div:nth-child(1) { flex: 1 }
  div:nth-child(2) { flex: 2 }
}
</style>
