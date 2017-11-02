<template lang="html">
  <page title="W3 How To">
    <div class="cards">
      <div class="card">
        <icon-bar></icon-bar>
        <p><router-link to="/menus/icon_bar" v-text="gotoBtn"></router-link></p>
      </div>
    </div>
  </page>
</template>

<script>
// menus
import IconBar from './menus/IconBar.vue'

export default {
  name: 'home',
  computed: {
    gotoBtn() {
      return 'Learn How To'
    }
  },
  components: {
    IconBar
  }
}
</script>

<style lang="scss">
.cards {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.card {
  width: calc(50% - 40px);
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
