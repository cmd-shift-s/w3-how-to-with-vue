<template lang="html">
  <page
    title="Responsive Bottom Navigation"
    intro="a responsive bottom navigation menu with CSS and JavaScript">

    <template slot="header">
    <h2 class="title">Responsive Bottom Navigation</h2>
    <p><b>Resize</b> the browser window to see how the responsive navigation menu works:</p>
    </template>

    <sample class="responsive-bottom-navigation-page">
      <top-nav is-responsive is-bottom>
        <a :class="{'is-active': link === currentLink}" v-for="link of links" @click="currentLink = link" v-text="link"></a>
      </top-nav>
      <div class="sample-contents">
        <h1>Responsive Bottom Navbar Example</h1>
        <p>Resize the browser window to see how it works.</p>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Responsive Bottom Navbar</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <p>The link with class="icon" is used to open and close the navbar on small screens.</p>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <p>Add media queries:</p>
    <example-code :code="examples[2]"></example-code>
    <hr>
    <step no="3" js></step>
    <example-code :code="examples[3]"></example-code>
    </template>

  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'

export default {
  name: 'responsive-bottom-navigation-page',
  data() {
    return {
      currentLink: '',
      links: ['Home', 'News', 'Contact', 'About'],
      examples: [
        [
          '``` html',
          '<div class="navbar" id="myNavbar">',
          '  <a href="#home">Home</a>',
          '  <a href="#news">News</a>',
          '  <a href="#contact">Contact</a>',
          '  <a href="#about">About</a>',
          '  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>',
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
          '/* Add a green background color to the active link */',
          '.navbar a.active {',
          '  background-color: #4CAF50;',
          '  color: white;',
          '}',
          '',
          '/* Hide the link that should open and close the navbar on small screens */',
          '.navbar .icon {',
          '  display: none;',
          '}',
          '```'
        ],
        [
          '``` css',
          '/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the navbar (.icon) */',
          '@media screen and (max-width: 600px) {',
          '  .navbar a:not(:first-child) {display: none;}',
          '  .navbar a.icon {',
          '    float: right;',
          '    display: block;',
          '  }',
          '}',
          '',
          '/* The "responsive" class is added to the navbar with JavaScript when the user clicks on the icon. This class makes the navbar look good on small screens (display the links vertically instead of horizontally) */',
          '@media screen and (max-width: 600px) {',
          '  .navbar.responsive a.icon {',
          '    position: absolute;',
          '    right: 0;',
          '    bottom: 0;',
          '  }',
          '  .navbar.responsive a {',
          '    float: none;',
          '    display: block;',
          '    text-align: left;',
          '  }',
          '}',
          '```'
        ],
        [
          '``` js',
          '/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */',
          'function myFunction() {',
          '  var x = document.getElementById("myNavbar");',
          '  if (x.className === "navbar") {',
          '    x.className += " responsive";',
          '  } else {',
          '    x.className = "navbar";',
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
  components: {
    TopNav
  }
}
</script>

<style lang="scss">
.responsive-bottom-navigation-page {
  border: 3px solid #f1f1f1;
  height: 300px;
  position: relative;
  flex-direction: column;

  .sample-contents {
    padding: 16px 16px 0;
    // height: calc(100% - 60px);
  }
}

</style>
