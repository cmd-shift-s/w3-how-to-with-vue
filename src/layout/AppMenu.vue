<template lang="html">
  <div class="menu">
    <div class="top-menu">
      <router-link class="menu-button home-button" to="/" exact>
        <i class="fa fa-home"></i>
      </router-link>
      <a class="menu-button toggle-button" @click="toggleMenu()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <aside ref="leftMenu" class="left-menu">
      <div class="logos">
        <a href="https://github.com/gongzza/w3-how-to-with-vue" class="github" title="github">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
      <div class="search">
        <input type="text" class="searchinput" v-model="search" placeholder="Search...">
      </div>
      <div class="menu-item" v-for="route of filteredRoute">
        <h2>{{route.title}}</h2>
        <router-link class="link" v-for="children of route.children" :key="children.path" :to="{name: children.name}" exact>{{children.name}}</router-link>
        <router-link class="link" v-if="!route.children" :to="route.path" exact>{{route.name}}</router-link>
      </div>
    </aside>
  </div>
</template>

<script>
import {routes} from '@/router'

export default {
  name: 'app-menu',
  data() {
    return {
      routes,
      search: ''
    }
  },
  computed: {
    '$leftMenu'() {
      return this.$refs.leftMenu
    },
    filteredRoute() {
      const search = this.search.toLowerCase()
      return search
        ? this.routes
          .filter(({name, children}) => {
            return children
              ? children.some(({name}) => name.toLowerCase().includes(search))
              : name.toLowerCase().includes(this.search)
          })
          .reduce((routes, route) => {
            const r = {
              ...route
            }
            if (r.children) {
              r.children = r.children.filter(({name}) => name.toLowerCase().includes(search))
            }
            routes.push(r)
            return routes
          }, [])
        : this.routes
    }
  },
  watch: {
    '$route'() {
      this.closeMenu()
    }
  },
  methods: {
    toggleMenu() {
      this.$leftMenu.classList.toggle('active')
    },
    closeMenu() {
      this.$leftMenu.classList.remove('active')
    }
  }
}
</script>

<style lang="scss">
.top-menu {
  display: none;
  position: fixed;
  top: 0;
  background-color: #4CAF50;
  width: 100%;
  height: 50px;
  z-index: 999;

  .menu-button {
    padding: 5px 10px;
    font-size: 36px;
    color: #555;
  }

  .home-button {
    float: left;
    color: white;
  }

  .toggle-button {
    float: right;
  }

  .toggle-menu {
    display: none;
    margin-top: 50px;
    background-color: #f1f1f1;

    &.active {
      display: block;
    }
  }
}

.left-menu {
  position: fixed;
  width: 220px;
  height: 100%;
  color: #000;
  background-color: #f1f1f1;

  .logos {
    text-align: center;

    & > a {
      padding: 0 10px;
      font-size: 36px;
    }

    .github {
      color: black;
    }
  }
  .search {
    text-align: center;

    .searchinput {
      width: 180px;
      font-size: 14px;
      padding: 6px;
      border: 1px solid #ddd;
    }
  }
}

.menu-item {
  h2 {
    margin: 0;
    padding: 10px 10px;
  }

  .link {
    padding: 5px 10px;
    display: block;
    color: black;
    text-decoration: none;

    &:hover {
      background-color: #cccccc;
    }

    &.is-active {
      background-color: #4CAF50;
      color: white;
    }
  }
}

@media (max-width: 768px) {
  .left-menu {
    display: none;

    &.active {
      display: inherit;
    }
  }
  .top-menu {
    display: block;
  }
}
</style>
