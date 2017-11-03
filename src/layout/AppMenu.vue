<template lang="html">
  <div class="menu">
    <div class="top-menu">
      <router-link class="menu-item home-button" to="/" exact>
        <i class="fa fa-home"></i>
      </router-link>
      <a class="menu-item toggle-button" @click="toggleMenu()">
        <i class="fa fa-bars"></i>
      </a>

      <div class="toggle-menu" :class="{'active': showMenu}">
        <template v-for="route of routes">
          <h2>{{route.title}}</h2>
          <router-link class="link" v-for="children of route.children" :key="children.path" :to="{name: children.name}" exact>{{children.name}}</router-link>
          <router-link class="link" v-if="!route.children" :to="route.path" exact>{{route.name}}</router-link>
        </template>
      </div>
    </div>
    <aside class="left-menu">
      <div class="logos">
        <a href="https://github.com/gongzza/w3-how-to-with-vue" class="github" title="github">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
      <template v-for="route of routes">
        <h2>{{route.title}}</h2>
        <router-link class="link" v-for="children of route.children" :key="children.path" :to="{name: children.name}" exact>{{children.name}}</router-link>
        <router-link class="link" v-if="!route.children" :to="route.path" exact>{{route.name}}</router-link>
      </template>
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
      showMenu: false
    }
  },
  watch: {
    '$route'() {
      if (this.showMenu) {
        this.showMenu = false
      }
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.top-menu {
  display: none;
  position: fixed;
  top: 0;
  background-color: #4CAF50;
  width: 100%;
  height: 50px;
  transition: height 0.5 ease;
  z-index: 999;

  .menu-item {
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
}
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

@media (max-width: 768px) {
  .left-menu {
    display: none;
  }
  .top-menu {
    display: block;
  }
}
</style>
