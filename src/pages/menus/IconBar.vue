<template lang="html">
  <page
    title="Icon Bar"
    intro="icon bars with CSS">
    <sample class="icon-bar-page">
      <div>
        <p>Vertical:</p>
        <icon-bar is-vertical>
          <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
            <i class="fa" :class="`fa-${menu}`"></i>
          </a>
        </icon-bar>
      </div>

      <div>
        <p>Horizontal:</p>
        <icon-bar>
          <a v-for="(menu, index) of menus" @click.prevent="pos = index" :class="{active: pos === index}">
            <i class="fa" :class="`fa-${menu}`"></i>
          </a>
        </icon-bar>
      </div>
    </sample>

    <template slot="examples">
    <hr>
    <h3 class="title">How To Create An Icon Bar</h3>
    <h5 class="step">Step 1) Add HTML:</h5>
    <example-code :code="examples[0]"></example-code>
    <h5 class="step">Step 2) Add CSS:</h5>
    <example-code title="Vertical Example" :code="examples[1]"></example-code>
    <example-code title="Horizontal Example" :code="examples[2]"></example-code>
    </template>
  </page>
</template>

<script>
import IconBar from '@/components/menus/IconBar.vue'
export default {
  name: 'icon-bar-page',
  data() {
    return {
      menus: ['home', 'search', 'envelope', 'globe', 'trash'],
      pos: 0,
      examples: [
        ['``` html',
          '<!-- Add icon library -->',
          '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',
          '',
          '<div class="icon-bar">',
          '  <a class="active" href="#"><i class="fa fa-home"></i></a>',
          '  <a href="#"><i class="fa fa-search"></i></a>',
          '  <a href="#"><i class="fa fa-envelope"></i></a>',
          '  <a href="#"><i class="fa fa-globe"></i></a>',
          '  <a href="#"><i class="fa fa-trash"></i></a>',
          '</div>',
          '```'].join('\n'),
        ['``` css',
          '.icon-bar {',
          '  width: 90px; /* Set a specific width */',
          '  background-color: #555; /* Dark-grey background */',
          '}',
          '',
          '.icon-bar a {',
          '  display: block; /* Make the links appear below each other instead of side-by-side */',
          '  text-align: center; /* Center-align text */',
          '  padding: 16px; /* Add some padding */',
          '  transition: all 0.3s ease; /* Add transition for hover effects */',
          '  color: white; /* White text color */',
          '  font-size: 36px; /* Increased font-size */',
          '}',
          '',
          '.icon-bar a:hover {',
          '  background-color: #000; /* Add a hover color */',
          '}',
          '',
          '.active {',
          '  background-color: #4CAF50; /* Add an active/current color */',
          '}',
          '```'].join('\n'),
        ['``` css',
          '.icon-bar {',
          '  width: 100%; /* Full-width */',
          '  background-color: #555; /* Dark-grey background */',
          '  overflow: auto; /* Overflow due to float */',
          '}',
          '',
          '.icon-bar a {',
          '  float: left; /* Float links side by side */',
          '  text-align: center; /* Center-align text */',
          '  width: 20%; /* Equal width (5 icons with 20% width each = 100%) */',
          '  padding: 12px 0; /* Some top and bottom padding */',
          '  transition: all 0.3s ease; /* Add transition for hover effects */',
          '  color: white; /* White text color */',
          '  font-size: 36px; /* Increased font size */',
          '}',
          '',
          '.icon-bar a:hover {',
          '  background-color: #000; /* Add a hover color */',
          '}',
          '',
          '.active {',
          '  background-color: #4CAF50; /* Add an active/current color */',
          '}',
          '```'].join('\n')
      ]
    }
  },
  components: {
    IconBar
  }
}
</script>

<style lang="scss">
.icon-bar-page {
  div:nth-child(1) { flex: 1 }
  div:nth-child(2) { flex: 2 }
}
</style>
