<template lang="html">
  <page
    title="Menu Icon"
    intro="a menu icon with CSS">

    <template slot="header">
    <h2>How To Create a Menu Icon</h2>
    <p>If you are not using an icon library, you can create a basic menu icon with CSS:</p>
    </template>

    <sample class="menu-icon-page">
      <div>
        <p>Menu Icon:</p>
        <menu-icon></menu-icon>
      </div>
      <div>
        <p>Animated Menu Icon (click on it):</p>
        <menu-icon is-animated></menu-icon>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>The <code>width</code> and the <code>height</code> property specifies the width and height of each bar.</p>
    <p>We have added a black <code>background-color</code>, and the top and bottom <code>margin</code> is used to create some distance between each bar.</p>

    <hr>
    <h2 class="title">Animated Icon</h2>
    <p>Use CSS and JavaScript to change the menu icon to a "cancel/remove" icon when it is clicked on:</p>
    <step no="1" html></step>
    <example-code :code="examples[2]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[3]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[4]"></example-code>
    <h3 class="explain">Example Explained</h3>
    <p>HTML &amp; CSS: We use the same styles as before, only this time, we wrap a container element around each &lt;div&gt; element and we specify a class name for each.</p>
    <p>The container element is used to show a pointer symbol when the user moves the mouse over the divs (bars). When it is clicked on, it will execute a JavaScript function that adds a new class name to it, which will change the styles of each horizontal bar: the first and the last bar is transformed and rotated to the letter "x". The bar in the middle fades out and becomes invisible.</p>
    </template>
  </page>
</template>

<script>
import MenuIcon from '@/components/menus/MenuIcon.vue'
export default {
  name: 'menu-icon-page',
  data() {
    return {
      examples: [
        ['``` html', '<div></div>', '<div></div>', '<div></div>', '```'].join(
          '\n'
        ),
        [
          '``` css',
          'div {',
          '  width: 35px;',
          '  height: 5px;',
          '  background-color: black;',
          '  margin: 6px 0;',
          '}',
          '```'
        ],
        [
          '``` html',
          '<div class="container" onclick="myFunction(this)">',
          '  <div class="bar1"></div>',
          '  <div class="bar2"></div>',
          '  <div class="bar3"></div>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '.container {',
          '  display: inline-block;',
          '  cursor: pointer;',
          '}',
          '',
          '.bar1, .bar2, .bar3 {',
          '  width: 35px;',
          '  height: 5px;',
          '  background-color: #333;',
          '  margin: 6px 0;',
          '  transition: 0.4s;',
          '}',
          '',
          '/* Rotate first bar */',
          '.change .bar1 {',
          '  -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;',
          '  transform: rotate(-45deg) translate(-9px, 6px) ;',
          '}',
          '',
          '/* Fade out the second bar */',
          '.change .bar2 {',
          '  opacity: 0;',
          '}',
          '',
          '/* Rotate last bar */',
          '.change .bar3 {',
          '  -webkit-transform: rotate(45deg) translate(-8px, -8px) ;',
          '  transform: rotate(45deg) translate(-8px, -8px) ;',
          '}',
          '```'
        ],
        [
          '``` js',
          'function myFunction(x) {',
          '  x.classList.toggle("change");',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    MenuIcon
  }
}
</script>

<style lang="scss">
.menu-icon-page {
  div {
    flex: 1;
    text-align: center;
  }
}
</style>
