<template lang="html">
  <page
    title="Responsive Top Navigation"
    intro="a responsive top navigation menu with CSS and JavaScript">
    <sample>
      <top-nav is-responsive>
        <a :class="{'is-active': isActive(link)}" v-for="link of links" @click="toggle(link)" v-text="link"></a>
      </top-nav>
    </sample>
  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'

export default {
  name: 'responsive-top-navigation-page',
  data() {
    return {
      currentLink: '',
      links: [
        'Home', 'News', 'Contact', 'About'
      ]
    }
  },
  mounted() {
    this.currentLink = this.links[0]
  },
  methods: {
    isActive(link) {
      return this.currentLink === link
    },
    toggle(link) {
      this.currentLink = link
    }
  },
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
</style>
