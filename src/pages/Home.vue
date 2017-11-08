<template lang="html">
  <page title="W3 How To">
    <div class="card-container">
      <div class="half">
        <div class="card">
          <icon-bar></icon-bar>
          <p><router-link to="/menus/icon_bar" v-text="gotoBtn"></router-link></p>
        </div>
      </div>
      <div class="half">
        <div class="card">
          <menu-icon></menu-icon>
          <p><router-link to="/menus/menu_icon" v-text="gotoBtn"></router-link></p>
        </div>
        <div class="card">
          <accordion></accordion>
          <p><router-link to="/menus/accordion" v-text="gotoBtn"></router-link></p>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
// menus
import menus from './menus'

export default {
  name: 'home',
  computed: {
    gotoBtn() {
      return 'Learn How To'
    }
  },
  components: {
    ...menus
  }
}
</script>

<style lang="scss">
.card-container {
  width: 100%;
  display: flex;
  flex-direction: row;

  .half {
    flex: 1;
  }
}
.card {
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
  }
}
</style>
