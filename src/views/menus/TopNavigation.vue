<template lang="html">
  <page
    title="Top Navigation"
    intro="a top navigation bar with CSS">
    <sample>
      <top-nav>
        <a :class="{'is-active': isActive(link)}" v-for="link of links" :key="link" @click="toggle(link)" v-text="link"></a>
      </top-nav>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Top Navigation Bar</h2>
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
  name: 'top-navigation-page',
  data() {
    return {
      currentLink: '',
      links: ['Home', 'News', 'Contact', 'About'],
      examples: [
        [
          '``` html',
          '<div class="topnav" id="myTopnav">',
          '  <a class="active" href="#home">Home</a>',
          '  <a href="#news">News</a>',
          '  <a href="#contact">Contact</a>',
          '  <a href="#about">About</a>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Add a black background color to the top navigation */',
          '.topnav {',
          '  background-color: #333;',
          '  overflow: hidden;',
          '}',
          '',
          '/* Style the links inside the navigation bar */',
          '.topnav a {',
          '  float: left;',
          '  color: #f2f2f2;',
          '  text-align: center;',
          '  padding: 14px 16px;',
          '  text-decoration: none;',
          '  font-size: 17px;',
          '}',
          '',
          '/* Change the color of links on hover */',
          '.topnav a:hover {',
          '  background-color: #ddd;',
          '  color: black;',
          '}',
          '',
          '/* Add a color to the active/current link */',
          '.topnav a.active {',
          '  background-color: #4CAF50;',
          '  color: white;',
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
</style>
