<template lang="html">
  <page
    title="Vertical Menu"
    intro="a vertical menu with CSS">
    <sample class="vertical-menu-page">
      <vertical-menu>
        <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
          {{menu}}
        </a>
      </vertical-menu>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">How To Create a Vertical Button Group</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <hr>
    <h2 class="title">Vertical Scroll Menu</h2>
    <sample class="vertical-menu-page is-scroll">
      <vertical-menu>
        <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
          {{menu}}
        </a>
      </vertical-menu>
    </sample>
    <p>Set a specific <code>height</code> and add the <code>overflow</code> property if you want a vertical scroll menu:</p>
    <example-code :code="examples[2]"></example-code>
    </template>
  </page>
</template>

<script>
import VerticalMenu from '@/components/menus/VerticalMenu.vue'
export default {
  name: 'vertical-menu-page',
  data() {
    return {
      pos: 0,
      menus: ['Home', 'Link 1', 'Link 2', 'Link 3', 'Link 4'],
      examples: [
        [
          '``` html',
          '<div class="vertical-menu">',
          '  <a href="#" class="active">Home</a>',
          '  <a href="#">Link 1</a>',
          '  <a href="#">Link 2</a>',
          '  <a href="#">Link 3</a>',
          '  <a href="#">Link 4</a>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '.vertical-menu {',
          '  width: 200px; /* Set a width if you like */',
          '}',
          '',
          '.vertical-menu a {',
          '  background-color: #eee; /* Grey background color */',
          '  color: black; /* Black text color */',
          '  display: block; /* Make the links appear below each other */',
          '  padding: 12px; /* Add some padding */',
          '  text-decoration: none; /* Remove underline from links */',
          '}',
          '',
          '.vertical-menu a:hover {',
          '  background-color: #ccc; /* Dark grey background on mouse-over */',
          '}',
          '',
          '.vertical-menu a.active {',
          '  background-color: #4CAF50; /* Add a green color to the "active/current" link */',
          '  color: white;',
          '}',
          '```'
        ],
        [
          '``` css',
          '.vertical-menu {',
          '  width: 200px;',
          '  height: 150px;',
          '  overflow-y: auto;',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    VerticalMenu
  }
}
</script>

<style lang="scss">
.vertical-menu-page {
  width: 200px;

  &.is-scroll {
    height: 150px;
    overflow-y: auto;
  }
}
</style>
