<template lang="html">
  <aside class="left-menu">
    <template v-for="route of routes">
      <h2>{{route.title}}</h2>
      <router-link class="link" v-for="children of route.children" :key="children.path" :to="{name: children.name}" exact>{{children.name}}</router-link>
      <router-link class="link" v-if="!route.children" :to="route.path" exact>{{route.name}}</router-link>
    </template>
  </aside>
</template>

<script>
import {routes} from '@/router'

export default {
  name: 'side-menu',
  data() {
    return {routes}
  }
}
</script>

<style lang="scss" scoped>
.left-menu {
  position: fixed;
  width: 220px;
  height: 100%;
  color: #000;
  background-color: #f1f1f1;
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
</style>
