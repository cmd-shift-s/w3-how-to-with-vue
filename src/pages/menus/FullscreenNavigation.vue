<template>
  <page
    title="Full screen Overlay Navigation"
    intro="a full screen overlay navigation menu">
    <side-nav
      :active.sync="samples[0].isActive"
      width="100%" direction="right" is-animated text-center>
      <a v-for="link of links" :key="link" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[1].isActive"
      width="100%" direction="down" is-animated text-center>
      <a v-for="link of links" :key="link" v-text="link"></a></side-nav>
    <side-nav
      :active.sync="samples[2].isActive"
      width="100%" text-center>
      <a v-for="link of links" :key="link" v-text="link"></a>
    </side-nav>
    <sample class="fullscreen-navigation-page">
      <button @click="toggle(samples[0])" class="w3-btn">Slide Right</button>
      <button @click="toggle(samples[1])" class="w3-btn">Slide Down</button>
      <button @click="toggle(samples[2])" class="w3-btn">Show (No animation)</button>
    </sample>
  </page>
</template>

<script>
import SideNav from '@/components/menus/SideNav.vue'
export default {
  name: 'fullscreen-navigation-page',
  data() {
    return {
      samples: [{ isActive: false }, { isActive: false }, { isActive: false }],
      links: ['About', 'Services', 'Clients', 'Contact']
    }
  },
  methods: {
    toggle(sample) {
      sample.isActive = true
    }
  },
  components: {
    SideNav
  }
}
</script>

<style lang="scss">
.fullscreen-navigation-page {
  .w3-btn {
    margin: 10px;
  }
}
</style>
