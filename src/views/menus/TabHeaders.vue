<template lang="html">
  <page
    title="Tab Headers"
    intro="tabs with CSS and JavaScript"
    class="tab-headers">

    <template slot="header">
    <h2>Tab Headers</h2>
    <p>Click on the "city" buttons to display the appropriate header:</p>
    </template>

    <sample>
      <tabs
        position="bottom"
        is-expanded
        :links="['London', 'Paris', 'Tokyo', 'Oslo']">
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
        <div id="Oslo" class="tab-content">
          <h3>Oslo</h3>
          <p>Oslo is the capital of Norway.</p>
        </div>
      </tabs>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create Togglable Tab Headers</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <p>Create buttons to open specific tab content. All &lt;div&gt; elements with <code>class="tabcontent"</code> are hidden by default (with CSS &amp; JS). When the user clicks on a button - it will open the tab content that "matches" this button.</p>
    <hr>
    <step no="2" css></step>
    <p>Style the buttons and the tab content:</p>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <example-code :code="examples[2]"></example-code>
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
          '',
          '<div id="Oslo" class="tabcontent">',
          '  <h3>Oslo</h3>',
          '  <p>Oslo is the capital of Norway.</p>',
          '</div>',
          '',
          '<button class="tablink" onclick="openCity(\'London\', this, \'red\')" id="defaultOpen">London</button>',
          '<button class="tablink" onclick="openCity(\'Paris\', this, \'green\')">Paris</button>',
          '<button class="tablink" onclick="openCity(\'Tokyo\', this, \'blue\')">Tokyo</button>',
          '<button class="tablink" onclick="openCity(\'Oslo\', this, \'orange\')">Oslo</button>',
          '```'
        ],
        [
          '``` css',
          '/* Style the tab buttons */',
          '.tablink {',
          '  background-color: #555;',
          '  color: white;',
          '  float: left;',
          '  border: none;',
          '  outline: none;',
          '  cursor: pointer;',
          '  padding: 14px 16px;',
          '  font-size: 17px;',
          '  width: 25%;',
          '}',
          '',
          '/* Change background color of buttons on hover */',
          '.tablink:hover {',
          '  background-color: #777;',
          '}',
          '',
          '/* Set default styles for tab content */',
          '.tabcontent {',
          '  color: white;',
          '  display: none;',
          '  padding: 50px;',
          '  text-align: center;',
          '}',
          '',
          '/* Style each tab content individually */ ',
          '#London {background-color:red;}',
          '#Paris {background-color:green;}',
          '#Tokyo {background-color:blue;}',
          '#Oslo {background-color:orange;}',
          '```'
        ],
        [
          '``` js',
          'function openCity(cityName, elmnt, color) {',
          '  // Hide all elements with class="tabcontent" by default */',
          '  var i, tabcontent, tablinks;',
          '  tabcontent = document.getElementsByClassName("tabcontent");',
          '  for (i = 0; i < tabcontent.length; i++) {',
          '    tabcontent[i].style.display = "none";',
          '  }',
          '',
          '  // Remove the background color of all tablinks/buttons',
          '  tablinks = document.getElementsByClassName("tablink");',
          '  for (i = 0; i < tablinks.length; i++) {',
          '    tablinks[i].style.backgroundColor = "";',
          '  }',
          '',
          '  // Show the specific tab content',
          '  document.getElementById(cityName).style.display = "block";',
          '',
          '  // Add the specific color to the button used to open the tab content',
          '  elmnt.style.backgroundColor = color;',
          '}',
          '',
          '// Get the element with id="defaultOpen" and click on it',
          'document.getElementById("defaultOpen").click();',
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
.tab-headers {
  .tabs-links {
    .is-active {
      &.tab-link { color: white; }
      &.tab-link:nth-child(1) { background-color: red; }
      &.tab-link:nth-child(2) { background-color: green; }
      &.tab-link:nth-child(3) { background-color: blue; }
      &.tab-link:nth-child(4) { background-color: orange; }
    }
  }
  .tabs-contents {
    /* Style each tab content individually */
    #London {background-color: red;}
    #Paris {background-color: green;}
    #Tokyo {background-color: blue;}
    #Oslo {background-color: orange;}

    .tab-content {
      text-align: center;
      padding: 30px;
      color: white;
    }
  }
}
</style>
