<template lang="html">
  <page
    title="Bottom Navigation"
    intro="a bottom navigation menu with CSS">

    <template slot="header">
    <h2 class="title">Bottom Navigation Menu</h2>
    </template>

    <sample class="bottom-navigation-page">
      <top-nav is-bottom>
        <a :class="{'is-active': link === currentLink}" v-for="link of links" @click="currentLink = link" v-text="link"></a>
      </top-nav>
      <div class="sample-contents">
        <h1>Bottom Navigation Bar</h1>
        <p>Some text some text some text.</p>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Bottom Navigation Menu</h2>
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
  name: 'bottom-navigation-page',
  data() {
    return {
      currentLink: '',
      links: [
        'Home', 'News', 'Contact', 'About'
      ],
      examples: [
        [
          '``` html',
          '<div class="navbar">',
          '  <a href="#home" class="active">Home</a>',
          '  <a href="#news">News</a>',
          '  <a href="#contact">Contact</a>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Place the navbar at the bottom of the page, and make it stick */',
          '.navbar {',
          '  background-color: #333;',
          '  overflow: hidden;',
          '  position: fixed;',
          '  bottom: 0;',
          '  width: 100%;',
          '}',
          '',
          '/* Style the links inside the navigation bar */',
          '.navbar a {',
          '  float: left;',
          '  display: block;',
          '  color: #f2f2f2;',
          '  text-align: center;',
          '  padding: 14px 16px;',
          '  text-decoration: none;',
          '  font-size: 17px;',
          '}',
          '',
          '/* Change the color of links on hover */',
          '.navbar a:hover {',
          '  background-color: #ddd;',
          '  color: black;',
          '}',
          '',
          '/* Add a color to the active/current link */',
          '.navbar a.active {',
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
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
.bottom-navigation-page {
  flex-direction: column;
  border: 3px solid #f1f1f1;
  height: 300px;
  position: relative;

  .sample-contents {
    padding: 16px 16px 0;
  }
}
</style>
