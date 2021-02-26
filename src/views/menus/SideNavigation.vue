<template lang="html">
  <page
    title="Side Navigation"
    intro="an animated, closable side navigation menu">
    <side-nav
      :active.sync="samples[0].isActive"
      selector=".container"
      is-animated>
      <a v-for="link of links" :key="link" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[1].isActive"
      selector=".container">
      <a v-for="link of links" :key="link" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[2].isActive"
      selector=".container"
      is-animated push-content>
      <a v-for="link of links" :key="link" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[3].isActive"
      selector=".container"
      is-animated push-content is-dimmed>
      <a v-for="link of links" :key="link" v-text="link"></a>
    </side-nav>
    <side-nav
      :active.sync="samples[4].isActive"
      selector=".container"
      is-animated width="100%" text-center>
      <a v-for="link of links" :key="link" v-text="link"></a>
    </side-nav>
    <sample class="side-navigation-page">
      <button @click="toggle(samples[0])" class="w3-btn">Sidenav overlay</button>
      <button @click="toggle(samples[1])" class="w3-btn">Sidenav overlay without animation</button>
      <button @click="toggle(samples[2])" class="w3-btn">Sidenav push (off-canvas)</button>
      <button @click="toggle(samples[3])" class="w3-btn">Sidenav push w/opacity</button>
      <button @click="toggle(samples[4])" class="w3-btn">Sidenav full-width</button>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">Create an Animated Side Navigation</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    <step no="3" js></step>
    <p>The example below slides in the side navigation, and makes it 250px wide:</p>
    <example-code title="Sidenav Overlay Example" :code="examples[2]"></example-code>
    <p>The example below slides in the side navigation, and pushes the page content to the right (the value used to set the width of the sidenav is also used to set the left margin of the "page content"):</p>
    <example-code title="Sidenav Push Content" :code="examples[3]"></example-code>
    <p>The example below also slides in the side navigation, and pushes the page content to the right, only this time, we add a black background color with a 40% opacity to the body element, to "highlight" the side navigation:</p>
    <example-code title="Sidenav Push Content w/ opacity" :code="examples[4]"></example-code>
    <p>The example below slides in the side navigation from the left and covers the whole page (100% width):</p>
    <example-code title="Sidenav Full-width:" :code="examples[5]"></example-code>
    <p>The example below opens and close the side navigation menu without animations:</p>
    <example-code title="Sidenav without Animation" :code="examples[6]"></example-code>
    <p>The example below shows how to create a right-sided navigation menu:</p>
    <example-code title="Right-sided navigation:" :code="examples[7]"></example-code>
    <p>The example below shows how to create a side navigation menu that is always shown (fixed):</p>
    <example-code title="Always show sidenav:" :code="examples[8]"></example-code>
    </template>
  </page>
</template>

<script>
import SideNav from '@/components/menus/SideNav.vue'
export default {
  name: 'side-navigation-page',
  data() {
    return {
      samples: [
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false }
      ],
      links: ['About', 'Services', 'Clients', 'Contact'],
      examples: [
        [
          '``` html',
          '<div id="mySidenav" class="sidenav">',
          '  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>',
          '  <a href="#">About</a>',
          '  <a href="#">Services</a>',
          '  <a href="#">Clients</a>',
          '  <a href="#">Contact</a>',
          '</div>',
          '',
          '<!-- Use any element to open the sidenav -->',
          '<span onclick="openNav()">open</span>',
          '',
          '<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->',
          '<div id="main">',
          '  ...',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* The side navigation menu */',
          '.sidenav {',
          '  height: 100%; /* 100% Full-height */',
          '  width: 0; /* 0 width - change this with JavaScript */',
          '  position: fixed; /* Stay in place */',
          '  z-index: 1; /* Stay on top */',
          '  top: 0; /* Stay at the top */',
          '  left: 0;',
          '  background-color: #111; /* Black*/',
          '  overflow-x: hidden; /* Disable horizontal scroll */',
          '  padding-top: 60px; /* Place content 60px from the top */',
          '  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */',
          '}',
          '',
          '/* The navigation menu links */',
          '.sidenav a {',
          '  padding: 8px 8px 8px 32px;',
          '  text-decoration: none;',
          '  font-size: 25px;',
          '  color: #818181;',
          '  display: block;',
          '  transition: 0.3s;',
          '}',
          '',
          '/* When you mouse over the navigation links, change their color */',
          '.sidenav a:hover {',
          '  color: #f1f1f1;',
          '}',
          '',
          '/* Position and style the close button (top right corner) */',
          '.sidenav .closebtn {',
          '  position: absolute;',
          '  top: 0;',
          '  right: 25px;',
          '  font-size: 36px;',
          '  margin-left: 50px;',
          '}',
          '',
          '/* Style page content - use this if you want to push the page content to the right when you open the side navigation */',
          '#main {',
          '  transition: margin-left .5s;',
          '  padding: 20px;',
          '}',
          '',
          '/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */',
          '@media screen and (max-height: 450px) {',
          '  .sidenav {padding-top: 15px;}',
          '  .sidenav a {font-size: 18px;}',
          '}',
          '```'
        ],
        [
          '``` js',
          '/* Set the width of the side navigation to 250px */',
          'function openNav() {',
          '  document.getElementById("mySidenav").style.width = "250px";',
          '}',
          '',
          '/* Set the width of the side navigation to 0 */',
          'function closeNav() {',
          '  document.getElementById("mySidenav").style.width = "0";',
          '}',
          '```'
        ],
        [
          '``` js',
          '/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */',
          'function openNav() {',
          '  document.getElementById("mySidenav").style.width = "250px";',
          '  document.getElementById("main").style.marginLeft = "250px";',
          '}',
          '',
          '/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */',
          'function closeNav() {',
          '  document.getElementById("mySidenav").style.width = "0";',
          '  document.getElementById("main").style.marginLeft = "0";',
          '}',
          '```'
        ],
        [
          '``` js',
          '/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */',
          'function openNav() {',
          '  document.getElementById("mySidenav").style.width = "250px";',
          '  document.getElementById("main").style.marginLeft = "250px";',
          '  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";',
          '}',
          '',
          '/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */',
          'function closeNav() {',
          '  document.getElementById("mySidenav").style.width = "0";',
          '  document.getElementById("main").style.marginLeft = "0";',
          '  document.body.style.backgroundColor = "white";',
          '}',
          '```'
        ],
        [
          '``` js',
          '/* Open the sidenav */',
          'function openNav() {',
          '  document.getElementById("mySidenav").style.width = "100%";',
          '}',
          '',
          '/* Close/hide the sidenav */',
          'function closeNav() {',
          '  document.getElementById("mySidenav").style.width = "0";',
          '}',
          '```'
        ],
        [
          '``` js',
          '/* Open the sidenav */',
          'function openNav() {',
          '  document.getElementById("mySidenav").style.display = "block";',
          '}',
          '',
          '/* Close/hide the sidenav */',
          'function closeNav() {',
          '  document.getElementById("mySidenav").style.display = "none";',
          '}',
          '```'
        ],
        ['``` css', '.sidenav {', '  right: 0;', '}', '```'],
        [
          '``` css',
          '/* The sidenav */',
          '.sidenav {',
          '  height: 100%;',
          '  width: 200px;',
          '  position: fixed;',
          '  z-index: 1;',
          '  top: 0;',
          '  left: 0;',
          '  background-color: #111;',
          '  overflow-x: hidden;',
          '  padding-top: 20px;',
          '}',
          '',
          '/* Page content */',
          '.main {',
          '  margin-left: 200px; /* Same as the width of the sidenav */',
          '}',
          '```'
        ]
      ]
    }
  },
  methods: {
    toggle(sample) {
      sample.isActive = true
    }
  },
  components: {
    SideNav
  }
}
</script>

<style lang="scss">
.side-navigation-page {
  display: block !important;

  button {
    display: block;
  }
}
</style>
