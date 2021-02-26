<template lang="html">
  <page
    title="Mega Menu"
    intro="a mega menu (full-width dropdown menu in a navigation bar)"
    class="mega-menu-page">

    <template slot="header">
    <h2 class="title">Mega Menu</h2>
    </template>

    <sample>
      <top-nav>
        <a v-for="link of links" :key="link" v-text="link"></a>
        <dropdown title="Dropdown" icon="fa-caret-down" is-hoverable>
          <div class="header">
            <h2>Mega Menu</h2>
          </div>
          <div class="row">
            <div class="column">
              <h3>Category 1</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div class="column">
              <h3>Category 2</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div class="column">
              <h3>Category 3</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </dropdown>
      </top-nav>
      <div class="sample-contents">
        <h3>Responsive Mega Menu (Full-width dropdown in navbar)</h3>
        <p>Hover over the "Dropdown" link to see the mega menu.</p>
        <p>Resize the browser window to see the responsive effect.</p>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Mega Menu</h2>
    <p>Create a dropdown menu that appears when the user moves the mouse over an element inside a navigation bar.</p>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>Use any element to open the dropdown menu, e.g. a &lt;button>, &lt;a> or &lt;p> element.</p>
    <p>Use a container element (like &lt;div class="dropdown-content">) to create the dropdown menu and add a grid (columns) and add dropdown links inside the grid.</p>
    <p>Wrap a &lt;div class="dropdown"> element around the button and the container element (&lt;div class="dropdown-content"> to position the dropdown menu correctly with CSS.</p>
    <hr>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>We have styled the navigation bar and the navbar links with a background-color, padding, etc.</p>
    <p>We have styled the dropdown button with a background-color, padding, etc.</p>
    <p>The <code>.dropdown</code> class uses <code>position:relative</code>, which is needed when we want the dropdown content to be placed right below the dropdown button (using <code>position:absolute</code>).</p>
    <p>The <code>.dropdown-content</code> class holds the actual dropdown menu. It is hidden by default, and will be displayed on hover (see below). It is positioned to be visible right below the dropdown button, and the width is set to 100% to cover the whole screen.</p>
    <p>Instead of using a border, we have used the <code>box-shadow</code> property to make the dropdown menu look like a "card". We also use z-index to place the dropdown in front of other elements.</p>
    <p>The <code>:hover</code> selector is used to show the dropdown menu when the user moves the mouse over the dropdown button.</p>
    <p>The <code>.column</code> classes are used to create three columns that floats next to each other inside the dropdown menu (to show different categories).</p>
    <hr>
    <h2 class="title">Responsive Mega Menu</h2>
    <example-code class="responsive-mega-menu-sample" :code="examples[2]">
      <sample>
        <top-nav>
          <a v-for="link of links" :key="link" v-text="link"></a>
          <dropdown title="Dropdown" icon="fa-caret-down" is-hoverable>
            <div class="header">
              <h2>Mega Menu</h2>
            </div>
            <div class="row">
              <div class="column">
                <h3>Category 1</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div class="column">
                <h3>Category 2</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <div class="column">
                <h3>Category 3</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </dropdown>
        </top-nav>
        <div class="sample-contents">
          <h3>Responsive Mega Menu (Full-width dropdown menu in navbar)</h3>
          <p>Hover over the "Dropdown" link to see the mega menu.</p>
        </div>
      </sample>
    </example-code>
    </template>
  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'
import Dropdown from '@/components/menus/Dropdown.vue'

export default {
  name: 'mega-menu-page',
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
          '      <div class="header">',
          '        <h2>Mega Menu</h2>',
          '      </div> ',
          '      <div class="row">',
          '        <div class="column">',
          '          <h3>Category 1</h3>',
          '          <a href="#">Link 1</a>',
          '          <a href="#">Link 2</a>',
          '          <a href="#">Link 3</a>',
          '        </div>',
          '        <div class="column">',
          '          <h3>Category 2</h3>',
          '          <a href="#">Link 1</a>',
          '          <a href="#">Link 2</a>',
          '          <a href="#">Link 3</a>',
          '        </div>',
          '        <div class="column">',
          '          <h3>Category 3</h3>',
          '          <a href="#">Link 1</a>',
          '          <a href="#">Link 2</a>',
          '          <a href="#">Link 3</a>',
          '        </div>',
          '      </div>',
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
          '  width: 100%;',
          '  left: 0;',
          '  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);',
          '  z-index: 1;',
          '}',
          '',
          '/* Mega Menu header, if needed */',
          '.dropdown-content .header {',
          '  background: red;',
          '  padding: 16px;',
          '  color: white;',
          '}',
          '',
          '/* Show the dropdown menu on hover */',
          '.dropdown:hover .dropdown-content {',
          '  display: block;',
          '}',
          '',
          '/* Create three equal columns that floats next to each other */',
          '.column {',
          '  float: left;',
          '  width: 33.33%;',
          '  padding: 10px;',
          '  background-color: #ccc;',
          '  height: 250px;',
          '}',
          '',
          '/* Style links inside the columns */',
          '.column a {',
          '  float: none;',
          '  color: black;',
          '  padding: 16px;',
          '  text-decoration: none;',
          '  display: block;',
          '  text-align: left;',
          '}',
          '',
          '/* Add a background color on hover */',
          '.column a:hover {',
          '  background-color: #ddd;',
          '}',
          '',
          '/* Clear floats after the columns */',
          '.row:after {',
          '  content: "";',
          '  display: table;',
          '  clear: both;',
          '}',
          '```'
        ],
        [
          '``` css',
          '/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */',
          '@media (max-width: 600px) {',
          '  .column {',
          '    width: 100%;',
          '    height: auto;',
          '  }',
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
.mega-menu-page {
  .sample {
    flex-direction: column;
    border: 3px solid #f1f1f1;
    height: 430px;
    position: relative;
    overflow: auto;

    .sample-contents {
      padding: 15px;
    }

    .top-nav {
      overflow: inherit;

      .dropdown {
        position: inherit;

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

        .content {
          width: 100%;
          left: 0;

          .header {
            background: red;
            padding: 16px;
            color: white;
          }

          .row {
            display: flex;

            &:after {
              content: "";
              display: table;
              clear: both;
            }

            .column {
              flex: 1;
              padding: 10px;
              background-color: #ccc;
              height: 250px;

              a {
                float: none;
                color: black;
                padding: 16px;
                text-decoration: none;
                display: block;
                text-align: left;

                &:hover {
                  background-color: #ddd;
                }
              }
            }
          }
        }
      }

      & > a:hover {
        background-color: red;
        color: white;
      }
    }
  }
}

.responsive-mega-menu-sample {
  .sample {
    .row {
      flex-direction: column;
    }
  }
}
</style>
