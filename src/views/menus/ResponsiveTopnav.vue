<template lang="html">
  <page
    title="Responsive Top Navigation"
    intro="a responsive top navigation menu with CSS and JavaScript">

    <template slot="header">
    <h2>Responsive Navigation Bar</h2>
    <p><b>Resize</b> the browser window to see how the responsive navigation menu works:</p>
    </template>

    <sample>
      <top-nav is-responsive>
        <a :class="{'is-active': isActive(link)}" v-for="link of links" :key="link" @click="toggle(link)" v-text="link"></a>
      </top-nav>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Responsive Topnav</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <p>The link with class="icon" is used to open and close the topnav on small screens.</p>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <p>Add media queries:</p>
    <example-code :code="examples[2]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[3]"></example-code>
    </template>
  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'

export default {
  name: 'responsive-top-navigation-page',
  data() {
    return {
      currentLink: '',
      links: ['Home', 'News', 'Contact', 'About'],
      examples: [
        [
          '``` html',
          '<div class="topnav" id="myTopnav">',
          '  <a href="#home" class="active">Home</a>',
          '  <a href="#news">News</a>',
          '  <a href="#contact">Contact</a>',
          '  <a href="#about">About</a>',
          '  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>',
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
          '}',
          '',
          '/* Change the color of links on hover */',
          '.topnav a:hover {',
          '  background-color: #ddd;',
          '  color: black;',
          '}',
          '',
          '/* Add an active class to highlight the current page */',
          '.active {',
          '  background-color: #4CAF50;',
          '  color: white;',
          '}',
          '',
          '/* Hide the link that should open and close the topnav on small screens */',
          '.topnav .icon {',
          '  display: none;',
          '}',
          '```'
        ],
        [
          '``` css',
          '/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */',
          '@media screen and (max-width: 600px) {',
          '  .topnav a:not(:first-child) {display: none;}',
          '  .topnav a.icon {',
          '    float: right;',
          '    display: block;',
          '  }',
          '}',
          '',
          '/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */',
          '@media screen and (max-width: 600px) {',
          '  .topnav.responsive {position: relative;}',
          '  .topnav.responsive a.icon {',
          '    position: absolute;',
          '    right: 0;',
          '    top: 0;',
          '  }',
          '  .topnav.responsive a {',
          '    float: none;',
          '    display: block;',
          '    text-align: left;',
          '  }',
          '}',
          '```'
        ],
        [
          '``` js',
          '/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */',
          'function myFunction() {',
          '  var x = document.getElementById("myTopnav");',
          '  if (x.className === "topnav") {',
          '    x.className += " responsive";',
          '  } else {',
          '    x.className = "topnav";',
          '  }',
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
