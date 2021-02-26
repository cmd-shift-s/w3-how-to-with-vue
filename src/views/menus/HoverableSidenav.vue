<template lang="html">
  <page
    title="Side Navigation Buttons"
    intro="hoverable side navigation buttons with CSS">
    <sample class="hoverable-sidenav-page">
      <hoverable-sidenav>
        <a style="background-color: green;">About</a>
        <a style="background-color: blue;">Blog</a>
        <a style="background-color: red;">Projects</a>
        <a style="background-color: black;">Contact</a>
      </hoverable-sidenav>
      <section class="contents">
        <h2>Hoverable Sidenav Buttons</h2>
        <p>Hover over the buttons in the left side navigation to open them.</p>
      </section>
    </sample>

    <template slot="examples">
    <hr>
    <h2 class="title">How To Create a Hoverable Sidenav</h2>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    </template>
  </page>
</template>

<script>
import HoverableSidenav from '@/components/menus/HoverableSidenav.vue'
export default {
  name: 'hoverable-sidenav-page',
  data() {
    return {
      examples: [
        [
          '``` html',
          '<div id="mySidenav" class="sidenav">',
          '  <a href="#" id="about">About</a>',
          '  <a href="#" id="blog">Blog</a>',
          '  <a href="#" id="projects">Projects</a>',
          '  <a href="#" id="contact">Contact</a>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Style the links inside the sidenav */',
          '#mySidenav a {',
          '  position: absolute; /* Position them relative to the browser window */',
          '  left: -80px; /* Position them outside of the screen */',
          '  transition: 0.3s; /* Add transition on hover */',
          '  padding: 15px; /* 15px padding */',
          '  width: 100px; /* Set a specific width */',
          '  text-decoration: none; /* Remove underline */',
          '  font-size: 20px; /* Increase font size */',
          '  color: white; /* White text color */',
          '  border-radius: 0 5px 5px 0; /* Rounded corners on the top right and bottom right side */',
          '}',
          '',
          '#mySidenav a:hover {',
          '  left: 0; /* On mouse-over, make the elements appear as they should */',
          '}',
          '',
          '/* The about link: 20px from the top with a green background */',
          '#about {',
          '  top: 20px;',
          '  background-color: #4CAF50;',
          '}',
          '',
          '#blog {',
          '  top: 80px;',
          '  background-color: #2196F3; /* Blue */',
          '}',
          '',
          '#projects {',
          '  top: 140px;',
          '  background-color: #f44336; /* Red */',
          '}',
          '',
          '#contact {',
          '  top: 200px;',
          '  background-color: #555 /* Light Black */',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    HoverableSidenav
  }
}
</script>

<style lang="scss">
.hoverable-sidenav-page {
  border: 1px solid #ccc;
  padding: 20px 0;
  overflow: hidden;

  a {
    cursor: pointer;
  }

  .contents {
    margin-left: 30px;
  }
}
</style>
