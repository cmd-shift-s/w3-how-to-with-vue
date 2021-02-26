<!-- http://fareez.info/blog/pagination-component-using-vuejs/ -->
<template lang="html">
  <div class="pagination">
    <a href="javascript:void(0)" @click.prevent="pageChanged(1)">&laquo;</a>
    <a href="javascript:void(0)" v-for="n in paginationRange" :class="activePage(n)" @click.prevent="pageChanged(n)" :key="n">{{n}}</a>
    <a href="javascript:void(0)" @click.prevent="pageChanged(lastPage)">&raquo;</a>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    // Current Page
    currentPage: {
      type: Number,
      required: true
    },

    // Total number of pages
    totalPages: Number,

    // Items per page
    itemsPerPage: Number,

    // Total items
    totalItems: Number,

    // Visible Pages
    visiblePages: {
      type: Number,
      default: 5
    }
  },
  computed: {
    lastPage() {
      if (this.totalPages) {
        return this.totalPages
      } else {
        return this.totalItems % this.itemsPerPage === 0
          ? this.totalItems / this.itemsPerPage
          : Math.floor(this.totalItems / this.itemsPerPage) + 1
      }
    },
    paginationRange() {
      const page = this.lastPage - this.visiblePages + 1
      const start =
        this.currentPage - this.visiblePages / 2 <= 0
          ? 1
          : this.currentPage + this.visiblePages / 2 > this.lastPage
            ? page >= 1 ? page : 1
            : Math.ceil(this.currentPage - this.visiblePages / 2)

      const range = []

      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }

      return range
    }
  },
  methods: {
    activePage(pageNum) {
      return this.currentPage === pageNum ? 'is-active' : ''
    },
    pageChanged(pageNum) {
      this.$emit('page-changed', pageNum)
    }
  }
}
</script>

<style lang="scss">
.pagination {
  /* Pagination links */
  a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;

    /* Style the active/current link */
    &.is-active {
      background-color: #4CAF50;
      color: white;
    }

    /* Add a grey background color on mouse-over */
    &:hover:not(.is-active) {
      background-color: #ddd;
    }
  }
}
</style>
