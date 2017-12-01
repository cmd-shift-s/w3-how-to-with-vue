<template lang="html">
  <page
    title="Accordion"
    intro="an accordion (collapsible content)">
    <sample class="accordion-page">
      <accordion title="Section 1" has-icon is-animated>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </accordion>
      <accordion title="Section 2" has-icon is-animated>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </accordion>
      <accordion title="Section 3" has-icon is-animated>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </accordion>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create An Accordion</h2>
    <h5 class="step">Step 1) Add HTML:</h5>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css>
      <p>Style the accordion:</p>
    </step>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
    <hr>
    <h3 class="title">Animated Accordion (Slide Down)</h3>
    <p>To make an animated accordion, add <code>max-height: 0</code>, <code>overflow: hidden</code> and a <code>transition</code> for the max-height property, to the <code>panel</code> class.</p>
    <p>Then, use JavaScript to slide down the content by setting a calculated <code>max-height</code>, depending on the panel's height on different screen sizes:</p>
    <example-code :code="examples[3]"></example-code>
    <h3 class="title">Add Icons</h3>
    <p>Add a symbol to each button to indicate whether the collapsible content is open or closed:</p>
    <example-code :code="examples[4]"></example-code>
    </template>
  </page>
</template>

<script>
import Accordion from '@/components/menus/Accordion.vue'

export default {
  name: 'accordion-page',
  data() {
    return {
      examples: [
        [
          '``` html',
          '<button class="accordion">Section 1</button>',
          '<div class="panel">',
          '  <p>Lorem ipsum...</p>',
          '</div>',
          '',
          '<button class="accordion">Section 2</button>',
          '<div class="panel">',
          '  <p>Lorem ipsum...</p>',
          '</div>',
          '',
          '<button class="accordion">Section 3</button>',
          '<div class="panel">',
          '  <p>Lorem ipsum...</p>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Style the buttons that are used to open and close the accordion panel */',
          'button.accordion {',
          '  background-color: #eee;',
          '  color: #444;',
          '  cursor: pointer;',
          '  padding: 18px;',
          '  width: 100%;',
          '  text-align: left;',
          '  border: none;',
          '  outline: none;',
          '  transition: 0.4s;',
          '}',
          '',
          '/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */',
          'button.accordion.active, button.accordion:hover {',
          '  background-color: #ccc;',
          '}',
          '',
          '/* Style the accordion panel. Note: hidden by default */',
          'div.panel {',
          '  padding: 0 18px;',
          '  background-color: white;',
          '  display: none;',
          '}',
          '```'
        ],
        [
          '``` js',
          'var acc = document.getElementsByClassName("accordion");',
          'var i;',
          '',
          'for (i = 0; i < acc.length; i++) {',
          '  acc[i].onclick = function(){',
          '    /* Toggle between adding and removing the "active" class,',
          '    to highlight the button that controls the panel */',
          '    this.classList.toggle("active");',
          '',
          '    /* Toggle between hiding and showing the active panel */',
          '    var panel = this.nextElementSibling;',
          '    if (panel.style.display === "block") {',
          '      panel.style.display = "none";',
          '    } else {',
          '      panel.style.display = "block";',
          '    }',
          '  }',
          '}',
          '```'
        ],
        [
          '``` js',
          '<style>',
          'div.panel {',
          '  padding: 0 18px;',
          '  background-color: white;',
          '  max-height: 0;',
          '  overflow: hidden;',
          '  transition: max-height 0.2s ease-out;',
          '}',
          '</style>',
          '',
          '<script>',
          'var acc = document.getElementsByClassName("accordion");',
          'var i;',
          '',
          'for (i = 0; i < acc.length; i++) {',
          '  acc[i].onclick = function() {',
          '    this.classList.toggle("active");',
          '    var panel = this.nextElementSibling;',
          '    if (panel.style.maxHeight){',
          '      panel.style.maxHeight = null;',
          '    } else {',
          '      panel.style.maxHeight = panel.scrollHeight + "px";',
          '    }',
          '  }',
          '}',
          '</' + 'script>',
          '```'
        ],
        [
          '``` css',
          'button.accordion:after {',
          '  content: \'\\02795\'; /* Unicode character for "plus" sign (+) */',
          '  font-size: 13px;',
          '  color: #777;',
          '  float: right;',
          '  margin-left: 5px;',
          '}',
          '',
          'button.accordion.active:after {',
          '  content: "\\2796"; /* Unicode character for "minus" sign (-) */',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    Accordion
  }
}
</script>

<style lang="scss">
.accordion-page {
  flex-direction: column;
}
</style>
