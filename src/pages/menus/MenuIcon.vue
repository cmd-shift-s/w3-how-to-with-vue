<template lang="html">
  <page
    title="Menu Icon"
    intro="a menu icon with CSS"
    :examples="examples">
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
  </page>
</template>

<script>
import MenuIcon from '@/components/menus/MenuIcon.vue'
export default {
  name: 'menu-icon-page',
  data() {
    return {
      examples: [
        {
          step: 'Step 1) Add HTML:',
          name: 'Example',
          code: ['``` html',
            '<div></div>',
            '<div></div>',
            '<div></div>',
            '```'].join('\n')
        },
        {
          step: 'Step 2) Add CSS:',
          name: 'Example',
          code: ['``` css',
            'div {',
            '  width: 35px;',
            '  height: 5px;',
            '  background-color: black;',
            '  margin: 6px 0;',
            '```'].join('\n'),
          hide_hr: false,
          explained: [
            'The `width` and the `height` property specifies the width and height of each bar.',
            'We have added a black `background-color`, and the top and bottom `margin` is used to create some distance between each bar.'
          ].join('\n\n')
        },
        {
          title: 'Animated Icon',
          subtitle: 'Use CSS and JavaScript to change the menu icon to a "cancel/remove" icon when it is clicked on:',
          step: 'Step 1) Add HTML:',
          name: 'Example',
          code: ['``` html',
            '<div class="container" onclick="myFunction(this)">',
            '  <div class="bar1"></div>',
            '  <div class="bar2"></div>',
            '  <div class="bar3"></div>',
            '</div>',
            '```'].join('\n')
        },
        {
          step: 'Step 2) Add CSS:',
          name: 'Example',
          code: ['``` css',
            '.container {',
            '  display: inline-block;',
            '  cursor: pointer;',
            '}',
            '.bar1, .bar2, .bar3 {',
            '  width: 35px;',
            '  height: 5px;',
            '  background-color: #333;',
            '  margin: 6px 0;',
            '  transition: 0.4s;',
            '}',
            '/* Rotate first bar */',
            '.change .bar1 {',
            '  -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;',
            '  transform: rotate(-45deg) translate(-9px, 6px) ;',
            '}',
            '/* Fade out the second bar */',
            '.change .bar2 {',
            '  opacity: 0;',
            '}',
            '/* Rotate last bar */',
            '.change .bar3 {',
            '  -webkit-transform: rotate(45deg) translate(-8px, -8px) ;',
            '  transform: rotate(45deg) translate(-8px, -8px) ;',
            '}',
            '```'].join('\n')
        },
        {
          step: 'Step 3) Add JavaScript:',
          name: 'Example',
          code: ['``` js',
            'function myFunction(x) {',
            '  x.classList.toggle("change");',
            '}',
            '```'].join('\n'),
          explained: [
            'HTML & CSS: We use the same styles as before, only this time, we wrap a container element around each <div> element and we specify a class name for each.',
            'The container element is used to show a pointer symbol when the user moves the mouse over the divs (bars). When it is clicked on, it will execute a JavaScript function that adds a new class name to it, which will change the styles of each horizontal bar: the first and the last bar is transformed and rotated to the letter "x". The bar in the middle fades out and becomes invisible.'
          ].join('\n\n')

        }
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
