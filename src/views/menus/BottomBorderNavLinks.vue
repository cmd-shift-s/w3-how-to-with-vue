<template lang="html">
  <page
    title="Bottom Border Nav Links"
    intro="bottom bordered navigation links with CSS">

    <template slot="header">
    <h2 class="title">Bottom Border Nav Links</h2>
    </template>

    <sample class="bottom-border-nav-links-page">
      <top-nav>
        <a :class="{'is-active': link === currentLink}" v-for="link of links" :key="link" @click="currentLink = link" v-text="link"></a>
      </top-nav>
      <div class="sample-contents">
        <h2>Border Links</h2>
        <p>Hover over the links.</p>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Navigation Menu</h2>
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
  name: 'bottom-border-nav-links-page',
  data() {
    return {
      currentLink: '',
      links: ['Home', 'News', 'Contact'],
      examples: [
        [
          '``` html',
          '<div class="topnav">',
          '  <a href="#home" class="active">Home</a>',
          '  <a href="#news">News</a>',
          '  <a href="#contact">Contact</a>',
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
          '  display: block;',
          '  color: #f2f2f2;',
          '  text-align: center;',
          '  padding: 14px 16px;',
          '  text-decoration: none;',
          '  font-size: 17px;',
          '  border-bottom: 3px solid transparent;',
          '}',
          '',
          '.topnav a:hover {',
          '  border-bottom: 3px solid red;',
          '}',
          '',
          '.topnav a.active {',
          '  border-bottom: 3px solid red;',
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
.bottom-border-nav-links-page {
  flex-direction: column;
  border: 1px solid #f1f1f1;

  .top-nav {
    background-color: #f1f1f1;

    a {
      color: #333;

      &:hover {
        border-bottom: 3px solid red;
      }
      &.is-active {
        background-color: inherit;
        border-bottom: 3px solid red;
      }
    }
  }

  .sample-contents {
    padding: 15px;
  }
}
</style>
