<template lang="html">
  <page
    title="Dropdown Navbar"
    intro="a dropdown navigation bar"
    class="dropdown-navbar-page">

    <template slot="header">
    <h2 class="title">Dropdown Menu in Navbar</h2>
    </template>

    <sample>
      <top-nav>
        <a v-for="link of links" v-text="link"></a>
        <dropdown title="Dropdown" icon="fa-caret-down" is-hoverable>
          <a href="javascript:void(0)">Link 1</a>
          <a href="javascript:void(0)">Link 2</a>
          <a href="javascript:void(0)">Link 3</a>
        </dropdown>
      </top-nav>
      <div class="sample-contents">
        <h3>Dropdown Menu inside a Navigation Bar</h3>
        <p>Hover over the "Dropdown" link to see the dropdown menu.</p>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Dropdown Navbar</h2>
    <p>Create a dropdown menu that appears when the user moves the mouse over an element inside a navigation bar.</p>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>Use any element to open the dropdown menu, e.g. a &lt;button>, &lt;a> or &lt;p> element.</p>
    <p>Use a container element (like &lt;div>) to create the dropdown menu and add the dropdown links inside it.</p>
    <p>Wrap a &lt;div> element around the button and the &lt;div> to position the dropdown menu correctly with CSS.</p>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>We have styled the navigation bar and the navbar links with a background-color, padding, etc.</p>
    <p>We have styled the dropdown button with a background-color, padding, etc.</p>
    <p>The <code>.dropdown</code> class uses <code>position:relative</code>, which is needed when we want the dropdown content to be placed right below the dropdown button (using <code>position:absolute</code>).</p>
    <p>The <code>.dropdown-content</code> class holds the actual dropdown menu. It is hidden by dfault, and will be displayed on hover (see below). Note the <code>min-width</code> is set to 160px. Feel free to change this.</p>
    <p>Instead of using a border, we have used the <code>box-shadow</code> property to make the dropdown menu look like a "card". We also use z=index to place the dropdown in front of other elements.</p>
    <p>The <code>:hover</code> selector is used to show the dropdown menu when the user moves the mouse over the dropdown button.</p>
    <hr>
    <h2 class="title">Clickable Dropdown in Navbar</h2>
    <example-code>
      <top-nav>
        <a v-for="link of links" v-text="link"></a>
        <dropdown title="Dropdown" icon="fa-caret-down">
          <a href="javascript:void(0)">Link 1</a>
          <a href="javascript:void(0)">Link 2</a>
          <a href="javascript:void(0)">Link 3</a>
        </dropdown>
      </top-nav>
      <div class="sample-contents">
        <h3>Dropdown Menu inside a Navigation Bar</h3>
        <p>Click on the "Dropdown" link to see the dropdown menu.</p>
      </div>
    </example-code>
    </template>

  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'
import Dropdown from '@/components/menus/Dropdown.vue'

export default {
  name: 'dropdown-navbar-page',
  data() {
    return {
      links: ['Home', 'News'],
      examples: [
        [
          '``` html',
          '<div class="navbar">',
          '  <a href="#home">Home</a>',
          '  <a href="#news">News</a>',
          '  <div class="dropdown">',
          '    <button class="dropbtn">Dropdown ',
          '      <i class="fa fa-caret-down"></i>',
          '    </button>',
          '    <div class="dropdown-content">',
          '      <a href="#">Link 1</a>',
          '      <a href="#">Link 2</a>',
          '      <a href="#">Link 3</a>',
          '    </div>',
          '  </div> ',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Navbar container */',
          '.navbar {',
          '  overflow: hidden;',
          '  background-color: #333;',
          '  font-family: Arial;',
          '}',
          '',
          '/* Links inside the navbar */',
          '.navbar a {',
          '  float: left;',
          '  font-size: 16px;',
          '  color: white;',
          '  text-align: center;',
          '  padding: 14px 16px;',
          '  text-decoration: none;',
          '}',
          '',
          '/* The dropdown container */',
          '.dropdown {',
          '  float: left;',
          '  overflow: hidden;',
          '}',
          '',
          '/* Dropdown button */',
          '.dropdown .dropbtn {',
          '  font-size: 16px; ',
          '  border: none;',
          '  outline: none;',
          '  color: white;',
          '  padding: 14px 16px;',
          '  background-color: inherit;',
          '}',
          '',
          '/* Add a red background color to navbar links on hover */',
          '.navbar a:hover, .dropdown:hover .dropbtn {',
          '  background-color: red;',
          '}',
          '',
          '/* Dropdown content (hidden by default) */',
          '.dropdown-content {',
          '  display: none;',
          '  position: absolute;',
          '  background-color: #f9f9f9;',
          '  min-width: 160px;',
          '  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);',
          '  z-index: 1;',
          '}',
          '',
          '/* Links inside the dropdown */',
          '.dropdown-content a {',
          '  float: none;',
          '  color: black;',
          '  padding: 12px 16px;',
          '  text-decoration: none;',
          '  display: block;',
          '  text-align: left;',
          '}',
          '',
          '/* Add a grey background color to dropdown links on hover */',
          '.dropdown-content a:hover {',
          '  background-color: #ddd;',
          '}',
          '',
          '/* Show the dropdown menu on hover */',
          '.dropdown:hover .dropdown-content {',
          '  display: block;',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    TopNav, Dropdown
  }
}
</script>

<style lang="scss">
.dropdown-navbar-page {
  .sample {
    flex-direction: column;
    border: 3px solid #f1f1f1;
    height: 300px;

    .top-nav {
      overflow: inherit;

      .dropdown {
        &:hover {
          button {
            background-color: red;
            color: white;
          }
        }

        button {
          font-size: 18px;
          background-color: inherit;
        }
      }

      & > a:hover {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>
