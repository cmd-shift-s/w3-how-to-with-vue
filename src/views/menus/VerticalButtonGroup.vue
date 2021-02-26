<template lang="html">
  <page
    title="Vertical Button Group"
    :intro="intro"
    class="vertical-button-group-page">

  <template slot="header">
  <h2 class="title">Vertical  Button Groups</h2>
  <p>Group a series of buttons of in a vertical button group:</p>
  </template>

  <sample>
    <button-group is-vertical>
      <button v-for="name of buttons" v-text="name" :key="name"></button>
    </button-group>
  </sample>
  <br>
  <sample>
    <button-group is-vertical is-fullwidth>
      <button v-for="name of buttons" v-text="name" :key="name"></button>
    </button-group>
  </sample>

  <template slot="examples">
  <hr>
  <h2 class="title">How To Create a Vertical Button Group</h2>
  <step no="1" html></step>
  <example-code :code="examples[0]"></example-code>
  <step no="2" css></step>
  <example-code :code="examples[1]"></example-code>
  </template>

  </page>
</template>

<script>
import ButtonGroup from '@/components/menus/ButtonGroup.vue'

export default {
  name: 'vertical-button-group-page',
  data() {
    return {
      intro: 'a vertical "button group" with CSS',
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
          '  width: 50%; /* Set a width if needed */',
          '  display: block; /* Make the buttons appear below each other */',
          '}',
          '',
          '.btn-group button:not(:last-child) {',
          '  border-right: none; /* Prevent double borders */',
          '}',
          '',
          '/* Add a background color on hover */',
          '.btn-group button:hover {',
          '  background-color: #3e8e41;',
          '}',
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
</style>
