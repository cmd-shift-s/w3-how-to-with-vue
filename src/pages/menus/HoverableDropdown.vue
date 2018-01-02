<template>
  <page
    title="Hoverable Dropdown"
    intro="a hoverable dropdown menu with CSS"
    class="hoverable-dropdown-page">

    <template slot="header">
    <h2 class="title">Dropdown</h2>
    <p>A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list:</p>
    </template>

    <sample>
      <dropdown title="Hover Me" is-hoverable>
        <a href="javascript:void(0)">Link 1</a>
        <a href="javascript:void(0)">Link 2</a>
        <a href="javascript:void(0)">Link 3</a>
      </dropdown>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create A Hoverable Dropdown</h2>
    <p>Create a dropdown menu that appears when the user moves the mouse over an element.</p>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>Use any element to open the dropdown menu, e.g. a &lt;button>, &lt;a> or &lt;p> element.</p>
    <p>Use a container element (like &lt;div>) to create the dropdown menu and add the dropdown links inside it.</p>
    <p>Wrap a &lt;div> element around the button and the &lt;div> to position the dropdown menu correctly with CSS.</p>
    <hr>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>We have styled the dropdown button with a background-color, padding, etc.</p>
    <p>The <code>.dropdown</code> class uses <code>position:relative</code>, which is needed when we want the dropdown content to be placed right below the dropdown button (using <code>position:absolute</code>).</p>
    <p>The <code>.dropdown-content</code> class holds the actual dropdown menu. It is hidden by default, and will be displayed on hover (see below). Note the <code>min-width</code> is set to 160px. Feel free to change this. <b>Tip:</b> If you want the width of the dropdown content to be as wide as the dropdown button, set the <code>width</code> to 100% (and <code>overflow:auto</code> to enable scroll on small screens).</p>
    <p>Instead of using a border, we have used the <code>box-shadow</code> property to make the dropdown menu look like a "card". We also use z-index to place the dropdown in front of other elements.</p>
    <p>The <code>:hover</code> selector is used to show the dropdown menu when the user moves the mouse over the dropdown button.</p>
    <hr>
    <h2 class="title">Right-aligned dropdown</h2>
    <example-code class="right-aligned-dropdown-example">
      <sample>
        <h2>Aligned Dropdown Content</h2>
        <p>Determine whether the dropdown content should go from left to right or right to left with the left and right properties.</p>
        <div class="buttons">
          <dropdown title="Left" class="left" is-hoverable>
            <a href="javascript:void(0)">Link 1</a>
            <a href="javascript:void(0)">Link 2</a>
            <a href="javascript:void(0)">Link 3</a>
          </dropdown>
          <dropdown title="Right" class="right" is-hoverable>
            <a href="javascript:void(0)">Link 1</a>
            <a href="javascript:void(0)">Link 2</a>
            <a href="javascript:void(0)">Link 3</a>
          </dropdown>
        </div>
      </sample>
    </example-code>
    <hr>
    <h2 class="title">Dropdown Menu in Navbar</h2>
    <example-code class="dropdown-menu-in-navbar-example">
      <sample>
        <top-nav>
          <a>Home</a>
          <a>News</a>
          <dropdown title="Dropdown" icon="fa-caret-down" is-hoverable>
            <a href="javascript:void(0)">Link 1</a>
            <a href="javascript:void(0)">Link 2</a>
            <a href="javascript:void(0)">Link 3</a>
          </dropdown>
        </top-nav>
        <h3>Dropdown Menu inside a Navigation Bar</h3>
        <p>Hover over the "Dropdown" link to see the dropdown menu.</p>
      </sample>
    </example-code>
    </template>

  </page>
</template>

<script>
import TopNav from '@/components/menus/TopNav.vue'
import Dropdown from '@/components/menus/Dropdown.vue'

export default {
  name: 'hoverable-dropdown-page',
  data() {
    return {
      examples: [
        [
          '``` html',
          '<div class="dropdown">',
          '  <button class="dropbtn">Dropdown</button>',
          '  <div class="dropdown-content">',
          '    <a href="#">Link 1</a>',
          '    <a href="#">Link 2</a>',
          '    <a href="#">Link 3</a>',
          '  </div>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Dropdown Button */',
          '.dropbtn {',
          '  background-color: #4CAF50;',
          '  color: white;',
          '  padding: 16px;',
          '  font-size: 16px;',
          '  border: none;',
          '  cursor: pointer;',
          '}',
          '',
          '/* The container <div> - needed to position the dropdown content */',
          '.dropdown {',
          '  position: relative;',
          '  display: inline-block;',
          '}',
          '',
          '/* Dropdown Content (Hidden by Default) */',
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
          '  color: black;',
          '  padding: 12px 16px;',
          '  text-decoration: none;',
          '  display: block;',
          '}',
          '',
          '/* Change color of dropdown links on hover */',
          '.dropdown-content a:hover {background-color: #f1f1f1}',
          '',
          '/* Show the dropdown menu on hover */',
          '.dropdown:hover .dropdown-content {',
          '  display: block;',
          '}',
          '',
          '/* Change the background color of the dropdown button when the dropdown content is shown */',
          '.dropdown:hover .dropbtn {',
          '  background-color: #3e8e41;',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    Dropdown, TopNav
  }
}
</script>

<style lang="scss">
.hoverable-dropdown-page {
  .right-aligned-dropdown-example {
    .sample {
      min-height: 300px;
      flex-direction: column;

      .buttons {
        display: flex;
        justify-content: space-between;

        .right {
          .content {
            right: 0;
          }
        }
      }
    }
  }

  .dropdown-menu-in-navbar-example {
    .sample {
      min-height: 200px;
      flex-direction: column;

      .top-nav {
        overflow: inherit;

        .dropdown {
          button {
            background-color: #333;
            color: #f2f2f2;
            border-radius: 0;

            &:hover {
              background-color: #ddd;
              color: black;
            }
          }

          a {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
