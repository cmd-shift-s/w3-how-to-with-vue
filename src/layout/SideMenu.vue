<template lang="html">
  <aside class="left-menu">
    <template v-for="route of routes">
      <h2>{{route.title}}</h2>
      <router-link class="link" v-for="component of route.components" :key="component.title" :to="component.path">{{component.name}}</router-link>
    </template>
  </aside>
</template>

<script>
export default {
  name: 'side-menu',
  data() {
    return {
      routes: [
        {
          title: 'HOW TO',
          components: [
            { name: 'HowTo Home', path: '/' }
          ]
        }
      ]
    }
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
