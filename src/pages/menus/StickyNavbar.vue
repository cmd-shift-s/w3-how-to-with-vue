<template lang="html">
  <page
    title="Sticky/Affix Navbar"
    :intro="intro">
    <sample class="sticky-navbar-page">
      <iframe src="pages/menus/sticky-navbar.html" frameborder="0"></iframe>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">How To Create a Sticky Navbar</h2>
    <step no="1" html></step>
    <p>Create a navigation bar:</p>
    <example-code :code="examples[0]"></example-code>
    <hr>
    <step no="2" css></step>
    <p>Style the navigation bar:</p>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
    </template>

  </page>
</template>

<script>
export default {
  name: 'sticky-navbar-page',
  data() {
    return {
      intro: 'a "sticky" navbar with CSS and JavaScript',
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
          '/* Style the navbar */',
          '#navbar {',
          '  overflow: hidden;',
          '  background-color: #333;',
          '}',
          '',
          '/* Navbar links */',
          '#navbar a {',
          '  float: left;',
          '  display: block;',
          '  color: #f2f2f2;',
          '  text-align: center;',
          '  padding: 14px;',
          '  text-decoration: none;',
          '}',
          '',
          '/* Page content */',
          '.content {',
          '  padding: 16px;',
          '}',
          '',
          '/* The sticky class is added to the navbar with JS when it reaches its scroll position */',
          '.sticky {',
          '  position: fixed;',
          '  top: 0;',
          '  width: 100%',
          '}',
          '',
          '/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */',
          '.sticky + .content {',
          '  padding-top: 60px;',
          '}',
          '```'
        ],
        [
          '``` js',
          '// Get the navbar',
          'var navbar = document.getElementById("navbar");',
          '',
          '// Get the offset position of the navbar',
          'var sticky = navbar.offsetTop;',
          '',
          '// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position',
          'function myFunction() {',
          '  if (window.pageYOffset >= sticky) {',
          '    navbar.classList.add("sticky")',
          '  } else {',
          '    navbar.classList.remove("sticky");',
          '  }',
          '}',
          '```'
        ]
      ]
    }
  }
}
</script>

<style lang="scss">
.sticky-navbar-page {
  iframe {
    width: 100%;
    height: 400px;
    border: 1px solid #ccc;
  }
}
</style>
