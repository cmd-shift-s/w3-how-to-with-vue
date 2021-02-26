<template lang="html">
  <page
    title="Horizontal Scroll Menu"
    intro="a horizontal scrollable menu with CSS">
    <sample class="horizontal-scroll-menu-page">
      <top-nav>
        <a :class="{'is-active': isActive(link)}" v-for="link of links" :key="link" @click="toggle(link)" v-text="link"></a>
      </top-nav>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">How To Create a Horizontal Scrollable Menu</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    </template>
  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'
export default {
  name: 'horizontal-scroll-menu-page',
  data() {
    return {
      currentLink: '',
      links: [
        'Home',
        'News',
        'Contact',
        'About',
        'Support',
        'Blog',
        'Custom',
        'More',
        'Logo',
        'Friends',
        'Partners',
        'Poeple',
        'Work'
      ],
      examples: [
        [
          '``` html',
          '<div class="scrollmenu">',
          '  <a href="#home">Home</a>',
          '  <a href="#news">News</a>',
          '  <a href="#contact">Contact</a>',
          '  <a href="#about">About</a>',
          '  ...',
          '</div>',
          '```'
        ],
        [
          '``` css',
          'div.scrollmenu {',
          '  background-color: #333;',
          '  overflow: auto;',
          '  white-space: nowrap;',
          '}',
          '',
          'div.scrollmenu a {',
          '  display: inline-block;',
          '  color: white;',
          '  text-align: center;',
          '  padding: 14px;',
          '  text-decoration: none;',
          '}',
          '',
          'div.scrollmenu a:hover {',
          '  background-color: #777;',
          '}',
          '```'
        ]
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
.horizontal-scroll-menu-page {
  max-width: 500px;
  margin: 0 auto;
}
</style>
