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
      <a class="close" @click="closeMenu()">
        <i class="fa fa-remove"></i>
      </a>
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
import { routes } from '@/router'

export default {
  name: 'app-menu',
  data() {
    return {
      routes,
      search: ''
    }
  },
  computed: {
    $leftMenu() {
      return this.$refs.leftMenu
    },
    filteredRoute() {
      const search = this.search.toLowerCase()
      return search
        ? this.routes
          .filter(({ name, children }) => {
            return children
              ? children.some(({ name }) => name.toLowerCase().includes(search))
              : name.toLowerCase().includes(this.search)
          })
          .reduce((routes, route) => {
            const r = {
              ...route
            }
            if (r.children) {
              r.children = r.children.filter(({ name }) =>
                name.toLowerCase().includes(search)
              )
            }
            routes.push(r)
            return routes
          }, [])
        : this.routes
    }
  },
  watch: {
    $route() {
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
$menu-z-index: 10;

.top-menu {
  display: none;
  position: fixed;
  top: 0;
  background-color: #5f5f5f;
  width: 100%;
  height: 45px;
  z-index: $menu-z-index;
  box-shadow:
    0 2px 5px 0 rgba(0,0,0,0.16),
    0 2px 10px 0 rgba(0,0,0,0.12);

  .menu-button {
    padding: 8px 15px;
    font-size: 22px;
    color: white;

    &:active {
      background-color: black;
    }
  }

  .home-button {
    float: left;
  }

  .toggle-button {
    float: right;
    cursor: pointer;
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
  overflow: auto;
  z-index: $menu-z-index;

  .close {
    display: none;
    position: fixed;
    top: 50px;
    left: 195px;
  }

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

    .close {
      display: inherit;
    }
  }
  .top-menu {
    display: block;
  }
}
</style>
