<template lang="html">
  <page
    title="Tabs"
    intro="tabs with CSS and JavaScript">

    <template slot="header">
    <h2>Tabs</h2>
    <p>Tabs are perfect for single page web applications, or for web pages capable of displaying different subjects:</p>
    </template>

    <sample>
      <tabs
        is-animated
        :links="['London', 'Paris', 'Tokyo']">
        <div id="London" class="tab-content">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>
        <div id="Paris" class="tab-content">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
        <div id="Tokyo" class="tab-content">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </tabs>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create Toggleable Tabs</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <p>Create buttons to open specific tab content. All &lt;div&gt; elements with <code>class="tabcontent"</code> are hidden by default (with CSS &amp; JS). When the user clicks on a button - it will open the tab content that "matches" this button.</p>
    <hr>
    <step no="2" css>
      <p>Style the buttons and the tab content:</p>
    </step>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
    <hr>
    <h2 class="title">Fade in Tabs:</h2>
    <p>If you want to fade in the tab content, add the following CSS:</p>
    <example-code :code="examples[3]"></example-code>
    <hr>
    <h2 class="title">Show a tab by default</h2>
    <p>To open a specific tab on page load, use JavaScript to "click" on the specified tab button:</p>
    <example-code :code="examples[4]"></example-code>
    <hr>
    <h2 class="title">Close a tab</h2>
    <p>If you want to close a specific tab, use JavaScript to hide the tab with a click of a button:</p>
    <example-code :code="examples[5]"></example-code>
    </template>
  </page>
</template>

<script>
import Tabs from '@/components/menus/Tabs.vue'

export default {
  name: 'tabs-page',
  data() {
    return {
      examples: [
        [
          '``` html',
          '<div class="tab">',
          '  <button class="tablinks" onclick="openCity(event, \'London\')">London</button>',
          '  <button class="tablinks" onclick="openCity(event, \'Paris\')">Paris</button>',
          '  <button class="tablinks" onclick="openCity(event, \'Tokyo\')">Tokyo</button>',
          '</div>',
          '',
          '<div id="London" class="tabcontent">',
          '  <h3>London</h3>',
          '  <p>London is the capital city of England.</p>',
          '</div>',
          '',
          '<div id="Paris" class="tabcontent">',
          '  <h3>Paris</h3>',
          '  <p>Paris is the capital of France.</p> ',
          '</div>',
          '',
          '<div id="Tokyo" class="tabcontent">',
          '  <h3>Tokyo</h3>',
          '  <p>Tokyo is the capital of Japan.</p>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Style the tab */',
          'div.tab {',
          '    overflow: hidden;',
          '    border: 1px solid #ccc;',
          '    background-color: #f1f1f1;',
          '}',
          '',
          '/* Style the buttons inside the tab */',
          'div.tab button {',
          '    background-color: inherit;',
          '    float: left;',
          '    border: none;',
          '    outline: none;',
          '    cursor: pointer;',
          '    padding: 14px 16px;',
          '    transition: 0.3s;',
          '}',
          '',
          '/* Change background color of buttons on hover */',
          'div.tab button:hover {',
          '    background-color: #ddd;',
          '}',
          '',
          '/* Create an active/current tablink class */',
          'div.tab button.active {',
          '    background-color: #ccc;',
          '}',
          '',
          '/* Style the tab content */',
          '.tabcontent {',
          '    display: none;',
          '    padding: 6px 12px;',
          '    border: 1px solid #ccc;',
          '    border-top: none;',
          '}',
          '```'
        ],
        [
          '``` js',
          'function openCity(evt, cityName) {',
          '    // Declare all variables',
          '    var i, tabcontent, tablinks;',
          '',
          '    // Get all elements with class="tabcontent" and hide them',
          '    tabcontent = document.getElementsByClassName("tabcontent");',
          '    for (i = 0; i < tabcontent.length; i++) {',
          '        tabcontent[i].style.display = "none";',
          '    }',
          '',
          '    // Get all elements with class="tablinks" and remove the class "active"',
          '    tablinks = document.getElementsByClassName("tablinks");',
          '    for (i = 0; i < tablinks.length; i++) {',
          '        tablinks[i].className = tablinks[i].className.replace(" active", "");',
          '    }',
          '',
          '    // Show the current tab, and add an "active" class to the button that opened the tab',
          '    document.getElementById(cityName).style.display = "block";',
          '    evt.currentTarget.className += " active";',
          '}',
          '```'
        ],
        [
          '``` css',
          '.tabcontent {',
          '    -webkit-animation: fadeEffect 1s;',
          '    animation: fadeEffect 1s; /* Fading effect takes 1 second */',
          '}',
          '',
          '@-webkit-keyframes fadeEffect {',
          '    from {opacity: 0;}',
          '    to {opacity: 1;}',
          '}',
          '',
          '@keyframes fadeEffect {',
          '    from {opacity: 0;}',
          '    to {opacity: 1;}',
          '}',
          '```'
        ],
        [
          '``` js',
          '<button class="tablinks" onclick="openCity(event, \'London\')" id="defaultOpen">London</button>',
          '',
          '<script>',
          '// Get the element with id="defaultOpen" and click on it',
          'document.getElementById("defaultOpen").click();',
          '</' + 'script>',
          '```'
        ],
        [
          '``` html',
          '<!-- Click on the <span> element to close the tab -->',
          '',
          '<div id="London" class="tabcontent">',
          '  <h3>London</h3>',
          '  <p>London is the capital city of England.</p>',
          '  <span onclick="this.parentElement.style.display=\'none\'">x</span> ',
          '</div>',
          '```'
        ]
      ]
    }
  },
  components: {
    Tabs
  }
}
</script>

<style lang="scss">
</style>
