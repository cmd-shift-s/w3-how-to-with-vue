<template lang="html">
  <page
    title="Fixed Menu"
    :intro="intro">

    <sample class="fixed-menu-page">
      <top-nav>
        <a :class="{'is-active': link === currentLink}" v-for="link of links" @click="currentLink = link" v-text="link"></a>
      </top-nav>
      <div class="sample-contents">
        <h1>Fixed Top Menu</h1>
        <h2>Scroll this page to see the effect</h2>
        <h2>The navigation bar will stay at the top of the page while scrolling</h2>
        <p v-for="i of 20">Some text some text some text some text..</p>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">How To Create a Fixed Top Menu</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <p>To create a fixed top menu, use <code>position:fixed</code> and <code>top:0</code>. Note that the fixed menu will overlay your other content. To fix this, add a <code>margin-top</code> (to the content) that is equal or larger than the height of your menu.</p>
    <example-code :code="examples[1]"></example-code>
    <hr>
    <h2 class="title">How To Create a Fixed Bottom Menu</h2>
    <p>To create a fixed bottom menu, use <code>position:fixed</code> and <code>bottom:0</code>:</p>
    <example-code :code="examples[2]"></example-code>
    </template>

  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'

export default {
  name: 'fixed-menu-page',
  data() {
    return {
      intro: 'a "fixed" menu with CSS',
      currentLink: '',
      links: ['Home', 'News', 'Contact'],
      examples: [
        [
          '``` html',
          '<div class="navnav">',
          '  <a href="#home" class="active">Home</a>',
          '  <a href="#news">News</a>',
          '  <a href="#contact">Contact</a>',
          '</div>',
          '',
          '<div class="main">',
          '  <p>Some text some text some text some text..</p>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* The navigation bar */',
          '.navbar {',
          '  overflow: hidden;',
          '  background-color: #333;',
          '  position: fixed; /* Set the navbar to fixed position */',
          '  top: 0; /* Position the navbar at the top of the page */',
          '  width: 100%; /* Full width */',
          '}',
          '',
          '/* Links inside the navbar */',
          '.navbar a {',
          '  float: left;',
          '  display: block;',
          '  color: #f2f2f2;',
          '  text-align: center;',
          '  padding: 14px 16px;',
          '  text-decoration: none;',
          '}',
          '',
          '/* Main content */',
          '.main {',
          '  margin-top: 30px; /* Add a top margin to avoid content overlay */',
          '}',
          '```'
        ],
        [
          '``` css',
          '/* The navigation bar */',
          '.navbar {',
          '  position: fixed; /* Set the navbar to fixed position */',
          '  bottom: 0; /* Position the navbar at the bottom of the page */',
          '  width: 100%; /* Full width */',
          '}',
          '',
          '/* Main content */',
          '.main {',
          '  margin-bottom: 30px; /* Add a bottom margin to avoid content overlay */',
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
.fixed-menu-page {
  flex-direction: column;
  border: 1px solid #f1f1f1;
  position: relative;

  .top-nav {
    position: absolute;
  }

  .sample-contents {
    margin-top: 50px;
    padding: 15px;
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>
