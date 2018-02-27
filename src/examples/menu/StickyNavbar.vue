<template lang="html">
  <div>
    <div class="header">
      <h2>Scroll Down</h2>
      <p>Scroll down to see the sticky effect.</p>
    </div>

    <div ref="navbar" class="navbar">
      <a href="javascript:void(0)" :class="{'is-active': link === currentLink}" v-for="link of links" @click="currentLink = link" v-text="link"></a>
    </div>

    <div class="content">
      <h3>Sticky Navigation Example</h3>
      <p>The navbar will stick to the top when you reach its scroll position.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sticky-navbar-example',
  data: function () {
    return {
      currentLink: '',
      links: ['Home', 'News', 'Contact']
    }
  },
  beforeMount: function () {
    this.currentLink = this.links[0]
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestory: function () {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    navbar: function () {
      return this.$refs.navbar
    },
    navbarOffsetTop: function () {
      return this.navbar.offsetTop
    }
  },
  methods: {
    onScroll: function () {
      if (window.pageYOffset >= this.navbarOffsetTop) {
        this.navbar.classList.add('sticky')
      } else {
        this.navbar.classList.remove('sticky')
      }
    }
  }
}
</script>

<style lang="css">
.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.navbar a.is-active {
  background-color: #4CAF50;
  color: white;
}

.content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%
}

.sticky + .content {
  padding-top: 60px;
}
</style>
