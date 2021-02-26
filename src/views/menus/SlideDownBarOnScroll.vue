<template lang="html">
  <page
    title="Slide Down a Bar on Scroll"
    intro="slide down a navigation bar on scroll with CSS and JavaScript">

    <sample class="slide-down-bar-on-scroll-page">
      <top-nav :class="{'is-active': isActive}">
        <a :class="{'is-active': link === currentLink}" v-for="link of links" :key="link" @click="currentLink = link" v-text="link"></a>
      </top-nav>
      <div class="sample-contents">
        <h1>This example demonstrates how to slide down a navbar when the user starts to scroll the page.</h1>
        <h2>Scroll down this frame to see the effect!</h2>
        <h2>Scroll to the top to hide the navbar.</h2>
        <h2>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">How To Slide Down a Bar</h2>
    <step no="1" html></step>
    <p>Create a navigation bar:</p>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <p>Style the navigation bar:</p>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
    </template>

  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'

export default {
  name: 'slide-down-bar-on-scroll-page',
  data() {
    return {
      isActive: false,
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
          '```'
        ],
        [
          '``` css',
          '#navbar {',
          '  background-color: #333; /* Black background color */',
          '  position: fixed; /* Make it stick/fixed */',
          '  top: -50px; /* Hide the navbar 50 px outside of the top view */',
          '  width: 100%; /* Full width */',
          '  transition: top 0.3s; /* Transition effect when sliding down (and up) */',
          '}',
          '',
          '/* Style the navbar links */',
          '#navbar a {',
          '  float: left;',
          '  display: block;',
          '  color: white;',
          '  text-align: center;',
          '  padding: 15px;',
          '  text-decoration: none;',
          '}',
          '',
          '#navbar a:hover {',
          '  background-color: #ddd;',
          '  color: black;',
          '}',
          '```'
        ],
        [
          '``` js',
          '// When the user scrolls down 20px from the top of the document, slide down the navbar',
          '// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)',
          'window.onscroll = function() {scrollFunction()};',
          '',
          'function scrollFunction() {',
          '  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {',
          '    document.getElementById("navbar").style.top = "0";',
          '  } else {',
          '    document.getElementById("navbar").style.top = "-50px";',
          '  }',
          '}',
          '```'
        ]
      ]
    }
  },
  mounted() {
    this.currentLink = this.links[0]
    this.$el
      .querySelector('.sample-contents')
      .addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    this.$el
      .querySelector('.sample-contents')
      .removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll($event) {
      this.isActive = $event.target.scrollTop > 20
    }
  },
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
.slide-down-bar-on-scroll-page {
  flex-direction: column;
  border: 1px solid #f1f1f1;
  position: relative;
  overflow: hidden;

  .top-nav {
    position: absolute;
    transition: top .35s;
    top: -55px;

    &.is-active {
      top: 0;
    }
  }

  .sample-contents {
    padding: 15px;
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>
