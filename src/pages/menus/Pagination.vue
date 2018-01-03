<template lang="html">
  <page
    title="Pagination"
    intro="a pagination with CSS">

    <template slot="header">
    <h2>How To Create a Pagination</h2>
    </template>

    <sample>
      <pagination :current-page="curPage" :total-pages="6" @page-changed="pageChanged" visiblePages="10"></pagination>
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
import Pagination from '@/components/menus/Pagination.vue'

export default {
  name: 'pagination-page',
  data() {
    return {
      curPage: 2,
      examples: [
        [
          '``` html',
          '<div class="pagination">',
          '  <a href="#">&laquo;</a>',
          '  <a href="#">1</a>',
          '  <a class="active" href="#">2</a>',
          '  <a href="#">3</a>',
          '  <a href="#">4</a>',
          '  <a href="#">5</a>',
          '  <a href="#">6</a>',
          '  <a href="#">&raquo;</a>',
          '</div>',
          '```'
        ],
        [
          '``` css',
          '/* Pagination links */',
          '.pagination a {',
          '  color: black;',
          '  float: left;',
          '  padding: 8px 16px;',
          '  text-decoration: none;',
          '  transition: background-color .3s;',
          '}',
          '',
          '/* Style the active/current link */',
          '.pagination a.active {',
          '  background-color: #4CAF50;',
          '  color: white;',
          '}',
          '',
          '/* Add a grey background color on mouse-over */',
          '.pagination a:hover:not(.active) {background-color: #ddd;}',
          '```'
        ]
      ]
    }
  },
  methods: {
    pageChanged(page) {
      this.curPage = page
    }
  },
  components: {
    Pagination
  }
}
</script>

<style lang="css">
</style>
