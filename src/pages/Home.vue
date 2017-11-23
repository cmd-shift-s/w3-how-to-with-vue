<template lang="html">
  <page title="W3 How To">
    <div class="card-container">
      <div class="half">
        <card link="/menus/icon-bar">
          <icon-bar></icon-bar>
        </card>
        <card link="/menus/tabs">
          <tabs></tabs>
        </card>
        <card link="/menus/vertical-tabs">
          <vertical-tabs></vertical-tabs>
        </card>
        <card link="/menus/tab-headers">
          <tab-headers></tab-headers>
        </card>
        <card link="/menus/horizontal-scroll-menu">
          <horizontal-scroll-menu></horizontal-scroll-menu>
        </card>
        <card link="/menus/vertical-menu">
          <vertical-menu></vertical-menu>
        </card>
        <card link="/menus/responsive-bottom-navigation">
          <responsive-bottom-navigation></responsive-bottom-navigation>
        </card>
        <card link="/menus/bottom-border-nav-links">
          <bottom-border-nav-links></bottom-border-nav-links>
        </card>
      </div>
      <div class="half">
        <card link="/menus/menu-icon">
          <menu-icon></menu-icon>
        </card>
        <card link="/menus/accordion">
          <accordion></accordion>
        </card>
        <card link="/menus/top-navigation">
          <top-navigation></top-navigation>
        </card>
        <card link="/menus/responsive-topnav">
          <responsive-topnav></responsive-topnav>
        </card>
        <card link="/menus/side-navigation">
          <side-navigation></side-navigation>
        </card>
        <card link="/menus/fullscreen-navigation">
          <fullscreen-navigation></fullscreen-navigation>
        </card>
        <card link="/menus/hoverable-sidenav">
          <hoverable-sidenav></hoverable-sidenav>
        </card>
        <card link="/menus/off-canvas-menu">
          <off-canvas-menu></off-canvas-menu>
        </card>
        <card link="/menus/bottom-navigation">
          <bottom-navigation></bottom-navigation>
        </card>
      </div>
    </div>
  </page>
</template>

<script>
import Card from '../layout/Card.vue'
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
    Card,
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
    overflow: auto;
  }
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
  }
}
</style>
