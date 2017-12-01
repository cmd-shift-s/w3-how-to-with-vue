<template lang="html">
  <page
    title="Side Navigation"
    intro="an animated, closable side navigation menu">
    <side-nav
      :active.sync="samples[0].isActive"
      selector=".container"
      is-animated>
      <a v-for="link of links" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[1].isActive"
      selector=".container">
      <a v-for="link of links" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[2].isActive"
      selector=".container"
      is-animated push-content>
      <a v-for="link of links" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[3].isActive"
      selector=".container"
      is-animated push-content is-dimmed>
      <a v-for="link of links" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[4].isActive"
      selector=".container"
      is-animated width="100%" text-center>
      <a v-for="link of links" v-text="link"></a>
    </side-nav>
    <sample class="side-navigation-page">
      <button @click="toggle(samples[0])" class="w3-btn">Sidenav overlay</button>
      <button @click="toggle(samples[1])" class="w3-btn">Sidenav overlay without animation</button>
      <button @click="toggle(samples[2])" class="w3-btn">Sidenav push (off-canvas)</button>
      <button @click="toggle(samples[3])" class="w3-btn">Sidenav push w/opacity</button>
      <button @click="toggle(samples[4])" class="w3-btn">Sidenav full-width</button>
    </sample>
  </page>
</template>

<script>
import SideNav from '@/components/menus/SideNav.vue'
export default {
  name: 'side-navigation-page',
  data() {
    return {
      samples: [
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false }
      ],
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
.side-navigation-page {
  display: block !important;

  button {
    display: block;
  }
}
</style>
