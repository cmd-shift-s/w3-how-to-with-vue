<template lang="html">
  <page
    title="Button Group"
    :intro="intro"
    class="button-group-page">

  <template slot="header">
  <h2 class="title">Horizontal Button Groups</h2>
  <p>Group a series of buttons together on a single line in a button group:</p>
  </template>

  <sample>
    <button-group>
      <button v-for="name of buttons" v-text="name" :key="name"></button>
    </button-group>
  </sample>
  <br>
  <sample>
    <button-group is-fullwidth>
      <button v-for="name of buttons" v-text="name" :key="name"></button>
    </button-group>
  </sample>

  <template slot="examples">
  <hr>
  <h2 class="title">How To Create a Button Group</h2>
  <step no="1" html></step>
  <example-code :code="examples[0]"></example-code>
  <step no="2" css></step>
  <example-code :code="examples[1]"></example-code>
  <hr>
  <h2 class="title">Justified / Full-width Button Group:</h2>
  <example-code :code="examples[2]"></example-code>
  </template>

  </page>
</template>

<script>
import ButtonGroup from '@/components/menus/ButtonGroup.vue'

export default {
  name: 'button-group-page',
  data() {
    return {
      intro: 'a "button group" with CSS',
      buttons: ['Apple', 'Samsung', 'Sony'],
      examples: [
        [
          '``` html',
          '<div class="btn-group">',
          '  <button>Apple</button>',
          '  <button>Samsung</button>',
          '  <button>Sony</button>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '.btn-group button {',
          '  background-color: #4CAF50; /* Green background */',
          '  border: 1px solid green; /* Green border */',
          '  color: white; /* White text */',
          '  padding: 10px 24px; /* Some padding */',
          '  cursor: pointer; /* Pointer/hand icon */',
          '  float: left; /* Float the buttons side by side */',
          '}',
          '',
          '.btn-group button:not(:last-child) {',
          '  border-right: none; /* Prevent double borders */',
          '}',
          '',
          '/* Clear floats (clearfix hack) */',
          '.btn-group:after {',
          '  content: "";',
          '  clear: both;',
          '  display: table;',
          '}',
          '',
          '/* Add a background color on hover */',
          '.btn-group button:hover {',
          '  background-color: #3e8e41;',
          '}',
          '```'
        ],
        [
          '``` html',
          '<!-- Three buttons in a group -->',
          '<div class="btn-group" style="width:100%">',
          '  <button style="width:33.3%">Apple</button>',
          '  <button style="width:33.3%">Samsung</button>',
          '  <button style="width:33.3%">Sony</button>',
          '</div>',
          '',
          '<!-- Four buttons in a group -->',
          '<div class="btn-group" style="width:100%">',
          '  <button style="width:25%">Apple</button>',
          '  <button style="width:25%">Samsung</button>',
          '  <button style="width:25%">Sony</button>',
          '  <button style="width:25%">HTC</button>',
          '</div>',
          '```'
        ]
      ]
    }
  },
  components: {
    ButtonGroup
  }
}
</script>

<style lang="scss">
.button-group-page {
  .sample {
    flex-direction: column;
  }
}
</style>
