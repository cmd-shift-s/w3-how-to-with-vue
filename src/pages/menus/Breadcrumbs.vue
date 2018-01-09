<template lang="html">
  <page
    title="CSS Breadcrumbs"
    intro="a breadcrumb navigation with CSS"
    class="breadcrumb-page">

    <template slot="header">
    <h2 class="title">How To Create a Breadcrumb Navigation</h2>
    <p>A breadcrumb navigation provide links back to each previous page the user navigated through, and shows the user's current location in a website.</p>
    </template>

    <sample>
      <breadcrumb :links="links"></breadcrumb>
    </sample>

    <template slot="examples">
    <hr>
    <step no="1" html></step>
    <example-code :code="examples[0]"></example-code>
    <step no="2" css></step>
    <example-code :code="examples[1]"></example-code>
    </template>

  </page>
</template>

<script>
import Breadcrumb from '@/components/menus/Breadcrumb.vue'

export default {
  name: 'breadcrumb-page',
  data() {
    return {
      links: [
        { to: 'javascript:void(0)', title: 'Home' },
        { to: 'javascript:void(0)', title: 'Pictures' },
        { to: 'javascript:void(0)', title: 'Summer 15' },
        'Italy'
      ],
      examples: [
        [
          '``` html',
          '<ul class="breadcrumb">',
          '  <li><a href="#">Home</a></li>',
          '  <li><a href="#">Pictures</a></li>',
          '  <li><a href="#">Summer 15</a></li>',
          '  <li>Italy</li>',
          '</ul>',
          '```'
        ],
        [
          '``` css',
          '/* Style the list */',
          'ul.breadcrumb {',
          '  padding: 10px 16px;',
          '  list-style: none;',
          '  background-color: #eee;',
          '}',
          '',
          '/* Display list items side by side */',
          'ul.breadcrumb li {',
          '  display: inline;',
          '  font-size: 18px;',
          '}',
          '',
          '/* Add a slash symbol (/) before/behind each list item */',
          'ul.breadcrumb li+li:before {',
          '  padding: 8px;',
          '  color: black;',
          '  content: "/\\00a0";',
          '}',
          '',
          '/* Add a color to all links inside the list */',
          'ul.breadcrumb li a {',
          '  color: #0275d8;',
          '  text-decoration: none;',
          '}',
          '',
          '/* Add a color on mouse-over */',
          'ul.breadcrumb li a:hover {',
          '  color: #01447e;',
          '  text-decoration: underline;',
          '}',
          '```'
        ]
      ]
    }
  },
  components: {
    Breadcrumb
  }
}
</script>

<style lang="scss">
.breadcrumb-page {
  .sample {
    .breadcrumb {
      width: 100%;
    }
  }
}
</style>
